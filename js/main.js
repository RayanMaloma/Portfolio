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

// ─── Project Showcase — Carousel ──────────────────────────
(function () {
  var stage = document.getElementById('showcase-stage');
  var track = document.getElementById('showcase-track');
  if (!stage || !track) return;

  var prevBtn = document.getElementById('showcase-prev');
  var nextBtn = document.getElementById('showcase-next');
  var cards   = Array.from(track.children);
  var EASING  = 'cubic-bezier(0.37, 0, 0.63, 1)';

  // ── Shared track setup ───────────────────────────────────
  track.style.display  = 'block';
  track.style.position = 'relative';
  track.style.width    = '100%';
  track.style.height   = '100%';

  // ════════════════════════════════════════════════════════
  // MOBILE — Centered 3-slot carousel (intentional navigation)
  // ════════════════════════════════════════════════════════
  if (window.innerWidth <= 768) {
    var M_CARD_W   = 248;                                   // card width (px)
    var M_PEEK_X   = Math.round(window.innerWidth * 0.70);  // side-card center offset
    var M_DUR      = 460;                                   // transition duration (ms)
    var M_HALF     = Math.floor(cards.length / 2);
    var mCurrent   = 0;
    var mAnimating = false;

    cards.forEach(function (card) {
      card.style.position   = 'absolute';
      card.style.left       = '50%';
      card.style.top        = '50%';
      card.style.marginLeft = (-M_CARD_W / 2) + 'px';
      card.style.width      = M_CARD_W + 'px';
    });

    function mSlot(offset) {
      var abs = Math.abs(offset);
      if (offset === 0) return { x: 0,                    s: 1.00, o: 1.00, z: 5 };
      if (abs === 1)    return { x: offset * M_PEEK_X,    s: 0.86, o: 0.35, z: 2 };
      return                   { x: offset * M_PEEK_X * 2, s: 0.75, o: 0,    z: 0 };
    }

    function mRender(animated) {
      var n = cards.length;
      cards.forEach(function (card, i) {
        var offset = i - mCurrent;
        if (offset >   M_HALF) offset -= n;
        if (offset <= -M_HALF) offset += n;

        var slot = mSlot(offset);
        card.style.transition = animated
          ? 'transform ' + M_DUR + 'ms ' + EASING + ', opacity ' + M_DUR + 'ms ' + EASING
          : 'none';
        card.style.transform =
          'translateX(' + slot.x + 'px) translateY(-50%) scale(' + slot.s + ')';
        card.style.opacity = slot.o;
        card.style.zIndex  = slot.z;
      });
    }

    function mNavigate(dir) {
      if (mAnimating) return;
      mAnimating = true;
      mCurrent = (mCurrent + dir + cards.length) % cards.length;
      mRender(true);
      setTimeout(function () { mAnimating = false; }, M_DUR + 50);
    }

    // Tapping a peek card navigates; center card opens its link normally
    cards.forEach(function (card, i) {
      card.addEventListener('click', function (e) {
        var n      = cards.length;
        var offset = i - mCurrent;
        if (offset >   M_HALF) offset -= n;
        if (offset <= -M_HALF) offset += n;
        if (offset !== 0) {
          e.preventDefault();
          mNavigate(offset > 0 ? 1 : -1);
        }
      });
    });

    // Touch swipe
    var touchX = 0;
    var touchY = 0;
    stage.addEventListener('touchstart', function (e) {
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchX;
      var dy = e.changedTouches[0].clientY - touchY;
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        mNavigate(dx < 0 ? 1 : -1);
      }
    }, { passive: true });

    if (prevBtn) prevBtn.addEventListener('click', function () { mNavigate(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { mNavigate(1); });

    // Paint initial positions, then unlock transitions
    mRender(false);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        cards.forEach(function (card) { card.style.transition = ''; });
      });
    });
    return;
  }

  // ════════════════════════════════════════════════════════
  // DESKTOP — Arc carousel (auto-advancing)
  // ════════════════════════════════════════════════════════

  // ── Slot definitions ────────────────────────────────────
  // x = horizontal offset from stage center (px)
  // y = vertical arc offset, positive = lower (px)
  // s = scale, o = opacity, z = z-index
  var SLOTS = {
    '-3': { x: -980, y: -88, s: 0.52, o: 0,    z: 0 }, // off-screen left  (exit)
    '-2': { x: -600, y: -68, s: 0.65, o: 0.42, z: 1 }, // far left   — highest on arc
    '-1': { x: -330, y: -30, s: 0.82, o: 0.72, z: 2 }, // left       — mid arc
     '0': { x:    0, y:   0, s: 1.00, o: 1.00, z: 5 }, // center     — arc bottom (featured)
     '1': { x:  330, y: -30, s: 0.82, o: 0.72, z: 2 }, // right      — mid arc
     '2': { x:  600, y: -68, s: 0.65, o: 0.42, z: 1 }, // far right  — highest on arc
     '3': { x:  980, y: -88, s: 0.52, o: 0,    z: 0 }, // off-screen right (entry)
  };

  var TRANS_DUR   = 800;   // ms — transition between positions
  var PAUSE_DUR   = 2600;  // ms — pause on center card after each step
  var CARD_W      = 340;   // px — matches CSS

  var timer       = null;  // auto-advance timeout handle
  var isAnimating = false; // lock during transition

  cards.forEach(function (card) {
    card.style.position   = 'absolute';
    card.style.left       = '50%';
    card.style.top        = '50%';
    card.style.marginLeft = (-CARD_W / 2) + 'px';
  });

  // ── Queue: 6 entries mapping to slots -2 … +3 ──────────
  // queue[0] → slot -2  (far left, visible)
  // queue[1] → slot -1  (left, visible)
  // queue[2] → slot  0  (center, featured)
  // queue[3] → slot +1  (right, visible)
  // queue[4] → slot +2  (far right, visible)
  // queue[5] → slot +3  (off-screen right, hidden)
  var queue    = [0, 1, 2, 3, 4, 5];
  var slotKeys = ['-2', '-1', '0', '1', '2', '3'];

  // ── Apply a slot's position to a card ───────────────────
  function setSlot(card, key, animated) {
    var p = SLOTS[String(key)];
    card.style.transition = animated
      ? 'transform ' + TRANS_DUR + 'ms ' + EASING + ', ' +
        'opacity '   + TRANS_DUR + 'ms ' + EASING
      : 'none';
    card.style.transform =
      'translateX(' + p.x + 'px) ' +
      'translateY(calc(-50% + ' + p.y + 'px)) ' +
      'scale(' + p.s + ')';
    card.style.opacity = p.o;
    card.style.zIndex  = p.z;
  }

  // ── Set initial positions (no animation) ────────────────
  queue.forEach(function (cardIdx, qi) {
    setSlot(cards[cardIdx], slotKeys[qi], false);
  });

  // ── Schedule next auto-advance ───────────────────────────
  function scheduleNext() {
    clearTimeout(timer);
    timer = setTimeout(advance, PAUSE_DUR);
  }

  // ── Advance one step (→ right) ───────────────────────────
  function advance() {
    if (isAnimating) return;
    isAnimating = true;

    var exitIdx  = queue[0]; // far left exits off-screen left
    var enterIdx = queue[5]; // hidden right enters far right

    setSlot(cards[exitIdx],  '-3', true); // animate off-screen left
    setSlot(cards[enterIdx],  '2', true); // animate +3 → +2 (fade in)

    setSlot(cards[queue[1]], '-2', true);
    setSlot(cards[queue[2]], '-1', true);
    setSlot(cards[queue[3]],  '0', true); // new center
    setSlot(cards[queue[4]],  '1', true);

    setTimeout(function () {
      setSlot(cards[exitIdx], '3', false); // teleport to hidden right — instant
      var out = queue.shift();
      queue.push(out);
      isAnimating = false;
      scheduleNext();
    }, TRANS_DUR + 80);
  }

  // ── Retreat one step (← left) ────────────────────────────
  function retreat() {
    if (isAnimating) return;
    isAnimating = true;

    var enterIdx = queue[5]; // hidden right teleports to hidden left, then enters far left
    var exitIdx  = queue[4]; // far right exits off-screen right

    setSlot(cards[enterIdx], '-3', false); // instant teleport to hidden left
    setSlot(cards[enterIdx], '-2', true);  // animate -3 → -2 (fade in from left)
    setSlot(cards[exitIdx],   '3', true);  // animate +2 → +3 (fade out right)

    setSlot(cards[queue[0]], '-1', true);
    setSlot(cards[queue[1]],  '0', true); // new center
    setSlot(cards[queue[2]],  '1', true);
    setSlot(cards[queue[3]],  '2', true);

    setTimeout(function () {
      // queue[4] already at +3 (hidden right) — no teleport needed
      var last = queue.pop();
      queue.unshift(last);
      isAnimating = false;
      scheduleNext();
    }, TRANS_DUR + 80);
  }

  if (prevBtn) prevBtn.addEventListener('click', function () {
    clearTimeout(timer);
    retreat();
  });

  if (nextBtn) nextBtn.addEventListener('click', function () {
    clearTimeout(timer);
    advance();
  });

  // ── Start after initial pause ────────────────────────────
  scheduleNext();
})();
