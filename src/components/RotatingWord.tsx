'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { DREAMS, useDream } from './DreamFloat';

// The headline's goal word, driven by DreamFloat. Every word sits in the same spot and the current one
// shows; the space eases to each word's width, so the headline never carries an empty gap.
export default function RotatingWord() {
  const { index, slotRef, reportWidths } = useDream();
  const [measured, setMeasured] = useState<number[]>([]);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure every word in the headline's own font, again whenever the size changes
  useLayoutEffect(() => {
    const box = measureRef.current;
    if (!box) return;
    const measure = () => {
      const next = [...box.children].map((el) => (el as HTMLElement).offsetWidth);
      reportWidths(next);
      setMeasured(next);
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [reportWidths]);

  const width = measured[index];

  return (
    <span
      ref={slotRef}
      className="dream-word relative inline-block align-baseline ml-1 text-left font-serif italic font-normal tracking-[-0.02em] whitespace-nowrap text-ember-text"
      style={width ? { width: width + 1 } : undefined}
    >
      {/* Every word below is drawn by CSS from data-word, so the headline's text, for search engines
          and screen readers alike, is just the first goal */}
      <span className="sr-only">{DREAMS[0].word}</span>

      {/* Hidden copies, only to measure each word */}
      <span ref={measureRef} className="absolute left-0 top-0 invisible pointer-events-none" aria-hidden="true">
        {DREAMS.map(({ word }) => (
          <span key={word} data-word={word} className="dream-text absolute left-0 top-0 whitespace-nowrap" />
        ))}
      </span>

      {/* Keeps the baseline; the visible words sit on top of it */}
      <span data-word={DREAMS[index].word} className="dream-text invisible" aria-hidden="true" />
      {DREAMS.map(({ word }, i) => (
        <span key={word} data-word={word} aria-hidden="true" className={`dream-text dream-word-layer ${i === index ? 'is-on' : ''}`} />
      ))}
    </span>
  );
}
