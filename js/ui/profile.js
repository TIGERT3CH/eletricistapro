const ProfilePage = {
  render() {
    const container = document.getElementById('page-profile');
    const state = Store.getState();
    const user = state.user;
    const level = Gamification.getLevel(user.totalXp);
    const badges = Gamification.BADGES;
    const earnedBadges = state.badges || [];
    const completedLessons = Store.getTotalLessonsCompleted();
    const completedModules = Store.getTotalModulesCompleted();

    let html = `
      <div class="profile-container">
        <div class="profile-header">
          <div class="profile-avatar" style="background:${level.color}">${user.avatar || '⚡'}</div>
          <div class="profile-name">${user.name}</div>
          <div class="profile-joined">Membro desde ${new Date(user.joinedAt).toLocaleDateString('pt-BR')}</div>
          <div style="margin-top:12px;display:inline-block;padding:6px 16px;background:${level.color};color:white;border-radius:20px;font-weight:800;font-size:14px">
            Nível ${level.level} — ${level.name}
          </div>
        </div>

        <div class="profile-stats">
          <div class="profile-stat-card">
            <div class="profile-stat-icon">⭐</div>
            <div class="profile-stat-value">${user.totalXp}</div>
            <div class="profile-stat-label">XP Total</div>
          </div>
          <div class="profile-stat-card">
            <div class="profile-stat-icon">🔥</div>
            <div class="profile-stat-value">${user.streak}</div>
            <div class="profile-stat-label">Sequência</div>
          </div>
          <div class="profile-stat-card">
            <div class="profile-stat-icon">📚</div>
            <div class="profile-stat-value">${completedLessons}</div>
            <div class="profile-stat-label">Aulas</div>
          </div>
          <div class="profile-stat-card">
            <div class="profile-stat-icon">🎯</div>
            <div class="profile-stat-value">${completedModules}</div>
            <div class="profile-stat-label">Módulos</div>
          </div>
        </div>

        <h2 class="section-title">🏅 Badges</h2>
        <div class="badges-grid">
    `;

    badges.forEach(badge => {
      const earned = earnedBadges.includes(badge.id);
      html += `
        <div class="badge-card ${earned ? 'earned' : 'locked'}">
          <div class="badge-icon">${badge.icon}</div>
          <div class="badge-name">${badge.name}</div>
          <div class="badge-desc">${badge.description}</div>
        </div>
      `;
    });

    html += '</div></div>';
    container.innerHTML = html;
  }
};
