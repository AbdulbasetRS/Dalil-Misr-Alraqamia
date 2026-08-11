/* ============================================================
   SHARED SITE PARTIALS — edit content in this file ONE time and
   it updates on every page automatically. Include it on every
   page right after theme.js.

   Usage in HTML:
   - Navbar:   <header class="topbar site-header"
                       data-variant="home | service"
                       data-prefix="../../"                (service pages only, path back to the project root)
                       data-subtitle="اسم الخدمة الظاهر بجانب الاسم"></header>
   - Footer:   <footer class="home-footer site-footer"></footer>   (home page only)
   - Explainer:<div class="explainer reveal explainer-slot"
                       data-date="11 أغسطس 2026"></div>            (last slide of each service page)
   ============================================================ */
(function(){

  /* ---- Edit these once; every page picks it up automatically ---- */
  const SITE_NAME = 'دليل مصر الرقمية';
  const DEFAULT_SUBTITLE = 'منصة شرح الخدمات الحكومية';
  const FOOTER_LEFT = 'دليل مصر الرقمية — دليل استرشادي داخلي لشرح الخدمات';
  const FOOTER_RIGHT = 'يتم إضافة خدمات جديدة أولًا بأول';
  const EXPLAINER_AVATAR = 'https://avatars.githubusercontent.com/u/74756037?v=4';
  const EXPLAINER_NAME = 'Abdulbaset R. Sayed';
  /* ----------------------------------------------------------------- */

  function logoMarkup(prefix){
    // In the combined chat-preview build, window.LOGO_HTML supplies an
    // inline <svg> instead (so it renders without needing assets/logo.svg
    // as a sibling file). The real, downloadable site always uses the image.
    if(window.LOGO_HTML) return window.LOGO_HTML;
    return `<img class="mark" src="${prefix}assets/logo.svg" alt="${SITE_NAME}">`;
  }

  function injectHeaders(){
    document.querySelectorAll('.site-header').forEach(el => {
      const variant = el.getAttribute('data-variant') || 'home';
      const prefix = el.getAttribute('data-prefix') || '';
      const subtitle = el.getAttribute('data-subtitle') || DEFAULT_SUBTITLE;
      const isPreview = !!window.PREVIEW_MODE;

      const homeHref = isPreview ? '#home' : (prefix + 'index.html');
      const themeLinkAttr = (!isPreview && variant === 'service') ? ' data-theme-link' : '';
      const clickAttr = isPreview ? ' onclick="showHome(event)"' : '';

      const controlsHTML = variant === 'home' ? `
        <div class="topbar-controls">
          <button class="icon-btn" id="themeBtn" type="button" aria-label="تبديل المظهر">
            <svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"></svg>
          </button>
        </div>` : '';

      el.innerHTML = `
        <a class="brand" href="${homeHref}"${themeLinkAttr}${clickAttr}>
          ${logoMarkup(prefix)}
          <span>
            ${SITE_NAME}
            <span class="sub">${subtitle}</span>
          </span>
        </a>
        ${controlsHTML}
      `;
    });
  }

  function injectFooters(){
    document.querySelectorAll('.site-footer').forEach(el => {
      el.innerHTML = `
        <span>${FOOTER_LEFT}</span>
        <span>${FOOTER_RIGHT}</span>
      `;
    });
  }

  function injectExplainers(){
    document.querySelectorAll('.explainer-slot').forEach(el => {
      const date = el.getAttribute('data-date') || '';
      el.innerHTML = `
        <img class="explainer-avatar" src="${EXPLAINER_AVATAR}" alt="${EXPLAINER_NAME}">
        <div class="explainer-text">
          <div class="explainer-line">تم شرح هذه الخدمة بواسطة <strong>${EXPLAINER_NAME}</strong></div>
          <div class="explainer-date">البيانات موضّحة حتى تاريخ ${date}</div>
        </div>
      `;
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    injectHeaders();
    injectFooters();
    injectExplainers();
    // Re-apply theme now that the header (and its themeBtn/icon) exists,
    // and re-sync ?theme= query params onto the freshly-injected links.
    if(window.applyTheme) window.applyTheme();
    if(window.syncThemeLinks) window.syncThemeLinks();
  });
})();
