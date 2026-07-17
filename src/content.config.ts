import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Flagship projects (IA §1). Bodies stay empty until the case-study
// interviews land (CASE_STUDY_CONTENT_REQUIREMENTS.md); frontmatter feeds
// the homepage Selected Work blocks and the case-page stubs.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    client: z.string(),
    role: z.string(),
    year: z.string(), // string so labeled placeholders are valid
    status: z.enum(['shipped', 'in-progress']),
    summary: z.string(),
    theme: z.object({
      accent: z.string(),
      accentDeep: z.string(),
      wash: z.string(),
    }),
    frame: z.enum(['browser', 'phone']),
    frameLabel: z.string().optional(), // browser url pill text
    media: z.array(z.string()).min(1), // browser: [primary, behind, front]; phone: [front, back-left, back-right]
    mediaAlt: z.string(),
    overlayAlt: z.string().optional(), // alt for the front supporting screen (browser frames)
    // ── Case-study fields (optional; missing ones render labeled pending chips) ──
    timeline: z.string().optional(),
    team: z.string().optional(),
    gist: z.array(z.string()).optional(),
    context: z.string().optional(),
    processNotes: z.array(z.string()).optional(),
    decisions: z.array(z.object({ title: z.string(), what: z.string(), why: z.string() })).optional(),
    features: z.array(z.object({ title: z.string(), desc: z.string() })).optional(),
    impact: z.array(z.string()).optional(),
    prototype: z.object({ url: z.string(), label: z.string() }).optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/playground' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    kind: z.string(), // e.g. "Brand identity", "App campaign"
    year: z.string().optional(),
    intro: z.string(),
    accent: z.string(), // from the actual brand's own palette
    wash: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).min(1),
  }),
});

export const collections = { projects, playground };
