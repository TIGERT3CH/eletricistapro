"""
Motor de scraping do Facebook via Playwright.
Navega nos grupos, captura posts, extrai dados dos leads.
"""

from __future__ import annotations

import asyncio
import json
import random
import re
import functools
from datetime import datetime
from pathlib import Path
from typing import Optional

from loguru import logger
from playwright.async_api import async_playwright, Browser, Page, BrowserContext


def retry(max_retries: int = 3, delay: float = 2.0):
    """Decorator para retry com delay exponencial."""
    def decorator(func):
        @functools.wraps(func)
        async def wrapper(*args, **kwargs):
            last_exc = None
            for attempt in range(max_retries):
                try:
                    return await func(*args, **kwargs)
                except Exception as e:
                    last_exc = e
                    if attempt < max_retries - 1:
                        wait = delay * (2 ** attempt) + random.uniform(0, 1)
                        logger.warning(f"Tentativa {attempt+1}/{max_retries} falhou: {e}. Retry em {wait:.1f}s...")
                        await asyncio.sleep(wait)
            logger.error(f"Todas as {max_retries} tentativas falharam: {last_exc}")
            raise last_exc
        return wrapper
    return decorator

# --- Regexes pre-compilados (evita problemas de escape) ---
RE_WHATSAPP = [
    re.compile(r"(?:whatsapp|whats|zap|wpp)\s*[: ]?\s*(?:\+\d{1,3}\s?)?(\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4})", re.IGNORECASE),
    re.compile(r"(?:zap|whats|wpp)\s*(\d{10,15})", re.IGNORECASE),
    re.compile(r"(\+\d{1,3}\s?\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4})", re.IGNORECASE),
]
RE_EMAIL = re.compile(r"[\w.-]+@[\w.-]+\.\w+")
RE_TELEFONE = [
    re.compile(r"(?:telefone|tel|fone|celular|cel)\s*[:]?\s*(\(\d{2}\)\s?\d{4,5}[-\s]?\d{4}|\d{2}\s?\d{4,5}[-\s]?\d{4})", re.IGNORECASE),
    re.compile(r"(\(\d{2}\)\s?\d{4,5}[-\s]?\d{4})", re.IGNORECASE),
    re.compile(r"(\d{2}\s?\d{4,5}[-\s]?\d{4})", re.IGNORECASE),
]
RE_INSTAGRAM = re.compile(r"(?:instagram|insta|ig)\b\s*[:]?\s*@?([\w.]+)", re.IGNORECASE)
RE_IG_AT = re.compile(r"(?:^|\s)@([\w.]+)\b", re.IGNORECASE)
RE_SITE = re.compile(r"(?:site|website|portif[oó]lio)\s*[:]?\s*(https?://[\w.-]+(?:\.\w+)(?:/\S*)?)", re.IGNORECASE)
RE_VALOR = [
    re.compile(r"[Rr]\$\s*([\d.,]+)", re.IGNORECASE),
    re.compile(r"([\d.,]+)\s*reais", re.IGNORECASE),
    re.compile(r"(?:or[cç]amento|investimento|valor|pre[cç]o|pagar|pago)\s*(?:de|:)?\s*[Rr]?\$?\s*([\d.,]+)", re.IGNORECASE),
]


