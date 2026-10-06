(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
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
    if (typeof revealCards === 'function') revealCards();
    if (video && video.getBoundingClientRect().bottom > 0 && video.getBoundingClientRect().top < innerHeight) replayVideo();
  });
})();