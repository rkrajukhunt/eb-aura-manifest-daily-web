import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  /** Set in the serif italic after the title, the way the app pairs Figtree with Newsreader */
  accent?: React.ReactNode;
  intro?: React.ReactNode;
  /** `split` puts the title left and the intro right on wide screens */
  align?: 'center' | 'left' | 'split';
  /** Break the accent onto its own line */
  stacked?: boolean;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-card/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-body">
      {children}
    </span>
  );
}

export function Accent({ children }: { children: React.ReactNode }) {
  return <em className="font-serif font-normal italic tracking-[-0.02em] text-ink/80">{children}</em>;
}

// Bold sans display with a serif italic accent and the app's signature ember period
export default function SectionHeading({ eyebrow, title, accent, intro, align = 'center', stacked = false }: SectionHeadingProps) {
  const heading = (
    <h2 className="font-sans text-[2.6rem] sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.04em] leading-[1.02] text-ink text-balance">
      {title}
      {accent && (
        <>
          {stacked ? <br /> : ' '}
          <Accent>{accent}</Accent>
        </>
      )}
      <span className="text-ember">.</span>
    </h2>
  );

  if (align === 'split') {
    return (
      <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 items-end">
        <div className="md:col-span-7 space-y-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          {heading}
        </div>
        {intro && (
          <p className="md:col-span-5 text-base sm:text-lg text-body leading-relaxed text-pretty md:pb-2">{intro}</p>
        )}
      </div>
    );
  }

  const centered = align === 'center';

  return (
    <div className={`reveal space-y-5 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {heading}
      {intro && <p className="text-base sm:text-lg text-body leading-relaxed text-pretty">{intro}</p>}
    </div>
  );
}
