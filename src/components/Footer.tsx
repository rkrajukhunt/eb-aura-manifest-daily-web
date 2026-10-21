import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { COMPANY_NAME, CONTACT_EMAIL } from '@/data/legal';
import { APP_STORE_URL } from '@/data/site';

const EXPLORE_LINKS = [
  { name: 'A day with Aura', href: '/#day' },
  { name: 'Every feature', href: '/features' },
  { name: 'Your first letter', href: '/#listen' },
  { name: 'Meet Glim', href: '/#glim' },
  { name: 'Plans', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
];

const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Support', href: '/support' },
  { name: 'Delete your account', href: '/delete-account' },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-deep border-t border-line pt-16 pb-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-6 space-y-5">
            <p className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-ink max-w-sm leading-tight">
              A daily companion for the life you are building<span className="text-ember">.</span>
            </p>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-pill">
              Download on the App Store
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors w-fit"
            >
              <Mail className="w-4 h-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Explore">
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-body">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-ink transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Legal">
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-4">Legal and help</h4>
            <ul className="space-y-2.5 text-sm text-body">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-ink transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Oversized wordmark, cropped by the page edge */}
        <p
          className="font-serif font-medium tracking-tighter text-ink/[0.07] leading-[0.8] text-[28vw] md:text-[18rem] select-none -mb-4 sm:-mb-8"
          aria-hidden="true"
        >
          Aura.
        </p>

        <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p>Made gently, for quiet mornings.</p>
        </div>
      </div>
    </footer>
  );
}
