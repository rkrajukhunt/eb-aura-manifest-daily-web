import React from 'react';
import { Check } from 'lucide-react';
import Glim from './Glim';
import PlayOnView from './PlayOnView';

// The generating ritual before the first letter (apps/mobile/src/copy/letter.ts)

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

const LINES = ['Thank you, Maya.', 'I’m writing you something.', 'It’s from someone who knows you very well.'];
const STAGES = ['Reading what you told me', 'Writing your letter', 'Recording it in a voice', 'Almost ready'];

export default function LetterRitual() {
  return (
    <PlayOnView className="reveal card overflow-hidden max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative bg-[#1b1810] text-[#f5f2e8] p-8 sm:p-10 min-h-[320px] flex flex-col justify-between gap-8 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-ember/25 blur-3xl" aria-hidden="true" />
          <div className="space-y-3 relative">
            {LINES.map((line, i) => (
              <p key={line} className="mk mk-in font-serif italic text-2xl sm:text-[1.75rem] leading-snug" style={d(0.3 + i * 0.9)}>
                {line}
              </p>
            ))}
          </div>
          <div className="relative flex items-end justify-between gap-4">
            <p className="mk mk-fade text-sm text-[#dad5be]" style={d(6.2)}>
              The letter is kept. It&rsquo;s yours forever.
            </p>
            <Glim clip="deliver_letter" className="w-20 shrink-0 drop-shadow-[0_10px_30px_rgba(242,169,111,0.45)]" />
          </div>
        </div>

        <div className="p-8 sm:p-10 flex flex-col justify-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">After the last question</p>
          <ol className="space-y-4">
            {STAGES.map((stage, i) => {
              const start = 2.8 + i * 0.85;
              return (
                <li key={stage} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-ink">
                    <span>{stage}</span>
                    <span className="mk mk-pop w-5 h-5 rounded-full bg-pill text-pill-text flex items-center justify-center" style={d(start + 0.8)}>
                      <Check className="w-3 h-3" />
                    </span>
                  </div>
                  <span className="block h-1 rounded-full bg-bg-deep overflow-hidden">
                    <span className="mk mk-grow block h-full w-full bg-gradient-to-r from-ember-soft to-ember" style={{ ...d(start), animationDuration: '0.85s' }} />
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="text-sm text-muted">
            This can take a minute or two. Then you hold to light it, and it plays word by word in a voice that says your
            name.
          </p>
        </div>
      </div>
    </PlayOnView>
  );
}
