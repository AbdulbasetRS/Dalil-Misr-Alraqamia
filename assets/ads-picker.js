/* يبني بطاقات الإعلانات داخل صفحة "اختر الإعلان" من assets/ads-data.js.
   الحاوية:  <div class="ads-list" id="adsList" data-service="booklet | reservation"></div>
   الإعلان الذي ليس له صفحة لهذه الخدمة بعد يظهر كبطاقة غير قابلة للضغط. */
document.addEventListener('DOMContentLoaded', function(){
  const list = document.getElementById('adsList');
  if(!list || typeof HOUSING_ADS === 'undefined') return;
  const service = list.getAttribute('data-service');
  const labels = { open: 'مفتوح للتقديم', soon: 'قريبًا', closed: 'منتهي' };
  let shown = 0;

  HOUSING_ADS.forEach(ad => {
    const href = ad.pages && ad.pages[service];
    shown++;
    const card = document.createElement(href ? 'a' : 'div');
    card.className = 'ad-card' + (href ? '' : ' disabled');
    if(href){
      card.href = href;
      card.setAttribute('data-theme-link', '');
    }
    const meta = (ad.meta || []).map(m => `<li><b>${m.label}</b><span>${m.value}</span></li>`).join('');
    const cta = href
      ? `<span class="a-cta">فتح الإعلان
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>
      </span>`
      : `<span class="a-cta muted">بيانات هذا الإعلان قيد الإضافة</span>`;
    card.innerHTML = `
      <span class="ad-status ${ad.status || 'open'}">${labels[ad.status] || labels.open}</span>
      <span class="a-title">${ad.title}</span>
      <span class="a-desc">${ad.desc}</span>
      <ul class="ad-meta">${meta}</ul>
      ${cta}
    `;
    list.appendChild(card);
  });

  if(!shown){
    list.innerHTML = '<p class="ads-empty">لا توجد إعلانات متاحة لهذه الخدمة حاليًا.</p>';
  }
  if(window.syncThemeLinks) window.syncThemeLinks();
});