import type { Metadata } from 'next';
import React from 'react';
import { Check } from 'lucide-react';
import Glim, { type GlimClip } from '@/components/Glim';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import SectionHeading, { Accent, Eyebrow } from '@/components/SectionHeading';
import { FEATURE_GROUPS } from '@/data/features';
import { SHARE_IMAGE, SITE_URL } from '@/data/site';
import PageTransition from '@/components/PageTransition';
import BreadcrumbData from '@/components/BreadcrumbData';
import FeatureJumpBar from '@/components/FeatureJumpBar';

export const metadata: Metadata = {
  title: 'Every Feature',
  description:
    'Explore every feature in Aura: Manifest Daily - from your onboarding future letter and personalized audio moments to living memory and soft streaks.',
  alternates: { canonical: `${SITE_URL}/features` },
  openGraph: {
    type: 'website',
    title: 'Every Feature in Aura: Manifest Daily',
    description: 'A daily moment in your own words, affirmations that explain themselves, and a memory you control.',
    url: `${SITE_URL}/features`,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Every Feature in Aura: Manifest Daily',
    description: 'A daily moment in your own words, affirmations that explain themselves, and a memory you control.',
    images: [SHARE_IMAGE],
  },
};

const GROUP_GLIM: Record<string, GlimClip> = {
  begin: 'wave_hello',
  daily: 'deliver_letter',
  affirmations: 'keep_spark',
  evening: 'sleepy_doze',
  memory: 'listen',
  trust: 'idle_float',
};

const featureCount = FEATURE_GROUPS.reduce((sum, group) => sum + group.features.length, 0);
const freeCount = FEATURE_GROUPS.reduce((sum, group) => sum + group.features.filter((f) => f.plan === 'free').length, 0);

export default function FeaturesPage() {
  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Features', path: '/features' }]} />
      <main className="relative">
        <section className="pt-32 sm:pt-40 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center space-y-6">
          <Eyebrow>
            {featureCount} features · {freeCount} of them free
          </Eyebrow>
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.045em] text-ink text-balance max-w-4xl mx-auto leading-[1.02]">
            Everything Aura does, <Accent>in one place</Accent>
            <span className="text-ember">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed">
            From the first conversation to the hundredth morning. Each feature is described the way the app describes it,
            and marked free or premium.
          </p>
        </section>

        {/* Jump bar, pinned under the navbar */}
        <FeatureJumpBar groups={FEATURE_GROUPS.map((group) => ({ id: group.id, label: group.eyebrow }))} />

        {FEATURE_GROUPS.map((group, gi) => (
          <section
            key={group.id}
            id={group.id}
            className={`scroll-mt-40 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${gi % 2 === 1 ? 'bg-bg-deep/60 border-y border-line' : ''}`}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-44 space-y-6">
                  <SectionHeading eyebrow={group.eyebrow} title={group.title} intro={group.intro} align="left" />
                  <Glim clip={GROUP_GLIM[group.id]} className="hidden lg:block w-28" />
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {group.features.map((feature) => (
                  <article key={feature.id} id={feature.id} className="reveal card p-6 sm:p-7 flex flex-col gap-3 scroll-mt-40">
                    <span
                      className={`self-start text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 ${
                        feature.plan === 'premium'
                          ? 'bg-[#e5a93c]/20 text-[#8a5a10] dark:text-[#f6d289]'
                          : 'bg-bg-deep text-muted'
                      }`}
                    >
                      {feature.plan === 'premium' ? 'Premium' : 'Free'}
                    </span>
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-ink text-balance">{feature.title}</h3>
                    <p className="text-body leading-relaxed">{feature.body}</p>
                    {feature.details.length > 0 && (
                      <ul className="mt-auto pt-2 space-y-2">
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex gap-2.5 text-sm text-muted">
                            <Check className="w-4 h-4 text-ember shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="screens" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Inside the app" title="Quiet screens," accent="warm type" />
          <div className="mt-12">
            <ScreenshotCarousel />
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
