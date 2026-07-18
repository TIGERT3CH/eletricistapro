# FB Lead Bot

Bot de scraping do Facebook para captura automatica de freelas e leads para negocios autonomos.

Totalmente customizavel via `config/config.yaml`, API REST e **Dashboard Web**.

## Funcionalidades

- **Scraping automatizado** - Navega em grupos e buscas do Facebook capturando posts relevantes
- **Scoring inteligente** - Cada lead recebe um score de 0-100 baseado em keywords, urgencia, contato direto
- **Nichos customizaveis** - Adicione/remova nichos, keywords e grupos via API ou YAML
- **Extracao de contato** - Detecta WhatsApp, email, telefone e Instagram nos posts
- **Anti-detecao** - Delays randomicos, session cookies, fingerprint masking
- **Exportacao** - CSV, JSON, Excel com formatacao por prioridade
- **API REST** - FastAPI com docs automaticas para integracao frontend
- **Scheduler** - Execucao agendada com horarios e dias configuraveis
- **Historico de contato** - Registre cada interacao com o lead

## Instalacao

### Opcao 1: Docker (Recomendado)

```bash
# 1. Copie e configure ambiente
cp .env.example .env
# Edite .env com suas credenciais do Facebook

# 2. Rode com Docker Compose
docker-compose up -d

# 3. Acesse o dashboard
open http://localhost:8000/dashboard
```

### Opcao 2: Local

```bash
# 1. Instale dependencias
pip install -r requirements.txt

# 2. Instale o Playwright (browser automation)
playwright install chromium

# 3. Copie e configure ambiente
cp .env.example .env
# Edite .env com suas credenciais do Facebook

# 4. Inicialize o banco
python run.py init
```

## Configuracao

Edite `config/config.yaml` para personalizar:

- **nichos** - Cada nicho tem keywords, grupos e filtros de valor
- **scraping** - Timeouts, delays, max posts, proxy, headless
- **lead** - Score minimo, palavras de alta/baixa prioridade, urgencia
- **notificacao** - Webhook (Discord/Slack), email
- **agendamento** - Intervalo, horarios, dias da semana

## Uso

```bash
# Iniciar apenas a API (porta 8000)
python run.py api

# Iniciar apenas o scheduler
python run.py scheduler

# Iniciar API + Scheduler
python run.py full

# Executar um ciclo unico de scraping
python run.py cycle

# Inicializar banco de dados
python run.py init

# Rodar demo com dados mock
python demo.py

# Rodar testes
python -m pytest tests/ -v
```

### Dashboard Web

Acesse `http://localhost:8000/dashboard` para visualizar:
- Estatisticas gerais (total, novos, fechados, score medio)
- Leads com filtros (status, nicho, prioridade, score)
- Nichos configurados e keywords
- Grupos monitorados
- Historico de sessoes de scraping
- Controle do scheduler (iniciar/parar)

## API Endpoints

| Metodo | Rota | Descricao |
|--------|------|-----------|
| GET | /api/leads | Lista leads com filtros |
| GET | /api/leads/{id} | Busca lead por ID |
| PATCH | /api/leads/{id} | Atualiza lead |
| POST | /api/leads/{id}/contato | Registra contato |
| GET | /api/leads/{id}/historico | Historico de contato |
| DELETE | /api/leads/{id} | Arquiva lead |
| GET | /api/stats | Estatisticas |
| GET | /api/nichos | Lista nichos |
| POST | /api/nichos | Adiciona nicho |
| PATCH | /api/nichos/{key}/keywords | Atualiza keywords |
| GET | /api/grupos | Lista grupos |
| POST | /api/grupos | Adiciona grupo |
| POST | /api/scraping/run | Dispara scraping manual |
| GET | /api/scraping/sessions | Sessoes de scraping |
| POST | /api/scheduler/start | Inicia scheduler |
| POST | /api/scheduler/stop | Para scheduler |
| GET | /api/scheduler/status | Status do scheduler |
| POST | /api/export | Exporta leads |
| GET | /api/config | Config atual |
| POST | /api/config/reload | Recarrega config |

Docs interativos: http://localhost:8000/docs

## Arquitetura

```
fbleadbot/
  app/
    main.py              # Entry point (CLI)
    api/routes.py         # FastAPI endpoints
    models/database.py    # SQLAlchemy ORM
    scrapers/facebook_scraper.py  # Playwright scraping engine
    services/lead_service.py     # Business logic + scoring
    exporters/lead_exporter.py   # CSV/JSON/XLSX export
    scheduler/scraping_scheduler.py  # APScheduler jobs
  config/config.yaml     # Configuracao customizavel
  data/                  # Banco SQLite + cookies
  logs/                  # Logs
  exports/               # Arquivos exportados
```

## Customizacao Rapida

Adicionar novo nicho via API:
```bash
curl -X POST http://localhost:8000/api/nichos \
  -H "Content-Type: application/json" \
  -d '{"key": "consultoria", "nome": "Consultoria", "keywords": ["procuro consultor", "mentoria negocio"], "grupos": ["Consultores Brasil"]}'
```

Atualizar keywords:
```bash
curl -X PATCH http://localhost:8000/api/nichos/design/keywords \
  -H "Content-Type: application/json" \
  -d '{"keywords": ["procuro designer", "freelancer design", "design UX"]}'
```

Exportar leads urgentes:
```bash
curl -X POST http://localhost:8000/api/export \
  -H "Content-Type: application/json" \
  -d '{"formato": "xlsx", "min_score": 60}'
```
