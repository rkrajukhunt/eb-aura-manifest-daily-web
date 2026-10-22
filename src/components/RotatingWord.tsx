'use client';

import React, { useEffect, useState } from 'react';

interface RotatingWordProps {
  words: string[];
  /** Milliseconds each word stays */
  interval?: number;
}

// A glass pill whose word changes every few seconds; reduced motion keeps the first word
export default function RotatingWord({ words, interval = 2600 }: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  // The longest word sizes the pill, so the headline never reflows as words change
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '');

  return (
    <span className="relative inline-grid align-baseline mx-1 px-[0.35em] rounded-full liquid-glass !shadow-none">
      <span className="invisible font-serif italic font-normal tracking-[-0.02em] whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>
      <span className="sr-only">{words[0]}</span>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center font-serif italic font-normal tracking-[-0.02em] text-ember-text whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === index ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-[0.4em] blur-[6px]'
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
