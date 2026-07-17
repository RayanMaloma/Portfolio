# Information Architecture — FINAL PROPOSAL
_Phase 3 — 2026-07-17. Approved decisions applied: EN-only (RTL-ready structure), 3 flagship case studies, Playground page, Astro static output._

## 1. Sitemap

| Route | Page | Purpose | Notes |
| --- | --- | --- | --- |
| `/` | Home | Expressive introduction, selected work, positioning, contact | The experience centerpiece |
| `/work/autorag/` | Case study | Flagship: AI product, live prototype | Cobalt/violet color world |
| `/work/dshopper/` | Case study | Flagship: mobile product design | Own color world (verify brand color) |
| `/work/csc/` | Case study | Flagship: web platform UI/UX | Own color world (verify brand color) |
| `/playground/` | Playground | Visual-design range: RKNH, Routine, Tamakan, Mosbah Omar | One expressive gallery page, per-item accent colors |
| `/about/` | About | Personal story, skills, tools, experience, resume | Veronica-energy, personal & colorful |
| `/404` | Not found | Branded 404 | Small, playful |

**Cut:** separate Work index (Home carries the 3 flagships + link to Playground); separate Contact page (contact is a full section + footer on every page). Resume remains a PDF at `/assets/resume/rayan-al-omaireeni-cv.pdf`.

**URL migration:** old URLs (`/pages/autorag.html` etc.) get redirects — `_redirects` file (Netlify) plus static meta-refresh stubs (host-agnostic fallback). Mapping:

| Old | New |
| --- | --- |
| /pages/autorag.html | /work/autorag/ |
| /pages/dshopper.html | /work/dshopper/ |
| /pages/csc.html | /work/csc/ |
| /pages/rknh.html | /playground/#rknh |
| /pages/routine.html | /playground/#routine |
| /pages/tamakan.html | /playground/#tamakan |
| /pages/mosbah.html | /playground/#mosbah |

## 2. User journey

Recruiter/client lands on Home → understands identity + positioning in 5 s (hero) → sees proof (3 flagship cards) → optionally samples personality (Playground teaser, About teaser) → contact. Case studies serve deep evaluation; Playground serves breadth; About serves trust and personality. Every page ends with the same contact/footer block so no dead ends.

## 3. Homepage section architecture (8 sections)

Section-level reference mapping percentages hold overall: Juan 50 / Veronica 30 / Kevin 20.

---

### 3.1 Loader
- **Objective:** a 1-second branded breath that sets tone (warm, crafted), masks font/media load. Never a wait.
- **Primary ref:** Juan Mora (branded micro-loader, progress bar). **Secondary:** Veronica (a single witty line).
- **Composition:** full-viewport warm sand field; small centered wordmark "Rayan ✦ Al-Omaireeni"; hairline coral progress bar along top edge; one playful microcopy line beneath the wordmark.
- **Content:** wordmark + one line (e.g. "warming up the coral"). Final copy in Phase 6.
- **Motion concept:** progress bar width tracks real asset readiness; exit = full-screen coral panel wipes up and reveals hero (which starts its entrance mid-wipe). Hard cap 1.5 s; session-cached — shows only on first visit per session. _Exit style pending Juan recording._
- **Technical:** inline CSS + tiny inline JS in `Base.astro` head (no GSAP dependency for first paint); GSAP takes over for the wipe if loaded.
- **Assets:** A (code-native).
- **Mobile:** identical, shorter (1 s cap).
- **Reduced motion:** loader skipped entirely; content renders immediately.
- **Decisions needed:** none (copy comes with Phase 6 hero approval).

### 3.2 Navigation
- **Objective:** minimal wayfinding that never competes with the content; instant access to Work/About/contact.
- **Primary ref:** Juan Mora (centered pill: About · mark · Work). **Secondary:** Kevin (restraint).
- **Composition:** centered floating pill with three items: **Work · ✦ mark · About**; left edge of viewport: small wordmark "Rayan Al-Omaireeni"; right edge: Email · LinkedIn (text links). Pill gains a soft surface + blur only after scroll. Active page indicated by a coral dot. On case studies the pill adds a "← All work" affordance.
- **Content:** none new. "Work" scrolls to Selected Work on Home, routes to `/#work` elsewhere.
- **Motion:** pill slides down on load after loader; hide-on-scroll-down / reveal-on-scroll-up; magnetic hover on items (small translate toward cursor). _Magnetic strength pending Kevin recording._
- **Technical:** `Nav.astro` + small vanilla JS module; no GSAP needed (IntersectionObserver + rAF).
- **Assets:** A. Requires the ✦/monogram mark (see Asset Manifest — code-native SVG first pass).
- **Mobile:** pill persists (it is small); left wordmark collapses to "R.A."; Email/LinkedIn move into footer only. No hamburger — sitemap is 3 destinations.
- **Reduced motion:** static pill, no hide/reveal, no magnetism.
- **Decisions needed:** none.

