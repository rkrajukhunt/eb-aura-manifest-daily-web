import React from 'react';

interface TypedProps {
  text: string;
  /** Seconds before the first character appears */
  start: number;
  /** Seconds between characters */
  speed?: number;
}

// Types itself out one character at a time, and wraps like normal text. At rest it is simply the full text.
export default function Typed({ text, start, speed = 0.045 }: TypedProps) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <span key={i} className="mk mk-type-char" style={{ animationDelay: `${start + i * speed}s` }}>
          {char}
        </span>
      ))}
    </>
  );
}
