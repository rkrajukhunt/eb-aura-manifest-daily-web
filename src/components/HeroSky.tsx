import React from 'react';

// The app's player sky (player-day / player-dusk), redrawn as vectors so it stays sharp on any screen.
// Six dune ridges climb from the very top of the hero to the phones; colours come from CSS variables
// in globals.css (.hero-sky-art), so one drawing serves both themes.
const DUNES = [
  'M0 250 C 200 196 400 188 620 222 S 980 276 1180 232 S 1460 180 1600 214 L1600 1000 L0 1000 Z',
  'M0 372 C 180 344 340 352 520 380 S 820 424 1020 380 S 1360 320 1600 352 L1600 1000 L0 1000 Z',
  'M0 500 C 240 468 440 468 660 492 S 1020 516 1220 470 S 1480 430 1600 440 L1600 1000 L0 1000 Z',
  'M0 628 C 160 604 300 612 460 640 S 720 680 900 646 S 1180 596 1360 614 S 1540 630 1600 618 L1600 1000 L0 1000 Z',
  'M0 752 C 220 724 420 730 620 756 S 980 790 1180 752 S 1460 716 1600 728 L1600 1000 L0 1000 Z',
  'M0 868 C 180 846 340 852 520 874 S 860 906 1060 872 S 1400 840 1600 858 L1600 1000 L0 1000 Z',
];

export default function HeroSky() {
  return (
    <div className="hero-sky-art absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--sky-top)]" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 1000" preserveAspectRatio="none">
        <defs>
          {DUNES.map((_, i) => (
            <linearGradient key={i} id={`hero-dune-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" style={{ stopColor: `var(--dune-${i + 1}-top)` }} />
              <stop offset="0.5" style={{ stopColor: `var(--dune-${i + 1}-bottom)` }} />
            </linearGradient>
          ))}
        </defs>
        {DUNES.map((d, i) => (
          <path key={i} d={d} fill={`url(#hero-dune-${i})`} />
        ))}
      </svg>

      {/* Morning haze rising behind the phones, where the sun would come up */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[52%] w-[min(90vw,1100px)] aspect-[1.6] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, var(--sun-glow) 0%, transparent 65%)' }}
      />
    </div>
  );
}
