'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Showcase', href: '/#showcase' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full ${
        isScrolled
          ? 'bg-[#ece9df]/95 dark:bg-[#0b0a08]/95 backdrop-blur-2xl border-b border-[rgba(138,130,101,0.2)] dark:border-[rgba(218,213,190,0.12)] py-3 shadow-[0_4px_25px_rgba(27,24,16,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
          : 'bg-[#ece9df]/80 dark:bg-[#0b0a08]/80 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.04] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#e2682f]/30 p-1 group-hover:border-[#e2682f] transition-colors bg-white/20 dark:bg-transparent shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Aura: Manifest Daily Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wide text-[#1b1810] dark:text-[#f5f2e8] group-hover:text-[#e2682f] dark:group-hover:text-[#f2a96f] transition-colors leading-tight">
                Aura
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#8a8265] font-medium">
                Manifest Daily
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#4a4536] dark:text-[#dad5be] hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action & Theme Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/#download"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 shadow-[0_0_20px_rgba(226,104,47,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Download App</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="md:hidden flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#4a4536] dark:text-[#dad5be] hover:text-[#1b1810] dark:hover:text-[#f5f2e8] hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop Scrim */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] bg-black/60 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 md:hidden bg-[#ece9df] dark:bg-[#12100d] border-b border-[#e2682f]/25 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#1b1810] dark:text-[#f5f2e8] hover:text-[#e2682f] py-3 border-b border-black/5 dark:border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#8a8265]" />
                </Link>
              ))}
              <Link
                href="/#download"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] shadow-lg shadow-[#e2682f]/30"
              >
                <span>Download on iOS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
