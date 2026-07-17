# Asset Manifest
_Phase 5 — 2026-07-17. Categories: **A** code-native · **B** existing in repo · **C** user-provided · **D** custom-created · **E** external-tool._

## 1. Summary table

| # | Asset | Cat | Needed for | Status |
| --- | --- | --- | --- | --- |
| 1 | Hero portrait (cutout source) | **C** | Hero | **Briefed below — blocking final hero only; labeled placeholder until then** |
| 2 | Casual/playful second photo | C (optional) | About, About-teaser sticker | Memoji is the fallback |
| 3 | Project UI cards (2–3 crops) | B | Hero, case studies | From `assets/autorag/`, `assets/D Shopper/` |
| 4 | All 95 project images → WebP/AVIF derivatives | B→A | Everywhere | `npm run optimize` (sharp), production budget ≤ 6MB total |
| 5 | Curated Playground crops (8–12) | B | Playground teaser + page | Curation during step 8/10 |
| 6 | ✦ monogram / personal mark | A→D | Nav, favicon, loader | v1 = code-native SVG typographic mark; upgrade to drawn mark later if desired |
| 7 | Favicon set + OG share image | A | SEO | Generated from identity after hero approval |
| 8 | Fonts: Clash Display + General Sans woff2 | A | Global | Fontshare download, self-hosted, license file committed |
| 9 | Case-study content (3 interviews) | **C** | /work/* | See CASE_STUDY_CONTENT_REQUIREMENTS.md |
| 10 | D Shopper & CSC brand colors/logos | C (if exist) | Color worlds | Else I derive from screenshots and mark provisional |
| 11 | Resume PDF | B | Footer/About | Exists; confirm it's current (file dated pre-redesign) |
| 12 | AutoRAG prototype URL | B | AutoRAG case | Live; confirm it will stay online |
| 13 | 3D / Lottie / video garnish | E | — | **None in v1** per approved technical direction |

Placeholder policy: any C-asset slot renders a clearly labeled placeholder (dashed border + "AWAITING ASSET: name") — impossible to mistake for final.

## 2. Hero portrait — photography & production brief (Asset #1)

**Purpose:** the portrait is the hero's central layer, sandwiched inside giant typography with UI cards (Juan Mora pattern, your identity). It will be cut out from its background, so the shoot optimizes for *clean edges and pose*, not for background or vibe.

**What to shoot**
- **Framing:** waist-up (head to just below the waist). Head NOT cropped — leave ≥ 20% empty space above the hair and ≥ 15% on each side of the shoulders/elbows. Shoot wider than feels right; I crop, you don't.
- **Pose — capture all four, I'll choose per composition:**
  1. Facing camera, slight 10–15° body turn, arms crossed loosely, calm confident near-smile.
  2. Same stance, one hand adjusting sleeve/watch, looking at camera.
  3. Body 3/4 turned, face looking off-camera to the left, relaxed (profile-ish energy for side compositions).
  4. One playful frame: genuine laugh or mid-gesture (About page / sticker use).
- **Camera angle:** lens at your chest height, dead level (no up/down tilt — tilt fights the typography grid). Distance ≥ 1.5m, zoom ~2× (or 50mm+ equivalent) to avoid wide-angle face distortion. Portrait orientation.
- **Clothing:** solid mid-tone colors — cream, warm brown, muted terracotta, navy, or off-black. Best: a texture (knit/overshirt) in a warm neutral. Avoid: pure white, pure black, fine stripes/checks (moiré), large logos, glossy fabrics. Simple frames/glasses fine if worn habitually.
- **Lighting:** big soft single source — daylight from a large window at ~45°, you 1–2m from a plain wall. No overhead ceiling light as main. No harsh phone flash. Soft shadow side is good (gives the cutout depth).
- **Background:** any *plain, evenly lit* wall at least one tone different from clothing and hair (light gray/beige ideal). It will be removed — it just needs to not blend with you. Stand ≥ 1m in front of it (avoids contact shadows).
- **Hair edges:** the cutout's success lives here — even background light behind the head, no backlight blowout.

**Technical delivery**
- Device: modern phone main lens is fine (no ultrawide, no portrait-mode/fake-bokeh — I need real edges).
- Resolution: ≥ 12MP original (≈ 3000×4000). Send the **original files, uncompressed** (AirDrop/Drive, not WhatsApp).
- Format: HEIC or JPG straight off the camera; no filters, no beauty mode, no prior background removal.
- Quantity: 3–5 frames per pose (blink insurance).
- Naming/destination (I handle): → `hero-portrait-raw-{n}.heic`; final cutouts produced by me as `public/assets/hero/hero-portrait-cutout.webp` (transparent WebP + PNG master ≥ 1800×2200) and `hero-portrait-mobile.webp` (tighter crop).

**Composition reference diagram (shoot target):**

```
┌──────────────────────┐
│        ≥20%          │   plain wall, even light
│    ┌──────────┐      │
│    │   head   │      │   lens at chest height,
│ 15%│ shoulders│ 15%  │   1.5–2m away, ~50mm
│    │  torso   │      │
│    │  waist   │      │   soft window light →
│    └──────────┘      │
└──────────────────────┘
```

## 3. Per-page asset map

| Page | A | B | C |
| --- | --- | --- | --- |
| Home | loader, nav, marquee, wordmarks, color fields | UI cards, playground crops, memoji (teaser fallback) | portrait, pillar copy confirmation |
| /work/autorag | browser frame, decision cards | 9 screens, live prototype | interview answers |
| /work/dshopper | phone frame | 28 screens (curated ~12) | interview, brand color |
| /work/csc | browser frame | 6 screens | interview, brand color, live URL if public |
| /playground | collage system | rknh 7 · routine 26→~8 · tamakan 2 · mosbah 8→~6 | one intro line per project (or I draft) |
| /about | timeline, chips, tools grid | memoji, resume PDF | story answers, casual photo (opt), CV freshness check |
