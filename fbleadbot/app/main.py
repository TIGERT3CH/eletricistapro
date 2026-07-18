"""
FB Lead Bot - Ponto de entrada principal.
Inicia a API e/ou o scheduler de scraping.
"""

import os
import sys
import argparse
import asyncio
from pathlib import Path
from dotenv import load_dotenv
from loguru import logger

# Carrega .env
load_dotenv()

# Configura log
log_level = os.getenv("LOG_LEVEL", "INFO")
log_file = os.getenv("LOG_FILE", "logs/fbleadbot.log")
log_path = Path(log_file)
log_path.parent.mkdir(parents=True, exist_ok=True)

logger.remove()
logger.add(sys.stderr, level=log_level, format="<green>{time:HH:mm:ss}</green> | <level>{level: <8}</level> | {message}")
logger.add(log_file, rotation="10 MB", retention="7 days", level=log_level)


def run_api(host: str = "0.0.0.0", port: int = 8000):
    """Inicia apenas a API REST."""
    import uvicorn
    from app.api.routes import app
    
    logger.info(f"Iniciando API em http://{host}:{port}")
    logger.info(f"Docs em http://{host}:{port}/docs")
    
    uvicorn.run(app, host=host, port=port)


def run_scheduler(config_path: str = "config/config.yaml"):
    """Inicia apenas o scheduler (sem API)."""
    from app.scheduler.scraping_scheduler import ScrapingScheduler
    
    scheduler = ScrapingScheduler(config_path=config_path)
    scheduler.start()
    
    logger.info("Scheduler rodando. Pressione Ctrl+C para parar.")
    
    try:
        asyncio.get_event_loop().run_forever()
    except KeyboardInterrupt:
        scheduler.stop()
        logger.info("Scheduler parado")


def run_full(host: str = "0.0.0.0", port: int = 8000, config_path: str = "config/config.yaml"):
    """Inicia API + Scheduler junto."""
    import uvicorn
    from app.api.routes import app, get_scheduler
    
    # Inicia scheduler dentro do evento da API
    @app.on_event("startup")
    async def startup():
        if os.getenv("SCHEDULER_ENABLED", "false").lower() == "true":
            scheduler = get_scheduler()
            scheduler.start()
            logger.info("Scheduler iniciado junto com a API")
    
    @app.on_event("shutdown")
    async def shutdown():
        scheduler = get_scheduler()
        if scheduler.is_running:
            scheduler.stop()
            logger.info("Scheduler parado")
    
    logger.info(f"Iniciando FB Lead Bot (API + Scheduler) em http://{host}:{port}")
    uvicorn.run(app, host=host, port=port)


def run_single_cycle(config_path: str = "config/config.yaml"):
    """Executa um unico ciclo de scraping e sai."""
    from app.scheduler.scraping_scheduler import ScrapingScheduler
    
    scheduler = ScrapingScheduler(config_path=config_path)
    
    logger.info("Executando ciclo unico de scraping...")
    asyncio.run(scheduler.run_scraping_cycle())
    logger.info("Ciclo unico concluido")


def main():
    parser = argparse.ArgumentParser(description="FB Lead Bot - Captura de leads no Facebook")
    parser.add_argument("command", choices=["api", "scheduler", "full", "cycle", "init"],
                        help="Modo de execucao: api (só API), scheduler (só scheduler), full (API+scheduler), cycle (um ciclo), init (inicializar)")
    parser.add_argument("--host", default=os.getenv("API_HOST", "0.0.0.0"), help="Host da API")
    parser.add_argument("--port", type=int, default=int(os.getenv("API_PORT", "8000")), help="Porta da API")
    parser.add_argument("--config", default="config/config.yaml", help="Caminho do config.yaml")
    
    args = parser.parse_args()
    
    if args.command == "init":
        from app.models.database import init_db
        logger.info("Inicializando banco de dados...")
        init_db()
        logger.info("Banco criado com sucesso! Configure o config.yaml e .env")
        return
    
    if args.command == "api":
        run_api(host=args.host, port=args.port)
    elif args.command == "scheduler":
        run_scheduler(config_path=args.config)
    elif args.command == "full":
        run_full(host=args.host, port=args.port, config_path=args.config)
    elif args.command == "cycle":
        run_single_cycle(config_path=args.config)


if __name__ == "__main__":
    main()
