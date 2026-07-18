"""
API REST - FastAPI para integracao com frontend.
Expoe endpoints para gerenciar leads, nichos, scraping e exportacao.
"""

from __future__ import annotations

import os
import asyncio
from datetime import datetime
from typing import Optional
from pathlib import Path

from fastapi import FastAPI, HTTPException, Query, BackgroundTasks, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field
from loguru import logger

from app.models.database import (
    init_db, get_session, Lead, LeadStatus, LeadPrioridade, LeadTipo,
    ScrapingSession, GrupoFacebook, HistoricoContato,
)
from app.services.lead_service import LeadService
from app.exporters.lead_exporter import export_leads
from app.scheduler.scraping_scheduler import ScrapingScheduler


# --- PYDANTIC SCHEMAS ---

class LeadResponse(BaseModel):
    id: int
    post_id: str
    post_url: Optional[str] = None
    post_texto: Optional[str] = None
    autor_nome: Optional[str] = None
    autor_url: Optional[str] = None
    nicho: Optional[str] = None
    tipo: str
    status: str
    prioridade: str
    score: int
    valor_mencionado: Optional[float] = None
    keywords_encontradas: Optional[list] = None
    palavras_urgencia: Optional[list] = None
    contato_info: Optional[dict] = None
    notas: Optional[str] = None
    capturado_em: Optional[str] = None
    atualizado_em: Optional[str] = None

    class Config:
        from_attributes = True


class LeadUpdateRequest(BaseModel):
    status: Optional[str] = None
    notas: Optional[str] = None
    prioridade: Optional[str] = None


class NichoAddRequest(BaseModel):
    key: str = Field(..., description="Identificador do nicho (ex: 'consultoria')")
    nome: str = Field(..., description="Nome do nicho (ex: 'Consultoria & Mentoria')")
    keywords: list = Field(..., description="Lista de keywords para busca")
    grupos: Optional[list] = Field(default=[], description="Lista de nomes de grupos")
    filtros: Optional[dict] = Field(default=None, description="Filtros de valor e urgencia")


class NichoUpdateRequest(BaseModel):
    nome: Optional[str] = Field(None, description="Nome do nicho")
    keywords: Optional[list] = Field(None, description="Lista de keywords para busca")
    grupos: Optional[list] = Field(None, description="Lista de nomes de grupos")
    filtros: Optional[dict] = Field(None, description="Filtros de valor e urgencia")


class KeywordUpdateRequest(BaseModel):
    keywords: list = Field(..., description="Nova lista de keywords")


class ContatoHistoricoRequest(BaseModel):
    tipo: str = Field(..., description="Tipo: mensagem, ligacao, email, whatsapp")
    canal: str = Field(..., description="Canal: facebook, whatsapp, email, telefone")
    conteudo: str = Field(..., description="Conteudo do contato")
    resultado: Optional[str] = None


class GrupoAddRequest(BaseModel):
    nome: str
    url: str
    nicho: Optional[str] = None


class StatsResponse(BaseModel):
    total_leads: int
    novos: int
    contatados: int
    fechados: int
    score_medio: float
    por_nicho: dict


class ScrapingRunRequest(BaseModel):
    email: Optional[str] = None
    password: Optional[str] = None


class ExportRequest(BaseModel):
    formato: str = Field(default="xlsx", description="csv, json ou xlsx")
    status: Optional[str] = None
    nicho: Optional[str] = None
    min_score: Optional[int] = None


# --- APP SETUP ---

