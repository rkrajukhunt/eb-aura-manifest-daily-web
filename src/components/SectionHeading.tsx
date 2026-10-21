import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'center' | 'left';
}

// Serif display with the app's signature ember period, over a quiet eyebrow
export default function SectionHeading({ eyebrow, title, intro, align = 'center' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`reveal space-y-4 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-medium tracking-tight leading-[1.05] text-ink text-balance">
        {title}
        <span className="text-ember">.</span>
      </h2>
      {intro && <p className="text-base sm:text-lg text-body leading-relaxed text-pretty">{intro}</p>}
    </div>
  );
}
