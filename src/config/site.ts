// Single source of truth for identity, links, and (future) locale direction.
// RTL-readiness: components must read lang/dir from here, never hardcode.
export const SITE = {
  name: 'Rayan Al-Omaireeni',
  role: 'Product Designer — UX · UI · AI',
  description:
    'Portfolio of Rayan Al-Omaireeni — product designer working across UX, UI and AI, turning complex ideas into clear, intuitive interfaces.',
  // Confirmed 2026-07-18 (matches CV) — supersedes the earlier gmail address.
  email: 'rayanmaloma@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rayan-omaireeni/',
    whatsapp: 'https://wa.me/966565759145',
    resume: '/assets/resume/rayan-al-omaireeni-cv.pdf',
  },
  lang: 'en',
  dir: 'ltr',
} as const;
