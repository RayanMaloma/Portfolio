// phone.js — Interactive iPhone mockup. Click arrows, drag/swipe the screen,
// or use ← / → keys to step through screenshots.

function initPhone(stageSelector, images) {
  var stage = document.querySelector(stageSelector);
  if (!stage) return;

  var screen  = stage.querySelector('.phone-screen');
  var track   = stage.querySelector('.phone-track');
  var prevBtn = stage.querySelector('.phone-arrow--left');
  var nextBtn = stage.querySelector('.phone-arrow--right');
  var counter = stage.parentElement && stage.parentElement.querySelector('.phone-counter');
  if (!screen || !track) return;

  // ── Build slides ────────────────────────────────────────
  images.forEach(function (src) {
    var slide = document.createElement('div');
    slide.className = 'phone-slide';
    var img = document.createElement('img');
    img.src       = src;
    img.alt       = '';
    img.draggable = false;
    slide.appendChild(img);
    track.appendChild(slide);
  });

  var TOTAL    = images.length;
  var EASING   = 'cubic-bezier(0.32, 0.72, 0, 1)';
  var current  = 0;
  var screenW  = 0;
  var dragging = false;
  var startX   = 0;
  var startY   = 0;
  var deltaX   = 0;
  var hCommit  = false; // committed to horizontal swipe (not vertical scroll)

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function updateCounter() {
    if (counter) counter.textContent = pad(current + 1) + ' / ' + pad(TOTAL);
  }

  function measure() {
    screenW = screen.clientWidth;
  }

  function applyTransform(animated) {
    track.style.transition = animated ? 'transform 420ms ' + EASING : 'none';
    var x = -current * screenW + deltaX;
    track.style.transform = 'translate3d(' + x + 'px, 0, 0)';
  }

  function go(idx) {
    var clamped = Math.max(0, Math.min(TOTAL - 1, idx));
    deltaX = 0;
    if (clamped !== current) {
      current = clamped;
      updateCounter();
    }
    applyTransform(true);
  }

  // ── Init ────────────────────────────────────────────────
  measure();
  applyTransform(false);
  updateCounter();

  window.addEventListener('resize', function () {
    measure();
    applyTransform(false);
  });

  if (prevBtn) prevBtn.addEventListener('click', function () { go(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { go(current + 1); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(current + 1); }
  });

  // ── Drag / swipe ────────────────────────────────────────
  function startDrag(x, y) {
    dragging = true;
    hCommit  = false;
    startX   = x;
    startY   = y;
    deltaX   = 0;
    track.style.transition = 'none';
  }

  function moveDrag(x, y) {
    if (!dragging) return false;
    var dx = x - startX;
    var dy = y - startY;

    if (!hCommit) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return false;
      if (Math.abs(dx) > Math.abs(dy)) {
        hCommit = true;
      } else {
        dragging = false; // vertical scroll wins
        return false;
      }
    }

    // Rubber-band at edges
    if ((current === 0 && dx > 0) || (current === TOTAL - 1 && dx < 0)) {
      deltaX = dx * 0.3;
    } else {
      deltaX = dx;
    }
    applyTransform(false);
    return true;
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    if (!hCommit) {
      deltaX = 0;
      applyTransform(true);
      return;
    }
    var threshold = Math.max(36, screenW * 0.18);
    var newIdx = current;
    if      (deltaX < -threshold && current < TOTAL - 1) newIdx = current + 1;
    else if (deltaX >  threshold && current > 0)         newIdx = current - 1;
    deltaX = 0;
    if (newIdx !== current) {
      current = newIdx;
      updateCounter();
    }
    applyTransform(true);
  }

  // Mouse
  screen.addEventListener('mousedown', function (e) {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  });
  window.addEventListener('mousemove', function (e) {
    if (dragging) moveDrag(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('blur',    endDrag);

  // Touch
  screen.addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    startDrag(t.clientX, t.clientY);
  }, { passive: true });
  screen.addEventListener('touchmove', function (e) {
    var t = e.touches[0];
    if (moveDrag(t.clientX, t.clientY) && e.cancelable) {
      e.preventDefault(); // committed to horizontal — block page scroll
    }
  }, { passive: false });
  screen.addEventListener('touchend',    endDrag);
  screen.addEventListener('touchcancel', endDrag);
}
