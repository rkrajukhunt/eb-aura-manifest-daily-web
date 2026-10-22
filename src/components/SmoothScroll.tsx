'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

// Clears the floating navbar when landing on an anchor (matches scroll-padding-top in globals.css)
const ANCHOR_OFFSET = -104;

let instance: Lenis | null = null;

/** The page's Lenis, or null on touch devices and for visitors who prefer reduced motion */
export function getLenis() {
  return instance;
}

// Momentum scrolling for wheel and trackpad. Touch keeps the phone's native scroll,
// and reduced motion keeps the browser's own scrolling untouched.
export default function SmoothScroll() {
  const pathname = usePathname();
  const firstPath = useRef(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, smoothWheel: true, syncTouch: false, stopInertiaOnNavigate: true });
    instance = lenis;

    // Same-page anchors glide through Lenis instead of jumping, then record the hash like a normal link
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as HTMLElement).closest('a');
      if (!link || link.target === '_blank') return;
      const url = new URL(link.href, window.location.href);
      if (!url.hash || url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      // Something else may have moved the page natively (find-in-page, focus, a script); start from where it really is
      if (Math.abs(lenis.animatedScroll - window.scrollY) > 1) lenis.scrollTo(window.scrollY, { immediate: true, force: true });
      // The download scene is the footer: land on its top edge, not under the navbar offset
      const offset = target.tagName === 'FOOTER' ? 0 : ANCHOR_OFFSET;
      const y = target.getBoundingClientRect().top + window.scrollY + offset;
      lenis.scrollTo(y, { duration: 1.4, force: true });
      history.pushState(null, '', url.hash);
    };
    // Window capture runs before React's listeners, so next/link never sees the anchor click
    window.addEventListener('click', onClick, { capture: true });

    return () => {
      window.removeEventListener('click', onClick, { capture: true });
      lenis.destroy();
      instance = null;
    };
  }, []);

  // A new page starts at the top, without gliding there from the old position. The first render is
  // skipped so a reload keeps the browser's restored position.
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    if (!window.location.hash) instance?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
