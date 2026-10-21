import React from 'react';

// Glim's clips come straight from the app (design/mascot, 12 fps animated WebP, one shared crop).
// Each has a `-still` first frame that replaces the loop when the visitor prefers reduced motion.
export type GlimClip =
  | 'idle_float'
  | 'listen'
  | 'keep_spark'
  | 'deliver_letter'
  | 'wave_hello'
  | 'sleepy_doze'
  | 'mood_struggling'
  | 'mood_low'
  | 'mood_updown'
  | 'mood_okay'
  | 'mood_good';

const CLIP_SIZE = { width: 274, height: 483 };
const MOOD_SIZE = { width: 333, height: 533 };

interface GlimProps {
  clip: GlimClip;
  /** Leave empty when Glim is decorative next to text that already says what it does. */
  alt?: string;
  className?: string;
  eager?: boolean;
}

export default function Glim({ clip, alt = '', className = '', eager = false }: GlimProps) {
  const base = `/assets/glim/glim_${clip}`;
  const size = clip.startsWith('mood_') ? MOOD_SIZE : CLIP_SIZE;

  return (
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcSet={`${base}-still.webp`} />
      {/* A plain img keeps the WebP animated; next/image would only pass it through unoptimized */}
      <img
        src={`${base}.webp`}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        width={size.width}
        height={size.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        draggable={false}
        className={`select-none h-auto ${className}`}
      />
    </picture>
  );
}