class FacebookScraper:
    """
    Scraper do Facebook usando Playwright.
    
    Fluxo:
    1. Login (ou restaurar sessao via cookies)
    2. Navegar nos grupos configurados
    3. Capturar posts que matcham keywords
    4. Extrair dados do autor e contato
    5. Salvar cookies para proxima sessao
    """

    def __init__(self, config: dict):
        self.config = config
        self.scraping_config = config.get("scraping", {})
        self.lead_config = config.get("lead", {})
        self.nichos = config.get("nichos", {})
        
        self.browser: Optional[Browser] = None
        self.context: Optional[BrowserContext] = None
        self.page: Optional[Page] = None
        self._running = False

    async def start(self):
        """Inicia o browser e contexto."""
        logger.info("Iniciando browser...")
        pw = await async_playwright().start()
        
        launch_args = [
            "--disable-blink-features=AutomationControlled",
            "--no-sandbox",
            "--disable-dev-shm-usage",
        ]
        
        proxy = self.scraping_config.get("proxy")
        proxy_config = {"server": proxy} if proxy else None
        
        self.browser = await pw.chromium.launch(
            headless=self.scraping_config.get("headless", False),
            args=launch_args,
            proxy=proxy_config,
        )
        
        self.context = await self.browser.new_context(
            viewport={"width": 1366, "height": 768},
            user_agent=self.scraping_config.get(
                "user_agent",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            ),
            locale="pt-BR",
        )
        
        # Anti-detecao: injeta script para esconder webdriver
        await self.context.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', {get: () => undefined});
            window.chrome = {runtime: {}};
            Object.defineProperty(navigator, 'plugins', {get: () => [1, 2, 3]});
            Object.defineProperty(navigator, 'languages', {get: () => ['pt-BR', 'pt', 'en']});
        """)
        
        # Tenta restaurar cookies
        cookie_file = Path(self.scraping_config.get("cookie_file", "data/cookies.json"))
        if cookie_file.exists():
            logger.info(f"Restaurando sessao via cookies: {cookie_file}")
            try:
                cookies = json.loads(cookie_file.read_text(encoding="utf-8"))
                await self.context.add_cookies(cookies)
            except Exception as e:
                logger.warning(f"Falha ao restaurar cookies: {e}")
        
        self.page = await self.context.new_page()
        self._running = True
        logger.info("Browser iniciado com sucesso")

    async def stop(self):
        """Salva cookies e encerra o browser."""
        logger.info("Encerrando browser...")
        try:
            if self.context:
                cookies = await self.context.cookies()
                cookie_file = Path(self.scraping_config.get("cookie_file", "data/cookies.json"))
                cookie_file.parent.mkdir(parents=True, exist_ok=True)
                cookie_file.write_text(json.dumps(cookies, indent=2), encoding="utf-8")
                logger.info(f"Cookies salvos em {cookie_file}")
        except Exception as e:
            logger.error(f"Erro ao salvar cookies: {e}")
        
        try:
            if self.browser:
                await self.browser.close()
        except Exception as e:
            logger.error(f"Erro ao fechar browser: {e}")
        
        self._running = False
        logger.info("Browser encerrado")

    @retry(max_retries=2, delay=3.0)
    async def login(self, email: str, password: str):
        """
        Realiza login no Facebook.
        Se ja estiver logado (via cookies), pula esta etapa.
        """
        logger.info("Verificando login no Facebook...")
        await self.page.goto("https://www.facebook.com/", wait_until="networkidle")
        await self._random_delay(2, 4)
        
        # Verifica se ja esta logado
        if await self._is_logged_in():
            logger.info("Ja logado via cookies!")
            return True
        
        if not email or not password:
            logger.error("Credenciais do Facebook nao configuradas (FB_EMAIL/FB_PASSWORD)")
            return False
        
        logger.info("Realizando login...")
        try:
            # Aceita cookies se aparecer dialog
            await self._try_accept_cookies()
            
            # Preenche email
            email_input = self.page.locator('input[id="email"]')
            await email_input.fill(email)
            await self._random_delay(1, 2)
            
            # Preenche senha
            pass_input = self.page.locator('input[id="pass"]')
            await pass_input.fill(password)
            await self._random_delay(1, 2)
            
            # Clica em login
            login_btn = self.page.locator('button[name="login"]')
            await login_btn.click()
            await self.page.wait_for_load_state("networkidle")
            await self._random_delay(3, 5)
            
            # Verifica se login teve sucesso
            if await self._is_logged_in():
                logger.info("Login realizado com sucesso!")
                return True
            else:
                # Verifica se ha captcha ou checkpoint
                page_text = await self.page.inner_text("body")
                if "captcha" in page_text.lower() or "verificacao" in page_text.lower():
                    logger.error("Facebook pediu verificacao/captcha. Faca login manualmente primeiro.")
                elif "conta" in page_text.lower() and "desativada" in page_text.lower():
                    logger.error("Conta do Facebook desativada.")
                else:
                    logger.error("Falha no login - verifique credenciais")
                return False
                
        except Exception as e:
            logger.error(f"Erro durante login: {e}")
            return False

    @retry(max_retries=2, delay=3.0)
    async def scrape_grupo(self, grupo_url: str, keywords: list, nicho: str) -> list[dict]:
        """
        Faz scraping de um grupo especifico.
        
        Retorna lista de leads raw encontrados.
        """
        logger.info(f"Scraping grupo: {grupo_url}")
        raw_leads = []
        
        try:
            await self.page.goto(grupo_url, wait_until="networkidle", timeout=30000)
            await self._random_delay(2, 4)
            
            # Verifica se foi redirecionado para login
            if "login" in self.page.url:
                logger.warning(f"Redirecionado para login ao acessar {grupo_url}. Pulando grupo.")
                return []
            
            # Scroll para carregar mais posts
            scroll_paginas = self.scraping_config.get("scroll_paginas", 5)
            for i in range(scroll_paginas):
                logger.debug(f"Scroll pagina {i+1}/{scroll_paginas}")
                await self.page.evaluate("window.scrollBy(0, 800)")
                await self._random_delay(1, 3)
            
            # Captura todos os posts
            posts = await self._extract_posts()
            logger.info(f"Encontrados {len(posts)} posts no grupo")
            
            # Filtra posts por keywords
            for post in posts:
                texto = (post.get("post_texto") or "").lower()
                
                # Verifica match de keywords
                keywords_match = []
                for kw in keywords:
                    if kw.lower() in texto:
                        keywords_match.append(kw)
                
                if not keywords_match:
                    continue
                
                # Verifica palavras de urgencia
                urgencia_encontradas = []
                for pw in self.lead_config.get("palavras_urgencia", []):
                    if pw.lower() in texto:
                        urgencia_encontradas.append(pw)
                
                # Extrai contato do texto
                contato = self._extract_contacts(texto)
                
                # Extrai valor mencionado
                valor = self._extract_valor(texto)
                
                lead_data = {
                    **post,
                    "grupo_url": grupo_url,
                    "nicho": nicho,
                    "keywords_encontradas": keywords_match,
                    "palavras_urgencia": urgencia_encontradas,
                    "contato_info": contato,
                    "valor_mencionado": valor,
                }
                raw_leads.append(lead_data)
            
            logger.info(f"Leads filtrados no grupo: {len(raw_leads)}")
            
        except Exception as e:
            logger.error(f"Erro ao fazer scrape do grupo {grupo_url}: {e}")
        
        return raw_leads

    @retry(max_retries=2, delay=3.0)
    async def scrape_search(self, keyword: str, nicho: str) -> list[dict]:
        """
        Faz scraping via busca do Facebook (search).
        Busca publicamente por posts com a keyword.
        """
        logger.info(f"Busca por keyword: {keyword}")
        raw_leads = []
        
        try:
            search_url = f"https://www.facebook.com/search/posts?q={keyword}"
            await self.page.goto(search_url, wait_until="networkidle", timeout=30000)
            await self._random_delay(2, 4)
            
            # Verifica se foi redirecionado para login
            if "login" in self.page.url:
                logger.warning("Redirecionado para login na busca. Pulando.")
                return []
            
            # Scroll para carregar resultados
            scroll_paginas = self.scraping_config.get("scroll_paginas", 5)
            for i in range(scroll_paginas):
                await self.page.evaluate("window.scrollBy(0, 800)")
                await self._random_delay(1, 3)
            
            posts = await self._extract_posts()
            logger.info(f"Encontrados {len(posts)} posts na busca por '{keyword}'")
            
            for post in posts:
                texto = (post.get("post_texto") or "").lower()
                urgencia_encontradas = []
                for pw in self.lead_config.get("palavras_urgencia", []):
                    if pw.lower() in texto:
                        urgencia_encontradas.append(pw)
                
                contato = self._extract_contacts(texto)
                valor = self._extract_valor(texto)
                
                lead_data = {
                    **post,
                    "nicho": nicho,
                    "keywords_encontradas": [keyword],
                    "palavras_urgencia": urgencia_encontradas,
                    "contato_info": contato,
                    "valor_mencionado": valor,
                }
                raw_leads.append(lead_data)
            
        except Exception as e:
            logger.error(f"Erro na busca por '{keyword}': {e}")
        
        return raw_leads

    async def run_full_cycle(self, email: str = None, password: str = None) -> list[dict]:
        """
        Executa um ciclo completo de scraping:
        1. Login
        2. Para cada nicho, scrape grupos + busca
        3. Retorna todos os leads encontrados
        """
        await self.start()
        stats = {"grupos": 0, "buscas": 0, "leads": 0, "erros": 0}
        
        try:
            # Login
            if email and password:
                logged_in = await self.login(email, password)
                if not logged_in:
                    logger.error("Abortando - login falhou")
                    return []
            else:
                logger.warning("Sem credenciais FB. Modo somente leitura (grupos publicos).")
            
            all_leads = []
            
            for nicho_key, nicho_data in self.nichos.items():
                logger.info(f"=== Processando nicho: {nicho_data.get('nome', nicho_key)} ===")
                
                keywords = nicho_data.get("keywords", [])
                grupos = nicho_data.get("grupos", [])
                max_grupos = self.scraping_config.get("max_grupos_por_ciclo", 20)
                
                # Scrape por grupos
                for i, grupo_nome in enumerate(grupos[:max_grupos]):
                    try:
                        if grupo_nome.startswith("http"):
                            grupo_url = grupo_nome
                        else:
                            grupo_url = f"https://www.facebook.com/groups/search/?q={grupo_nome}"
                        leads = await self.scrape_grupo(grupo_url, keywords, nicho_key)
                        all_leads.extend(leads)
                        stats["grupos"] += 1
                        stats["leads"] += len(leads)
                    except Exception as e:
                        stats["erros"] += 1
                        logger.error(f"Erro no grupo '{grupo_nome}': {e}")
                    
                    await self._random_delay(
                        self.scraping_config.get("delay_min", 2),
                        self.scraping_config.get("delay_max", 6),
                    )
                
                # Scrape por busca (keywords diretas) - limita a 3 keywords por nicho
                for keyword in keywords[:3]:
                    try:
                        leads = await self.scrape_search(keyword, nicho_key)
                        all_leads.extend(leads)
                        stats["buscas"] += 1
                        stats["leads"] += len(leads)
                    except Exception as e:
                        stats["erros"] += 1
                        logger.error(f"Erro na busca '{keyword}': {e}")
                    
                    await self._random_delay(
                        self.scraping_config.get("delay_min", 2),
                        self.scraping_config.get("delay_max", 6),
                    )
            
            logger.info(f"Ciclo completo! Stats: {stats}")
            return all_leads
            
        finally:
            await self.stop()

    # --- METODOS INTERNOS ---

    async def _is_logged_in(self) -> bool:
        """Verifica se o usuario esta logado no Facebook."""
        try:
            page_source = await self.page.content()
            return '"userID"' in page_source or '/me/' in page_source or 'aria-label="Menu"' in page_source
        except:
            return False

    async def _try_accept_cookies(self):
        """Tenta aceitar o dialog de cookies do Facebook."""
        try:
            accept_btn = self.page.locator('button[data-cookiebanner="accept_button"]')
            if await accept_btn.count() > 0:
                await accept_btn.first.click()
                await self._random_delay(1, 2)
        except:
            pass

    async def _extract_posts(self) -> list[dict]:
        """
        Extrai posts da pagina atual.
        Usa seletores do DOM do Facebook para capturar texto, autor, data, etc.
        """
        posts = []
        
        try:
            post_elements = self.page.locator(
                '[role="feed"] [role="article"], '
                '[data-pagelet^="FeedUnit"], '
                'div[data-testid="post_message"]'
            )
            
            count = await post_elements.count()
            logger.debug(f"Encontrados {count} elementos de post")
            
            for i in range(min(count, self.scraping_config.get("max_posts_por_grupo", 50))):
                try:
                    el = post_elements.nth(i)
                    
                    # Post ID
                    post_id = await el.get_attribute("data-ft") or ""
                    post_id_match = re.search(r'"top_level_post_id":"(\d+)"', post_id)
                    post_id = post_id_match.group(1) if post_id_match else f"post_{i}_{int(datetime.now().timestamp())}"
                    
                    # Texto do post
                    post_texto = ""
                    try:
                        content_el = el.locator('[data-testid="post_message"], [dir="auto"]')
                        if await content_el.count() > 0:
                            post_texto = await content_el.first.inner_text()
                    except:
                        pass
                    
                    if not post_texto:
                        post_texto = await el.inner_text()
                    
                    # Autor
                    autor_nome = ""
                    autor_url = ""
                    try:
                        author_el = el.locator('a[role="link"] span, a[href*="/me/"] span')
                        if await author_el.count() > 0:
                            autor_nome = await author_el.first.inner_text()
                        author_link = el.locator('a[href*="facebook.com"]')
                        if await author_link.count() > 0:
                            autor_url = await author_link.first.get_attribute("href") or ""
                    except:
                        pass
                    
                    # Autor ID
                    autor_id = ""
                    if autor_url:
                        id_match = re.search(r"facebook\.com/(\d+|[a-zA-Z0-9.]+)", autor_url)
                        if id_match:
                            autor_id = id_match.group(1)
                    
                    # Data do post
                    post_data = None
                    try:
                        time_el = el.locator('a[role="link"] abbr, span[id*="timestamp"]')
                        if await time_el.count() > 0:
                            data_unix = await time_el.first.get_attribute("data-utime")
                            if data_unix:
                                post_data = datetime.fromtimestamp(int(data_unix))
                    except:
                        pass
                    
                    # Post URL
                    post_url = ""
                    try:
                        permalink = el.locator('a[href*="/posts/"], a[href*="/permalink/"], a[href*="story_fbid="]')
                        if await permalink.count() > 0:
                            post_url = await permalink.first.get_attribute("href") or ""
                            # Garante que a URL é absoluta
                            if post_url and not post_url.startswith("http"):
                                post_url = f"https://www.facebook.com{post_url}"
                    except:
                        pass
                    
                    posts.append({
                        "post_id": str(post_id),
                        "post_url": post_url,
                        "post_texto": post_texto[:5000],
                        "post_data": post_data.isoformat() if post_data else None,
                        "autor_nome": autor_nome,
                        "autor_id": autor_id,
                        "autor_url": autor_url,
                    })
                    
                except Exception as e:
                    logger.debug(f"Erro ao extrair post #{i}: {e}")
                    continue
                    
        except Exception as e:
            logger.error(f"Erro ao extrair posts: {e}")
        
        return posts

    @staticmethod
    def _extract_contacts(text: str) -> dict:
        """Extrai informacoes de contato do texto do post."""
        contatos = {}
        
        # WhatsApp
        for pat in RE_WHATSAPP:
            match = pat.search(text)
            if match:
                contatos["whatsapp"] = match.group(1).strip()
                break
        
        # Email
        email_match = RE_EMAIL.search(text)
        if email_match:
            contatos["email"] = email_match.group(0)
        
        # Telefone (extrai apenas do texto do post, ignora se ja tem whatsapp)
        if "whatsapp" not in contatos:
            for pat in RE_TELEFONE:
                tel_match = pat.search(text)
                if tel_match:
                    contatos["telefone"] = tel_match.group(1).strip()
                    break
        
        # Instagram
        ig_match = RE_INSTAGRAM.search(text)
        if ig_match:
            contatos["instagram"] = f"@{ig_match.group(1)}"
        else:
            # Fallback: @handle solto (nao parte de email)
            at_match = RE_IG_AT.search(text)
            if at_match and not RE_EMAIL.search(text):
                contatos["instagram"] = f"@{at_match.group(1)}"

        # Site/URL
        url_match = RE_SITE.search(text)
        if url_match:
            contatos["site"] = url_match.group(1).strip()
        
        return contatos

    @staticmethod
    def _extract_valor(text: str) -> float | None:
        """Extrai valor monetario mencionado no texto."""
        for pat in RE_VALOR:
            match = pat.search(text)
            if match:
                raw = match.group(1)
                try:
                    raw = raw.replace(".", "").replace(",", ".")
                    if raw.count(".") > 1:
                        parts = raw.split(".")
                        raw = "".join(parts[:-1]) + "." + parts[-1]
                    return float(raw)
                except ValueError:
                    continue
        return None

    async def _random_delay(self, min_s: float, max_s: float):
        """Delay aleatorio para simular comportamento humano."""
        delay = random.uniform(min_s, max_s)
        await asyncio.sleep(delay)

    @property
    def is_running(self) -> bool:
        return self._running
