'use client';

import React, { useState } from 'react';
import Glim, { type GlimClip } from './Glim';

// The same five stops as the app's onboarding mood dial, bottom to top
const STOPS: { clip: GlimClip; label: string; line: string; glow: string }[] = [
  {
    clip: 'mood_struggling',
    label: 'Struggling',
    line: 'The lantern dims to a tender rose. Glim sits beside you. It never goes out.',
    glow: 'rgba(227, 143, 176, 0.45)',
  },
  {
    clip: 'mood_low',
    label: 'Low',
    line: 'A softer light, and no questions you have to answer today.',
    glow: 'rgba(227, 143, 176, 0.32)',
  },
  {
    clip: 'mood_updown',
    label: 'Up and down',
    line: 'Some days are both. Glim keeps the good parts for you.',
    glow: 'rgba(242, 169, 111, 0.35)',
  },
  {
    clip: 'mood_okay',
    label: 'Okay',
    line: 'Steady is enough. A warm glow, nothing to prove.',
    glow: 'rgba(229, 169, 60, 0.35)',
  },
  {
    clip: 'mood_good',
    label: 'Good',
    line: 'The lantern swells. Every small good thing becomes a spark.',
    glow: 'rgba(246, 210, 137, 0.6)',
  },
];

export default function MoodDial() {
  const [index, setIndex] = useState(4);
  const stop = STOPS[index];

  return (
    <div className="card p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
      <div className="relative flex justify-center order-1 md:order-none">
        <div
          className="absolute inset-x-6 top-10 bottom-6 rounded-full blur-3xl transition-colors duration-700"
          style={{ background: stop.glow }}
          aria-hidden="true"
        />
        {/* Every stop stays mounted so switching never waits on a download */}
        <div className="relative w-[200px] sm:w-[240px] aspect-[333/533]">
          {STOPS.map((s, i) => (
            <div
              key={s.clip}
              className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <Glim clip={s.clip} alt={i === index ? `Glim feeling ${s.label.toLowerCase()}` : ''} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">How are you, really?</p>
          <p className="font-serif italic text-2xl sm:text-3xl text-ink leading-snug min-h-[5.5rem] sm:min-h-[6rem]" aria-live="polite">
            {stop.line}
          </p>
        </div>

        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={STOPS.length - 1}
            step={1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            aria-label="Mood"
            aria-valuetext={stop.label}
            className="w-full accent-[var(--ember)] cursor-pointer"
          />
          <div className="flex justify-between gap-1" role="group" aria-label="Mood stops">
            {STOPS.map((s, i) => (
              <button
                key={s.clip}
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${
                  i === index ? 'bg-pill text-pill-text' : 'text-muted hover:text-ink'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
