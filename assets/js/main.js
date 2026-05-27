/* ============================================================
   COODLEY — main.js
   Global scripts for all pages
   ============================================================ */


/* ============================================================
   LUCIDE ICONS — starts
   ============================================================ */

// Initialize Lucide icons after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

/* ============================================================
   LUCIDE ICONS — ends
   ============================================================ */


/* ============================================================
   THEME TOGGLE — starts
   ============================================================ */

(function () {
  const toggleBtn  = document.getElementById('themeToggle');
  const themeIcon  = document.getElementById('themeIcon');
  const htmlEl     = document.documentElement;

  // SVG paths for sun (dark mode active) and moon (light mode active)
  const SUN_SVG = `
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  `;
  const MOON_SVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

  // Apply theme and update icon
  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
    }
    localStorage.setItem('coodley-theme', theme);
  }

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('coodley-theme') || 'dark';
  setTheme(savedTheme);

  // Toggle on button click
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = htmlEl.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();

/* ============================================================
   THEME TOGGLE — ends
   ============================================================ */


/* ============================================================
   MOBILE NAV (HAMBURGER DRAWER) — starts
   ============================================================ */

(function () {
  const hamburger   = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (!hamburger || !mobileDrawer) return;

  let menuOpen = false;

  // Toggle drawer open / closed
  function toggleMenu(forceClose) {
    menuOpen = forceClose === true ? false : !menuOpen;

    if (menuOpen) {
      mobileDrawer.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      // Swap to X icon when open
      hamburger.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6"  y1="6" x2="18" y2="18"/>
        </svg>
      `;
    } else {
      mobileDrawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      // Back to burger icon when closed
      hamburger.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="3"  y1="12" x2="21" y2="12"/>
          <line x1="3"  y1="6"  x2="21" y2="6"/>
          <line x1="3"  y1="18" x2="21" y2="18"/>
        </svg>
      `;
    }
  }

  // Hamburger click
  hamburger.addEventListener('click', function () {
    toggleMenu();
  });

  // Close drawer when any link inside it is clicked
  mobileDrawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(true);
    });
  });

  // Close drawer on outside click
  document.addEventListener('click', function (e) {
    if (menuOpen && !mobileDrawer.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close drawer if viewport resizes above mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820 && menuOpen) {
      toggleMenu(true);
    }
  });
})();

/* ============================================================
   MOBILE NAV (HAMBURGER DRAWER) — ends
   ============================================================ */


/* ============================================================
   SCROLL REVEAL — starts
   ============================================================ */

(function () {
  // IntersectionObserver watches .reveal elements
  // and adds .visible when they enter the viewport
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.06 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });
})();

/* ============================================================
   SCROLL REVEAL — ends
   ============================================================ */
