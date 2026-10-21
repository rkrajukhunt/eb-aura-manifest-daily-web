import React from 'react';
import PlayOnView from './PlayOnView';

// The app's onboarding, told as a bento of small moving pieces. Copy is from apps/mobile/src/copy/onboarding.ts.

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

function Question({ children }: { children: React.ReactNode }) {
  return <p className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-ink leading-snug">{children}</p>;
}

function Caption({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="space-y-1.5 pt-5 mt-auto">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ember-text">{step}</p>
      <h3 className="font-serif text-xl font-medium text-ink">{title}</h3>
      <p className="text-sm text-body leading-relaxed">{body}</p>
    </div>
  );
}

function Chip({ label, selected, delay }: { label: string; selected?: boolean; delay?: number }) {
  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-xs ${
        selected ? 'mk mk-select bg-[#8a8265] text-white border-[#8a8265]' : 'bg-card border-line text-ink'
      }`}
      style={selected && delay !== undefined ? d(delay) : undefined}
    >
      {label}
    </span>
  );
}

export default function OnboardingStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {/* Goals */}
      <PlayOnView className="reveal card p-6 sm:p-7 md:col-span-3 flex flex-col">
        <Question>What do you most want to bring into your life?</Question>
        <div className="flex flex-wrap gap-2 mt-4">
          <Chip label="Confidence" />
          <Chip label="Love & relationships" />
          <Chip label="Money & abundance" selected delay={0.6} />
          <Chip label="Career & purpose" selected delay={1.1} />
          <Chip label="Calm & less anxiety" />
          <Chip label="Better habits" />
        </div>
        <Caption step="Your goals" title="Pick up to two" body="Then a follow-up in your own words: how the work you do now feels, or when money comes up, what the feeling is." />
      </PlayOnView>

      {/* Belief level */}
      <PlayOnView className="reveal card p-6 sm:p-7 md:col-span-3 flex flex-col">
        <Question>Which of these could you actually say out loud and mean it?</Question>
        <div className="space-y-2 mt-4">
          {[
            ['I am a magnet for everything I want.', 'identity, bold', false],
            ['I’m learning to trust myself with this.', 'process, gentle', true],
            ['I take one clear step, most days.', 'practical, grounded', false],
          ].map(([line, tag, selected]) => (
            <div
              key={line as string}
              className={`rounded-2xl border px-4 py-2.5 flex items-center justify-between gap-3 ${
                selected ? 'mk mk-select bg-[#8a8265] text-white border-[#8a8265]' : 'bg-card border-line text-ink'
              }`}
              style={selected ? d(0.9) : undefined}
            >
              <span className="font-serif italic text-[15px]">{line}</span>
              <span className={`text-[10px] shrink-0 ${selected ? 'text-white/80' : 'text-muted'}`}>{tag}</span>
            </div>
          ))}
        </div>
        <Caption step="Your level" title="Written so you can believe it" body="Aura also asks what language lands for you: the universe, neuroscience, faith, or just practical." />
      </PlayOnView>

      {/* Off limits */}
      <PlayOnView className="reveal card p-6 sm:p-7 md:col-span-2 flex flex-col">
        <Question>Anything you&rsquo;d rather I stayed away from?</Question>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Money', 'Work', 'My body', 'Relationships', 'Family', 'Health'].map((topic) => (
            <span
              key={topic}
              className={`rounded-full border px-3 py-1.5 text-xs ${
                topic === 'My body'
                  ? 'mk mk-select bg-[#8a8265] text-white border-[#8a8265] line-through decoration-white/70'
                  : 'bg-card border-line text-ink'
              }`}
              style={topic === 'My body' ? d(0.8) : undefined}
            >
              {topic}
            </span>
          ))}
        </div>
        <p className="mk mk-in font-serif italic text-body mt-4" style={d(1.4)}>
          Got it. I won&rsquo;t go there.
        </p>
        <Caption step="Your limits" title="Never mention" body="Anything you leave out stays out of everything Aura writes. Add more any time." />
      </PlayOnView>

      {/* Sky Dial */}
      <PlayOnView className="reveal card p-6 sm:p-7 md:col-span-2 flex flex-col">
        <Question>When will you take your three minutes?</Question>
        <div className="relative mt-4 h-36 rounded-2xl overflow-hidden bg-gradient-to-b from-[#f6d289]/60 via-[#f2a96f]/40 to-[#e2decf] dark:from-[#5a4032] dark:via-[#3a2a20] dark:to-[#242019]">
          {/* The sun rides the arc from before bed back round to morning */}
          <div className="absolute left-1/2 bottom-[-70px] w-[180px] h-[180px] -translate-x-1/2">
            <div className="absolute inset-0 rounded-full border border-dashed border-ink/20" />
            <div className="mk mk-sun absolute inset-0" style={{ ...d(0.4), ['--from' as string]: '110deg', transform: 'rotate(-48deg)' }}>
              <span className="absolute left-1/2 -top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-ember-soft to-[#fff1cf] shadow-[0_0_24px_rgba(242,169,111,0.9)]" />
            </div>
          </div>
          <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="absolute bottom-0 inset-x-0 h-12 w-full" aria-hidden="true">
            <path d="M0 40 Q60 20 120 36 T240 30 T300 34 V60 H0Z" className="fill-[#d9b48f] dark:fill-[#3a2a20]" />
            <path d="M0 50 Q80 34 160 48 T300 44 V60 H0Z" className="fill-[#c99a72] dark:fill-[#2a1f18]" />
          </svg>
        </div>
        <p className="text-sm text-ink mt-3">
          <span className="font-semibold">Morning, 7&ndash;9am</span> <span className="text-muted">· arrives 8:00am</span>
        </p>
        <Caption step="Your hour" title="The Sky Dial" body="A living landscape follows the time you pick: morning, midday, evening or before bed." />
      </PlayOnView>

      {/* Signed promise */}
      <PlayOnView className="reveal card p-6 sm:p-7 md:col-span-2 flex flex-col">
        <Question>Sign it, and it&rsquo;s yours.</Question>
        <div className="mt-4 rounded-2xl bg-parchment border border-line p-4 space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">A promise to myself</p>
          {['At your time', 'Once a day', 'Always yours'].map((title) => (
            <p key={title} className="text-sm text-ink flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-ember" />
              {title}
            </p>
          ))}
          <svg viewBox="0 0 220 60" className="w-full h-14 text-ink" aria-label="A handwritten signature">
            <path
              d="M8 42 C 20 10, 34 10, 30 38 S 44 50, 52 30 S 62 12, 66 34 S 78 48, 90 28 C 96 18, 104 22, 100 36 S 120 46, 132 26 S 150 20, 152 38 C 154 46, 170 30, 182 34 S 204 40, 212 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="600"
              className="mk mk-draw"
              style={{ ...d(0.5), ['--len' as string]: 600 }}
            />
          </svg>
          <div className="border-t border-ink/20 pt-1 text-[10px] text-muted">Sign here</div>
        </div>
        <Caption step="Your promise" title="Optional, and kept" body="One gentle arrival a day, never a stream. Your signed promise lives in What Aura knows." />
      </PlayOnView>
    </div>
  );
}
