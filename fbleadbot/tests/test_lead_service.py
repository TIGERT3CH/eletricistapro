"""
Testes basicos para o FB Lead Bot.
Execute: python -m pytest tests/ -v
"""

import sys
from pathlib import Path

# Adiciona raiz ao path
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.models.database import init_db, get_session, Lead, LeadStatus, LeadPrioridade, LeadTipo
from app.services.lead_service import LeadService
from app.exporters.lead_exporter import export_leads


def setup_function():
    """Setup para cada teste."""
    global engine, service
    engine = init_db("sqlite:///:memory:")
    service = LeadService.__new__(LeadService)
    service.config_path = Path("config/config.yaml")
    import yaml
    with open("config/config.yaml", "r", encoding="utf-8") as f:
        service.config = yaml.safe_load(f)
    service.engine = engine
    service.db = get_session(engine)


def test_calculate_score_keywords():
    """Score aumenta com keywords encontradas."""
    lead_data = {
        "post_texto": "procuro designer para criar logo",
        "keywords_encontradas": ["procuro designer"],
        "palavras_urgencia": [],
        "contato_info": {},
        "valor_mencionado": None,
        "nicho": "design",
    }
    score = service.calculate_score(lead_data)
    assert score >= 10  # Pelo menos 1 keyword * 10


def test_calculate_score_urgencia():
    """Score aumenta com palavras de urgencia."""
    lead_data = {
        "post_texto": "urgente preciso de dev",
        "keywords_encontradas": [],
        "palavras_urgencia": ["urgente"],
        "contato_info": {},
        "valor_mencionado": None,
        "nicho": "desenvolvimento",
    }
    score = service.calculate_score(lead_data)
    assert score >= 15  # 1 urgencia * 15


def test_calculate_score_contato_whatsapp():
    """Score aumenta com WhatsApp."""
    lead_data = {
        "post_texto": "preciso de site",
        "keywords_encontradas": [],
        "palavras_urgencia": [],
        "contato_info": {"whatsapp": "11999887766"},
        "valor_mencionado": None,
        "nicho": "desenvolvimento",
    }
    score = service.calculate_score(lead_data)
    assert score >= 15  # WhatsApp = +15


def test_calculate_score_baixa_prioridade():
    """Score diminui com palavras de baixa prioridade."""
    lead_data = {
        "post_texto": "preciso de voluntario para exposicao",
        "keywords_encontradas": [],
        "palavras_urgencia": [],
        "contato_info": {},
        "valor_mencionado": None,
        "nicho": "design",
    }
    score = service.calculate_score(lead_data)
    # Voluntario + exposicao = -30
    assert score <= 0


def test_determine_prioridade_urgente():
    """Score alto gera prioridade urgente."""
    assert service.determine_prioridade(85, []) == LeadPrioridade.URGENTE
    assert service.determine_prioridade(50, ["urgente"]) == LeadPrioridade.URGENTE


def test_determine_prioridade_alta():
    """Score 60-79 gera prioridade alta."""
    assert service.determine_prioridade(65, []) == LeadPrioridade.ALTA


def test_determine_prioridade_media():
    """Score 40-59 gera prioridade media."""
    assert service.determine_prioridade(45, []) == LeadPrioridade.MEDIA


def test_determine_prioridade_baixa():
    """Score < 40 gera prioridade baixa."""
    assert service.determine_prioridade(20, []) == LeadPrioridade.BAIXA


def test_determine_tipo_freela():
    """Post com indicador de freela."""
    lead_data = {"post_texto": "procuro designer para trabalho", "keywords_encontradas": []}
    assert service.determine_tipo(lead_data) == LeadTipo.FREELA


def test_determine_tipo_oportunidade():
    """Post com indicador de oportunidade."""
    lead_data = {"post_texto": "quanto custa um site?", "keywords_encontradas": []}
    assert service.determine_tipo(lead_data) == LeadTipo.OPORTUNIDADE


def test_save_lead():
    """Salva lead e verifica persistencia."""
    lead_data = {
        "post_id": "test_001",
        "post_texto": "preciso de designer urgente R$ 1.500",
        "post_url": "https://facebook.com/test",
        "autor_nome": "Teste User",
        "autor_id": "teste123",
        "nicho": "design",
        "keywords_encontradas": ["preciso de designer"],
        "palavras_urgencia": ["urgente"],
        "contato_info": {"whatsapp": "11999999999"},
        "valor_mencionado": 1500.0,
    }
    
    lead = service.save_lead(lead_data)
    assert lead is not None
    assert lead.post_id == "test_001"
    assert lead.score > 0
    assert lead.autor_nome == "Teste User"


def test_save_lead_deduplicacao():
    """Lead duplicado nao e criado novamente."""
    lead_data = {
        "post_id": "test_dup",
        "post_texto": "teste duplicacao",
        "nicho": "design",
        "keywords_encontradas": [],
        "palavras_urgencia": [],
        "contato_info": {},
    }
    
    lead1 = service.save_lead(lead_data)
    lead2 = service.save_lead(lead_data)
    
    assert lead1.id == lead2.id
    count = service.db.query(Lead).filter(Lead.post_id == "test_dup").count()
    assert count == 1


def test_export_csv():
    """Exportacao CSV funciona."""
    lead_data = {
        "post_id": "test_export",
        "post_texto": "teste exportacao",
        "nicho": "design",
        "keywords_encontradas": [],
        "palavras_urgencia": [],
        "contato_info": {},
    }
    service.save_lead(lead_data)
    
    leads = service.get_leads(limit=10)
    filepath = export_leads(leads, format="csv", export_dir="exports")
    assert filepath is not None
    assert Path(filepath).exists()


def test_export_json():
    """Exportacao JSON funciona."""
    lead_data = {
        "post_id": "test_json",
        "post_texto": "teste json",
        "nicho": "design",
        "keywords_encontradas": [],
        "palavras_urgencia": [],
        "contato_info": {},
    }
    service.save_lead(lead_data)
    
    leads = service.get_leads(limit=10)
    filepath = export_leads(leads, format="json", export_dir="exports")
    assert filepath is not None
    assert Path(filepath).exists()


def test_stats():
    """Estatisticas retornam corretamente."""
    stats = service.get_stats()
    assert "total_leads" in stats
    assert "novos" in stats
    assert "score_medio" in stats
