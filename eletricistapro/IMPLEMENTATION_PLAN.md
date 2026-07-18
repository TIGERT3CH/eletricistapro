# EletricistaPro Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build a complete SPA for learning electrical engineering, from residential installations to PLC automation, with gamification and interactive exercises.

**Architecture:** Static SPA mirroring the `pythonista/` project structure. HTML/CSS/JS puro, localStorage for state, no backend. Content defined in a single `lessons.js` data file. Each exercise type has a dedicated renderer.

**Tech Stack:** Vanilla HTML5, CSS3 (CSS variables, animations), ES6+ JavaScript. No build tools, no frameworks.

---

## Phase 1: Project Scaffolding

### Task 1: Create index.html with navigation and page structure

**Objective:** Establish the HTML shell with navbar, main content areas, and script/style imports.

**Files:**
- Create: `eletricistapro/index.html`

**Step 1: Write index.html**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EletricistaPro - Aprenda Eletricidade do Zero à Automação</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app">
    <nav id="navbar">
      <div class="nav-brand" onclick="navigateTo('home')">
        <span class="logo">⚡</span>
        <span class="brand-text">EletricistaPro</span>
      </div>
      <div class="nav-links">
        <button class="nav-btn active" data-page="home" onclick="navigateTo('home')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Início
        </button>
        <button class="nav-btn" data-page="leaderboard" onclick="navigateTo('leaderboard')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Ranking
        </button>
        <button class="nav-btn" data-page="profile" onclick="navigateTo('profile')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Perfil
        </button>
      </div>
      <div class="nav-stats">
        <div class="stat-badge streak" title="Sequência diária">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          <span id="nav-streak">0</span>
        </div>
        <div class="stat-badge xp" title="Pontos de experiência">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span id="nav-xp">0</span>
        </div>
        <div class="stat-badge coins" title="Moedas">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10h8M8 14h8"/></svg>
          <span id="nav-coins">0</span>
        </div>
      </div>
    </nav>

    <main id="main-content">
      <div id="page-home" class="page active"></div>
      <div id="page-lesson" class="page"></div>
      <div id="page-leaderboard" class="page"></div>
      <div id="page-profile" class="page"></div>
    </main>

    <div id="toast-container"></div>
  </div>

  <script src="js/data/lessons.js"></script>
  <script src="js/store.js"></script>
  <script src="js/gamification.js"></script>
  <script src="js/exercises.js"></script>
  <script src="js/ui/home.js"></script>
  <script src="js/ui/lesson.js"></script>
  <script src="js/ui/leaderboard.js"></script>
  <script src="js/ui/profile.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

**Step 2: Verify**

Open `index.html` in browser. Should show navbar with brand, links, and stat badges. No JS errors in console.

**Step 3: Commit**

```bash
git add eletricistapro/index.html
git commit -m "feat: create index.html with navigation structure"
```

---

### Task 2: Create CSS styles (base theme)

**Objective:** Complete CSS with variables, responsive layout, navbar, cards, modals, toasts, and exercise components.

**Files:**
- Create: `eletricistapro/css/styles.css`

**Step 1: Write styles.css**

