'use client';

import React, { useEffect, useRef, useState } from 'react';

interface PlayOnViewProps {
  children: React.ReactNode;
  className?: string;
}

// Holds a mock on its finished frame until it scrolls into view, then plays its story once
export default function PlayOnView({ children, className = '' }: PlayOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div key={playing ? 'play' : 'rest'} className={`h-full flex flex-col ${playing ? '' : 'mock-static'}`}>
        {children}
      </div>
    </div>
  );
}
