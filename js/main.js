// main.js — Landing page

var nav = document.querySelector('.nav');

// Nav background on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── Projects Rail — hover/focus preview swap ─────────────
(function () {
  var preview = document.querySelector('.rail-preview-img');
  var rail    = document.querySelector('.rail-list');
  var links   = document.querySelectorAll('.rail-link');
  if (!preview || !rail || !links.length) return;

  var leaveTimer = null;

  // Warm the cache so swaps are instant
  links.forEach(function (link) {
    var src = link.getAttribute('data-thumb');
    if (src) {
      var probe = new Image();
      probe.src = src;
    }
  });

  // src = null → fade the image out, revealing the illustration underneath.
  function swap(src) {
    if (!src) {
      preview.style.opacity = '0';
      return;
    }
    if (preview.getAttribute('src') === src) {
      preview.style.opacity = '1';
      return;
    }
    preview.style.opacity = '0';
    setTimeout(function () {
      preview.src = src;
      preview.style.opacity = '1';
    }, 200);
  }

  links.forEach(function (link) {
    var src = link.getAttribute('data-thumb');
    link.addEventListener('mouseenter', function () {
      clearTimeout(leaveTimer);
      swap(src);
    });
    link.addEventListener('focus', function () {
      clearTimeout(leaveTimer);
      swap(src);
    });
  });

  // Cursor leaves the list → fade back to the illustration
  rail.addEventListener('mouseleave', function () {
    clearTimeout(leaveTimer);
    leaveTimer = setTimeout(function () { swap(null); }, 120);
  });
})();
