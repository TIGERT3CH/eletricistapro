const LessonPage = {
  currentModule: null,
  currentLesson: null,
  currentIndex: 0,
  correctCount: 0,
  totalExercises: 0,
  reviewMode: false,

  render(moduleId, lessonIndex, review) {
    const module = COURSE_DATA.modules.find(m => m.id === moduleId);
    if (!module) return;
    const lesson = module.lessons[lessonIndex];
    if (!lesson) return;

    this.currentModule = module;
    this.currentLesson = lesson;
    this.currentIndex = lessonIndex;
    this.correctCount = 0;
    this.totalExercises = lesson.exercises.length;
    this.reviewMode = !!review;

    const container = document.getElementById('page-lesson');

    if (this.reviewMode) {
      this.renderReview(container, module, lesson, lessonIndex);
    } else {
      this.renderLesson(container, module, lesson, lessonIndex);
    }
  },

  renderReview(container, module, lesson, lessonIndex) {
    const prevIndex = lessonIndex > 0 ? lessonIndex - 1 : null;
    const nextIndex = lessonIndex < module.lessons.length - 1 ? lessonIndex + 1 : null;
    const completed = Store.isLessonCompleted(lesson.id);

    let navHtml = '<div class="lesson-nav" style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap">';
    for (let i = 0; i < module.lessons.length; i++) {
      const l = module.lessons[i];
      const done = Store.isLessonCompleted(l.id);
      const active = i === lessonIndex;
      navHtml += `<button onclick="navigateTo('lesson', '${module.id}', ${i}, true)" 
        style="padding:6px 12px;border-radius:20px;border:2px solid ${active ? module.color : 'var(--border)'};
        background:${active ? module.color : done ? 'var(--secondary)' : 'white'};
        color:${active || done ? 'white' : 'var(--text)'};
        font-weight:${active ? '800' : '600'};cursor:pointer;font-size:12px;min-width:36px">
        ${i + 1}
      </button>`;
    }
    navHtml += '</div>';

    let html = `
      <div class="lesson-container">
        <div class="lesson-header">
          <button class="back-btn" onclick="navigateTo('home')">←</button>
          <div style="flex:1">
            <div style="font-size:13px;color:var(--text-light);font-weight:700;margin-bottom:4px">
              📖 ${module.icon} ${module.title} — Revisão
            </div>
            <div style="font-size:18px;font-weight:800">${lesson.title}</div>
            <div style="font-size:12px;color:var(--text-light);margin-top:4px">
              Aula ${lessonIndex + 1} de ${module.lessons.length}
              ${completed ? ' ✓ Concluída' : ''}
            </div>
          </div>
        </div>

        ${navHtml}
        
        <div class="lesson-step theory">
          ${lesson.theory}
        </div>

        <div style="display:flex;gap:12px;margin-top:24px;justify-content:space-between">
          ${prevIndex !== null 
            ? `<button onclick="navigateTo('lesson', '${module.id}', ${prevIndex}, true)" 
                style="padding:12px 24px;border-radius:12px;border:2px solid var(--border);
                background:white;cursor:pointer;font-weight:700">
                ← Anterior
              </button>` 
            : '<div></div>'}
          ${nextIndex !== null 
            ? `<button onclick="navigateTo('lesson', '${module.id}', ${nextIndex}, true)" 
                style="padding:12px 24px;border-radius:12px;border:none;
                background:${module.color};color:white;cursor:pointer;font-weight:700">
                Próxima →
              </button>` 
            : `<button onclick="navigateTo('home')" 
                style="padding:12px 24px;border-radius:12px;border:none;
                background:var(--secondary);color:white;cursor:pointer;font-weight:700">
                ✅ Voltar ao Início
              </button>`}
        </div>

        <div style="margin-top:16px;text-align:center">
          <button onclick="navigateTo('lesson', '${module.id}', ${lessonIndex})" 
            style="padding:10px 20px;border-radius:8px;border:2px solid var(--primary);
            background:white;color:var(--primary);cursor:pointer;font-weight:700">
            📝 Fazer Exercícios desta Aula
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  renderLesson(container, module, lesson, lessonIndex) {
    const completed = Store.isLessonCompleted(lesson.id);

    let html = `
      <div class="lesson-container">
        <div class="lesson-header">
          <button class="back-btn" onclick="navigateTo('home')">←</button>
          <div style="flex:1">
            <div style="font-size:13px;color:var(--text-light);font-weight:700;margin-bottom:4px">
              ${module.icon} ${module.title}
            </div>
            <div style="font-size:18px;font-weight:800">${lesson.title}</div>
          </div>
        </div>
        
        <div class="lesson-step theory">
          ${lesson.theory}
        </div>

        <div class="lesson-step" style="border-top:4px solid var(--secondary)">
          <h2 style="color:var(--secondary)">📝 Exercícios</h2>
          <div id="exercises-container"></div>
        </div>
      </div>
    `;

    container.innerHTML = html;

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
      setTimeout(() => this.showLessonComplete(), 500);
    }
  },

  showLessonComplete() {
    const xp = Gamification.calculateLessonXp(
      this.currentLesson.exercises,
      this.correctCount
    );
    Store.completeLesson(this.currentLesson.id, this.correctCount, xp);

    const moduleProgress = Store.getModuleProgress(this.currentModule.id);
    if (moduleProgress.completed === moduleProgress.total) {
      Store.completeModule(this.currentModule.id);
    }

    App.updateNavStats();

    const newBadges = Gamification.checkBadges();
    newBadges.forEach((badge, i) => {
      setTimeout(() => showToast(`${badge.icon} Nova badge: ${badge.name}!`, 'xp'), 1000 + i * 1500);
    });

    const nextIndex = this.currentIndex < this.currentModule.lessons.length - 1 
      ? this.currentIndex + 1 : null;

    const container = document.getElementById('page-lesson');
    const completeHtml = `
      <div class="lesson-complete">
        <div class="complete-icon">🎉</div>
        <h2>Aula Completa!</h2>
        <p>${this.currentLesson.title}</p>
        <div class="xp-earned">⭐ +${xp} XP</div>
        <div class="complete-stats">
          <div class="complete-stat">
            <div class="complete-stat-value">${this.correctCount}/${this.totalExercises}</div>
            <div class="complete-stat-label">Acertos</div>
          </div>
          <div class="complete-stat">
            <div class="complete-stat-value">${Math.round((this.correctCount / this.totalExercises) * 100)}%</div>
            <div class="complete-stat-label">Aproveitamento</div>
          </div>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px">
          ${nextIndex !== null 
            ? `<button class="check-btn primary" 
                onclick="navigateTo('lesson', '${this.currentModule.id}', ${nextIndex})"
                style="max-width:300px">
                Próxima Aula →
              </button>` 
            : ''}
          <button class="check-btn" onclick="navigateTo('home')" style="max-width:300px">
            Voltar ao Início
          </button>
        </div>
      </div>
    `;
    container.innerHTML = completeHtml;
  }
};
