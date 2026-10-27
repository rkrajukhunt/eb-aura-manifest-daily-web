'use client';

import React, { useEffect, useRef, useState } from 'react';

// The features page jump bar. Under the hero it is a row of chips. On wide screens, as that row
// scrolls up, each chip flies on its own curve to a column at the side of the page, one after another,
// and flies back into the row on the way up. Narrower screens keep the row pinned under the navbar,
// with a dark pill that slides to the group being read.

const READ_LINE = 0.35; // of the viewport height: the group crossing this line is the one being read
const WIDE = '(min-width: 90rem)'; // enough side margin for the column
const RAIL_X = 16; // px from the left edge
const RAIL_STEP = 46; // px between chips in the column
const RAIL_SCALE = 0.88;
const STAGGER = 0.14; // how far behind each chip leaves, as a share of the flight

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const easeOut = (t: number) => 1 - (1 - t) ** 3;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

const chipBase = 'rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap';

export default function FeatureJumpBar({ groups }: { groups: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const flyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wide = window.matchMedia(WIDE);
    let frame = 0;

    const measure = () => {
      frame = 0;
      const vh = window.innerHeight;
      const line = vh * READ_LINE;
      let current: string | null = null;
      for (const { id } of groups) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      // Past the last group (footer in view), nothing is being read
      const last = document.getElementById(groups[groups.length - 1].id);
      const finished = !!last && last.getBoundingClientRect().bottom < line;
      if (finished) current = null;
      setActive(current);

      if (wide.matches) {
        // Fly the chips between their slots in the row and the column at the side
        const row = rowRef.current;
        const fly = flyRef.current;
        if (!row || !fly) return;
        const rowTop = row.getBoundingClientRect().top;
        // Start once the page moves, even when the row sits low on a short screen
        const start = Math.min(vh * 0.6, rowTop + window.scrollY - 40);
        const end = 80;
        const progress = clamp((start - rowTop) / (start - end));
        const railTop = vh / 2 - ((groups.length - 1) * RAIL_STEP) / 2;
        const slots = row.querySelectorAll<HTMLElement>('[data-slot]');
        const chips = fly.querySelectorAll<HTMLElement>('[data-chip]');
        chips.forEach((chip, i) => {
          const slot = slots[i].getBoundingClientRect();
          const t = clamp(progress * (1 + STAGGER * (groups.length - 1)) - STAGGER * i);
          // Height settles first and the sideways move last, so each chip curves into the column
          const x = slot.left + (RAIL_X - slot.left) * easeInOut(t);
          const y = slot.top + (railTop + i * RAIL_STEP - slot.height / 2 - slot.top) * easeOut(t);
          chip.style.translate = `${x}px ${y}px`;
          chip.style.scale = String(1 + (RAIL_SCALE - 1) * easeInOut(t));
        });
        row.style.opacity = String(clamp(1 - progress * 3));
        fly.dataset.ready = '';
        fly.classList.toggle('is-done', finished);
        return;
      }

      // Slide the dark pill under the active chip
      const indicator = indicatorRef.current;
      const chip = current ? barRef.current?.querySelector<HTMLElement>(`[data-group="${current}"]`) : null;
      if (indicator) {
        indicator.style.opacity = chip ? '1' : '0';
        if (chip) {
          indicator.style.width = `${chip.offsetWidth}px`;
          indicator.style.translate = `${chip.offsetLeft}px 0`;
        }
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    wide.addEventListener('change', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      wide.removeEventListener('change', schedule);
      cancelAnimationFrame(frame);
    };
  }, [groups]);

  // Keep the active chip visible inside the horizontally scrolling row, without moving the page
  useEffect(() => {
    const bar = barRef.current;
    const chip = active ? bar?.querySelector<HTMLElement>(`[data-group="${active}"]`) : null;
    if (!bar || !chip || bar.scrollWidth <= bar.clientWidth) return;
    bar.scrollTo({ left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
  }, [active]);

  return (
    <nav aria-label="Feature groups" className="sticky min-[90rem]:static top-[76px] sm:top-[84px] z-40 px-4 sm:px-6 lg:px-8 pb-2">
      {/* Pinned row, below the wide breakpoint */}
      <div className="min-[90rem]:hidden max-w-full md:w-max mx-auto my-2 liquid-glass rounded-full p-1.5 overflow-hidden">
        <div ref={barRef} className="overflow-x-auto no-scrollbar rounded-full">
          <div className="relative flex gap-1 w-max">
            <span ref={indicatorRef} className="jump-indicator absolute left-0 inset-y-0 rounded-full bg-ink" aria-hidden="true" />
            {groups.map(({ id, label }) => {
              const isActive = id === active;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  data-group={id}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative z-10 shrink-0 ${chipBase} transition-colors duration-300 ${
                    isActive ? 'text-bg' : 'text-ink hover:bg-card/70'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wide screens: the row only holds the slots, the chips themselves fly */}
      <div ref={rowRef} className="hidden min-[90rem]:flex w-max mx-auto my-2 gap-1 liquid-glass rounded-full p-1.5" aria-hidden="true">
        {groups.map(({ id, label }) => (
          <span key={id} data-slot className={`${chipBase} border border-transparent invisible`}>
            {label}
          </span>
        ))}
      </div>
      <div ref={flyRef} className="feature-fly hidden min-[90rem]:block fixed inset-0 z-40 pointer-events-none">
        {groups.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <a
              key={id}
              href={`#${id}`}
              data-chip
              aria-current={isActive ? 'location' : undefined}
              className={`absolute left-0 top-0 origin-left pointer-events-auto border backdrop-blur-xl ${chipBase} transition-[background-color,color,border-color,box-shadow] duration-300 ${
                isActive
                  ? 'bg-ink text-bg border-ink shadow-[0_12px_28px_-14px_rgba(27,24,16,0.6)]'
                  : 'bg-card/85 text-ink border-line hover:bg-card'
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
