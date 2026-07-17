// main.js — Landing page

var nav = document.querySelector('.nav');

// ─── Nav background on scroll ─────────────────────────────
window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ─── Fullscreen overlay menu ──────────────────────────────
(function () {
  var menuBtn = document.getElementById('menu-btn');
  var overlay = document.getElementById('overlay');
  var closeBtn = document.getElementById('overlay-close');
  var links = document.querySelectorAll('[data-overlay-link]');
  if (!menuBtn || !overlay) return;

  function open() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);

  // Close + smooth-scroll to target on overlay link click
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      var target = hash && document.querySelector(hash);
      if (target) {
        e.preventDefault();
        close();
        setTimeout(function () {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();

// ─── Smooth scroll for in-page anchor links ───────────────
document.querySelectorAll('a[href^="#"]:not([data-overlay-link])').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── Hero memoji parallax on scroll ───────────────────────
(function () {
  var memoji = document.getElementById('hero-memoji');
  if (!memoji) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth <= 768) return;

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        memoji.style.transform = 'translateY(calc(-50% + ' + (y * 0.12) + 'px))';
      }
      ticking = false;
    });
  });
})();

// ─── Page transition on project navigation ────────────────
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.panel').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (e.metaKey || e.ctrlKey || e.shiftKey) return; // allow open-in-new-tab
      e.preventDefault();
      document.body.classList.add('is-leaving');
      setTimeout(function () { window.location.href = href; }, 320);
    });
  });
})();
