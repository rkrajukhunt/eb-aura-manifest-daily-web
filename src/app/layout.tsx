import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aura: Manifest Daily — Personalized Audio Moments & Daily Affirmations',
  description:
    'An AI companion that transforms your dream life into intimate, personalized audio moments and daily affirmations. Designed with warm editorial elegance, living memory intelligence, and zero guilt.',
  keywords: [
    'Aura',
    'Manifest Daily',
    'AI affirmations',
    'audio manifestation',
    'personalized mindfulness',
    'gratitude journal',
    'daily meditation',
    'living memory AI',
  ],
  authors: [{ name: 'EmperorBrains' }],
  creator: 'EmperorBrains',
  publisher: 'EmperorBrains',
  metadataBase: new URL('https://eb-aura-manifest-daily.onrender.com'),
  openGraph: {
    title: 'Aura: Manifest Daily — Your Dream Life Spoken Into Reality',
    description:
      'Personalized audio moments and daily affirmations tailored to who you are becoming.',
    url: 'https://eb-aura-manifest-daily.onrender.com',
    siteName: 'Aura: Manifest Daily',
    images: [
      {
        url: '/assets/banner.png',
        width: 1200,
        height: 630,
        alt: 'Aura: Manifest Daily Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura: Manifest Daily',
    description:
      'Personalized audio moments and daily affirmations tailored to who you are becoming.',
    images: ['/assets/banner.png'],
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ece9df' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0a08' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} scroll-smooth antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('aura-theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (storedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#ece9df] text-[#1b1810] dark:bg-[#0b0a08] dark:text-[#f5f2e8] font-sans-ui selection:bg-[#e2682f]/30 selection:text-white relative overflow-x-hidden transition-colors duration-300">
        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#e2682f]/10 dark:bg-[#e2682f]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        {/* Ambient Mid Glow */}
        <div className="fixed top-1/2 left-[-150px] w-[500px] h-[500px] bg-[#8a8265]/10 dark:bg-[#8a8265]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
