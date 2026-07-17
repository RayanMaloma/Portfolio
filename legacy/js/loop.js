// loop.js — Vertical looping image strip with auto-scroll and hover manual control

// ── Global scroll speed ──────────────────────────────────
// Fixed pixels-per-second rate applied to every project.
// All strips move at the same visual velocity regardless of image count.
// Increase to scroll faster, decrease to scroll slower.
var SCROLL_PX_PER_SEC = 100;

function initLoop(panelSelector, images) {
  var panel = document.querySelector(panelSelector);
  if (!panel) return;

  // ── Mobile: static vertical gallery ─────────────────────
  if (window.innerWidth <= 768) {
    var sorted = images.slice().sort(function (a, b) {
      function num(path) {
        var base = path.split('/').pop().replace(/\.[^.]+$/, '');
        var n    = parseInt(base, 10);
        return isNaN(n) ? Infinity : n;
      }
      return num(a) - num(b);
    });

    var gallery = document.createElement('div');
    gallery.className = 'mobile-gallery';

    sorted.forEach(function (src) {
      var img       = document.createElement('img');
      img.src       = typeof src === 'string' ? src : src.src;
      img.alt       = '';
      img.draggable = false;
      gallery.appendChild(img);
    });

    panel.appendChild(gallery);
    return;
  }

  // ── Numeric sort ────────────────────────────────────────
  // If every filename is purely numeric (e.g. 1.png, 7.png),
  // sort ascending. Otherwise preserve the order defined by the caller.
  function numFromItem(item) {
    var path = typeof item === 'string' ? item : item.src;
    var base = path.split('/').pop().replace(/\.[^.]+$/, ''); // filename without extension
    var n    = parseInt(base, 10);
    return isNaN(n) || String(n) !== base ? null : n; // must be purely numeric
  }

  var allNumeric = images.every(function (img) { return numFromItem(img) !== null; });
  var ordered    = allNumeric
    ? images.slice().sort(function (a, b) { return numFromItem(a) - numFromItem(b); })
    : images.slice();

  // ── Build strip ──────────────────────────────────────────
  var strip = document.createElement('div');
  strip.className = 'loop-strip';

  function makeImg(item) {
    var img = document.createElement('img');
    img.src       = typeof item === 'string' ? item : item.src;
    img.alt       = '';
    img.draggable = false;
    return img;
  }

  // Original set
  ordered.forEach(function (item) { strip.appendChild(makeImg(item)); });

  // Clone set appended below — strip is now 2× content height
  var originals = Array.from(strip.children);
  originals.forEach(function (child) { strip.appendChild(child.cloneNode(true)); });

  panel.appendChild(strip);

  // ── State ────────────────────────────────────────────────
  var currentY  = 0;     // how many px the strip has been moved up
  var halfH     = 0;     // half of total strip height (= one full content set)
  var isHovered = false;
  var lastTime  = null;

  function applyY() {
    strip.style.transform = 'translateY(' + (-currentY) + 'px)';
  }

  function measure() {
    var h = strip.scrollHeight;
    if (h > 50) halfH = h / 2;
  }

  // ── RAF loop ─────────────────────────────────────────────
  // Uses elapsed time (delta) so speed is frame-rate independent.
  function tick(timestamp) {
    if (halfH === 0) measure(); // wait until images give the strip real height

    if (!isHovered && halfH > 0) {
      var delta = lastTime === null ? 0 : (timestamp - lastTime) / 1000; // seconds
      // Cap delta to avoid a large jump after tab becomes visible again
      if (delta > 0.1) delta = 0.1;
      currentY += SCROLL_PX_PER_SEC * delta;
      if (currentY >= halfH) currentY -= halfH;
      applyY();
    }

    lastTime = timestamp;
    requestAnimationFrame(tick);
  }

  // ── Hover — pause auto, enable manual wheel ───────────────
  panel.addEventListener('mouseenter', function () {
    isHovered = true;
    lastTime  = null; // reset delta so resume is smooth
  });

  panel.addEventListener('mouseleave', function () {
    isHovered = false;
    lastTime  = null; // reset delta so resume is smooth
  });

  panel.addEventListener('wheel', function (e) {
    if (!isHovered || halfH === 0) return;
    e.preventDefault();

    // Respect pixel / line / page delta modes
    var delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 24;   // lines → px
    if (e.deltaMode === 2) delta *= 400;  // pages → px

    currentY += delta * 0.6;

    // Manual inspection mode: clamp to the full original content range.
    // Do NOT wrap — let the user scroll from the first image to the last
    // without any jump. The auto-loop resumes cleanly from wherever
    // currentY lands once the mouse leaves.
    var maxScroll = Math.max(0, halfH - panel.clientHeight);
    if (currentY < 0)          currentY = 0;
    if (currentY > maxScroll)  currentY = maxScroll;

    applyY();
  }, { passive: false });

  // ── Start ────────────────────────────────────────────────
  requestAnimationFrame(tick);
}

// ── Dynamic loader ───────────────────────────────────────
// Probes baseFolder/1.jpg, baseFolder/1.png, … then 2, 3, …
// until no extension matches for a given number, then calls initLoop.
// Extensions are tried in order; the first successful one wins per number.
function initLoopDynamic(panelSelector, baseFolder) {
  var EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  var srcs = [];
  // Normalise: ensure trailing slash
  var folder = baseFolder.replace(/\/?$/, '/');

  function tryNumber(n) {
    var extIdx = 0;

    function tryExt() {
      if (extIdx >= EXTS.length) {
        // No extension loaded for this number — sequence is complete
        if (srcs.length > 0) {
          initLoop(panelSelector, srcs);
        }
        return;
      }

      var src = folder + n + '.' + EXTS[extIdx];
      var img = new Image();

      img.onload = function () {
        srcs.push(src);
        tryNumber(n + 1); // found — move to next number
      };

      img.onerror = function () {
        extIdx++;
        tryExt(); // try next extension for same number
      };

      img.src = src;
    }

    tryExt();
  }

  tryNumber(1);
}
