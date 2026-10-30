import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { COMPANY_NAME, CONTACT_EMAIL } from '@/data/legal';
import { PLATFORMS_LINE } from '@/data/site';
import BackToTop from './BackToTop';
import Glim from './Glim';
import StoreButtons from './StoreButtons';

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { name: 'A day with Aura', href: '/#day' },
      { name: 'How it works', href: '/#how' },
      { name: 'Every feature', href: '/features' },
      { name: 'Blog', href: '/blog' },
      { name: 'Plans', href: '/#pricing' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'FAQ', href: '/#faq' },
      { name: 'Support', href: '/support' },
      { name: 'Delete your account', href: '/delete-account' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

// Fixed points for the evening's first stars, so server and client draw the same sky
const STARS = [
  [8, 14, 1.5], [17, 30, 1], [24, 9, 2], [33, 22, 1], [41, 12, 1.5], [57, 8, 1], [63, 26, 2], [71, 15, 1],
  [79, 6, 1.5], [86, 24, 1], [93, 11, 2], [12, 40, 1], [48, 34, 1], [68, 38, 1.5], [90, 36, 1], [4, 26, 1],
];

const DUNES = [
  { d: 'M0 120 C 200 70 400 64 620 98 S 980 150 1180 108 S 1460 58 1600 92 L1600 520 L0 520 Z', top: '#5e321d', bottom: '#4a2818' },
  { d: 'M0 214 C 180 188 340 196 520 222 S 820 264 1020 222 S 1360 164 1600 196 L1600 520 L0 520 Z', top: '#43261a', bottom: '#381f15' },
  { d: 'M0 318 C 240 288 440 288 660 310 S 1020 332 1220 290 S 1480 254 1600 262 L1600 520 L0 520 Z', top: '#2f1d14', bottom: '#281811' },
  { d: 'M0 420 C 160 398 300 404 460 428 S 720 464 900 434 S 1180 388 1360 404 S 1540 418 1600 408 L1600 520 L0 520 Z', top: '#21160f', bottom: '#1a120c' },
];

/* The closing scene on every page, drawn in vectors so it stays sharp: the page's own colour
   melts into an Aura dusk, the sun sets behind the dunes, and the wordmark rests on the last ridge. */
function DuskScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 45%, #d9874f) 9%, #b4582b 20%, #7c3a1e 34%, #4a2717 50%, #24170f 72%, #17110b 100%)',
        }}
      />

      {STARS.map(([x, y, size], i) => (
        <span
          key={i}
          className="footer-star absolute rounded-full bg-[#f8e7c9]"
          style={{ left: `${x}%`, top: `${18 + y * 0.6}%`, width: size, height: size, animationDelay: `${(i % 6) * 0.7}s` }}
        />
      ))}

      {/* Setting sun and its halo, sinking behind the far ridge */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 w-[min(110vw,1300px)] aspect-[1.7] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(242,169,111,0.38) 0%, transparent 62%)' }} />
      <div className="absolute left-1/2 -translate-x-1/2 top-[52%] -translate-y-1/2 w-[clamp(160px,16vw,260px)] aspect-square rounded-full" style={{ background: 'radial-gradient(circle, #f6b47a 0%, #ec9358 55%, transparent 71%)' }} />

      <svg className="absolute inset-x-0 bottom-0 w-full h-[50%]" viewBox="0 0 1600 520" preserveAspectRatio="none">
        <defs>
          {DUNES.map(({ top, bottom }, i) => (
            <linearGradient key={i} id={`footer-dune-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={top} />
              <stop offset="0.6" stopColor={bottom} />
            </linearGradient>
          ))}
        </defs>
        {DUNES.map(({ d }, i) => (
          <path key={i} d={d} fill={`url(#footer-dune-${i})`} />
        ))}
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="download" className="relative isolate overflow-hidden text-[#f5f2e8]">
      <DuskScene />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:pt-52">
        {/* Last invitation */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <Glim clip="wave_hello" alt="Glim waving hello" className="w-20 mx-auto drop-shadow-[0_20px_40px_rgba(242,169,111,0.5)]" />
          <h2 className="font-sans text-[2.6rem] sm:text-6xl font-semibold tracking-[-0.045em] leading-[1.02] text-balance [text-shadow:0_2px_30px_rgba(23,17,11,0.35)]">
            Start <em className="font-serif font-normal italic tracking-[-0.02em] text-[#f8e7c9]">tomorrow morning</em>
            <span className="text-ember-soft">.</span>
          </h2>
          <p className="text-lg text-[#f5f2e8]/85 max-w-md mx-auto">
            Set your intentions tonight. Wake to a moment that already knows them.
          </p>
          <StoreButtons tone="cream" className="items-center justify-center" />
          <p className="text-sm text-[#f5f2e8]/70">{PLATFORMS_LINE}</p>
        </div>

        {/* Links, on a pane of evening glass */}
        <div className="mt-28 sm:mt-36 rounded-[32px] border border-[#f5f2e8]/10 bg-[#17110b]/35 backdrop-blur-xl p-7 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-2 md:col-span-5 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <span className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-[#f5f2e8]/15">
                  <Image src="/assets/logo-icon-dark.png" alt="Aura: Manifest Daily Logo" fill sizes="36px" className="object-cover" />
                </span>
                <span className="font-serif text-2xl font-medium tracking-tight">
                  Aura<span className="text-ember">.</span>
                </span>
              </Link>
              <p className="text-sm text-[#f5f2e8]/70 leading-relaxed max-w-xs">
                A daily companion for the life you are building. One moment each morning, written in your own words.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {COLUMNS.map((column) => (
              <nav key={column.title} className="md:col-span-2 last:col-span-2 md:last:col-span-3" aria-label={column.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2a96f] mb-4">{column.title}</h3>
                <ul className="space-y-2.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[#f5f2e8]/75 hover:text-[#f5f2e8] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#f5f2e8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5f2e8]/60">
            <p>
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <p className="font-serif italic text-sm text-[#f5f2e8]/70">Made gently, for quiet mornings</p>
            <BackToTop />
          </div>
        </div>
      </div>

      {/* Oversized wordmark resting on the last ridge, fading into the sand */}
      <p
        className="text-center font-serif font-medium tracking-[-0.06em] leading-[0.78] text-[34vw] md:text-[21rem] select-none mt-10 -mb-[0.1em] bg-gradient-to-b from-[#f5f2e8]/90 via-[#f5f2e8]/45 to-[#f5f2e8]/0 bg-clip-text text-transparent"
        aria-hidden="true"
      >
        Aura<span className="bg-gradient-to-b from-[#e2682f] to-[#e2682f]/20 bg-clip-text">.</span>
      </p>
    </footer>
  );
}