### 3.3 Hero
- **Objective:** in five seconds: name, role (Product Designer · UX/UI · AI), and taste — expressive typography + real person + real product UI.
- **Primary ref:** Juan Mora (media-driven hero, UI card inside wordmark). **Secondary:** Veronica (playful arrangement).
- **Composition:** three candidate compositions presented separately (see hero options deliverable). All share: warm sand foundation, giant display wordmark, real portrait cutout, 1–2 floating project-UI cards, coral + cobalt accents, kicker line "Product Designer — UX · UI · AI", location/availability microline ("Riyadh · open to product roles").
- **Content:** name, kicker, one-line bio (rewritten from current hero bio), scroll cue.
- **Motion:** entrance choreography (masked type reveal → portrait rise → cards settle); scroll: portrait + cards parallax at different rates, wordmark drifts; cursor: cards tilt ≤4° toward pointer. _All timings pending recordings; concept only._
- **Technical:** GSAP (entrance timeline) + ScrollTrigger (parallax); CSS transforms only, no canvas.
- **Assets:** C — **hero portrait** (full photography brief in ASSET_MANIFEST.md); B — UI cards cropped from existing AutoRAG/D Shopper screenshots; A — typography, color fields, placeholder silhouette until photo arrives.
- **Mobile:** stacked: kicker → name (smaller but still oversized, may break into 2–3 lines) → portrait (smaller, anchored bottom) → one UI card only; parallax removed, entrance kept.
- **Reduced motion:** everything renders in final position, opacity-only fade.
- **Decisions needed:** ① choose hero composition Option 1/2/3; ② confirm the availability microline text and whether to include it.

### 3.4 Selected Work
- **Objective:** prove product-design capability with three flagship projects; each feels like entering that project's world.
- **Primary ref:** Juan Mora (editorial, media-rich blocks). **Secondary:** Veronica (per-project color worlds) + Kevin (role tags, "View case →" clarity).
- **Composition:** section head "Selected Work (01–03)" + full-width stacked project blocks, alternating media/text sides. Each block: large media frame (browser frame for AutoRAG/CSC, phone mockup for D Shopper — evolving the existing `phone.js` pattern), title at display scale, role + year + status meta row, 1-line summary, "View case →". **The page background cross-fades to each project's wash color as its block enters** (Veronica's color worlds on a light base).
- **Content:** per project: title, role, year, status, 1-line summary, 1 hero image + 2 supporting screens. From existing assets + case-study content interview.
- **Motion:** media clip-path reveal on enter; type slides from under mask; hover: media zooms ~1.04 + accent underline draws + arrow nudges; background color interpolation scroll-linked. _Hover pattern pending Juan Work-page recording._
- **Technical:** ScrollTrigger for reveals + background interpolation; `ProjectCard.astro` fed by content collection; project theme via CSS custom-property scope (`[data-theme="autorag"]`).
- **Assets:** B (existing screenshots re-encoded); C (D Shopper + CSC brand colors/logos if they exist, else I derive).
- **Mobile:** single column, media above text, background color transitions kept (cheap), hover states become tap affordances (arrow always visible).
- **Reduced motion:** static blocks, no reveals, flat wash backgrounds per block (no interpolation).
- **Decisions needed:** ① confirm project accent colors: AutoRAG cobalt `#2B4BF2` — derived from its actual UI?; D Shopper — does it have a brand color?; CSC — official club color? (If none exist, I assign from the palette and note it.)

### 3.5 Positioning — "What I do"
- **Objective:** make the Product-Designer positioning explicit; recruiters skim this.
- **Primary ref:** Kevin (numbered pillars + sub-capabilities). **Secondary:** Juan (service-card tone: outcomes, not deliverable lists).
- **Composition:** left: section statement ("I design products end-to-end — from ambiguous idea to shipped interface"); right: three numbered rows — **01 Product & UX** (research, flows, IA, prototyping) · **02 Interface & Systems** (UI, design systems, responsive craft) · **03 AI-era design** (AI product patterns, prompt-driven UX, my CIS/engineering background). Each row expands slightly on hover to reveal sub-capabilities.
- **Content:** rewritten from current bio + CV. Needs Rayan's confirmation of the three pillar names.
- **Motion:** rows stagger in; hairline dividers draw; hover expand (height + accent). 
- **Technical:** CSS + IntersectionObserver; GSAP not required.
- **Assets:** A.
- **Mobile:** rows always expanded, no hover dependence.
- **Reduced motion:** no stagger/draw; static.
- **Decisions needed:** ① approve the three pillar names/framing (especially claiming "AI-era design" as a pillar).

