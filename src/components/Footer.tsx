import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, Mail } from 'lucide-react';
import { COMPANY_NAME, CONTACT_EMAIL } from '@/data/legal';

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(138,130,101,0.2)] dark:border-[rgba(218,213,190,0.1)] bg-[#e2decf] dark:bg-[#070706] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#e2682f]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-black/10 dark:border-white/5">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#e2682f]/40 p-0.5 bg-white/20 dark:bg-transparent">
                <Image
                  src="/assets/logo.png"
                  alt="Aura Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif-luxury text-xl font-bold tracking-wide text-[#1b1810] dark:text-[#f5f2e8]">
                Aura: Manifest Daily
              </span>
            </div>
            <p className="text-sm text-[#4a4536] dark:text-[#8a8265] max-w-md leading-relaxed">
              An AI companion that transforms your aspirations into personalized audio moments and daily affirmations. Designed with warm editorial serenity, privacy-first principles, and zero emotional pressure.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#6f6a58] dark:text-[#dad5be]/80 pt-2">
              <Mail className="w-4 h-4 text-[#e2682f]" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-[#e2682f] dark:hover:text-[#f2a96f] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1b1810] dark:text-[#f5f2e8] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#4a4536] dark:text-[#8a8265]">
              <li>
                <Link href="/#features" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  Personalized Moments
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  Audio Experience
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  App Gallery
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & App Store Compliance */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1b1810] dark:text-[#f5f2e8] font-semibold mb-4">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-sm text-[#4a4536] dark:text-[#8a8265]">
              <li>
                <Link href="/privacy" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e2682f]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  Support & Help Center
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors">
                  Delete Account & Data
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f6a58] dark:text-[#8a8265]">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted for peace of mind</span>
            <Heart className="w-3.5 h-3.5 text-[#e2682f] fill-[#e2682f]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
