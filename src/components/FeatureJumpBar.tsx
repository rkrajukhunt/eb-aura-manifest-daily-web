'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Moon, ShieldCheck, Sparkles, Sprout, Sun, Sunrise, type LucideIcon } from 'lucide-react';

// The features page jump bar. Under the hero the groups sit as beads on a thread, each with an icon for
// its part of the day. On wide screens, as that row scrolls up, each chip flies on its own curve to a
// column at the side of the page, one after another, and lands on a vertical thread that fills ember as
// you read. It flies back into the row on the way up. Narrower screens keep the row pinned under the
// navbar, with a dark pill that slides to the group being read.

const READ_LINE = 0.35; // of the viewport height: the group crossing this line is the one being read
const WIDE = '(min-width: 90rem)'; // enough side margin for the column
const RAIL_X = 16; // px from the left edge
const RAIL_STEP = 50; // px between chips in the column
const BEAD_CENTER = 20; // px from a chip's left edge to the middle of its icon bead
const STAGGER = 0.16; // how far behind each chip leaves, as a share of the flight
const FLIGHT = 0.95; // of the viewport height: how much scrolling the whole flight takes
const GLIDE = 0.075; // share of the remaining distance the chips cover each frame, so they ease after the scroll

const ICONS: Record<string, LucideIcon> = {
  begin: Sparkles,
  daily: Sunrise,
  affirmations: Sun,
  evening: Moon,
  memory: Sprout,
  trust: ShieldCheck,
};

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const easeOut = (t: number) => 1 - (1 - t) ** 3;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

const chipBase = 'inline-flex items-center rounded-full p-1.5 text-sm font-medium whitespace-nowrap';