### 3.6 Playground teaser
- **Objective:** show visual range and personality without promoting graphic projects to case studies; route to `/playground/`.
- **Primary ref:** Veronica (joyful density, saturated color). **Secondary:** Juan (marquee/motion strip energy).
- **Composition:** full-bleed horizontal marquee band of visual-work cards (RKNH, Routine, Tamakan, Mosbah crops) at slight random rotations like scattered prints; oversized outlined title "PLAYGROUND" overlapping the band; "Where I let the graphic designer out →" caption.
- **Content:** 8–12 best crops from the 4 graphic projects (curated during implementation).
- **Motion:** slow auto-marquee (~25 s/loop), pauses on hover; scroll slightly influences marquee speed; cards straighten on hover.
- **Technical:** CSS marquee (duplicated track) + tiny JS for hover/scroll-speed; GSAP optional.
- **Assets:** B (existing images, curated + re-encoded).
- **Mobile:** marquee becomes a native horizontal scroll-snap strip (user-driven, no auto-motion).
- **Reduced motion:** static 4-up grid of one card per project.
- **Decisions needed:** none.

### 3.7 About teaser
- **Objective:** humanize; set up the About page; the "graphic design → product design at KSU" arc in one glance.
- **Primary ref:** Veronica (personal, anti-corporate). **Secondary:** Juan ("Learn more about me" bridge).
- **Composition:** coral-washed band; left: portrait outtake or memoji as a "sticker" with a white die-cut border, slightly rotated; right: 2-sentence story + 3 quick facts as pill chips (CIS @ KSU · Graphic → Product · Riyadh) + "More about me →".
- **Content:** condensed story (from About page content, Phase 6); needs a casual second photo (C, optional — memoji fallback).
- **Motion:** sticker rotates ~3° upright on enter; chips stagger in.
- **Technical:** CSS + IO.
- **Assets:** C optional (casual photo); B fallback (memoji).
- **Mobile:** stacked, sticker smaller.
- **Reduced motion:** static.
- **Decisions needed:** ① memoji's future — keep as a recurring "sticker" character alongside the real portrait, or retire it entirely?

### 3.8 Contact + Footer
- **Objective:** memorable close + zero-friction contact.
- **Primary ref:** Juan (giant closing wordmark, footer as an experience). **Secondary:** Veronica (direct links, warmth).
- **Composition:** headline "Let's build something people remember" (rewrite of current "Let's build something real" — final copy in Phase 6); huge email link with copy-to-clipboard pill ("Copy my email" — Juan pattern); links row: LinkedIn · WhatsApp · Behance? (confirm) · Resume ↓; beneath: full-bleed baseline wordmark "RAYAN" cropped by the viewport bottom edge; credits microline ("Designed & built by me — Astro · GSAP"), © 2026.
- **Content:** existing contact links (gmail primary, per decision #6).
- **Motion:** wordmark rises from below the fold as footer enters; letters do a subtle wave on hover; "copied!" toast on email copy. _Footer interaction on Juan's site pending recording._
- **Technical:** GSAP for wordmark reveal; clipboard API.
- **Assets:** A.
- **Mobile:** same, wordmark scales down, WhatsApp becomes primary tap CTA.
- **Reduced motion:** wordmark static, toast still works.
- **Decisions needed:** ① does Rayan have a Behance/Dribbble to include? ② WhatsApp — keep public on the new site, yes/no?

---

## 4. Case-study template architecture (`/work/*`)

Structured and credible (Kevin) with the project's color world (Veronica) and editorial hero (Juan):

1. **Case hero** — project wordmark/title at display scale on the project's wash color; meta strip (role · team · timeline · status · client).
2. **The gist** — 3-sentence TL;DR + impact highlights row (recruiters may read only this).
3. **Context & problem** — narrative + constraint chips.
4. **Process** — 2–4 subsections with artifacts (flows, wireframes, iterations); honest, not fake-Dribbble process.
5. **Key decisions** — 2–4 "decision cards": what was chosen, what it was traded against, why.
6. **The solution** — media-forward walkthrough: browser/phone frames, full-bleed screens. AutoRAG embeds the **live prototype** here (existing lazy-load + mobile-fallback pattern is kept).
7. **Impact & lessons** — results (metrics where they exist, honest proxies where not) + what I'd do differently.
8. **Next case** — full-width "next project" card in the next project's color world (also serves as the page transition surface).

Playground page: masonry/collage of the 4 projects, each an anchor section with a short intro line + gallery; per-item accent colors; no fake case-study framing.

About page: portrait + story (graphic → product arc), skills/tools grid, experience timeline (CV-derived), personal touches section, resume download, contact block.

## 5. RTL-readiness rules (build now, activate later)

- All layout in CSS **logical properties** (`margin-inline-start`, `padding-inline`, `inset-inline`) — no hardcoded left/right except intentional bleed effects, which get `[dir="rtl"]` notes.
- All copy lives in content collections / a `src/content/ui.json` strings file — zero hardcoded strings in components.
- `lang`/`dir` set from a single site config constant.
- Type scale tokens keep Arabic-compatible line-height headroom (Arabic needs taller lines at display sizes).
- Existing AR translation dictionary archived verbatim at `docs/redesign/AR_CONTENT_ARCHIVE.md` during migration (source: `js/i18n.js`).
- Font pipeline structured so an Arabic pair (proposed: Alexandria display / Cairo body) can be added as tokens without touching components.
