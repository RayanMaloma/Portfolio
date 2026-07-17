# Reference Analysis
_Phase 2 — DRAFT (2026-07-17). Based on direct live inspection of the three sites' DOM, computed styles, content and initial render. **Motion, hover, transitions and full scroll compositions could not be observed** (see §5 — evidence requested from Rayan). Do not treat motion notes below as verified._

## 1. What was directly verified

### Juan Mora — juanmora.co (50% weight)
- **Stack:** Webflow + GSAP + ScrollTrigger + Lenis smooth scroll + AE/Lottie (site credits list: Figma, Webflow, GSAP, AE/Lottie, Lenis). 7 `<video>` elements + 4 Lottie animations on the homepage alone — motion is media-driven, not just CSS.
- **Palette (computed):** warm off-white base `#FAF6EF`; peach/coral `#FFBC95` (dominant accent — used as loader bar, text washes, surfaces); electric cobalt `#2E54FE`; ink `#333333`; warm gray `#96908C`. Layered full-screen tint/glow overlays (`orange-intro`, `top-glow`, `black-overlay`) sit above the content for color atmosphere.
- **Type:** custom display font **"Goga"** for expressive headings; plain Arial for supporting text — the contrast between a characterful display face and a deliberately neutral body face is itself the typographic idea.
- **Loader:** full-viewport warm overlay, tiny centered "Juan • Mora", peach progress bar at the top.
- **Hero (screenshot captured):** full-bleed warm-monochrome photo/video of Juan at his desk; giant bottom-aligned display wordmark "Juan ▯ Mora" with a **UI-screenshot card embedded inline between the words**; centered pill nav (About · logo · Work); socials top-right (Email, in, x, Be); everything bathed in the peach wash.
- **Homepage narrative (from extracted copy, in order):** hero intro → "16 years making users click and scroll my designs" (playful click/scroll moment) → "I help companies succeed on projects like:" 4 service cards → "Curious?… check out my Work / Or keep scrolling" → "Good design takes time — and working with me saves it" → "perspective + sharp instincts" + 4 value statements → "Learn more about me" → "Let's build something people remember" CTA + email → site-credits list → giant footer wordmark + "Morable Design Studio [Coming Soon]" (footer contains a video container).
- **IA:** 3 pages only — Home, Work, About. Contact is a mailto, not a page.

