'use client';

import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Things people tell Aura they are building, in their own words
const ROW_ONE = [
  'Opening my own studio',
  'A calmer mind',
  'Running my first marathon',
  'Financial freedom',
  'A home with a garden',
  'Being recognized at work',
  'Writing the book',
  'Feeling at home in my body',
  'Moving to the coast',
];

const ROW_TWO = [
  'Family and love',
  'Learning to rest',
  'Starting the business',
  'Living with purpose',
  'Trusting myself again',
  'A promotion this year',
  'Being free',
  'Speaking up in meetings',
  'A slower, kinder morning',
];

function Row({ items, reverse, paused }: { items: string[]; reverse?: boolean; paused: boolean }) {
  return (
    <div className="marquee-mask flex overflow-hidden">
      {/* Two copies side by side, so the loop meets itself without a seam */}
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className={`marquee-track flex shrink-0 gap-3 pr-3 ${reverse ? 'marquee-reverse' : ''}`}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-card border border-line px-5 py-3 text-[15px] font-medium text-ink shadow-[0_8px_20px_-14px_rgba(27,24,16,0.35)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function DreamMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="space-y-3">
      <Row items={ROW_ONE} paused={paused} />
      <Row items={ROW_TWO} paused={paused} reverse />
      <div className="flex justify-end px-4 sm:px-6 lg:px-8 pt-2">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors"
          aria-pressed={paused}
        >
          {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          {paused ? 'Play animations' : 'Pause animations'}
        </button>
      </div>
    </div>
  );
}
