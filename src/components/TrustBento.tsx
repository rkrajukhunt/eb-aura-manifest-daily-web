import React from 'react';
import Image from 'next/image';
import { Lock } from 'lucide-react';
import Glim from './Glim';
import SectionHeading from './SectionHeading';

function CardText({ title, accent, body, light = false }: { title: string; accent: string; body: string; light?: boolean }) {
  return (
    <div className="relative space-y-2">
      <h3 className={`text-2xl font-semibold tracking-[-0.03em] ${light ? 'text-[#f5f2e8]' : 'text-ink'}`}>
        {title}{' '}
        <em className={`font-serif font-normal italic tracking-[-0.02em] ${light ? 'text-[#f5f2e8]/85' : 'text-ink/80'}`}>{accent}</em>
      </h3>
      <p className={`text-sm sm:text-base leading-relaxed max-w-sm ${light ? 'text-[#dad5be]' : 'text-body'}`}>{body}</p>
    </div>
  );
}

export default function TrustBento() {
  return (
    <section id="trust" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Built with care"
        title="Why you can"
        accent="trust it"
        align="split"
        intro="Aura hears the things you rarely say out loud. So it is built to keep them, and to keep you, safe."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-5">
        {/* Privacy: the tall card */}
        <div className="reveal relative md:row-span-2 rounded-[28px] overflow-hidden min-h-[420px] p-7 flex flex-col justify-between">
          <Image src="/assets/illustrations/sheet-locked.jpg" alt="Encrypted private manifestation journal sheet" fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1810]/10 via-[#1b1810]/20 to-[#1b1810]/85" aria-hidden="true" />
          <span className="relative w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-ink">
            <Lock className="w-5 h-5" />
          </span>
          <CardText
            light
            title="Your words are"
            accent="only for you"
            body="Used only to write to you. Never sold, never used to train public AI models. Delete everything from Settings."
          />
        </div>

        {/* Hard days */}
        <div className="reveal card relative overflow-hidden p-7 min-h-[260px] flex flex-col justify-end">
          <Glim clip="mood_low" className="absolute -top-2 right-4 w-24 opacity-90" />
          <CardText
            title="Care on"
            accent="hard days"
            body="A mindset practice, not therapy. If things are really hard, Aura shows free support lines open around the clock."
          />
        </div>

        {/* Any phone */}
        <div className="reveal card relative overflow-hidden p-7 min-h-[260px] flex flex-col justify-between">
          <div className="flex flex-wrap gap-2">
            {['Apple', 'Google', 'Email'].map((way) => (
              <span key={way} className="rounded-full bg-bg-deep px-3.5 py-1.5 text-xs font-semibold text-body">
                Sign in with {way}
              </span>
            ))}
          </div>
          <CardText
            title="Waiting on"
            accent="any phone"
            body="Your letters and memories follow you to a new iPhone or Android, the moment you sign in."
          />
        </div>

        {/* No streaks to break: the wide card */}
        <div className="reveal relative md:col-span-2 rounded-[28px] overflow-hidden min-h-[260px] p-7 flex items-end">
          <Image src="/assets/illustrations/sheet-restore.jpg" alt="Gentle ritual restoration and streak preservation" fill sizes="(max-width: 768px) 100vw, 760px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1810]/85 via-[#1b1810]/45 to-transparent" aria-hidden="true" />
          <div className="relative flex-1">
            <CardText
              light
              title="Nothing to"
              accent="lose"
              body="A missed day is quietly held, and a longer pause can be restored for free. Coming back always feels like a welcome."
            />
          </div>
          <Glim clip="keep_spark" className="relative hidden sm:block w-24 shrink-0 drop-shadow-[0_16px_30px_rgba(242,169,111,0.45)]" />
        </div>
      </div>
    </section>
  );
}
