'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { APP_STORE_URL } from '@/data/site';

const NAV_LINKS = [
  { name: 'A day with Aura', href: '/#day' },
  { name: 'Features', href: '/features' },
  { name: 'Meet Glim', href: '/#glim' },
  { name: 'Plans', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      {/* Liquid glass pill, like the app's tab bar; it firms up once the page scrolls under it */}
      <div
        className={`max-w-6xl mx-auto rounded-full liquid-glass transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-none'
        }`}
      >
        <div className="flex items-center justify-between gap-4 pl-2 pr-2 py-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 pl-1 pr-2 group"
          >
            <span className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-1 ring-line/80 shadow-xs shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/assets/logo-icon-light.png"
                alt="Aura"
                fill
                sizes="36px"
                className="object-cover dark:hidden"
                priority
              />
              <Image
                src="/assets/logo-icon-dark.png"
                alt="Aura"
                fill
                sizes="36px"
                className="object-cover hidden dark:block"
                priority
              />
            </span>
            <span className="font-serif text-xl font-medium tracking-tight text-ink">
              Aura<span className="text-ember">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-full text-sm font-medium text-body hover:text-ink hover:bg-ink/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-pill !py-2.5 !px-5 !text-sm"
            >
              Get the app
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full text-ink hover:bg-ink/5 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-ink/30 backdrop-blur-sm -z-10 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div id="mobile-menu" className="lg:hidden mt-2 max-w-6xl mx-auto card !rounded-[28px] p-3">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium text-ink hover:bg-ink/5"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted" />
                </Link>
              ))}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-pill mt-2"
              >
                Download on the App Store
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
