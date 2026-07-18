"""
Script de demonstracao - popula o banco com leads mock
e testa todos os fluxos (scoring, exportacao, filtros).
Execute: python demo.py
"""

from __future__ import annotations
import sys
from pathlib import Path
from datetime import datetime, timedelta
import random

# Adiciona raiz ao path
sys.path.insert(0, str(Path(__file__).parent))

from app.models.database import init_db, get_session, Lead, LeadStatus, LeadTipo, LeadPrioridade
from app.services.lead_service import LeadService
from app.exporters.lead_exporter import export_leads


MOCK_LEADS = [
    {
        "post_id": "fb_1001",
        "post_url": "https://facebook.com/groups/designbr/posts/1001",
        "post_texto": "Procuro designer para criar identidade visual completa para minha marca. Urgente! Orcamento R$ 2.000,00. WhatsApp 11999887766",
        "autor_nome": "Carlos Silva",
        "autor_id": "carlos.silva99",
        "autor_url": "https://facebook.com/carlos.silva99",
        "grupo_url": "https://facebook.com/groups/designbr",
        "nicho": "design",
        "keywords_encontradas": ["procuro designer", "criar identidade visual"],
        "palavras_urgencia": ["urgente"],
        "contato_info": {"whatsapp": "11999887766"},
        "valor_mencionado": 2000.0,
    },
    {
        "post_id": "fb_1002",
        "post_url": "https://facebook.com/groups/devbr/posts/1002",
        "post_texto": "Preciso de um site para minha loja. Quanto custa? Meu orcamen e de R$ 8.500. Email loja@email.com e insta @loja_do_zé",
        "autor_nome": "Maria Souza",
        "autor_id": "maria.souza23",
        "autor_url": "https://facebook.com/maria.souza23",
        "grupo_url": "https://facebook.com/groups/devbr",
        "nicho": "desenvolvimento",
        "keywords_encontradas": ["preciso de um site"],
        "palavras_urgencia": [],
        "contato_info": {"email": "loja@email.com", "instagram": "@loja_do_zé"},
        "valor_mencionado": 8500.0,
    },
    {
        "post_id": "fb_1003",
        "post_url": "https://facebook.com/groups/mktbr/posts/1003",
        "post_texto": "Vaga social media inicio imediato. Preciso de gestao de redes sociais para meu negocio. Pago R$ 1.500 por mes. Whatsapp 5511987654321",
        "autor_nome": "Joao Pereira",
        "autor_id": "joao.pereira77",
        "autor_url": "https://facebook.com/joao.pereira77",
        "grupo_url": "https://facebook.com/groups/mktbr",
        "nicho": "marketing",
        "keywords_encontradas": ["vaga social media", "gestao de redes sociais"],
        "palavras_urgencia": ["inicio imediato"],
        "contato_info": {"whatsapp": "5511987654321"},
        "valor_mencionado": 1500.0,
    },
    {
        "post_id": "fb_1004",
        "post_url": "https://facebook.com/groups/designbr/posts/1004",
        "post_texto": "Alguem faz logo de graça? Preciso para um projeto social sem fins lucrativos",
        "autor_nome": "Ana Green",
        "autor_id": "ana.green11",
        "autor_url": "https://facebook.com/ana.green11",
        "grupo_url": "https://facebook.com/groups/designbr",
        "nicho": "design",
        "keywords_encontradas": ["alguem faz logo"],
        "palavras_urgencia": [],
        "contato_info": {},
        "valor_mencionado": None,
    },
    {
        "post_id": "fb_1005",
        "post_url": "https://facebook.com/groups/videobr/posts/1005",
        "post_texto": "Procuro editor de video freelancer para montar videos para YouTube. ASAP! R$ 3.000 orcamento. Telefone: (21) 98765-4321 Instagram @produtora_top",
        "autor_nome": "Pedro Martins",
        "autor_id": "pedro.martins45",
        "autor_url": "https://facebook.com/pedro.martins45",
        "grupo_url": "https://facebook.com/groups/videobr",
        "nicho": "video_edicao",
        "keywords_encontradas": ["procuro editor de video"],
        "palavras_urgencia": ["asap"],
        "contato_info": {"telefone": "(21) 98765-4321", "instagram": "@produtora_top"},
        "valor_mencionado": 3000.0,
    },
    {
        "post_id": "fb_1006",
        "post_url": "https://facebook.com/groups/copybr/posts/1006",
        "post_texto": "Preciso de textos para meu site urgente. Redator freelancer para conteudo de blog. R$ 500",
        "autor_nome": "Luciana Costa",
        "autor_id": "luciana.costa88",
        "autor_url": "https://facebook.com/luciana.costa88",
        "grupo_url": "https://facebook.com/groups/copybr",
        "nicho": "copywriting",
        "keywords_encontradas": ["preciso de textos"],
        "palavras_urgencia": ["urgente"],
        "contato_info": {},
        "valor_mencionado": 500.0,
    },
    {
        "post_id": "fb_1007",
        "post_url": "https://facebook.com/groups/devbr/posts/1007",
        "post_texto": "Procuro dev para automatizar processos. Bot para whatsapp. Orcamento R$ 15.000,00 para hoje",
        "autor_nome": "Roberto Tech",
        "autor_id": "roberto.tech12",
        "autor_url": "https://facebook.com/roberto.tech12",
        "grupo_url": "https://facebook.com/groups/devbr",
        "nicho": "desenvolvimento",
        "keywords_encontradas": ["bot para whatsapp", "automacao"],
        "palavras_urgencia": ["hoje"],
        "contato_info": {},
        "valor_mencionado": 15000.0,
    },
    {
        "post_id": "fb_1008",
        "post_url": "https://facebook.com/groups/mktbr/posts/1008",
        "post_texto": "Colaboracao - social media para troca de servicos. Exposicao garantida!",
        "autor_nome": "Fernanda Lima",
        "autor_id": "fernanda.lima55",
        "autor_url": "https://facebook.com/fernanda.lima55",
        "grupo_url": "https://facebook.com/groups/mktbr",
        "nicho": "marketing",
        "keywords_encontradas": ["social media"],
        "palavras_urgencia": [],
        "contato_info": {},
        "valor_mencionado": None,
    },
    {
        "post_id": "fb_1009",
        "post_url": "https://facebook.com/groups/designbr/posts/1009",
        "post_texto": "Freelancer design para criar capa de ebook. Procuro design grafico. R$ 800 Zap 11987654321",
        "autor_nome": "Ricardo Alves",
        "autor_id": "ricardo.alves33",
        "autor_url": "https://facebook.com/ricardo.alves33",
        "grupo_url": "https://facebook.com/groups/designbr",
        "nicho": "design",
        "keywords_encontradas": ["freelancer design", "procuro design grafico"],
        "palavras_urgencia": [],
        "contato_info": {"whatsapp": "11987654321"},
        "valor_mencionado": 800.0,
    },
    {
        "post_id": "fb_1010",
        "post_url": "https://facebook.com/groups/devbr/posts/1010",
        "post_texto": "Vaga programador React para projeto remunerado. Preciso de um app mobile R$5.000",
        "autor_nome": "StartupXYZ",
        "autor_id": "startupxyz.page",
        "autor_url": "https://facebook.com/startupxyz.page",
        "grupo_url": "https://facebook.com/groups/devbr",
        "nicho": "desenvolvimento",
        "keywords_encontradas": ["vaga programador", "preciso de um app"],
        "palavras_urgencia": [],
        "contato_info": {},
        "valor_mencionado": 5000.0,
    },
]


