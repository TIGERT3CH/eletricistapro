"""
Script de teste para extrair vagas de freelancer em Uberlândia.
Executa um ciclo único de scraping focado no nicho freelancer_uberlandia.
"""

import asyncio
import json
from pathlib import Path
from app.scrapers.facebook_scraper import FacebookScraper
from dotenv import load_dotenv
import os

load_dotenv()


async def test_uberlandia_scraping():
    """Testa scraping de vagas de freelancer em Uberlândia."""
    
    # Carrega configuração
    import yaml
    with open("config/config.yaml", "r", encoding="utf-8") as f:
        config = yaml.safe_load(f)
    
    # Filtra apenas o nicho de Uberlândia
    nichos_filtrados = {
        "freelancer_uberlandia": config["nichos"]["freelancer_uberlandia"]
    }
    config["nichos"] = nichos_filtrados
    
    # Inicia scraper
    scraper = FacebookScraper(config)
    
    try:
        await scraper.start()
        
        # Login (opcional - funciona sem login em grupos públicos)
        email = os.getenv("FB_EMAIL")
        password = os.getenv("FB_PASSWORD")
        
        if email and password:
            logged_in = await scraper.login(email, password)
            if not logged_in:
                print("Aviso: Login falhou. Continuando em modo público...")
        else:
            print("Modo público (sem login)")
        
        # Scrape apenas o nicho de Uberlândia
        all_leads = []
        
        for nicho_key, nicho_data in config["nichos"].items():
            print(f"\n=== Processando: {nicho_data['nome']} ===")
            
            keywords = nicho_data.get("keywords", [])
            grupos = nicho_data.get("grupos", [])
            
            # Scrape por grupos
            for grupo_nome in grupos[:3]:  # Limita a 3 grupos para teste
                try:
                    if grupo_nome.startswith("http"):
                        grupo_url = grupo_nome
                    else:
                        grupo_url = f"https://www.facebook.com/groups/search/?q={grupo_nome}"
                    
                    print(f"Scraping grupo: {grupo_nome}")
                    leads = await scraper.scrape_grupo(grupo_url, keywords, nicho_key)
                    all_leads.extend(leads)
                    print(f"  -> {len(leads)} leads encontrados")
                    
                except Exception as e:
                    print(f"  -> Erro: {e}")
                
                await asyncio.sleep(3)
            
            # Scrape por busca (apenas 2 keywords para teste)
            for keyword in keywords[:2]:
                try:
                    print(f"Buscando keyword: {keyword}")
                    leads = await scraper.scrape_search(keyword, nicho_key)
                    all_leads.extend(leads)
                    print(f"  -> {len(leads)} leads encontrados")
                    
                except Exception as e:
                    print(f"  -> Erro: {e}")
                
                await asyncio.sleep(3)
        
        # Salva resultados
        output_file = Path("exports/teste_uberlandia.json")
        output_file.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(all_leads, f, indent=2, ensure_ascii=False, default=str)
        
        print(f"\n=== Resultados ===")
        print(f"Total de leads: {len(all_leads)}")
        print(f"Arquivo salvo: {output_file}")
        
        # Mostra resumo dos leads
        for i, lead in enumerate(all_leads[:5], 1):
            print(f"\nLead {i}:")
            print(f"  Post URL: {lead.get('post_url', 'N/A')}")
            print(f"  Texto: {lead.get('post_texto', '')[:100]}...")
            print(f"  Contato: {lead.get('contato_info', {})}")
        
        return all_leads
        
    finally:
        await scraper.stop()


if __name__ == "__main__":
    asyncio.run(test_uberlandia_scraping())