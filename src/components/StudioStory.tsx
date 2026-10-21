import React from 'react';
import { Sparkles } from 'lucide-react';
import PlayOnView from './PlayOnView';
import Typed from './Typed';

// Manifest anything and the guided affirmation studio (apps/mobile/src/copy/moments.ts, affirmations.ts)

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

const CANDIDATES = [
  { line: 'I am someone who finishes what I start.', technique: 'Identity', why: 'Stated as who you are, so it is rehearsed as already true.' },
  { line: 'I build my work one clear morning at a time.', technique: 'Present tense', why: 'Said as now, not someday.' },
  { line: 'Today, I ship the small version.', technique: 'Practical', why: 'One step you can actually take.' },
];

export default function StudioStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Manifest anything */}
      <PlayOnView className="reveal card p-6 sm:p-8 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Ask for a moment</p>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 bg-[#e5a93c]/20 text-[#8a5a10] dark:text-[#f6d289]">
            Premium
          </span>
        </div>
        <p className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-ink mt-3">
          Manifest anything<span className="text-ember">.</span>
        </p>
        <p className="text-body mt-2">A moment from your future life, for any situation. Ready in about a minute.</p>

        <div className="mt-6 rounded-2xl bg-bg border border-line px-4 py-3.5 font-serif text-lg text-ink min-h-[56px]">
          <Typed text="The day I sign my first client" start={0.5} />
          <span className="mk-caret text-ember">|</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted">2 left this week, I make them count</span>
          <span className="rounded-full bg-pill text-pill-text text-sm font-semibold px-4 py-2">Make it</span>
        </div>

        <div className="mk mk-in mt-6 rounded-2xl bg-[#1b1810] text-[#f5f2e8] p-5 space-y-2" style={d(2.6)}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f2a96f] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" /> On demand · 2 min
          </p>
          <p className="font-serif text-xl">The first signature</p>
          <p className="font-serif italic text-[#dad5be] leading-relaxed">
            &ldquo;You read the email twice, Maya. Not because you doubt it, but because you want to remember the exact
            words&hellip;&rdquo;
          </p>
        </div>
      </PlayOnView>

      {/* Guided affirmations */}
      <PlayOnView className="reveal card p-6 sm:p-8 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Create with Aura</p>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 bg-[#e5a93c]/20 text-[#8a5a10] dark:text-[#f6d289]">
            Premium
          </span>
        </div>
        <p className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-ink mt-3">
          Three ways to say it<span className="text-ember">.</span>
        </p>
        <p className="text-body mt-2">Pick an area, or say it your way. Aura writes three lines, each with the reason it is phrased that way.</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {['Work', 'Money', 'Health', 'Love', 'Home', 'Confidence'].map((area) => (
            <span
              key={area}
              className={`rounded-full border px-3 py-1.5 text-xs ${
                area === 'Work' ? 'mk mk-select bg-[#8a8265] text-white border-[#8a8265]' : 'bg-card border-line text-ink'
              }`}
              style={area === 'Work' ? d(0.5) : undefined}
            >
              {area}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2.5">
          {CANDIDATES.map(({ line, technique, why }, i) => (
            <li
              key={line}
              className={`mk mk-in rounded-2xl border p-4 space-y-1.5 ${i === 0 ? 'bg-parchment border-ember/30' : 'bg-card border-line'}`}
              style={d(1.1 + i * 0.35)}
            >
              <p className="font-serif italic text-lg text-ink leading-snug">{line}</p>
              <p className="text-xs text-muted">
                <span className="font-semibold text-ink">{technique}</span> · {why}
              </p>
            </li>
          ))}
        </ul>
      </PlayOnView>
    </div>
  );
}
