"""
Scheduler - Agendamento de ciclos de scraping com APScheduler.
"""

from __future__ import annotations

import asyncio
import os
from datetime import datetime
from loguru import logger
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger
from dotenv import load_dotenv

from app.services.lead_service import LeadService
from app.scrapers.facebook_scraper import FacebookScraper


load_dotenv()


class ScrapingScheduler:
    """
    Agendador de ciclos de scraping.
    Executa o bot em intervalos configurados, respeitando horarios e dias permitidos.
    """

    def __init__(self, config_path: str = "config/config.yaml"):
        self.service = LeadService(config_path=config_path)
        self.config = self.service.config
        self.scheduler = AsyncIOScheduler()
        self._running = False

    async def run_scraping_cycle(self):
        """Executa um ciclo completo de scraping."""
        logger.info("=== Iniciando ciclo de scraping ===")
        
        # Verifica horario permitido
        agendamento = self.config.get("agendamento", {})
        agora = datetime.now()
        
        horario_inicio = agendamento.get("horario_inicio", "06:00")
        horario_fim = agendamento.get("horario_fim", "23:59")
        dias_semana = agendamento.get("dias_semana", [1, 2, 3, 4, 5, 6, 7])
        
        # Verifica dia da semana (1=Segunda)
        dia_atual = agora.isoweekday()
        if dia_atual not in dias_semana:
            logger.info(f"Dia {dia_atual} nao esta nos dias permitidos, pulando")
            return
        
        # Verifica horario
        hra_inicio = int(horario_inicio.split(":")[0]) * 60 + int(horario_inicio.split(":")[1])
        hra_fim = int(horario_fim.split(":")[0]) * 60 + int(horario_fim.split(":")[1])
        hra_agora = agora.hour * 60 + agora.minute
        
        if not (hra_inicio <= hra_agora <= hra_fim):
            logger.info(f"Fora do horario permitido ({horario_inicio}-{horario_fim}), pulando")
            return
        
        # Cria sessao de scraping
        session = self.service.create_session()
        logger.info(f"Sessao #{session.id} criada")
        
        try:
            # Inicia scraper
            scraper = FacebookScraper(self.config)
            
            fb_email = os.getenv("FB_EMAIL")
            fb_password = os.getenv("FB_PASSWORD")
            
            # Executa ciclo completo
            raw_leads = await scraper.run_full_cycle(
                email=fb_email,
                password=fb_password,
            )
            
            # Processa e salva leads
            saved_leads = self.service.save_leads_batch(raw_leads)
            
            # Atualiza sessao
            self.service.finish_session(
                session.id,
                status="concluido",
                grupos_processados=len(self.config.get("nichos", {})),
                posts_analisados=len(raw_leads),
                leads_encontrados=len(saved_leads),
            )
            
            # Auto-exporta resultado
            if saved_leads:
                from app.exporters.lead_exporter import export_leads
                export_dir = self.config.get("exportacao", {}).get("diretorio", "exports")
                formato = self.config.get("exportacao", {}).get("formato_padrao", "xlsx")
                filepath = export_leads(saved_leads, format=formato, export_dir=export_dir)
                logger.info(f"Leads exportados para: {filepath}")
            
            # Verifica notificacoes
            await self._check_notifications(saved_leads)
            
            logger.info(f"=== Ciclo concluido: {len(saved_leads)} novos leads ===")
            
        except Exception as e:
            logger.error(f"Erro no ciclo de scraping: {e}")
            self.service.finish_session(
                session.id,
                status="erro",
                erros=1,
                log_erros=[{"timestamp": datetime.utcnow().isoformat(), "erro": str(e)}],
            )

    async def _check_notifications(self, leads):
        """Verifica se algum lead atingiu o threshold de notificacao."""
        notif_config = self.config.get("notificacao", {})
        if not notif_config.get("ativo"):
            return
        
        score_threshold = notif_config.get("score_notificacao", 70)
        high_priority = [l for l in leads if l.score >= score_threshold]
        
        if not high_priority:
            return
        
        logger.info(f"{len(high_priority)} leads com score >= {score_threshold}!")
        
        # Webhook (Slack, Discord, etc)
        webhook_url = notif_config.get("webhook_url")
        if webhook_url:
            try:
                import httpx
                async with httpx.AsyncClient() as client:
                    for lead in high_priority:
                        msg = {
                            "content": f"🔥 **Lead de alta prioridade!**\n"
                                       f"**Score:** {lead.score}/100\n"
                                       f"**Nicho:** {lead.nicho}\n"
                                       f"**Autor:** {lead.autor_nome}\n"
                                       f"**Texto:** {lead.post_texto[:200]}...\n"
                                       f"**Contato:** {lead.contato_info}",
                        }
                        await client.post(webhook_url, json=msg)
            except Exception as e:
                logger.error(f"Erro ao enviar webhook: {e}")

    def start(self):
        """Inicia o scheduler."""
        intervalo = self.config.get("agendamento", {}).get("intervalo_minutos", 60)
        
        self.scheduler.add_job(
            self.run_scraping_cycle,
            trigger=IntervalTrigger(minutes=intervalo),
            id="scraping_cycle",
            name="Ciclo de Scraping Facebook",
            replace_existing=True,
        )
        
        self.scheduler.start()
        self._running = True
        logger.info(f"Scheduler iniciado - ciclo a cada {intervalo} minutos")

    def stop(self):
        """Para o scheduler."""
        self.scheduler.shutdown()
        self._running = False
        logger.info("Scheduler parado")

    @property
    def is_running(self) -> bool:
        return self._running
    
    def get_jobs(self) -> list:
        """Lista jobs agendados."""
        jobs = []
        for job in self.scheduler.get_jobs():
            jobs.append({
                "id": job.id,
                "name": job.name,
                "next_run": str(job.next_run_time) if job.next_run_time else None,
            })
        return jobs