Copy the entire `pythonista/css/styles.css` and modify:
- Change primary color from `#6C5CE7` to `#FFD700` (gold/electric theme)
- Change secondary colors to electrical theme (blue #0984E3, green #00B894)
- Add `.simulator-container` class for circuit simulator
- Add `.formula-box` class for interactive formulas
- Keep all existing classes (navbar, cards, exercises, modals, toasts)

**Step 2: Verify**

Open `index.html`. Should see styled navbar with gold theme, proper fonts, responsive layout.

**Step 3: Commit**

```bash
git add eletricistapro/css/styles.css
git commit -m "feat: add CSS styles with electrical theme"
```

---

### Task 3: Create store.js (localStorage state management)

**Objective:** State management for user data, progress, badges, settings.

**Files:**
- Create: `eletricistapro/js/store.js`

**Step 1: Write store.js**

Copy `pythonista/js/store.js` entirely. Only change:
- `KEY: 'eletricistapro_data'` (line 2)
- Default avatar from `'🐍'` to `'⚡'`
- `dailyGoal: 50` stays the same

**Step 2: Verify**

In browser console: `Store.getState()` returns default state with empty user, empty progress, empty badges.

**Step 3: Commit**

```bash
git add eletricistapro/js/store.js
git commit -m "feat: add localStorage state management"
```

---

### Task 4: Create gamification.js

**Objective:** XP calculation, streak management, badge system, leaderboard, level progression.

**Files:**
- Create: `eletricistapro/js/gamification.js`

**Step 1: Write gamification.js**

Copy `pythonista/js/gamification.js` and modify:

```javascript
const Gamification = {
  XP_PER_EXERCISE: 10,
  XP_STREAK_BONUS: 5,
  XP_PERFECT_BONUS: 20,

  BADGES: [
    { id: 'first_lesson', name: 'Primeiros Passos', icon: '🎓', description: 'Complete sua primeira aula' },
    { id: 'streak_3', name: 'Foguete', icon: '🚀', description: 'Sequência de 3 dias' },
    { id: 'streak_7', name: 'Em Chamas', icon: '🔥', description: 'Sequência de 7 dias' },
    { id: 'streak_30', name: 'Lenda', icon: '👑', description: 'Sequência de 30 dias' },
    { id: 'xp_100', name: 'Centenário', icon: '💯', description: 'Ganhe 100 XP' },
    { id: 'xp_500', name: 'Guerreiro', icon: '⚔️', description: 'Ganhe 500 XP' },
    { id: 'xp_1000', name: 'Mestre', icon: '🏆', description: 'Ganhe 1000 XP' },
    { id: 'xp_5000', name: 'Lenda Suprema', icon: '🌟', description: 'Ganhe 5000 XP' },
    { id: 'module_1', name: 'Iniciante', icon: '🌱', description: 'Complete o Módulo 1' },
    { id: 'module_3', name: 'Técnico', icon: '🔧', description: 'Complete 3 módulos' },
    { id: 'module_5', name: 'Engenheiro', icon: '📐', description: 'Complete 5 módulos' },
    { id: 'module_all', name: 'Mestre da Automação', icon: '🤖', description: 'Complete todos os módulos' },
    { id: 'perfect_10', name: 'Perfeccionista', icon: '✨', description: 'Acerte 10 exercícios seguidos' },
    { id: 'first_circuit', name: 'Circuit Builder', icon: '🔌', description: 'Monte seu primeiro circuito' },
    { id: 'daily_goal', name: 'Focado', icon: '🎯', description: 'Atinja a meta diária de XP' },
    { id: 'ohm_master', name: 'Mestre de Ohm', icon: '⚡', description: 'Acerte 5 fórmulas seguidas' },
  ],

  // ... same methods as pythonista but with electrical-themed level names
  getLevel(xp) {
    if (xp >= 5000) return { level: 10, name: 'Mestre da Automação', color: '#FFD700' };
    if (xp >= 3000) return { level: 9, name: 'Engenheiro Chefe', color: '#FF6B6B' };
    if (xp >= 2000) return { level: 8, name: 'Engenheiro', color: '#E17055' };
    if (xp >= 1500) return { level: 7, name: 'Técnico Superior', color: '#00B894' };
    if (xp >= 1000) return { level: 6, name: 'Técnico', color: '#0984E3' };
    if (xp >= 700) return { level: 5, name: 'Eletricista', color: '#6C5CE7' };
    if (xp >= 400) return { level: 4, name: 'Aprendiz', color: '#00CEC9' };
    if (xp >= 200) return { level: 3, name: 'Estudante', color: '#FDCB6E' };
    if (xp >= 50) return { level: 2, name: 'Iniciante', color: '#A29BFE' };
    return { level: 1, name: 'Novato', color: '#636E72' };
  },

  // ... keep all other methods identical
};
```

**Step 2: Verify**

In console: `Gamification.getLevel(0)` returns `{level: 1, name: 'Novato'}`. `Gamification.BADGES` has 16 badges.

**Step 3: Commit**

```bash
git add eletricistapro/js/gamification.js
git commit -m "feat: add gamification with electrical-themed badges and levels"
```

---

### Task 5: Create lessons.js (course content)

**Objective:** Complete course data with 8 modules, ~30 lessons, theory HTML, and exercises for each.

**Files:**
- Create: `eletricistapro/js/data/lessons.js`

**Step 1: Write lessons.js structure**

```javascript
const COURSE_DATA = {
  title: "EletricistaPro",
  description: "Aprenda Eletricidade do Zero à Automação",
  modules: [
    // Module 1: Fundamentos da Eletricidade
    {
      id: "m1",
      title: "Fundamentos da Eletricidade",
      description: "Conceitos básicos, Lei de Ohm, potência e circuitos",
      icon: "⚡",
      color: "#FFD700",
      lessons: [
        {
          id: "m1-l1",
          title: "O que é Eletricidade",
          theory: `<h2>Eletricidade: A Força que Move o Mundo</h2>
<p>Eletricidade é o fluxo de <strong>elétrons</strong> através de um condutor. Três grandezas fundamentais regem todo comportamento elétrico:</p>
<ul>
<li><strong>Tensão (V)</strong> — "Empurra" os elétrons. Medida em Volts.</li>
<li><strong>Corrente (I)</strong> — Quantidade de elétrons fluindo. Medida em Amperes.</li>
<li><strong>Resistência (R)</strong> — Oposto ao fluxo. Medida em Ohms.</li>
</ul>
<p>Imagine um cano com água: Tensão é a pressão, Corrente é a vazão, Resistência é o diâmetro do cano.</p>`,
          exercises: [
            {
              type: "multiple-choice",
              question: "Qual grandeza elétrica 'empurra' os elétrons?",
              choices: ["Corrente", "Resistência", "Tensão", "Potência"],
              correct: 2,
              explanation: "Tensão (Volts) é a força eletromotriz que faz os elétrons se movimentarem."
            },
            // ... more exercises
          ]
        },
        // ... more lessons
      ]
    },
    // ... more modules
  ]
};
```

**Step 2: Write all 8 modules with content**

This is the largest task. Each module needs:
- 3-5 lessons
- Each lesson: theory (HTML string), 4-5 exercises
- Exercises use types: multiple-choice, fill-blank, drag-drop, calculation

**Module content sources:**
- M1: Lei de Ohm, Potência, Circuitos série/paralelo (Física básica)
- M2: NBR 5410, Disjuntores, DR, DPS, Quadro, Condutores (Creder)
- M3: Símbolos NBR 5444, Diagramas (Creder cap. 3)
- M4: Motores monofásicos/trifásicos, Partidas (SENAI apostila)
- M5: Botoeiras, Contatores, Relés, Temporizadores (Trick Drawing, Inetec)
- M6: CLP, Ladder, Temporizadores, Contadores (Franchi, Prudente)
- M7: Sensores, Medidas, Malha (Jadson Caetano)
- M8: NR-10, Aterramento, PDA (normas)

**Step 3: Verify**

In console: `COURSE_DATA.modules.length === 8`. Each module has `lessons` array with 3-5 items. Each lesson has `theory` and `exercises`.

**Step 4: Commit**

```bash
git add eletricistapro/js/data/lessons.js
git commit -m "feat: add complete course content with 8 modules and exercises"
```

---

### Task 6: Create exercises.js (exercise renderer)

**Objective:** Render different exercise types (multiple-choice, fill-blank, drag-drop, calculation).

**Files:**
- Create: `eletricistapro/js/exercises.js`

**Step 1: Write exercises.js**

```javascript
const Exercises = {
  render(exercise, index, onAnswer) {
    const container = document.createElement('div');
    container.className = 'exercise';
    container.innerHTML = `<div class="exercise-number">Exercício ${index + 1}</div>`;

    switch (exercise.type) {
      case 'multiple-choice':
        this.renderMultipleChoice(container, exercise, onAnswer);
        break;
      case 'fill-blank':
        this.renderFillBlank(container, exercise, onAnswer);
        break;
      case 'drag-drop':
        this.renderDragDrop(container, exercise, onAnswer);
        break;
      case 'calculation':
        this.renderCalculation(container, exercise, onAnswer);
        break;
    }

    return container;
  },

  renderMultipleChoice(container, exercise, onAnswer) {
    // ... render MCQ with buttons, handle click, show explanation
  },

  renderFillBlank(container, exercise, onAnswer) {
    // ... render input fields, validate answers
  },

  renderDragDrop(container, exercise, onAnswer) {
    // ... render draggable items, validate order
  },

  renderCalculation(container, exercise, onAnswer) {
    // ... render formula input, validate numerical answer
  }
};
```

**Step 2: Verify**

Create a test exercise in console and render it. Verify each type renders correctly.

**Step 3: Commit**

```bash
git add eletricistapro/js/exercises.js
git commit -m "feat: add exercise renderer for MCQ, fill-blank, drag-drop, calculation"
```

---

### Task 7: Create home.js (home page)

**Objective:** Render module cards with progress, next lesson CTA, daily goal progress.

**Files:**
- Create: `eletricistapro/js/ui/home.js`

**Step 1: Write home.js**

```javascript
const HomePage = {
  render() {
    const container = document.getElementById('page-home');
    const state = Store.getState();
    const nextLesson = Store.getNextLesson();

    let html = `
      <div class="home-header">
        <h1>⚡ EletricistaPro</h1>
        <p>Aprenda Eletricidade do Zero à Automação</p>
        ${this.renderDailyGoal(state)}
      </div>
      <div class="modules-grid">
    `;

    COURSE_DATA.modules.forEach((module, index) => {
      const progress = Store.getModuleProgress(module.id);
      const unlocked = Store.isModuleUnlocked(index);
      html += this.renderModuleCard(module, progress, unlocked, index);
    });

    html += '</div>';

    if (nextLesson) {
      html += this.renderNextLessonCTA(nextLesson);
    }

    container.innerHTML = html;
  },

  renderModuleCard(module, progress, unlocked, index) {
    const percent = progress.percent;
    return `
      <div class="module-card ${unlocked ? '' : 'locked'}" 
           ${unlocked ? `onclick="navigateTo('lesson', '${module.id}', 0)"` : ''}>
        <div class="module-icon" style="background:${module.color}">${module.icon}</div>
        <div class="module-info">
          <h3>${module.title}</h3>
          <p>${module.description}</p>
          <div class="module-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width:${percent}%;background:${module.color}"></div>
            </div>
            <span>${progress.completed}/${progress.total}</span>
          </div>
        </div>
        ${!unlocked ? '<div class="lock-icon">🔒</div>' : ''}
      </div>
    `;
  },

  renderDailyGoal(state) {
    const daily = Gamification.getDailyProgress();
    return `
      <div class="daily-goal">
        <div class="daily-goal-text">Meta diária: ${daily.current}/${daily.goal} XP</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${daily.percent}%"></div>
        </div>
      </div>
    `;
  },

  renderNextLessonCTA(next) {
    return `
      <div class="next-lesson-cta" onclick="navigateTo('lesson', '${next.module.id}', ${next.module.lessons.indexOf(next.lesson)})">
        <span>▶ Continuar:</span> ${next.lesson.title}
      </div>
    `;
  }
};
```

**Step 2: Verify**

Home page shows module cards with icons, progress bars, and lock states.

**Step 3: Commit**

```bash
git add eletricistapro/js/ui/home.js
git commit -m "feat: add home page with module cards and progress"
```

---

### Task 8: Create lesson.js (lesson viewer)

**Objective:** Render theory content, exercises, score tracking, completion flow.

**Files:**
- Create: `eletricistapro/js/ui/lesson.js`

**Step 1: Write lesson.js**

```javascript
const LessonPage = {
  currentModule: null,
  currentLesson: null,
  currentIndex: 0,
  correctCount: 0,
  totalExercises: 0,

  render(moduleId, lessonIndex) {
    const module = COURSE_DATA.modules.find(m => m.id === moduleId);
    if (!module) return;
    const lesson = module.lessons[lessonIndex];
    if (!lesson) return;

    this.currentModule = module;
    this.currentLesson = lesson;
    this.currentIndex = lessonIndex;
    this.correctCount = 0;
    this.totalExercises = lesson.exercises.length;

    const container = document.getElementById('page-lesson');
    const score = Store.getLessonScore(lesson.id);
    const completed = Store.isLessonCompleted(lesson.id);

    let html = `
      <div class="lesson-header">
        <button class="back-btn" onclick="navigateTo('home')">← Voltar</button>
        <div class="lesson-breadcrumb">${module.title} → ${lesson.title}</div>
      </div>
      <div class="lesson-content">
        <div class="theory-section">${lesson.theory}</div>
        <div class="exercises-section">
          <h3>📝 Exercícios</h3>
          <div id="exercises-container"></div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Render exercises
    const exercisesContainer = document.getElementById('exercises-container');
    lesson.exercises.forEach((ex, i) => {
      const el = Exercises.render(ex, i, (correct) => {
        if (correct) this.correctCount++;
        this.checkCompletion();
      });
      exercisesContainer.appendChild(el);
    });
  },

  checkCompletion() {
    if (this.correctCount >= this.totalExercises) {
      const xp = Gamification.calculateLessonXp(
        this.currentLesson.exercises,
        this.correctCount
      );
      Store.completeLesson(this.currentLesson.id, this.correctCount, xp);

      // Check if module is complete
      const moduleProgress = Store.getModuleProgress(this.currentModule.id);
      if (moduleProgress.completed === moduleProgress.total) {
        Store.completeModule(this.currentModule.id);
      }

      showToast(`Aula completa! +${xp} XP`, 'success');
      App.updateNavStats();

      // Check badges
      const newBadges = Gamification.checkBadges();
      newBadges.forEach(badge => {
        setTimeout(() => showToast(`${badge.icon} Nova badge: ${badge.name}!`, 'xp'), 1000);
      });
    }
  }
};
```

**Step 2: Verify**

Click a lesson → theory renders, exercises render, answering all correctly shows completion toast.

**Step 3: Commit**

```bash
git add eletricistapro/js/ui/lesson.js
git commit -m "feat: add lesson page with theory and exercise rendering"
```

---

### Task 9: Create leaderboard.js and profile.js

**Objective:** Render rankings and user profile with badges/progress.

**Files:**
- Create: `eletricistapro/js/ui/leaderboard.js`
- Create: `eletricistapro/js/ui/profile.js`

**Step 1: Write leaderboard.js**

Copy from `pythonista/js/ui/leaderboard.js` — no changes needed. The bot users and ranking logic work identically.

**Step 2: Write profile.js**

Copy from `pythonista/js/ui/profile.js` and modify:
- Change `PYTHONISTA` references to `ELETRICISTAPRO`
- Update badge icons display
- Keep XP, streak, level display

**Step 3: Verify**

Navigate to Ranking page — shows user + bot users sorted by XP.
Navigate to Profile page — shows user stats, badges, level.

**Step 4: Commit**

```bash
git add eletricistapro/js/ui/leaderboard.js eletricistapro/js/ui/profile.js
git commit -m "feat: add leaderboard and profile pages"
```

---

### Task 10: Create app.js (main controller)

**Objective:** Initialize app, handle routing, modals, toasts, nav stats.

**Files:**
- Create: `eletricistapro/js/app.js`

**Step 1: Write app.js**

Copy from `pythonista/js/app.js` and modify:

```javascript
const App = {
  currentPage: 'home',

  init() {
    Store.resetDailyXp();
    Store.updateStreak();

    const state = Store.getState();
    if (!state.user.name) {
      this.showNameModal();
    } else {
      this.renderPage('home');
    }
    this.updateNavStats();
  },

  showNameModal() {
    // Same as pythonista but change:
    // - "Bem-vindo ao Pythonista!" → "Bem-vindo ao EletricistaPro!"
    // - "Como devemos te chamar?" → "Como devemos te chamar?"
    // - Logo emoji: 🐍 → ⚡
  },

  renderPage(page, ...args) {
    // Same routing logic as pythonista
  },

  updateNavStats() {
    const state = Store.getState();
    document.getElementById('nav-streak').textContent = state.user.streak;
    document.getElementById('nav-xp').textContent = state.user.totalXp;
    document.getElementById('nav-coins').textContent = state.user.gems;
  }
};

