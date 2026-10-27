'use client';

import React, { useEffect, useRef } from 'react';

// The hero's phones open as the page scrolls down and close again, in reverse, as it scrolls back up.
// The fan eases after the scroll position instead of jumping with it, and it only runs while the
// hero is on screen: once it leaves, the phones rest where they are until it comes back.
const OPEN_DISTANCE = 0.75; // of the viewport height, to open fully
const EASE = 0.12; // how much of the remaining distance is covered each frame

export default function HeroFan({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let visible = true;
    let frame = 0;
    let current = 0;
    const target = () => Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * OPEN_DISTANCE)));

    const tick = () => {
      const goal = target();
      current += (goal - current) * EASE;
      if (Math.abs(goal - current) < 0.0005) current = goal;
      el.style.setProperty('--fan', current.toFixed(4));
      frame = visible && current !== goal ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => {
      if (visible && !frame) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
    });
    observer.observe(el.parentElement ?? el);

    current = target();
    el.style.setProperty('--fan', current.toFixed(4));
    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', wake);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', wake);
      window.removeEventListener('resize', wake);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={`hero-fan ${className}`}>
      {children}
    </div>
  );
}
