# PROJECT OVERVIEW

Personal portfolio of **Rayan Al-Omaireeni** — Product Designer (UX · UI · AI), CIS graduate @ King Saud University.

Full redesign in progress on branch `redesign/astro` (V4). The V3 site is preserved under `legacy/` and in git history. **All redesign decisions, phases, and pending questions live in `docs/redesign/` — read `DECISION_LOG.md` first.** That log is the source of truth; do not re-litigate approved decisions.

## DIRECTION (approved)

- **Desert Coral** visual system: warm off-white foundations (`#FAF6EF`), dark warm ink (`#221D16`), coral primary (`#FF7A50`), electric cobalt secondary (`#2B4BF2`), saturated per-project color worlds.
- Art direction weighting: Juan Mora 50% · Veronica Zubakova 30% · Kevin Hilgendorf 20%. Light, expressive, editorial — never monochrome, never dark-theme.
- Banned: SaaS gradients, glassmorphism, Bento grids, floating blobs, drop-shadow screenshot galleries, scroll-jacking.
- Typography: Clash Display (display) + General Sans (body), self-hosted in `public/fonts/`.
- All design tokens in `src/styles/tokens.css` — never hardcode colors/spacing/durations in components.

## TECH STACK (approved)

- **Astro (static output)** + reusable components + content collections.
- **GSAP + ScrollTrigger**; **Lenis** on desktop fine-pointers only.
- No React unless a component genuinely requires it. No Three.js/WebGL/Spline/Lottie/Rive without the 5-point proposal (reason, perf cost, asset, mobile fallback, lighter alternative).
- `npm run dev` / `npm run build`. Deployment host TBD — keep the build host-agnostic.

## STRUCTURE

- Pages: Home (`/`), case studies (`/work/autorag|dshopper|csc`), `/playground`, `/about`.
- Section build order and per-section specs: `docs/redesign/INFORMATION_ARCHITECTURE.md` §3.
- **Section approval protocol:** every major section is proposed to Rayan and approved before implementation. Do not build unapproved sections.
- Motion rules: `docs/redesign/MOTION_MAP.md`. Items marked ⏳ are unverified against reference recordings — do not invent choreography.

## HARD RULES

- English-only v1, but **RTL-ready**: CSS logical properties only; every UI string in `src/content/ui.json`; lang/dir from `src/config/site.ts`. Arabic dictionary archived in `docs/redesign/AR_CONTENT_ARCHIVE.md`.
- `prefers-reduced-motion` honored everywhere; content never depends on JS animation.
- Public contact email is `rayanomaireeni@gmail.com` — never the Nojom work email.
- The hero desk photo is Rayan's real photograph (IMG_3793, decision 25) — the AI-interim era is over; keep `object-position` tuned to the subject on the right.
- Case-study copy is written from repository evidence (screens, CV, live products) — keep it honest; never fabricate quantitative results. Rayan's interview answers (`docs/redesign/CASE_STUDY_CONTENT_REQUIREMENTS.md`) refine it further when provided.
- Do not touch `legacy/` except to read. Do not commit to `main` — redesign work stays on `redesign/astro` until launch.
