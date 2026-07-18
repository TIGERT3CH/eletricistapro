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
        <button class="check-btn primary" onclick="navigateTo('home')" style="max-width:300px;margin:0 auto">
          Voltar ao Início
        </button>
      </div>
    `;
    container.innerHTML = completeHtml;
  }
};