### Veronica Zubakova — veronicazubakova.com (30% weight)
- **Stack:** WordPress custom theme + GSAP + ScrollTrigger + SplitType + SmoothScroll + jQuery.
- **Palette (computed):** near-black base `#131313`, off-white text `#F5F5F5`, and **six saturated project-card colors**: royal blue `#3A54B1`, pink `#DE6495`, red `#CB2B2B`, teal `#0A6E93`, mustard `#CB952B`, deep green `#014C47`. Every project gets its own color world.
- **Type:** **Manrope** for everything + a script accent face ("Luxurious Script") — single family, personality via scale/spacing/arrangement, plus one handwritten counterpoint.
- **Loader:** black screen, "THIS WEBSITE IS BUILT ON HAPPY ENERGY", then a cat-meme GIF — humor as a first impression.
- **Homepage content:** stretched-letterspace kicker "D I G I T A L  A N D  UX/UI  D E S I G N E R", giant name, socials as top bar (Instagram/Behance/LinkedIn), SELECTED PROJECTS list with year + role tags (mobile app / UX-UI / web / no-code), OTHER WORKS, ABOUT ME, CV (links to a Notion page!), "6 YEARS OF EXPERIENCE", CONTACT ME. Awwwards submission badge.
- **IA:** Home, /works, /about, CV (external Notion), case studies under /projects/* (6 projects).

### Kevin Hilgendorf — kevinhilgendorf.com (20% weight)
- **Stack:** Webflow + GSAP + **2 WebGL canvases** (3D moments, no global THREE — likely a packaged scene). 
- **Palette (computed):** warm light gray `#EBEAE6` base, near-black `#0A0A0A`; essentially monochrome — premium feel comes from type, spacing and motion, not color.
- **Type:** **PP Mori** (paid Pangram Pangram face) + a Times/serif accent — a grotesque/serif contrast.
- **Homepage structure (extracted, in order):** name + "Product designer & Webflow Developer" + vision line → About (Berlin) → Awards (Awwwards Honorable Mention, Webflow Awards finalist) → "Tools I love" marquee (Figma, Webflow, Flora, Jitter, Photoshop, Spline, Notion, Claude, Arc, Slack, Cursor) → Services numbered 01–03, each with sub-capability lists (Product Design / Webflow Development / Creative Direction) → Work list of 7 projects with role tags + "View Case →" → Contact + footer. Long one-page structure.

## 2. Comparison matrix (verified areas only — motion columns pending evidence)

| Design area | Juan Mora | Veronica Zubakova | Kevin Hilgendorf | Direction for Rayan's portfolio |
| --- | --- | --- | --- | --- |
| Background | Warm off-white #FAF6EF + peach washes | Near-black + saturated color blocks | Warm light gray #EBEAE6 | **Warm light foundation** (Juan), saturated accents (Veronica) |
| Color strategy | 2 bold accents (peach + cobalt) over cream | Per-project saturated color worlds | Monochrome | 2 core accents + per-project color worlds |
| Display type | Custom face (Goga), giant scale, media embedded in wordmark | One family (Manrope) pushed hard + script accent | PP Mori + serif accent | Characterful free display face + neutral body; media-in-type hero moment |
| Nav | Centered pill (About · logo · Work) | Text links as top bar | Minimal anchors | Centered pill nav, 2–3 destinations max |
| Loader | Branded micro-loader w/ progress bar | Humor line + meme | (not verified) | Short branded moment (<1.5 s), skippable |
| Services/positioning | 4 project-type cards | Role tags per project | Numbered services with sub-lists | Positioning strip w/ 3 pillars (Product · UX/UI · AI) |
| Project presentation | Editorial, media-rich | Colored cards + year/role meta | Role-tag list + View Case | Editorial cards, each in its own color world, role+year meta |
| Personality | Confident, warm, crafted | Joyful, irreverent | Precise, technical | Warm + playful, credibility kept for case studies |
| Footer | Giant wordmark + video + studio teaser | Contact + socials | Contact block | Large memorable type-driven closing |
| IA | 3 pages | Home/Works/About + 6 case studies | One-pager + case pages | Home + case studies + About + Playground (see IA doc) |
| Site credits | "Website made using: …" list | Awwwards badge | Awards section | Small "built with" credit line in footer |

## 3. Section-by-section influence map (proposal — to validate in Phase 3)

| Portfolio section | Primary ref | Secondary ref | Intended adaptation |
| --- | --- | --- | --- |
| Loader | Juan | Veronica | Tiny branded intro, one witty line, hard 1.5 s cap, skips on reduced-motion |
| Nav | Juan | — | Centered pill: Work · mark · About (+ AR/EN toggle if bilingual is kept) |
| Hero | Juan | Veronica | Giant expressive name with a UI-card embedded in the wordmark; warm light bg; playful kicker |
| Selected work | Juan | Kevin | 3 flagship editorial blocks (AutoRAG, D Shopper, CSC), each with its own accent world + role/year meta |
| Positioning strip | Kevin | Juan | 3 numbered pillars with sub-capabilities; grounded, scannable |
| Playground (graphic work) | Veronica | Juan | Colorful, dense, joyful collage/marquee for the 4 graphic projects |
| About teaser | Veronica | Juan | Personal, colorful, anti-corporate |
| Motion system | Kevin | Juan | Premium restrained motion; scroll-linked reveals; no gimmicks |
| Footer | Juan | Veronica | Oversized closing wordmark + contact + credits line |
| Case studies | Kevin | Juan | Structured, readable, credible; shared identity, per-project theme tokens |

## 4. What could NOT be inspected (environment limitation)

The in-app browser has `requestAnimationFrame` frozen (0 frames/sec measured). All three sites drive scroll, reveals, loaders and transitions through GSAP/Lenis/Webflow-IX rAF loops, so: scroll-linked compositions, pinned scenes, hover states, cursor behavior, page transitions, 3D/WebGL moments, and every layout below each hero render as blank/hidden. Mobile behavior also unverified. Loader bypass + DOM extraction is how the data above was obtained.

## 5. Evidence requested from Rayan (exact captures)

1. **juanmora.co — homepage, desktop ≥1440 px:** one continuous slow-scroll screen recording, top → footer (30–60 s), including the loader from a fresh reload and a pause at the footer.
2. **juanmora.co — work.html, desktop:** scroll recording (15–30 s) + hover over 2–3 project cards, then click one project (to capture the page transition).
3. **juanmora.co — about.html, desktop:** full-page screenshot (scrolling capture is fine).
4. **juanmora.co — homepage, mobile (real phone, ~390 px):** scroll-through recording (20–40 s).
5. **veronicazubakova.com — homepage, desktop:** scroll recording (20–40 s) including hovering 2–3 SELECTED PROJECTS cards.
6. **veronicazubakova.com — one case study (/projects/ticket-to-go/), desktop:** scroll recording (15–30 s).
7. **kevinhilgendorf.com — homepage, desktop:** scroll recording (30–60 s) covering hero → services → work → contact, and separately ~5 s of moving the mouse around the hero without scrolling (cursor/3D reaction).
8. **kevinhilgendorf.com — homepage, mobile (~390 px):** scroll-through recording (20–30 s).

Screen recordings can be low-res phone captures of the monitor if easier — timing/feel matters more than pixels.
