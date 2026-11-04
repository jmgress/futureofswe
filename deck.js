(function () {
  'use strict';

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var deck = document.querySelector('.deck');
  var progress = document.querySelector('.progress');
  var counter = document.querySelector('.counter');
  var notesPanel = document.querySelector('.notes-panel');
  var notesBody = notesPanel.querySelector('.body');
  var help = document.querySelector('.help');
  var current = -1;

  function clamp(n) {
    return Math.max(0, Math.min(slides.length - 1, n));
  }

  function indexFromHash() {
    var m = /^#(\d+)$/.exec(location.hash);
    return m ? clamp(parseInt(m[1], 10) - 1) : 0;
  }

  function show(n, replace) {
    n = clamp(n);
    if (n === current) return;
    if (current >= 0) slides[current].classList.remove('active');
    current = n;
    slides[n].classList.add('active');

    var hash = '#' + (n + 1);
    if (location.hash !== hash) {
      if (replace) history.replaceState(null, '', hash);
      else history.pushState(null, '', hash);
    }

    progress.style.width = ((n + 1) / slides.length) * 100 + '%';
    counter.textContent = (n + 1) + ' / ' + slides.length;
    document.title = slideTitle(n) + ' – Future of Software Engineering';
    renderNotes();
  }

  function slideTitle(n) {
    var h = slides[n].querySelector('h1, h2');
    return h ? h.textContent.trim() : 'Slide ' + (n + 1);
  }

  function renderNotes() {
    var notes = slides[current].querySelector('.notes');
    if (notes && notes.textContent.trim()) {
      notesBody.className = 'body';
      notesBody.textContent = notes.textContent.trim().replace(/\n[ \t]+/g, '\n');
    } else {
      notesBody.className = 'body empty';
      notesBody.textContent = 'No notes for this slide.';
    }
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function fit() {
    var scale = Math.min(window.innerWidth / deck.offsetWidth, window.innerHeight / deck.offsetHeight);
    if (notesPanel.classList.contains('open')) {
      scale = Math.min(scale, (window.innerHeight * 0.6) / deck.offsetHeight);
    }
    document.documentElement.style.setProperty('--scale', scale);
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
      case 'Enter':
      case 'n':
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
      case 'p':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); show(0); break;
      case 'End':
        e.preventDefault(); show(slides.length - 1); break;
      case 'f':
      case 'F':
        toggleFullscreen(); break;
      case 's':
      case 'S':
        notesPanel.classList.toggle('open'); fit(); break;
      case '?':
      case 'h':
        help.classList.toggle('open'); break;
      case 'Escape':
        help.classList.remove('open'); break;
    }
  });

  // Touch swipe
  var touchX = null;
  document.addEventListener('touchstart', function (e) {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) next(); else prev();
  }, { passive: true });

  help.addEventListener('click', function () { help.classList.remove('open'); });

  window.addEventListener('hashchange', function () { show(indexFromHash(), true); });
  window.addEventListener('resize', fit);

  fit();
  show(indexFromHash(), true);
})();
