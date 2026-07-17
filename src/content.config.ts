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
    media: z.array(z.string()).min(1), // browser: [primary, optional backdrop]; phone: [front, back-left, back-right]
    mediaAlt: z.string(),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/playground' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    accent: z.string(),
  }),
});

export const collections = { projects, playground };
