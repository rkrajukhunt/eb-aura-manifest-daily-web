import React from 'react';
import { Check, X } from 'lucide-react';
import PlayOnView from './PlayOnView';

// What Aura knows, Never mention, and the library (apps/mobile/src/copy/memory.ts, moments.ts)

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

const MEMORIES: { group: string; items: string[] }[] = [
  { group: 'Your dream', items: ['A small studio with morning light', 'Working for myself by next spring'] },
  { group: 'Your people', items: ['Nadia, the steady one', 'My sister, still an explorer'] },
  { group: 'In your words', items: ['“Restless in a good way”'] },
  { group: 'From your gratitude', items: ['Chai on the balcony before anyone was awake'] },
];

export default function MemoryStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <PlayOnView className="reveal card p-6 sm:p-8 lg:col-span-3">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-serif text-3xl font-medium tracking-tight text-ink">What Aura knows</p>
          <span className="text-xs text-muted shrink-0">Signed promise · Oct 3</span>
        </div>
        <p className="text-body mt-2">Everything I remember, in your words. Edit or remove anything, and I forget completely.</p>

        <div className="mt-6 space-y-5">
          {MEMORIES.map(({ group, items }) => (
            <div key={group} className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{group}</p>
              {items.map((item) => (
                <div key={item} className="rounded-2xl bg-bg border border-line px-4 py-2.5 text-sm text-ink">
                  {item}
                </div>
              ))}
              {group === 'Your dream' && (
                // One memory being forgotten: "Forget this" is pressed, the line is struck, then the list closes over it
                <div className="mk forget-collapse !mt-0">
                  <div className="min-h-0 overflow-hidden">
                    <div className="pt-2">
                      <div className="rounded-2xl bg-bg border border-line px-4 py-2.5 text-sm text-ink flex items-center justify-between gap-3">
                        <span className="mk forget-strike">Moving to a bigger city</span>
                        <span className="mk forget-press shrink-0 rounded-full px-2.5 py-1 text-xs text-ember-text font-semibold">Forget this</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mk mk-in mt-6 self-start w-fit inline-flex items-center gap-2 rounded-full bg-[#2f6b4f]/10 px-3 py-1.5 text-xs font-semibold text-[#2f6b4f] dark:text-[#8fd1ad]" style={d(3)}>
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
          Forgotten. It won&rsquo;t come up again.
        </p>
        <p className="text-xs text-muted mt-3">Removing a memory removes it from every future moment.</p>
      </PlayOnView>

      <div className="lg:col-span-2 grid grid-cols-1 gap-5">
        <PlayOnView className="reveal card p-6 sm:p-8">
          <p className="font-serif text-2xl font-medium tracking-tight text-ink">Never mention</p>
          <p className="text-sm text-body mt-2">Some things are better left unsaid. Anything here stays out of everything Aura writes for you.</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {['My ex', 'Weight', 'The old job'].map((topic, i) => (
              <span
                key={topic}
                className="mk mk-pop inline-flex items-center gap-1.5 rounded-full bg-pill text-pill-text px-3 py-1.5 text-xs"
                style={d(0.4 + i * 0.35)}
              >
                {topic}
                <X className="w-3 h-3 opacity-70" />
              </span>
            ))}
          </div>
        </PlayOnView>

        <div className="reveal card p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-serif text-2xl font-medium tracking-tight text-ink">Your library</p>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 bg-[#e5a93c]/20 text-[#8a5a10] dark:text-[#f6d289]">
              Premium
            </span>
          </div>
          <p className="text-sm text-muted">42 moments · 96 min of you</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              ['Favorites', '9', 'kept close'],
              ['On demand', '6', 'asked for'],
              ['All', '42', 'all yours'],
            ].map(([label, n, unit]) => (
              <div key={label} className="rounded-2xl bg-bg border border-line p-3">
                <p className="font-serif text-2xl text-ink">{n}</p>
                <p className="text-[11px] text-muted leading-tight">
                  {label}
                  <br />
                  {unit}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted">Your first letter is kept on every plan.</p>
        </div>
      </div>
    </div>
  );
}
