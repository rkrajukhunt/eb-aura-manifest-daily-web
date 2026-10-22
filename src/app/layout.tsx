import type { Metadata, Viewport } from 'next';
import { Figtree, Newsreader } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import SmoothScroll from '@/components/SmoothScroll';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/data/site';

// The app's own pairing: Newsreader for the voice, Figtree for the interface
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aura: Manifest Daily — Personalized Audio Moments & Daily Affirmations',
    template: '%s | Aura: Manifest Daily',
  },
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
    'morning audio meditation',
  ],
  authors: [{ name: 'EmperorBrains', url: 'https://eb-aura-manifest-daily.onrender.com' }],
  creator: 'EmperorBrains',
  publisher: 'EmperorBrains',
  applicationName: 'Aura: Manifest Daily',
  // Safari's Smart App Banner, plus app links that point iPhone and Android visitors at their store
  itunes: { appId: '6795523727' },
  appLinks: {
    ios: { url: APP_STORE_URL, app_store_id: '6795523727', app_name: 'Aura: Manifest Daily' },
    android: { url: PLAY_STORE_URL, package: 'com.aura.manifestdaily', app_name: 'Aura: Manifest Daily' },
  },
  category: 'lifestyle',
  metadataBase: new URL('https://eb-aura-manifest-daily.onrender.com'),
  alternates: {
    canonical: 'https://eb-aura-manifest-daily.onrender.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        alt: 'Aura: Manifest Daily — Morning Audio Moments & Affirmations',
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
    { media: '(prefers-color-scheme: dark)', color: '#1b1810' },
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
      className={`${figtree.variable} ${newsreader.variable} scroll-smooth antialiased w-full max-w-full overflow-x-clip`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('aura-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (storedTheme !== 'light' && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink font-sans selection:bg-ember/25 relative w-full max-w-full overflow-x-clip">
        <SmoothScroll />
        <Navbar />
        <div className="flex-1 w-full max-w-full overflow-x-clip">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
