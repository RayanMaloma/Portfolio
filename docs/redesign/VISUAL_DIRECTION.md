# Visual Direction — Desert Coral (hybrid)
_Phase 4 — 2026-07-17. Approved lean: Desert Coral foundation · Juan-dominant art direction · Veronica's per-project color worlds · Kevin's restraint. Light, warm, expressive; never monochrome; no SaaS gradients/glassmorphism/Bento._

## 1. Color system

### Core tokens

| Token | Value | Use |
| --- | --- | --- |
| `--bg-base` | `#FAF6EF` | Page foundation (warm sand) |
| `--bg-tint` | `#F2EBDE` | Alternate section fields |
| `--bg-deep` | `#EDE3D2` | Footer/heavier fields |
| `--surface` | `#FFFDF9` | Cards, media frames |
| `--ink` | `#221D16` | Primary text (dark warm, not black) |
| `--ink-soft` | `#57503F` | Secondary text |
| `--muted` | `#8E8474` | Meta, captions |
| `--border` | `rgba(34,29,22,.14)` | Hairlines, dividers |
| `--coral` | `#FF7A50` | Primary accent (CTAs, underlines, loader) |
| `--coral-soft` | `#FFC0A3` | Washes, hover fields |
| `--coral-deep` | `#E1490F` | Hover/pressed, small text on light (AA) |
| `--cobalt` | `#2B4BF2` | Secondary accent (links, focus rings, counter-moments) |
| `--cobalt-deep` | `#1E36BC` | Cobalt text on light (AA) |
| `--focus` | `--cobalt` | Focus outlines (2px offset 2px) |

### Project color worlds (Veronica layer)

Each project scope (`[data-theme="…"]`) overrides three tokens: `--accent`, `--accent-deep` (AA text-safe), `--wash` (light field the page fades into).

| Theme | Accent | Deep | Wash | Note |
| --- | --- | --- | --- | --- |
| `autorag` | `#2B4BF2` | `#1E36BC` | `#E7EBFE` | Cobalt = flagship claims the secondary brand accent |
| `dshopper` | `#0E8F62` | `#0A6B4A` | `#DFF2E9` | **Provisional — verify against actual product colors** |
| `csc` | `#0A6E93` | `#08526E` | `#E0EFF5` | **Provisional — verify against club brand** |
| `playground-rknh` | `#C89A3B` | — | `#F6ECD8` | Derived from RKNH identity assets |
| `playground-routine` | `#CB2B2B` | — | `#F9E4E0` | |
| `playground-tamakan` | `#DE6495` | — | `#FBE7EF` | |
| `playground-mosbah` | `#014C47` | — | `#DFEEEC` | |

