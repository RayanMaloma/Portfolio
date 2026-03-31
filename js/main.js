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

// ─── Project Showcase — Arc Carousel ──────────────────────
(function () {
  var stage = document.getElementById('showcase-stage');
  var track = document.getElementById('showcase-track');
  if (!stage || !track) return;

  // Mobile: CSS handles layout, JS stays out
  if (window.innerWidth <= 768) return;

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
  var EASING      = 'cubic-bezier(0.37, 0, 0.63, 1)';
  var CARD_W      = 340;   // px — matches CSS

  var cards       = Array.from(track.children);
  var timer       = null;  // auto-advance timeout handle
  var isAnimating = false; // lock during transition

  // ── Prepare track and cards for absolute arc layout ─────
  track.style.display  = 'block';
  track.style.position = 'relative';
  track.style.width    = '100%';
  track.style.height   = '100%';

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

  // ── Arrow buttons ────────────────────────────────────────
  var prevBtn = document.getElementById('showcase-prev');
  var nextBtn = document.getElementById('showcase-next');

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
