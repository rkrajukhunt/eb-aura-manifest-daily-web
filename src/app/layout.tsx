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
    'gratitude journal app',
    'daily meditation audio',
    'living memory AI',
    'morning audio meditation',
    'affirmation techniques',
    'positive affirmations app',
    'manifestation coach',
    'daily morning ritual',
    'law of attraction audio',
    'mindfulness companion iOS Android',
  ],
  authors: [{ name: 'EmperorBrains', url: 'https://eb-aura-manifest-daily.onrender.com' }],
  creator: 'EmperorBrains',
  publisher: 'EmperorBrains',
  applicationName: 'Aura: Manifest Daily',
  // Safari Smart App Banner & Mobile Store linking
  itunes: { appId: '6795523727' },
  appLinks: {
    ios: { url: APP_STORE_URL, app_store_id: '6795523727', app_name: 'Aura: Manifest Daily' },
    android: { url: PLAY_STORE_URL, package: 'com.aura.manifestdaily', app_name: 'Aura: Manifest Daily' },
  },
  category: 'lifestyle',
  classification: 'Health & Fitness / Lifestyle / Mindfulness',
  metadataBase: new URL('https://eb-aura-manifest-daily.onrender.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'x-default': '/',
    },
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
      'Personalized audio moments and daily affirmations tailored to who you are becoming. Hear your dreams spoken back to you each morning.',
    url: 'https://eb-aura-manifest-daily.onrender.com',
    siteName: 'Aura: Manifest Daily',
    images: [
      {
        url: '/assets/banner.png',
        secureUrl: 'https://eb-aura-manifest-daily.onrender.com/assets/banner.png',
        width: 1200,
        height: 630,
        alt: 'Aura: Manifest Daily — Personalized Audio Moments & Daily Affirmations',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura: Manifest Daily — Personalized Audio Moments & Daily Affirmations',
    description:
      'Personalized audio moments and daily affirmations tailored to who you are becoming.',
    images: ['https://eb-aura-manifest-daily.onrender.com/assets/banner.png'],
    creator: '@EmperorBrains',
    site: '@EmperorBrains',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/assets/logo-circular.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/assets/logo-circular.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Aura',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
