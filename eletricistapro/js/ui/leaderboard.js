const LeaderboardPage = {
  render() {
    const container = document.getElementById('page-leaderboard');
    const users = Gamification.getLeaderboard();

    let html = `
      <div class="leaderboard-container">
        <div class="leaderboard-header">
          <h1>🏆 Ranking</h1>
          <p style="color:var(--text-light)">Compete com outros eletricistas!</p>
        </div>
        <div class="leaderboard-list">
    `;

    users.forEach((user, i) => {
      const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
      const level = Gamification.getLevel(user.xp);
      html += `
        <div class="leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}">
          <div class="rank ${rankClass}">${i + 1}</div>
          <div class="user-avatar" style="background:${level.color}">${user.avatar || '⚡'}</div>
          <div class="user-info">
            <div class="user-name">${user.name}${user.isCurrentUser ? ' (Você)' : ''}</div>
            <div class="user-level">${level.name} • 🔥 ${user.streak || 0} dias</div>
          </div>
          <div class="user-xp">${user.xp} XP</div>
        </div>
      `;
    });

    html += '</div></div>';
    container.innerHTML = html;
  }
};
