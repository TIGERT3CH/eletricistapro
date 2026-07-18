const HomePage = {
  render() {
    const container = document.getElementById('page-home');
    const state = Store.getState();
    const nextLesson = Store.getNextLesson();

    let html = `
      <div class="home-header">
        <h1>⚡ EletricistaPro</h1>
        <p>Aprenda Eletricidade do Zero à Automação</p>
      </div>
      ${this.renderDailyGoal(state)}
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
        <div class="module-header">
          <div class="module-icon" style="background:${module.color}">${module.icon}</div>
          <div class="module-info">
            <h3>${module.title}</h3>
            <p>${module.description}</p>
          </div>
        </div>
        <div class="module-progress">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${percent}%;background:${module.color}"></div>
          </div>
          <div class="progress-text">
            <span>${progress.completed}/${progress.total} aulas</span>
            <span>${percent}%</span>
          </div>
        </div>
        ${!unlocked ? '<div style="position:absolute;top:16px;right:16px;font-size:24px">🔒</div>' : ''}
      </div>
    `;
  },

  renderDailyGoal(state) {
    const daily = Gamification.getDailyProgress();
    return `
      <div class="daily-goal">
        <div class="daily-goal-info">
          <h3>Meta Diária</h3>
          <p>${daily.current}/${daily.goal} XP hoje</p>
        </div>
        <div class="daily-goal-progress">
          <div class="progress-ring">
            <svg width="60" height="60">
              <circle class="bg" cx="30" cy="30" r="24"/>
              <circle class="fill" cx="30" cy="30" r="24" 
                stroke-dasharray="${2 * Math.PI * 24}" 
                stroke-dashoffset="${2 * Math.PI * 24 * (1 - daily.percent / 100)}"/>
            </svg>
            <div class="text">${daily.percent}%</div>
          </div>
        </div>
      </div>
    `;
  },

  renderNextLessonCTA(next) {
    return `
      <div class="next-lesson-cta" onclick="navigateTo('lesson', '${next.module.id}', ${next.module.lessons.indexOf(next.lesson)})" 
           style="background:linear-gradient(135deg,var(--secondary),#00A383);color:white;padding:20px;border-radius:var(--radius);margin-top:24px;cursor:pointer;display:flex;align-items:center;gap:12px;font-weight:700;box-shadow:var(--shadow);">
        <span style="font-size:24px">▶</span>
        <div>
          <div style="font-size:14px;opacity:0.9">Continuar:</div>
          <div style="font-size:18px">${next.lesson.title}</div>
        </div>
      </div>
    `;
  }
};
