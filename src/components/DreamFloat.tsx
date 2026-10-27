'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Compass, Heart, Leaf, Repeat, Star, Target, Wallet, type LucideIcon } from 'lucide-react';

// One for each area Aura asks about in onboarding: confidence, love, money, purpose, calm, better habits.
// The first is what screen readers and reduced motion keep.
export const DREAMS: { word: string; Icon: LucideIcon }[] = [
  { word: 'your goals', Icon: Target },
  { word: 'real confidence', Icon: Star },
  { word: 'self-love', Icon: Heart },
  { word: 'financial freedom', Icon: Wallet },
  { word: 'a calm mind', Icon: Leaf },
  { word: 'your purpose', Icon: Compass },
  { word: 'better habits', Icon: Repeat },
];

// Where each goal drifts, in the side margins around the headline
const SPOTS: React.CSSProperties[] = [
  { left: '1%', top: '12%' },
  { right: '2%', top: '8%' },
  { left: '0%', top: '42%' },
  { right: '0%', top: '38%' },
  { left: '3%', top: '72%' },
  { right: '3%', top: '68%' },
  { left: '9%', top: '93%' },
];

const PICK_MS = 500; // the chosen goal lights up before it flies
const LAND_MS = 650; // flight time until the word takes its place in the headline
const RETURN_MS = 1300; // the replaced goal drifts back into the margin
const CYCLE_MS = 3400;

interface DreamState {
  index: number;
  slotRef: React.RefObject<HTMLSpanElement | null>;
  reportWidths: (widths: number[]) => void;
}

const DreamContext = createContext<DreamState | null>(null);

export function useDream() {
  const state = useContext(DreamContext);
  if (!state) throw new Error('useDream must be used inside DreamFloat');
  return state;
}

// The hero's goals: glass chips drift around the headline, and every few seconds one lights up and
// flies into the sentence to become its word. Where the margins are too narrow for chips, the word
// simply fades to the next.
export default function DreamFloat({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hidden, setHidden] = useState<number[]>([0]); // chips whose word is, or just was, in the headline
  const slotRef = useRef<HTMLSpanElement>(null);
  const widths = useRef<number[]>([]);
  const floatRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reportWidths = useCallback((next: number[]) => {
    widths.current = next;
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    let current = 0;

    const step = () => {
      const prev = current;
      const next = (current + 1) % DREAMS.length;
      const chip = chipRefs.current[next];
      const slot = slotRef.current;
      const floaters = floatRef.current;
      if (!chip || !slot || !floaters || getComputedStyle(floaters).display === 'none') {
        current = next;
        setIndex(next);
        setHidden([next]);
        later(step, CYCLE_MS);
        return;
      }

      setPicked(next);
      later(() => {
        // The line stays centered, so the slot's middle holds still while its width eases
        const c = chip.getBoundingClientRect();
        const g = slot.getBoundingClientRect();
        const target = widths.current[next] || g.width;
        const dx = g.left + g.width / 2 - (c.left + c.width / 2);
        const dy = g.top + g.height / 2 - (c.top + c.height / 2);
        chip.style.transform = `translate(${dx}px, ${dy}px) scale(${Math.min(2.6, target / c.width)})`;
        later(() => {
          current = next;
          setIndex(next);
          setPicked(null);
          setHidden([prev, next]);
        }, LAND_MS);
        later(() => {
          chip.style.transition = 'none';
          chip.style.transform = '';
          void chip.offsetWidth;
          chip.style.transition = '';
          setHidden([next]);
        }, RETURN_MS);
        later(step, CYCLE_MS);
      }, PICK_MS);
    };

    later(step, 2400);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <DreamContext.Provider value={{ index, slotRef, reportWidths }}>
      <div className={`relative ${className}`}>
        <div
          ref={floatRef}
          className="hidden min-[90rem]:block absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {DREAMS.map(({ word, Icon }, i) => (
            <span
              key={word}
              ref={(el) => {
                chipRefs.current[i] = el;
              }}
              className={`dream-chip ${picked === i ? 'is-picked' : ''} ${hidden.includes(i) ? 'is-hidden' : ''}`}
              style={{ ...SPOTS[i], '--drift': `${6 + (i % 3) * 1.4}s`, animationDelay: `${-i * 0.9}s` } as React.CSSProperties}
            >
              <span className="dream-chip-icon">
                <Icon className="w-3 h-3" strokeWidth={2.4} />
              </span>
              {word}
            </span>
          ))}
        </div>
        {children}
      </div>
    </DreamContext.Provider>
  );
}
