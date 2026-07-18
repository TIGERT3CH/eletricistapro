"""
Service principal - orquestra scraping, scoring, deduplicacao e persistencia.
"""

from __future__ import annotations

import yaml
from pathlib import Path
from datetime import datetime
from loguru import logger
from sqlalchemy import or_

from app.models.database import (
    Base, get_engine, get_session, init_db,
    Lead, LeadStatus, LeadTipo, LeadPrioridade,
    GrupoFacebook, ScrapingSession, HistoricoContato,
)


class LeadService:
    """Service que orquestra toda a logica de captura e processamento de leads."""

    def __init__(self, config_path: str = "config/config.yaml"):
        self.config_path = Path(config_path)
        self.config = self._load_config()
        self.engine = init_db()
        self.db = get_session(self.engine)

    def _load_config(self) -> dict:
        """Carrega configuracao do YAML."""
        if not self.config_path.exists():
            raise FileNotFoundError(f"Config nao encontrado: {self.config_path}")
        with open(self.config_path, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)

    def reload_config(self) -> dict:
        """Recarrega a configuracao (quando editada em runtime)."""
        self.config = self._load_config()
        logger.info("Config recarregada")
        return self.config

    # --- SCORING ---

    def calculate_score(self, lead_data: dict) -> int:
        """
        Calcula score de relevancia do lead (0-100).
        
        Fatores:
        - Keywords encontradas (+10 cada)
        - Palavras de urgencia (+15 cada)
        - Palavras alta prioridade (+12 cada)
        - Palavras baixa prioridade (-15 cada)
        - Valor mencionado (+5 a +20 conforme faixa)
        - Contato direto (whatsapp/email) (+15 cada)
        """
        score = 0
        texto = (lead_data.get("post_texto") or "").lower()
        
        lead_config = self.config.get("lead", {})
        
        # Keywords encontradas
        keywords = lead_data.get("keywords_encontradas", [])
        score += len(keywords) * 10
        
        # Palavras de urgencia
        urgencia = lead_data.get("palavras_urgencia", [])
        score += len(urgencia) * 15
        
        # Palavras alta prioridade
        for palavra in lead_config.get("palavras_alta_prioridade", []):
            if palavra.lower() in texto:
                score += 12
        
        # Palavras baixa prioridade (reduz score)
        for palavra in lead_config.get("palavras_baixa_prioridade", []):
            if palavra.lower() in texto:
                score -= 15
        
        # Contato direto
        contato = lead_data.get("contato_info", {})
        if contato.get("whatsapp"):
            score += 15
        if contato.get("email"):
            score += 10
        if contato.get("telefone"):
            score += 10
        if contato.get("instagram"):
            score += 5
        
        # Valor mencionado
        valor = lead_data.get("valor_mencionado")
        if valor:
            nicho_key = lead_data.get("nicho", "")
            nicho_data = self.config.get("nichos", {}).get(nicho_key, {})
            filtros = nicho_data.get("filtros", {})
            valor_min = filtros.get("valor_min", 0)
            valor_max = filtros.get("valor_max", 999999)
            
            if valor_min <= valor <= valor_max:
                score += 20
            elif valor > valor_max:
                score += 10  # acima do range ainda e bom
        
        # Clamp 0-100
        score = max(0, min(100, score))
        return score

    def determine_prioridade(self, score: int, urgencia: list) -> LeadPrioridade:
        """Determina prioridade baseada no score e urgencia."""
        if urgencia or score >= 80:
            return LeadPrioridade.URGENTE
        elif score >= 60:
            return LeadPrioridade.ALTA
        elif score >= 40:
            return LeadPrioridade.MEDIA
        else:
            return LeadPrioridade.BAIXA

    def determine_tipo(self, lead_data: dict) -> LeadTipo:
        """Determina se e freela, lead ou oportunidade."""
        texto = (lead_data.get("post_texto") or "").lower()
        keywords = lead_data.get("keywords_encontradas", [])
        
        # Procura indicadores de vaga/freela
        freela_indicators = ["procuro", "preciso", "contratar", "vaga", "freelancer", "contrata"]
        oportunidade_indicators = ["orcamen", "quanto custa", "preco", "valor", "investiment"]
        
        for ind in freela_indicators:
            if ind in texto:
                return LeadTipo.FREELA
        
        for ind in oportunidade_indicators:
            if ind in texto:
                return LeadTipo.OPORTUNIDADE
        
        return LeadTipo.LEAD

    # --- PERSISTENCIA ---

    def save_lead(self, lead_data: dict) -> Lead:
        """
        Salva um lead no banco. Se ja existe (por post_id), atualiza.
        Retorna o objeto Lead.
        """
        post_id = lead_data.get("post_id")
        if not post_id:
            logger.warning("Lead sem post_id, ignorando")
            return None
        
        # Verifica duplicata
        existing = self.db.query(Lead).filter(Lead.post_id == post_id).first()
        if existing:
            logger.debug(f"Lead ja existe: {post_id}, atualizando score")
            # Atualiza keywords e score se melhorou
            new_score = self.calculate_score(lead_data)
            if new_score > existing.score:
                existing.score = new_score
                existing.keywords_encontradas = lead_data.get("keywords_encontradas")
                existing.palavras_urgencia = lead_data.get("palavras_urgencia")
                existing.prioridade = self.determine_prioridade(new_score, lead_data.get("palavras_urgencia", []))
                existing.contato_info = lead_data.get("contato_info")
                self.db.commit()
            return existing
        
        # Cria novo lead
        score = self.calculate_score(lead_data)
        prioridade = self.determine_prioridade(score, lead_data.get("palavras_urgencia", []))
        tipo = self.determine_tipo(lead_data)
        
        # Procura grupo no banco
        grupo_url = lead_data.get("grupo_url", "")
        grupo = self.db.query(GrupoFacebook).filter(GrupoFacebook.url == grupo_url).first()
        
        # Parse da data
        post_data = lead_data.get("post_data")
        if isinstance(post_data, str) and post_data:
            try:
                post_data = datetime.fromisoformat(post_data)
            except:
                post_data = None
        
        lead = Lead(
            post_id=post_id,
            post_url=lead_data.get("post_url"),
            post_texto=lead_data.get("post_texto"),
            post_data=post_data,
            autor_nome=lead_data.get("autor_nome"),
            autor_id=lead_data.get("autor_id"),
            autor_url=lead_data.get("autor_url"),
            grupo_id=grupo.id if grupo else None,
            nicho=lead_data.get("nicho"),
            tipo=tipo,
            prioridade=prioridade,
            score=score,
            valor_mencionado=lead_data.get("valor_mencionado"),
            keywords_encontradas=lead_data.get("keywords_encontradas"),
            palavras_urgencia=lead_data.get("palavras_urgencia"),
            contato_info=lead_data.get("contato_info"),
        )
        
        self.db.add(lead)
        self.db.commit()
        
        # Atualiza metricas do grupo
        if grupo:
            grupo.total_leads_encontrados += 1
            self.db.commit()
        
        logger.info(f"Novo lead salvo: #{lead.id} score={score} nicho={lead.nicho} autor={lead.autor_nome}")
        return lead

    def save_leads_batch(self, leads_data: list[dict]) -> list[Lead]:
        """Salva varios leads de uma vez."""
        saved = []
        for ld in leads_data:
            try:
                lead = self.save_lead(ld)
                if lead:
                    saved.append(lead)
            except Exception as e:
                logger.error(f"Erro ao salvar lead: {e}")
        return saved

    # --- QUERIES ---

    def get_leads(
        self,
        status: LeadStatus = None,
        nicho: str = None,
        min_score: int = None,
        prioridade: LeadPrioridade = None,
        tipo: LeadTipo = None,
        limit: int = 50,
        offset: int = 0,
    ) -> list[Lead]:
        """Busca leads com filtros."""
        q = self.db.query(Lead)
        
        if status:
            q = q.filter(Lead.status == status)
        if nicho:
            q = q.filter(Lead.nicho == nicho)
        if min_score is not None:
            q = q.filter(Lead.score >= min_score)
        if prioridade:
            q = q.filter(Lead.prioridade == prioridade)
        if tipo:
            q = q.filter(Lead.tipo == tipo)
        
        return q.order_by(Lead.score.desc()).offset(offset).limit(limit).all()

    def get_lead_by_id(self, lead_id: int) -> Lead:
        """Busca lead por ID."""
        return self.db.query(Lead).filter(Lead.id == lead_id).first()

    def update_lead_status(self, lead_id: int, status: LeadStatus, notas: str = None) -> Lead:
        """Atualiza status de um lead."""
        lead = self.get_lead_by_id(lead_id)
        if not lead:
            return None
        lead.status = status
        if notas:
            lead.notas = notas
        lead.atualizado_em = datetime.utcnow()
        self.db.commit()
        return lead

    def add_contato_historico(
        self, lead_id: int, tipo: str, canal: str, conteudo: str, resultado: str = None
    ) -> HistoricoContato:
        """Adiciona registro de contato no historico."""
        h = HistoricoContato(
            lead_id=lead_id,
            tipo=tipo,
            canal=canal,
            conteudo=conteudo,
            resultado=resultado,
        )
        self.db.add(h)
        self.db.commit()
        return h

    def get_stats(self) -> dict:
        """Retorna estatisticas gerais."""
        total = self.db.query(Lead).count()
        novos = self.db.query(Lead).filter(Lead.status == LeadStatus.NOVO).count()
        contatados = self.db.query(Lead).filter(Lead.status == LeadStatus.CONTATADO).count()
        fechados = self.db.query(Lead).filter(Lead.status == LeadStatus.FECHADO).count()
        
        # Por nicho
        nichos = {}
        for n in self.config.get("nichos", {}):
            nichos[n] = self.db.query(Lead).filter(Lead.nicho == n).count()
        
        # Score medio
        from sqlalchemy import func
        avg_score = self.db.query(func.avg(Lead.score)).scalar() or 0
        
        return {
            "total_leads": total,
            "novos": novos,
            "contatados": contatados,
            "fechados": fechados,
            "score_medio": round(avg_score, 1),
            "por_nicho": nichos,
        }

    # --- SESSOES DE SCRAPING ---

    def create_session(self) -> ScrapingSession:
        """Cria nova sessao de scraping."""
        session = ScrapingSession(
            status="rodando",
            config_snapshot=self.config,
        )
        self.db.add(session)
        self.db.commit()
        return session

    def update_session(self, session_id: int, **kwargs) -> ScrapingSession:
        """Atualiza sessao de scraping."""
        session = self.db.query(ScrapingSession).filter(ScrapingSession.id == session_id).first()
        if not session:
            return None
        for k, v in kwargs.items():
            setattr(session, k, v)
        self.db.commit()
        return session

    def finish_session(self, session_id: int, status: str = "concluido", **stats) -> ScrapingSession:
        """Finaliza sessao de scraping."""
        return self.update_session(
            session_id,
            status=status,
            fim=datetime.utcnow(),
            **stats,
        )

    # --- GRUPOS ---

    def add_grupo(self, nome: str, url: str, nicho: str = None) -> GrupoFacebook:
        """Adiciona grupo do Facebook para monitorar."""
        existing = self.db.query(GrupoFacebook).filter(GrupoFacebook.url == url).first()
        if existing:
            return existing
        grupo = GrupoFacebook(nome=nome, url=url, nicho=nicho)
        self.db.add(grupo)
        self.db.commit()
        return grupo

    def get_grupos(self, ativo: bool = None) -> list[GrupoFacebook]:
        """Lista grupos monitorados."""
        q = self.db.query(GrupoFacebook)
        if ativo is not None:
            q = q.filter(GrupoFacebook.ativo == ativo)
        return q.all()

    # --- CONFIG DINAMICA ---

    def update_nicho_keywords(self, nicho_key: str, keywords: list) -> dict:
        """Atualiza keywords de um nicho especifico."""
        if nicho_key not in self.config.get("nichos", {}):
            return {"error": f"Nicho '{nicho_key}' nao encontrado"}
        
        self.config["nichos"][nicho_key]["keywords"] = keywords
        
        # Salva de volta no YAML
        with open(self.config_path, "w", encoding="utf-8") as f:
            yaml.dump(self.config, f, allow_unicode=True, default_flow_style=False)
        
        logger.info(f"Keywords atualizadas para nicho '{nicho_key}': {keywords}")
        return {"nicho": nicho_key, "keywords": keywords}

    def add_nicho(self, nicho_key: str, nome: str, keywords: list, grupos: list = None) -> dict:
        """Adiciona novo nicho customizado."""
        if "nichos" not in self.config:
            self.config["nichos"] = {}
        
        self.config["nichos"][nicho_key] = {
            "nome": nome,
            "keywords": keywords,
            "grupos": grupos or [],
            "filtros": {"valor_min": 100, "valor_max": 10000, "urgencia": ["urgente", "rapido"]},
        }
        
        with open(self.config_path, "w", encoding="utf-8") as f:
            yaml.dump(self.config, f, allow_unicode=True, default_flow_style=False)
        
        logger.info(f"Novo nicho adicionado: {nicho_key}")
        return self.config["nichos"][nicho_key]

    def update_nicho(self, nicho_key: str, nome: str = None, keywords: list = None, grupos: list = None, filtros: dict = None) -> dict:
        """Atualiza um nicho existente."""
        if nicho_key not in self.config.get("nichos", {}):
            return {"error": f"Nicho '{nicho_key}' nao encontrado"}
        
        nicho = self.config["nichos"][nicho_key]
        
        if nome is not None:
            nicho["nome"] = nome
        if keywords is not None:
            nicho["keywords"] = keywords
        if grupos is not None:
            nicho["grupos"] = grupos
        if filtros is not None:
            nicho["filtros"] = filtros
        
        with open(self.config_path, "w", encoding="utf-8") as f:
            yaml.dump(self.config, f, allow_unicode=True, default_flow_style=False)
        
        logger.info(f"Nicho atualizado: {nicho_key}")
        return nicho

    def delete_nicho(self, nicho_key: str) -> dict:
        """Remove um nicho."""
        if nicho_key not in self.config.get("nichos", {}):
            return {"error": f"Nicho '{nicho_key}' nao encontrado"}
        
        del self.config["nichos"][nicho_key]
        
        with open(self.config_path, "w", encoding="utf-8") as f:
            yaml.dump(self.config, f, allow_unicode=True, default_flow_style=False)
        
        logger.info(f"Nicho removido: {nicho_key}")
        return {"message": f"Nicho '{nicho_key}' removido"}