### Color rules
- Gradients: **none** decoratively. The only permitted transitions are scroll-linked background *cross-fades between flat wash colors* and photographic color washes over imagery (Juan's peach-wash treatment).
- Saturated accents are always paired with `--ink` text; `--coral` on `--bg-base` is decorative-only below 3:1 (use `--coral-deep` for text ≥ AA 4.5:1; verified: `#E1490F` on `#FAF6EF` ≈ 4.6:1, `#221D16` on `#FAF6EF` ≈ 15:1, `#1E36BC` on `#FAF6EF` ≈ 8.2:1).
- Dark sections are allowed as *moments* (e.g. AutoRAG media frames) but the site never flips to a dark theme.

## 2. Typography

| Role | Face | Source/License | Weights | Fallback |
| --- | --- | --- | --- | --- |
| Display | **Clash Display** | Fontshare (ITF Free Font License — free, self-hostable) | 500, 600, 700 | `Impact, sans-serif` (metric-tolerant) |
| Body/UI | **General Sans** | Fontshare (same license) | 400, 500, 600 | `system-ui` |
| Meta/labels | General Sans 500, uppercase, tracked +6% | — | — | — |
| Future Arabic | Alexandria (display) + Cairo (body) — Google Fonts | documented only, not shipped in v1 | | |

Rationale: Juan pairs a characterful custom display (Goga) with deliberately plain Arial; Clash Display gives the same warm, slightly idiosyncratic personality legally, and General Sans stays neutral without feeling SaaS (what Inter would). Both self-hosted woff2, `font-display: swap`, preloaded display woff2 only. Tradeoff vs Goga/PP Mori: less exotic, zero cost, excellent hinting.

### Fluid type scale (clamp, 390px→1440px)

| Token | Min | Max | Use |
| --- | --- | --- | --- |
| `--text-hero` | 64px | 176px | Hero wordmark, footer wordmark (vw-driven, line-height 0.92) |
| `--text-display` | 40px | 88px | Section headlines, case titles (lh 1.0) |
| `--text-h3` | 28px | 44px | Sub-headlines (lh 1.1) |
| `--text-lead` | 18px | 24px | Intros, gist paragraphs (lh 1.45) |
| `--text-body` | 16px | 18px | Body (lh 1.6) |
| `--text-meta` | 12px | 13px | Labels, meta rows (lh 1.3, uppercase) |

Display faces get `letter-spacing: -0.02em`; meta gets `+0.06em`.

## 3. Space, grid, radius, elevation

- **Spacing scale:** 4-base: 4/8/12/16/24/32/48/64/96/128/192. Section rhythm token `--space-section: clamp(96px, 14vh, 176px)`.
- **Grid:** 12-col fluid, `--container: 1440px` max, gutter `clamp(16px, 2.5vw, 32px)`. Editorial layouts intentionally break the grid (bleeds, overlaps) but always *from* it.
- **Radius:** `--r-s: 10px` (chips), `--r-m: 18px` (cards), `--r-l: 28px` (media frames), `--r-pill: 999px` (nav, buttons). No mixed radii per component.
- **Elevation:** shadows nearly invisible — `0 1px 2px rgba(34,29,22,.06), 0 12px 40px rgba(34,29,22,.08)` max. Depth comes from overlap and color, not shadow (anti-glassmorphism rule).
- **Z-layers:** `--z-nav: 100`, `--z-loader: 200`, `--z-toast: 300`, content layering 1–10 documented per composition.
- **Image treatment:** media lives in `--surface` frames (browser chrome / phone chrome / plain rounded) OR full-bleed with a warm wash overlay (`--coral-soft` at 12–20% multiply) — the Juan treatment. Never raw drop-shadowed screenshots.
- **Iconography:** none decorative. Functional icons only (arrows, close, external): 1.5px stroke, drawn as inline SVG, inherit `currentColor`. Arrows are the personality carrier (→ ↗ ↓).

## 4. Motion personality (tokens; full choreography in MOTION_MAP.md)

| Token | Value | Use |
| --- | --- | --- |
| `--dur-1` | 180ms | Micro (hover, chips) |
| `--dur-2` | 420ms | Component reveals |
| `--dur-3` | 800ms | Section entrances, masks |
| `--dur-4` | 1200ms | Hero choreography, footer wordmark |
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Default (confident settle) |
| `--ease-inout` | cubic-bezier(0.83, 0, 0.17, 1) | Wipes, panels |
| `--ease-spring` | GSAP `back.out(1.4)` | Sticker/card moments only |

Personality: **calm confidence with warm surprises** — restrained by default (Kevin), one playful beat per viewport (Juan/Veronica), never bouncy everywhere, nothing blocks scroll or navigation.

## 5. Anti-patterns (hard rules)

No uniform dark theme · no pure black/white · no SaaS gradient meshes · no glassmorphism blur cards · no Bento grids · no floating blob shapes · no drop-shadow screenshot galleries · no scroll-jacking · no animation on every element · no cursor-replacement that hides the OS cursor (custom cursor may *accompany*, decision deferred to Phase 6 motion refinement).
