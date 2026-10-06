(() => {
  const desktop = matchMedia('(min-width:801px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const sections = [...document.querySelectorAll('#marking,.concrete,#evelux')];
  let observer;
  function setupSections() {
    observer?.disconnect();
    sections.forEach(section => section.classList.remove('desktopReveal','desktopVisible'));
    if (!desktop.matches || reduced.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('desktopVisible', entry.isIntersecting));
    }, {threshold:0.1});
    sections.forEach(section => {
      section.classList.add('desktopReveal');
      observer.observe(section);
    });
  }
  desktop.addEventListener('change',setupSections);
  reduced.addEventListener('change',setupSections);
  setupSections();
  const video = document.querySelector('.doorVideo');
  function replayVideo() {
    if (!video || reduced.matches) return;
    video.muted = true;
    video.currentTime = 0;
    video.play().catch(() => {});
  }
  if (video && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) replayVideo();
        else {video.pause();video.currentTime = 0;}
      });
    }, {threshold:0.15}).observe(video);
    document.querySelector('.top .brand')?.addEventListener('click',replayVideo);
  }
  window.addEventListener('pageshow',event => {
    if (!event.persisted) return;
    setupSections();
    if (typeof revealCards === 'function') revealCards();
    if (video && video.getBoundingClientRect().bottom > 0 && video.getBoundingClientRect().top < innerHeight) replayVideo();
  });
})();