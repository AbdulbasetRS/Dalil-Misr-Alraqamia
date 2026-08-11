document.addEventListener('DOMContentLoaded', function(){
  const list = document.getElementById('ministriesList');
  const countEl = document.getElementById('ministryCount');
  if(!list || typeof MINISTRIES === 'undefined') return;

  countEl.textContent = MINISTRIES.length + ' وزارات';

  MINISTRIES.forEach((m, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'ministry' + (m.status === 'ready' ? ' active' : '');
    const num = String(i + 1).padStart(2, '0');

    wrap.innerHTML = `
      <div class="ministry-head">
        <div class="m-left">
          <span class="ministry-num mono">${num}</span>
          <span class="ministry-name">${m.name}</span>
        </div>
        <span class="ministry-tag ${m.status === 'ready' ? 'ready' : 'soon'}">
          ${m.status === 'ready' ? m.services.length + ' خدمة متاحة' : 'قريبًا'}
        </span>
      </div>
    `;

    if(m.status === 'ready' && m.services.length){
      const grid = document.createElement('div');
      grid.className = 'services-grid';
      m.services.forEach(s => {
        const card = document.createElement('a');
        card.className = 'service-card';
        card.href = s.href;
        card.setAttribute('data-theme-link', '');
        card.innerHTML = `
          <span class="s-title">${s.title}</span>
          <span class="s-desc">${s.desc}</span>
          <span class="s-cta">ابدأ الشرح
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>
          </span>
        `;
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
    }

    list.appendChild(wrap);
  });

  if(window.syncThemeLinks) window.syncThemeLinks();
});
