# EletricistaPro - Design Document

## Visão Geral

Plataforma SPA estática para aprendizado de eletricidade, desde instalações prediais até automação industrial com CLP/PLC. Arquitetura idêntica ao projeto `pythonista/` — HTML/CSS/JS puro, localStorage, sem backend.

## Nome

**EletricistaPro** — Aprenda Eletricidade do Zero à Automação

## Estrutura de Diretórios

```
eletricistapro/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── store.js
│   ├── gamification.js
│   ├── exercises.js
│   ├── simulator.js
│   ├── data/
│   │   └── lessons.js
│   └── ui/
│       ├── home.js
│       ├── lesson.js
│       ├── leaderboard.js
│       └── profile.js
```

## Módulos do Curso

### Módulo 1: Fundamentos da Eletricidade (icon: ⚡, cor: #FFD700)
- Aula 1: O que é Eletricidade
- Aula 2: Lei de Ohm
- Aula 3: Potência Elétrica
- Aula 4: Circuitos Série e Paralelo

### Módulo 2: Instalações Residenciais (icon: 🏠, cor: #6C5CE7)
- Aula 1: Norma NBR 5410
- Aula 2: Componentes de Proteção
- Aula 3: Quadro de Distribuição
- Aula 4: Dimensionamento de Condutores

### Módulo 3: Simbologia e Diagramas (icon: 📐, cor: #00B894)
- Aula 1: Símbolos Elétricos
- Aula 2: Diagrama Unifilar
- Aula 3: Diagrama Multifilar

### Módulo 4: Motores Elétricos (icon: 🔧, cor: #E17055)
- Aula 1: Motores Monofásicos
- Aula 2: Motores Trifásicos
- Aula 3: Partidas e Reversão

### Módulo 5: Comandos Elétricos (icon: 🎛️, cor: #0984E3)
- Aula 1: Botoeiras e Sinais
- Aula 2: Contatores e Relés
- Aula 3: Temporizadores
- Aula 4: Circuitos de Força e Comando

### Módulo 6: Automação com CLP (icon: 💻, cor: #A29BFE)
- Aula 1: O que é um CLP
- Aula 2: Linguagem Ladder
- Aula 3: Temporizadores e Contadores
- Aula 4: Projeto Prático

### Módulo 7: Instrumentação (icon: 📊, cor: #00CEC9)
- Aula 1: Sensores Industriais
- Aula 2: Medidas Elétricas
- Aula 3: Malha Aberta e Fechada

### Módulo 8: Segurança e Proteção (icon: 🛡️, cor: #636E72)
- Aula 1: NR-10
- Aula 2: Aterramento
- Aula 3: Proteção contra Descargas Atmosféricas

## Tipos de Exercícios

1. **multiple-choice** — Teoria, normas, componentes
2. **fill-blank** — Fórmulas (V=RI, P=VI), cálculos
3. **drag-drop** — Montar diagramas, ordem de componentes
4. **cálculo** — Dimensionar condutores, calcular cargas (validação numérica)
5. **simulador** — Circuito interativo SVG com fluxo de corrente

## Gamification

- XP: 10 base, +5 cálculo, +3 arrastar
- Sequência diária (streak)
- badges temáticos
- Ranking com bots
- 10 níveis: Novato → Técnico → Engenheiro → Mestre

## Fontes de Conteúdo

### Livros
- *Instalações Elétricas* — Hélio Creder (17ª ed.)
- *Controladores Lógicos Programáveis* — Claiton Moro Franchi
- *Automação Industrial - PLC* — Francesco Prudente

### YouTube
- Trick Drawing — Comandos elétricos
- Inetec — Lógica de Comandos
- Jadson Caetano — Automação CLP

## Funcionalidades

- Navbar com stats (streak, XP, moedas)
- Modal de boas-vindas
- Página inicial com progresso
- Visualizador de aula com teoria + exercícios
- Ranking
- Perfil com badges e progresso
- Toast notifications
- Responsivo (mobile-first)
