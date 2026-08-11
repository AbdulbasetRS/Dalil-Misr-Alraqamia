/* Shared presentation-deck controller — include on every service page.
   Expects: <div class="deck" id="deck"> containing .slide sections,
   a <nav class="rail" id="rail"></nav>, and a #downHint button. */
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const deck = document.getElementById('deck');
    const rail = document.getElementById('rail');
    const downHint = document.getElementById('downHint');
    if(!deck) return;

    const slides = Array.from(deck.querySelectorAll('.slide'));
    let currentIndex = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', 'الشريحة ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      rail && rail.appendChild(dot);
    });

    function updateRail(){
      if(!rail) return;
      Array.from(rail.children).forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function goTo(i){
      if(i < 0 || i >= slides.length) return;
      slides[i].scrollIntoView({ behavior: 'smooth' });
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          currentIndex = slides.indexOf(entry.target);
          updateRail();
          if(downHint) downHint.classList.toggle('hide', currentIndex === slides.length - 1);
        }
      });
    }, { root: deck, threshold: 0.6 });
    slides.forEach(s => io.observe(s));

    if(downHint) downHint.addEventListener('click', () => goTo(currentIndex + 1));

    window.addEventListener('keydown', (e) => {
      if(['ArrowDown', 'PageDown', ' '].includes(e.key)){
        e.preventDefault();
        goTo(currentIndex + 1);
      } else if(['ArrowUp', 'PageUp'].includes(e.key)){
        e.preventDefault();
        goTo(currentIndex - 1);
      }
    });

    updateRail();
  });
})();