def run_demo():
    print("=" * 60)
    print("  FB LEAD BOT - Script de Demonstracao")
    print("=" * 60)
    
    # 1. Inicializa banco
    print("\n[1/6] Inicializando banco de dados...")
    engine = init_db()
    print("  OK - Banco criado/verificado")
    
    # 2. Carrega service
    print("\n[2/6] Carregando LeadService...")
    service = LeadService()
    print(f"  OK - {len(service.config.get('nichos', {}))} nichos configurados")
    for nk, nv in service.config.get("nichos", {}).items():
        print(f"     - {nv.get('nome', nk)}: {len(nv.get('keywords', []))} keywords")
    
    # 3. Limpa leads existentes (demo)
    print("\n[3/6] Limpando leads antigos...")
    db = get_session(engine)
    deleted = db.query(Lead).delete()
    db.commit()
    print(f"  OK - {deleted} leads removidos")
    
    # 4. Salva leads mock
    print("\n[4/6] Salvando leads de demonstracao...")
    saved = service.save_leads_batch(MOCK_LEADS)
    print(f"  OK - {len(saved)} leads salvos")
    
    # 5. Mostra resultados
    print("\n[5/6] Leads salvos com scoring:")
    print("-" * 60)
    print(f"{'ID':>4} | {'Score':>5} | {'Prior.':>8} | {'Tipo':>12} | {'Nicho':>14} | {'Autor':<20} | {'Contato'}")
    print("-" * 60)
    
    for lead in saved:
        contato_str = ""
        if lead.contato_info:
            parts = []
            for k, v in lead.contato_info.items():
                parts.append(f"{k}={v}")
            contato_str = ", ".join(parts)
        
        print(f"{lead.id:>4} | {lead.score:>5} | {lead.prioridade.value:>8} | {lead.tipo.value:>12} | {lead.nicho:>14} | {(lead.autor_nome or ''):<20} | {contato_str}")
    
    # 6. Estatisticas
    print("\n[6/6] Estatisticas:")
    stats = service.get_stats()
    for k, v in stats.items():
        print(f"  {k}: {v}")
    
    # 7. Testa exportacao
    print("\n[EXPORT] Testando exportacao...")
    all_leads = service.get_leads(limit=100)
    
    for fmt in ["xlsx", "csv", "json"]:
        try:
            filepath = export_leads(all_leads, format=fmt)
            print(f"  {fmt.upper()}: {filepath}")
        except Exception as e:
            print(f"  {fmt.upper()}: ERRO - {e}")
    
    # 8. Testa filtros
    print("\n[FILTROS] Testando queries:")
    
    # Leads urgentes
    urgentes = service.get_leads(prioridade=LeadPrioridade.URGENTE, limit=10)
    print(f"  Urgentes: {len(urgentes)}")
    
    # Score alto
    alto_score = service.get_leads(min_score=60, limit=10)
    print(f"  Score >= 60: {len(alto_score)}")
    
    # Por nicho
    for n in service.config.get("nichos", {}):
        count = service.db.query(Lead).filter(Lead.nicho == n).count()
        print(f"  Nicho '{n}': {count} leads")
    
    # Leads com contato direto
    with_wpp = [l for l in all_leads if (l.contato_info or {}).get("whatsapp")]
    print(f"  Com WhatsApp: {len(with_wpp)}")
    
    # 9. Testa atualizacao de status
    print("\n[STATUS] Testando mudanca de status...")
    if saved:
        first = saved[0]
        updated = service.update_lead_status(first.id, LeadStatus.CONTATADO, notas="Contatado via WhatsApp")
        print(f"  Lead #{first.id}: {LeadStatus.NOVO.value} -> {updated.status.value}")
    
    print("\n" + "=" * 60)
    print("  DEMO CONCLUIDO COM SUCESSO!")
    print("  Para iniciar a API: python run.py api")
    print("  Para docs da API: http://localhost:8000/docs")
    print("=" * 60)


if __name__ == "__main__":
    run_demo()
