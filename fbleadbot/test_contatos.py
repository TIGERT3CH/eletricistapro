"""
Script de teste para verificar extração de contatos do texto do post.
Testa se os telefones são extraídos apenas do texto (não do perfil).
"""

from app.scrapers.facebook_scraper import FacebookScraper


def test_contact_extraction():
    """Testa a extração de contatos de textos de posts."""
    
    test_cases = [
        {
            "texto": "Preciso de um freelancer para fazer um site em Uberlândia. WhatsApp: (34) 99999-1234. Orçamento: R$ 2.000",
            "esperado": {
                "whatsapp": "(34) 99999-1234",
                "telefone": None
            }
        },
        {
            "texto": "Vaga para designer freelancer em Uberlândia. Telefone: (34) 3234-5678. Interessados mandem mensagem!",
            "esperado": {
                "whatsapp": None,
                "telefone": "(34) 3234-5678"
            }
        },
        {
            "texto": "Procuro programador freelancer. Zap: 34998765432. Valor a combinar.",
            "esperado": {
                "whatsapp": "34998765432",
                "telefone": None
            }
        },
        {
            "texto": "Freelancer para edição de vídeo em Uberlândia. Contato: 34 98765-4321. Urgente!",
            "esperado": {
                "whatsapp": None,
                "telefone": "34 98765-4321"
            }
        },
        {
            "texto": "Preciso de copywriter. Email: contato@empresa.com.br. WhatsApp: (34) 99111-2222",
            "esperado": {
                "whatsapp": "(34) 99111-2222",
                "telefone": None,
                "email": "contato@empresa.com.br"
            }
        }
    ]
    
    print("=== Teste de Extração de Contatos ===\n")
    
    for i, caso in enumerate(test_cases, 1):
        texto = caso["texto"]
        contato = FacebookScraper._extract_contacts(texto)
        
        print(f"Caso {i}:")
        print(f"  Texto: {texto[:80]}...")
        print(f"  Extraído: {contato}")
        
        # Verifica se os contatos principais foram extraídos corretamente
        if caso["esperado"].get("whatsapp"):
            assert contato.get("whatsapp") == caso["esperado"]["whatsapp"], \
                f"WhatsApp esperado {caso['esperado']['whatsapp']}, obtido {contato.get('whatsapp')}"
        
        if caso["esperado"].get("telefone"):
            assert contato.get("telefone") == caso["esperado"]["telefone"], \
                f"Telefone esperado {caso['esperado']['telefone']}, obtido {contato.get('telefone')}"
        
        if caso["esperado"].get("email"):
            assert contato.get("email") == caso["esperado"]["email"], \
                f"Email esperado {caso['esperado']['email']}, obtido {contato.get('email')}"
        
        print("  OK\n")
    
    print("=== Todos os testes passaram! ===")


if __name__ == "__main__":
    test_contact_extraction()