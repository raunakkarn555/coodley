//* ── THEME TOGGLE ── */
(function () {
  const toggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlEl    = document.documentElement;
  const SUN_SVG  = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  const MOON_SVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (themeIcon) themeIcon.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
    localStorage.setItem('coodley-theme', theme);
  }
  const saved = localStorage.getItem('coodley-theme') || 'dark';
  setTheme(saved);
  if (toggleBtn) toggleBtn.addEventListener('click', () => {
    setTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── MOBILE MENU TOGGLE ── */
function toggleMobileMenu() {
  var menu    = document.getElementById('mobileMenu');
  var overlay = document.getElementById('mobileOverlay');
  var btn     = document.getElementById('hamburger');
  if (!menu) return;
  var isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open'); overlay && overlay.classList.remove('open');
    btn && btn.classList.remove('is-open'); btn && btn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  } else {
    menu.classList.add('open'); overlay && overlay.classList.add('open');
    btn && btn.classList.add('is-open'); btn && btn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
}
document.querySelectorAll('#mobileMenu a').forEach(function(a) {
  a.addEventListener('click', function() { toggleMobileMenu(); });
});
window.addEventListener('resize', function() {
  if (window.innerWidth > 820) {
    var menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('open')) toggleMobileMenu();
  }
});

/* ── PROGRESS TRACKER ── */
window.Coodley = window.Coodley || {};
Coodley.markDone   = function(key) { var p=JSON.parse(localStorage.getItem('coodley-progress')||'{}'); p[key]=true; localStorage.setItem('coodley-progress',JSON.stringify(p)); };
Coodley.markUndone = function(key) { var p=JSON.parse(localStorage.getItem('coodley-progress')||'{}'); delete p[key]; localStorage.setItem('coodley-progress',JSON.stringify(p)); };
Coodley.isDone     = function(key) { return !!(JSON.parse(localStorage.getItem('coodley-progress')||'{}')[key]); };
Coodley.getAll     = function()    { return JSON.parse(localStorage.getItem('coodley-progress')||'{}'); };
Coodley.countDone  = function()    { return Object.keys(Coodley.getAll()).length; };
(function () {
  document.querySelectorAll('[data-lesson]').forEach(function(el) {
    var key = el.getAttribute('data-lesson');
    if (el.tagName === 'INPUT' && el.type === 'checkbox') {
      el.checked = Coodley.isDone(key);
      el.addEventListener('change', function() { if (el.checked) Coodley.markDone(key); else Coodley.markUndone(key); });
    }
  });
})();