app = FastAPI(
    title="FB Lead Bot API",
    description="API para captura e gestao de leads do Facebook para negocios autonomos",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files & templates
_static_dir = Path(__file__).parent.parent / "static"
_templates_dir = Path(__file__).parent.parent / "templates"
_static_dir.mkdir(exist_ok=True)
_templates_dir.mkdir(exist_ok=True)

app.mount("/static", StaticFiles(directory=str(_static_dir)), name="static")
templates = Jinja2Templates(directory=str(_templates_dir))

# Singleton helpers
_config_path = os.getenv("CONFIG_PATH", "config/config.yaml")
_service = None
_scheduler = None


def get_service() -> LeadService:
    global _service
    if _service is None:
        _service = LeadService(config_path=_config_path)
    return _service


def get_scheduler() -> ScrapingScheduler:
    global _scheduler
    if _scheduler is None:
        _scheduler = ScrapingScheduler(config_path=_config_path)
    return _scheduler


# --- ENDPOINTS ---


@app.get("/", tags=["Health"])
def root():
    """Health check."""
    return {
        "app": "FB Lead Bot",
        "version": "1.0.0",
        "status": "running",
        "scheduler_running": get_scheduler().is_running,
    }


@app.get("/dashboard", response_class=HTMLResponse, tags=["Dashboard"])
def dashboard(request: Request):
    """Dashboard web para visualizar leads."""
    return templates.TemplateResponse("dashboard.html", {"request": request})


# --- LEADS ---


@app.get("/api/leads", tags=["Leads"], response_model=list[LeadResponse])
def list_leads(
    status: Optional[str] = Query(None, description="Filtrar por status: novo, contatado, em_negociacao, fechado, perdido, arquivado"),
    nicho: Optional[str] = Query(None, description="Filtrar por nicho"),
    min_score: Optional[int] = Query(None, description="Score minimo"),
    prioridade: Optional[str] = Query(None, description="Filtrar por prioridade: baixa, media, alta, urgente"),
    tipo: Optional[str] = Query(None, description="Filtrar por tipo: freela, lead, oportunidade"),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0),
):
    """Lista leads com filtros opcionais."""
    service = get_service()
    
    status_enum = LeadStatus(status) if status else None
    prioridade_enum = LeadPrioridade(prioridade) if prioridade else None
    tipo_enum = LeadTipo(tipo) if tipo else None
    
    leads = service.get_leads(
        status=status_enum,
        nicho=nicho,
        min_score=min_score,
        prioridade=prioridade_enum,
        tipo=tipo_enum,
        limit=limit,
        offset=offset,
    )
    
    return [
        LeadResponse(
            id=l.id,
            post_id=l.post_id,
            post_url=l.post_url,
            post_texto=l.post_texto,
            autor_nome=l.autor_nome,
            autor_url=l.autor_url,
            nicho=l.nicho,
            tipo=l.tipo.value,
            status=l.status.value,
            prioridade=l.prioridade.value,
            score=l.score,
            valor_mencionado=l.valor_mencionado,
            keywords_encontradas=l.keywords_encontradas,
            palavras_urgencia=l.palavras_urgencia,
            contato_info=l.contato_info,
            notas=l.notas,
            capturado_em=l.capturado_em.isoformat() if l.capturado_em else None,
            atualizado_em=l.atualizado_em.isoformat() if l.atualizado_em else None,
        )
        for l in leads
    ]


