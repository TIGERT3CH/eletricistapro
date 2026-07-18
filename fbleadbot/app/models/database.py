"""
Modelos de dados - SQLAlchemy ORM
Lead, GrupoFacebook, ScrapingSession, HistoricoContato
"""

import enum
from datetime import datetime
from sqlalchemy import (
    Column, Integer, String, Text, Float, DateTime,
    Boolean, Enum, JSON, ForeignKey, Index, create_engine
)
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
from pathlib import Path

Base = declarative_base()


class LeadStatus(str, enum.Enum):
    NOVO = "novo"
    CONTATADO = "contatado"
    EM_NEGOCIACAO = "em_negociacao"
    FECHADO = "fechado"
    PERDIDO = "perdido"
    ARQUIVADO = "arquivado"


class LeadPrioridade(str, enum.Enum):
    BAIXA = "baixa"
    MEDIA = "media"
    ALTA = "alta"
    URGENTE = "urgente"


class LeadTipo(str, enum.Enum):
    FREELA = "freela"
    LEAD = "lead"
    OPORTUNIDADE = "oportunidade"


class Lead(Base):
    """Modelo principal de Lead capturado do Facebook."""
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, autoincrement=True)
    
    # Identificacao do post
    post_id = Column(String(255), unique=True, nullable=False, index=True)
    post_url = Column(String(500), nullable=True)
    post_texto = Column(Text, nullable=True)
    post_data = Column(DateTime, nullable=True)
    
    # Autor do post
    autor_nome = Column(String(255), nullable=True)
    autor_id = Column(String(255), nullable=True, index=True)
    autor_url = Column(String(500), nullable=True)
    
    # Grupo de origem
    grupo_id = Column(Integer, ForeignKey("grupos_facebook.id"), nullable=True)
    
    # Classificacao
    nicho = Column(String(100), nullable=True, index=True)
    tipo = Column(Enum(LeadTipo), default=LeadTipo.FREELA, nullable=False)
    status = Column(Enum(LeadStatus), default=LeadStatus.NOVO, nullable=False, index=True)
    prioridade = Column(Enum(LeadPrioridade), default=LeadPrioridade.MEDIA, nullable=False)
    
    # Score de relevancia (0-100)
    score = Column(Integer, default=0, nullable=False, index=True)
    
    # Dados extraidos
    valor_mencionado = Column(Float, nullable=True)
    keywords_encontradas = Column(JSON, nullable=True)  # lista de keywords que bateram
    palavras_urgencia = Column(JSON, nullable=True)  # palavras de urgencia encontradas
    resumo_ia = Column(Text, nullable=True)  # resumo gerado por IA (futuro)
    
    # Contato
    contato_info = Column(JSON, nullable=True)  # {"email": ..., "whatsapp": ..., "telefone": ...}
    
    # Metadados
    capturado_em = Column(DateTime, default=datetime.utcnow, nullable=False)
    atualizado_em = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    sessao_id = Column(Integer, ForeignKey("scraping_sessions.id"), nullable=True)
    
    # Notas do usuario
    notas = Column(Text, nullable=True)
    
    # Relacionamentos
    grupo = relationship("GrupoFacebook", back_populates="leads")
    sessao = relationship("ScrapingSession", back_populates="leads")
    historico = relationship("HistoricoContato", back_populates="lead", cascade="all, delete-orphan")

    __table_args__ = (
        Index("idx_leads_status_score", "status", "score"),
        Index("idx_leads_nicho_score", "nicho", "score"),
    )

    def __repr__(self):
        return f"<Lead #{self.id} score={self.score} nicho={self.nicho} autor={self.autor_nome}>"


class GrupoFacebook(Base):
    """Grupos do Facebook monitorados."""
    __tablename__ = "grupos_facebook"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(255), nullable=False)
    url = Column(String(500), nullable=False, unique=True)
    grupo_id_fb = Column(String(100), nullable=True)  # ID do grupo no FB
    nicho = Column(String(100), nullable=True, index=True)
    ativo = Column(Boolean, default=True, nullable=False)
    
    # Metricas
    total_posts_processados = Column(Integer, default=0)
    total_leads_encontrados = Column(Integer, default=0)
    ultimo_scrape = Column(DateTime, nullable=True)
    
    criado_em = Column(DateTime, default=datetime.utcnow)
    atualizado_em = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    leads = relationship("Lead", back_populates="grupo")

    def __repr__(self):
        return f"<GrupoFacebook #{self.id} {self.nome}>"


class ScrapingSession(Base):
    """Sessao de scraping - rastreia cada execucao."""
    __tablename__ = "scraping_sessions"

    id = Column(Integer, primary_key=True, autoincrement=True)
    inicio = Column(DateTime, default=datetime.utcnow, nullable=False)
    fim = Column(DateTime, nullable=True)
    status = Column(String(50), default="rodando", nullable=False)  # rodando, concluido, erro
    
    # Estatisticas
    grupos_processados = Column(Integer, default=0)
    posts_analisados = Column(Integer, default=0)
    leads_encontrados = Column(Integer, default=0)
    erros = Column(Integer, default=0)
    
    # Config usada na sessao
    config_snapshot = Column(JSON, nullable=True)
    
    # Log de erros
    log_erros = Column(JSON, nullable=True)  # lista de {"timestamp": ..., "erro": ...}

    # Relacionamentos
    leads = relationship("Lead", back_populates="sessao")

    def __repr__(self):
        return f"<ScrapingSession #{self.id} status={self.status}>"


class HistoricoContato(Base):
    """Historico de contato com o lead."""
    __tablename__ = "historico_contato"

    id = Column(Integer, primary_key=True, autoincrement=True)
    lead_id = Column(Integer, ForeignKey("leads.id"), nullable=False, index=True)
    
    data = Column(DateTime, default=datetime.utcnow, nullable=False)
    tipo = Column(String(50), nullable=False)  # mensagem, ligacao, email, whatsapp
    canal = Column(String(50), nullable=True)  # facebook, whatsapp, email, telefone
    conteudo = Column(Text, nullable=True)
    resultado = Column(String(100), nullable=True)  # respondeu, nao respondeu, interessado, etc
    
    criado_em = Column(DateTime, default=datetime.utcnow)

    # Relacionamentos
    lead = relationship("Lead", back_populates="historico")

    def __repr__(self):
        return f"<HistoricoContato #{self.id} lead={self.lead_id} tipo={self.tipo}>"


# --- DATABASE SETUP ---

def get_engine(database_url: str = None):
    """Cria engine SQLAlchemy."""
    if database_url is None:
        data_dir = Path(__file__).parent.parent.parent / "data"
        data_dir.mkdir(exist_ok=True)
        database_url = f"sqlite:///{data_dir / 'fbleadbot.db'}"
    return create_engine(database_url, echo=False)


def init_db(engine=None):
    """Inicializa banco de dados e cria tabelas."""
    if engine is None:
        engine = get_engine()
    Base.metadata.create_all(engine)
    return engine


def get_session(engine=None):
    """Retorna sessao do banco."""
    if engine is None:
        engine = get_engine()
    Session = sessionmaker(bind=engine)
    return Session()
