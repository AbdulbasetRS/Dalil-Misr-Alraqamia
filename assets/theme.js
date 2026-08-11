/* Shared light/dark theme — include on every page, before partials.js.
   The toggle button (#themeBtn) only exists on the home page (it's injected
   by partials.js there). Sub-pages receive the active theme via a `?theme=`
   query param carried on links marked data-theme-link, so the whole site
   stays in sync without a toggle appearing outside the home page.
   Uses event delegation so it works even though #themeBtn is injected
   dynamically after this script runs. */
(function(){
  const KEY_ATTR = 'data-theme';

  function themeFromQuery(){
    const params = new URLSearchParams(window.location.search);
    const t = params.get('theme');
    return (t === 'dark' || t === 'light') ? t : 'light';
  }

  let theme = themeFromQuery();

  function icon(){
    return theme === 'dark'
      ? '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>'
      : '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>';
  }

  function syncThemeLinks(){
    document.querySelectorAll('[data-theme-link]').forEach(a => {
      const base = a.getAttribute('href').split('?')[0];
      a.setAttribute('href', base + '?theme=' + theme);
    });
  }

  function apply(){
    document.documentElement.setAttribute(KEY_ATTR, theme);
    const iconEl = document.getElementById('themeIcon');
    if(iconEl) iconEl.innerHTML = icon();
    syncThemeLinks();
  }

  window.getCurrentTheme = function(){ return theme; };
  window.syncThemeLinks = syncThemeLinks;
  window.applyTheme = apply;

  document.addEventListener('click', function(e){
    const btn = e.target.closest('#themeBtn');
    if(!btn) return;
    theme = theme === 'light' ? 'dark' : 'light';
    apply();
    if(window.history && history.replaceState){
      const url = new URL(window.location.href);
      url.searchParams.set('theme', theme);
      history.replaceState(null, '', url);
    }
  });

  document.addEventListener('DOMContentLoaded', apply);
})();
