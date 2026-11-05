(function () {
  'use strict';

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var deck = document.querySelector('.deck');
  var progress = document.querySelector('.progress');
  var counter = document.querySelector('.counter');
  var notesPanel = document.querySelector('.notes-panel');
  var notesBody = notesPanel.querySelector('.body');
  var help = document.querySelector('.help');
  var controls = document.querySelector('.controls');
  var current = -1;

  function clamp(n) {
    return Math.max(0, Math.min(slides.length - 1, n));
  }

  function indexFromHash() {
    var m = /^#(\d+)$/.exec(location.hash);
    return m ? clamp(parseInt(m[1], 10) - 1) : 0;
  }

  function show(n, replace, revealAll) {
    n = clamp(n);
    if (n === current) return;
    if (current >= 0) slides[current].classList.remove('active');
    current = n;
    slides[n].classList.add('active');
    fragments(n).forEach(function (f) { f.classList.toggle('visible', !!revealAll); });

    var hash = '#' + (n + 1);
    if (location.hash !== hash) {
      if (replace) history.replaceState(null, '', hash);
      else history.pushState(null, '', hash);
    }

    progress.style.width = ((n + 1) / slides.length) * 100 + '%';
    counter.textContent = (n + 1) + ' / ' + slides.length;
    updateNav();
    document.title = slideTitle(n) + ' – Future of Software Engineering';
    renderNotes();
    if (window.matchMedia('(max-width: 600px) and (orientation: portrait)').matches) {
      window.scrollTo(0, 0);
    }
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

  function fragments(n) {
    return Array.prototype.slice.call(slides[n].querySelectorAll('.fragment'));
  }

  function next() {
    var hidden = fragments(current).filter(function (f) { return !f.classList.contains('visible'); });
    if (hidden.length) { hidden[0].classList.add('visible'); updateNav(); return; }
    show(current + 1);
  }

  function prev() {
    var shown = fragments(current).filter(function (f) { return f.classList.contains('visible'); });
    if (shown.length) { shown[shown.length - 1].classList.remove('visible'); updateNav(); return; }
    show(current - 1, false, true);
  }

  function updateNav() {
    var pending = fragments(current).some(function (f) { return !f.classList.contains('visible'); });
    var revealed = fragments(current).some(function (f) { return f.classList.contains('visible'); });
    controls.querySelector('[data-action="previous"]').disabled = current === 0 && !revealed;
    controls.querySelector('[data-action="next"]').disabled = current === slides.length - 1 && !pending;
  }

  function fit() {
    var availableHeight = window.innerHeight - 76;
    var scale = Math.min((window.innerWidth - 32) / deck.offsetWidth, availableHeight / deck.offsetHeight);
    if (notesPanel.classList.contains('open')) {
      availableHeight = window.innerHeight * 0.6 - 76;
      scale = Math.min(scale, availableHeight / deck.offsetHeight);
    }
    deck.style.top = availableHeight / 2 + 'px';
    document.documentElement.style.setProperty('--scale', scale);
  }

  function toggleNotes() {
    var opened = notesPanel.classList.toggle('open');
    controls.querySelector('[data-action="notes"]').setAttribute('aria-pressed', opened);
    document.body.classList.toggle('show-notes', opened);
    fit();
  }

  controls.addEventListener('click', function (event) {
    var button = event.target.closest('button');
    if (!button) return;
    switch (button.dataset.action) {
      case 'previous': prev(); break;
      case 'next': next(); break;
      case 'notes': toggleNotes(); break;
      case 'fullscreen': toggleFullscreen(); break;
      case 'theme': toggleTheme(); break;
    }
  });

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  }

  function applyTheme(dark) {
    var root = document.documentElement;
    if (dark) root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    var button = controls.querySelector('[data-action="theme"]');
    button.setAttribute('aria-pressed', dark);
    button.querySelector('i').className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  function toggleTheme() {
    var dark = document.documentElement.dataset.theme !== 'dark';
    applyTheme(dark);
    try { localStorage.setItem('deck-theme', dark ? 'dark' : 'light'); } catch (e) {}
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest('button, a, input, textarea, select, [contenteditable="true"]')) return;
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
        toggleNotes(); break;
      case 'd':
      case 'D':
        toggleTheme(); break;
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

  applyTheme(document.documentElement.dataset.theme === 'dark');
  fit();
  show(indexFromHash(), true);
})();