@app.get("/api/leads/{lead_id}", tags=["Leads"])
def get_lead(lead_id: int):
    """Busca lead por ID."""
    service = get_service()
    lead = service.get_lead_by_id(lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nao encontrado")
    return lead


@app.patch("/api/leads/{lead_id}", tags=["Leads"])
def update_lead(lead_id: int, req: LeadUpdateRequest):
    """Atualiza status/notas de um lead."""
    service = get_service()
    
    status_enum = LeadStatus(req.status) if req.status else None
    lead = service.update_lead_status(lead_id, status_enum, req.notas)
    
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nao encontrado")
    
    if req.prioridade:
        lead.prioridade = LeadPrioridade(req.prioridade)
        service.db.commit()
    
    return {"id": lead.id, "status": lead.status.value, "prioridade": lead.prioridade.value}


@app.post("/api/leads/{lead_id}/contato", tags=["Leads"])
def add_contato(lead_id: int, req: ContatoHistoricoRequest):
    """Registra contato com o lead."""
    service = get_service()
    lead = service.get_lead_by_id(lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nao encontrado")
    
    h = service.add_contato_historico(
        lead_id=lead_id,
        tipo=req.tipo,
        canal=req.canal,
        conteudo=req.conteudo,
        resultado=req.resultado,
    )
    
    # Atualiza status do lead
    if req.tipo == "mensagem" and lead.status == LeadStatus.NOVO:
        service.update_lead_status(lead_id, LeadStatus.CONTATADO)
    
    return {"id": h.id, "lead_id": lead_id, "tipo": req.tipo}


@app.get("/api/leads/{lead_id}/historico", tags=["Leads"])
def get_contato_historico(lead_id: int):
    """Retorna historico de contato de um lead."""
    service = get_service()
    lead = service.get_lead_by_id(lead_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nao encontrado")
    
    historico = service.db.query(HistoricoContato).filter(HistoricoContato.lead_id == lead_id).all()
    return [
        {
            "id": h.id,
            "data": h.data.isoformat() if h.data else None,
            "tipo": h.tipo,
            "canal": h.canal,
            "conteudo": h.conteudo,
            "resultado": h.resultado,
        }
        for h in historico
    ]


@app.delete("/api/leads/{lead_id}", tags=["Leads"])
def delete_lead(lead_id: int):
    """Arquiva um lead (soft delete)."""
    service = get_service()
    lead = service.update_lead_status(lead_id, LeadStatus.ARQUIVADO)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead nao encontrado")
    return {"id": lead_id, "status": "arquivado"}


# --- STATS ---


@app.get("/api/stats", tags=["Stats"])
def get_stats():
    """Retorna estatisticas gerais dos leads."""
    service = get_service()
    return service.get_stats()


# --- NICHOS ---


@app.get("/api/nichos", tags=["Nichos"])
def list_nichos():
    """Lista todos os nichos configurados."""
    service = get_service()
    nichos = service.config.get("nichos", {})
    return [
        {
            "key": k,
            "nome": v.get("nome", k),
            "keywords": v.get("keywords", []),
            "grupos": v.get("grupos", []),
            "filtros": v.get("filtros", {}),
            "total_leads": service.db.query(Lead).filter(Lead.nicho == k).count(),
        }
        for k, v in nichos.items()
    ]


@app.post("/api/nichos", tags=["Nichos"])
def add_nicho(req: NichoAddRequest):
    """Adiciona novo nicho customizado."""
    service = get_service()
    result = service.add_nicho(req.key, req.nome, req.keywords, req.grupos)
    return result


@app.patch("/api/nichos/{nicho_key}/keywords", tags=["Nichos"])
def update_nicho_keywords(nicho_key: str, req: KeywordUpdateRequest):
    """Atualiza keywords de um nicho."""
    service = get_service()
    result = service.update_nicho_keywords(nicho_key, req.keywords)
    return result


@app.put("/api/nichos/{nicho_key}", tags=["Nichos"])
def update_nicho(nicho_key: str, req: NichoUpdateRequest):
    """Atualiza um nicho existente."""
    service = get_service()
    result = service.update_nicho(nicho_key, req.nome, req.keywords, req.grupos, req.filtros)
    return result


@app.delete("/api/nichos/{nicho_key}", tags=["Nichos"])
def delete_nicho(nicho_key: str):
    """Remove um nicho."""
    service = get_service()
    result = service.delete_nicho(nicho_key)
    return result


# --- GRUPOS ---


@app.get("/api/grupos", tags=["Grupos"])
def list_grupos(ativo: Optional[bool] = None):
    """Lista grupos monitorados."""
    service = get_service()
    grupos = service.get_grupos(ativo=ativo)
    return [
        {
            "id": g.id,
            "nome": g.nome,
            "url": g.url,
            "nicho": g.nicho,
            "ativo": g.ativo,
            "total_leads": g.total_leads_encontrados,
            "ultimo_scrape": g.ultimo_scrape.isoformat() if g.ultimo_scrape else None,
        }
        for g in grupos
    ]


@app.post("/api/grupos", tags=["Grupos"])
def add_grupo(req: GrupoAddRequest):
    """Adiciona grupo para monitorar."""
    service = get_service()
    grupo = service.add_grupo(req.nome, req.url, req.nicho)
    return {"id": grupo.id, "nome": grupo.nome, "url": grupo.url}


@app.patch("/api/grupos/{grupo_id}/toggle", tags=["Grupos"])
def toggle_grupo(grupo_id: int):
    """Ativa/desativa um grupo."""
    service = get_service()
    grupo = service.db.query(GrupoFacebook).filter(GrupoFacebook.id == grupo_id).first()
    if not grupo:
        raise HTTPException(status_code=404, detail="Grupo nao encontrado")
    grupo.ativo = not grupo.ativo
    service.db.commit()
    return {"id": grupo.id, "ativo": grupo.ativo}


# --- SCRAPING ---


@app.post("/api/scraping/run", tags=["Scraping"])
async def run_scraping(req: ScrapingRunRequest, background_tasks: BackgroundTasks):
    """Dispara um ciclo de scraping manual."""
    scheduler = get_scheduler()
    
    email = req.email or os.getenv("FB_EMAIL")
    password = req.password or os.getenv("FB_PASSWORD")
    
    async def _run():
        service = get_service()
        session = service.create_session()
        try:
            from app.scrapers.facebook_scraper import FacebookScraper
            scraper = FacebookScraper(service.config)
            raw_leads = await scraper.run_full_cycle(email=email, password=password)
            saved = service.save_leads_batch(raw_leads)
            service.finish_session(
                session.id,
                status="concluido",
                leads_encontrados=len(saved),
                posts_analisados=len(raw_leads),
            )
        except Exception as e:
            logger.error(f"Erro no scraping manual: {e}")
            service.finish_session(session.id, status="erro", erros=1)
    
    background_tasks.add_task(_run)
    return {"message": "Scraping iniciado em background", "status": "running"}


@app.get("/api/scraping/sessions", tags=["Scraping"])
def list_sessions(limit: int = 10):
    """Lista sessoes de scraping."""
    service = get_service()
    sessions = service.db.query(ScrapingSession).order_by(ScrapingSession.id.desc()).limit(limit).all()
    return [
        {
            "id": s.id,
            "inicio": s.inicio.isoformat() if s.inicio else None,
            "fim": s.fim.isoformat() if s.fim else None,
            "status": s.status,
            "grupos_processados": s.grupos_processados,
            "posts_analisados": s.posts_analisados,
            "leads_encontrados": s.leads_encontrados,
            "erros": s.erros,
        }
        for s in sessions
    ]


# --- SCHEDULER ---


@app.post("/api/scheduler/start", tags=["Scheduler"])
def start_scheduler():
    """Inicia o scheduler de scraping automatico."""
    scheduler = get_scheduler()
    if scheduler.is_running:
        return {"message": "Scheduler ja esta rodando"}
    
    # Start in separate thread (APScheduler is async)
    scheduler.start()
    return {"message": "Scheduler iniciado", "running": True}


@app.post("/api/scheduler/stop", tags=["Scheduler"])
def stop_scheduler():
    """Para o scheduler."""
    scheduler = get_scheduler()
    if not scheduler.is_running:
        return {"message": "Scheduler ja esta parado"}
    scheduler.stop()
    return {"message": "Scheduler parado", "running": False}


@app.get("/api/scheduler/status", tags=["Scheduler"])
def scheduler_status():
    """Status do scheduler e proximas execucoes."""
    scheduler = get_scheduler()
    return {
        "running": scheduler.is_running,
        "jobs": scheduler.get_jobs() if scheduler.is_running else [],
    }


# --- EXPORTACAO ---


@app.post("/api/export", tags=["Export"])
def export(req: ExportRequest):
    """Exporta leads para arquivo."""
    service = get_service()
    
    status_enum = LeadStatus(req.status) if req.status else None
    
    leads = service.get_leads(
        status=status_enum,
        nicho=req.nicho,
        min_score=req.min_score,
        limit=10000,
    )
    
    if not leads:
        raise HTTPException(status_code=404, detail="Nenhum lead encontrado com esses filtros")
    
    export_dir = service.config.get("exportacao", {}).get("diretorio", "exports")
    filepath = export_leads(leads, format=req.formato, export_dir=export_dir)
    
    return {"file": filepath, "total": len(leads), "formato": req.formato}


# --- CONFIG ---


@app.get("/api/config", tags=["Config"])
def get_config():
    """Retorna configuracao atual."""
    service = get_service()
    return service.config


@app.post("/api/config/reload", tags=["Config"])
def reload_config():
    """Recarrega configuracao do YAML."""
    service = get_service()
    config = service.reload_config()
    return {"message": "Config recarregada", "nichos": list(config.get("nichos", {}).keys())}
