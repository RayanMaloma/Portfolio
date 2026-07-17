// Conditional smooth scroll (MOTION_MAP.md): desktop fine pointers only,
// never on touch, never for reduced-motion users. Content must never depend on it.
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initLenis() {
  const eligible =
    matchMedia('(pointer: fine)').matches &&
    matchMedia('(min-width: 1024px)').matches &&
    !matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!eligible) return;

  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ duration: 1.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