function navigateTo(page, ...args) {
  App.renderPage(page, ...args);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', xp: '⭐', error: '❌', streak: '🔥' };
  toast.innerHTML = `${icons[type] || ''} ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', () => App.init());
```

**Step 2: Verify**

Full flow works:
1. Open page → name modal appears
2. Enter name → home page shows with modules
3. Click module → lesson page loads
4. Complete exercises → XP awarded, streak updates
5. Navigate to leaderboard/profile → data persists

**Step 3: Commit**

```bash
git add eletricistapro/js/app.js
git commit -m "feat: add main app controller with routing and modals"
```

---

## Phase 2: Content & Polish

### Task 11: Write complete lesson content for all 8 modules

**Objective:** Fill lessons.js with full theory and exercises for every lesson.

**Files:**
- Modify: `eletricistapro/js/data/lessons.js`

**Step 1: Write M1 content (Fundamentos)**
- 4 lessons with 4-5 exercises each
- Include formulas: V=RI, P=VI, P=I²R, P=V²/R
- Circuit calculations: série, paralelo, misto

**Step 2: Write M2 content (Instalações Residenciais)**
- 4 lessons: NBR 5410, Componentes, Quadro, Condutores
- Include NBR 5410 rules, disjuntor sizing tables

**Step 3: Write M3 content (Simbologia)**
- 3 lessons: Símbolos, Unifilar, Multifilar
- Include SVG diagrams in theory

**Step 4: Write M4 content (Motores)**
- 3 lessons: Monofásicos, Trifásicos, Partidas
- Include motor terminal identification

**Step 5: Write M5 content (Comandos)**
- 4 lessons: Botoeiras, Contatores, Temporizadores, Circuitos
- Include circuit diagrams in theory

**Step 6: Write M6 content (CLP)**
- 4 lessons: O que é CLP, Ladder, Temp/Cont, Projeto
- Include Ladder diagrams in theory

**Step 7: Write M7 content (Instrumentação)**
- 3 lessons: Sensores, Medidas, Malha
- Include sensor type comparisons

**Step 8: Write M8 content (Segurança)**
- 3 lessons: NR-10, Aterramento, PDA
- Include safety rules and tables

**Step 9: Verify**

Every lesson loads. Every exercise type works. Formulas validate correctly.

**Step 10: Commit**

```bash
git add eletricistapro/js/data/lessons.js
git commit -m "feat: complete all lesson content for 8 modules"
```

---

### Task 12: Final testing and polish

**Objective:** Test complete user flow, fix any bugs, ensure responsive design.

**Step 1: Test on desktop**
- Full flow: name → home → lesson → exercises → completion
- All exercise types work
- Gamification updates correctly

**Step 2: Test on mobile**
- Responsive layout works
- Touch interactions work for drag-drop

**Step 3: Test persistence**
- Close browser, reopen → progress saved
- Streak updates correctly across days

**Step 4: Commit**

```bash
git add eletricistapro/
git commit -m "fix: final testing and polish"
```