function ChipInner({ id, label, state }: { id: string; label: string; state: 'active' | 'past' | 'idle' }) {
  const Icon = ICONS[id] ?? Sparkles;
  return (
    <>
      <span
        className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-[background-color,color,box-shadow] duration-300 ${
          state === 'active'
            ? 'bg-ember text-white ring-4 ring-ember/25'
            : state === 'past'
              ? 'bg-ember-soft text-ember-text'
              : 'bg-bg-deep text-muted group-hover/chip:text-ink'
        }`}
      >
        <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
      </span>
      <span className="chip-label">
        <span className="block pl-2 pr-3">{label}</span>
      </span>
    </>
  );
}

export default function FeatureJumpBar({ groups }: { groups: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const flyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wide = window.matchMedia(WIDE);
    let frame = 0;
    let glide = 0;
    let target = 0; // flight progress the scroll position asks for
    let shown = -1; // flight progress on screen, easing toward the target
    let exitTarget = 0; // how far the chips have left the column at the end of the groups
    let exitShown = 0;
    const ease = (from: number, to: number) => (Math.abs(to - from) < 0.0005 ? to : from + (to - from) * GLIDE);

    // Place the chips for the progress on screen, then keep easing until they catch up
    const place = () => {
      glide = 0;
      const row = rowRef.current;
      const fly = flyRef.current;
      if (!row || !fly || !wide.matches) return;
      shown = shown < 0 ? target : ease(shown, target);
      exitShown = ease(exitShown, exitTarget);
      const progress = shown;
      const n = groups.length;
      const vh = window.innerHeight;
      const railTop = vh / 2 - ((groups.length - 1) * RAIL_STEP) / 2;
      const slots = row.querySelectorAll<HTMLElement>('[data-slot]');
      const chips = fly.querySelectorAll<HTMLElement>('[data-chip]');
      chips.forEach((chip, i) => {
        const slot = slots[i].getBoundingClientRect();
        const t = clamp(progress * (1 + STAGGER * (groups.length - 1)) - STAGGER * i);
        // Height settles first and the sideways move last, so each chip curves into the column
        const x = slot.left + (RAIL_X - slot.left) * easeInOut(t);
        const y = slot.top + (railTop + i * RAIL_STEP - slot.height / 2 - slot.top) * easeOut(t);
        // Leaving at the end: the bottom chip goes first, each sliding out to the left as it fades
        const e = easeInOut(clamp(exitShown * (1 + STAGGER * (n - 1)) - STAGGER * (n - 1 - i)));
        chip.style.translate = `${x - e * 56}px ${y + e * 10}px`;
        chip.style.opacity = String(1 - e);
        chip.style.scale = String(1 - e * 0.12);
        chip.style.filter = e > 0 ? `blur(${e * 4}px)` : '';
        chip.style.pointerEvents = e > 0.5 ? 'none' : '';
      });
      row.style.opacity = String(clamp(1 - progress * 3));
      fly.style.setProperty('--rail-x', `${RAIL_X + BEAD_CENTER}px`);
      fly.style.setProperty('--rail-top', `${railTop}px`);
      fly.style.setProperty('--rail-len', `${(groups.length - 1) * RAIL_STEP}px`);
      fly.style.setProperty('--rail-draw', String(clamp((progress - 0.85) / 0.15) * (1 - clamp(exitShown * 1.6))));
      fly.dataset.ready = '';
      fly.classList.toggle('is-docked', progress >= 0.999);
      if (shown !== target || exitShown !== exitTarget) glide = requestAnimationFrame(place);
    };

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
      const lastBottom = last ? last.getBoundingClientRect().bottom : Infinity;
      // On wide screens the last chip stays lit while the column leaves
      if (lastBottom < line && !wide.matches) current = null;
      setActive(current);

      if (wide.matches) {
        // Fly the chips between their slots in the row and the column at the side
        const row = rowRef.current;
        const fly = flyRef.current;
        if (!row || !fly) return;
        const rowTop = row.getBoundingClientRect().top;
        // Start once the page moves, even when the row sits low on a short screen
        const start = Math.min(vh * 0.6, rowTop + window.scrollY - 40);
        target = clamp((start - rowTop) / (vh * FLIGHT));
        // The column leaves as the end of the last group rises from 70% to 10% of the screen
        exitTarget = clamp((vh * 0.7 - lastBottom) / (vh * 0.6));
        // The column's thread fills down to the group being read
        const index = groups.findIndex((g) => g.id === current);
        fly.style.setProperty('--rail-fill', `${Math.max(0, index) * RAIL_STEP}px`);
        if (!glide) place();
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
      cancelAnimationFrame(glide);
    };
  }, [groups]);

  // Keep the active chip visible inside the horizontally scrolling row, without moving the page
  useEffect(() => {
    const bar = barRef.current;
    const chip = active ? bar?.querySelector<HTMLElement>(`[data-group="${active}"]`) : null;
    if (!bar || !chip || bar.scrollWidth <= bar.clientWidth) return;
    bar.scrollTo({ left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
  }, [active]);

  const activeIndex = groups.findIndex((g) => g.id === active);
  const stateOf = (i: number) => (i === activeIndex ? 'active' : i < activeIndex ? 'past' : 'idle');

  return (
    <nav aria-label="Feature groups" className="sticky min-[90rem]:static top-[76px] sm:top-[84px] z-40 px-4 sm:px-6 lg:px-8 pb-2">
      {/* Pinned row, below the wide breakpoint */}
      <div className="min-[90rem]:hidden max-w-full md:w-max mx-auto my-2 liquid-glass rounded-full p-1 overflow-hidden">
        <div ref={barRef} className="overflow-x-auto no-scrollbar rounded-full">
          <div className="relative flex gap-1 w-max">
            <span ref={indicatorRef} className="jump-indicator absolute left-0 inset-y-0 rounded-full bg-ink" aria-hidden="true" />
            {groups.map(({ id, label }, i) => {
              const isActive = i === activeIndex;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  data-group={id}
                  aria-current={isActive ? 'location' : undefined}
                  className={`group/chip relative z-10 shrink-0 ${chipBase} transition-colors duration-300 ${
                    isActive ? 'text-bg' : 'text-ink hover:bg-card/70'
                  }`}
                >
                  <ChipInner id={id} label={label} state={stateOf(i)} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wide screens: the row is a thread holding the slots, the chips themselves fly */}
      <div ref={rowRef} className="feature-thread hidden min-[90rem]:flex w-max mx-auto my-2 gap-3 px-6" aria-hidden="true">
        {groups.map(({ id, label }) => (
          <span key={id} data-slot className={`${chipBase} border border-transparent invisible`}>
            <ChipInner id={id} label={label} state="idle" />
          </span>
        ))}
      </div>
      <div ref={flyRef} className="feature-fly hidden min-[90rem]:block fixed inset-0 z-40 pointer-events-none">
        <span className="feature-rail-line" aria-hidden="true" />
        <span className="feature-rail-line is-fill" aria-hidden="true" />
        {groups.map(({ id, label }, i) => {
          const isActive = i === activeIndex;
          return (
            <a
              key={id}
              href={`#${id}`}
              data-chip
              aria-current={isActive ? 'location' : undefined}
              title={label}
              className={`group/chip absolute left-0 top-0 pointer-events-auto border backdrop-blur-xl ${chipBase} transition-[background-color,color,border-color,box-shadow] duration-300 ${
                isActive
                  ? 'bg-ink text-bg border-ink shadow-[0_14px_30px_-14px_rgba(27,24,16,0.6)]'
                  : 'bg-card/90 text-ink border-line shadow-[0_8px_20px_-14px_rgba(27,24,16,0.35)] hover:border-ember/40'
              }`}
            >
              <ChipInner id={id} label={label} state={stateOf(i)} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
