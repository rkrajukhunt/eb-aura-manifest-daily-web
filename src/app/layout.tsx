import type { Metadata, Viewport } from 'next';
import { Figtree, Newsreader } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import SmoothScroll from '@/components/SmoothScroll';
import { APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from '@/data/site';

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
    default: 'Aura: Manifest Daily - Personal Daily Affirmations App',
    template: '%s | Aura: Manifest Daily',
  },
  description:
    'A personal affirmation app for iPhone and Android. Tell Aura your goals once, and every morning it writes a two-minute audio affirmation in your own words.',
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
  authors: [{ name: 'EmperorBrains', url: SITE_URL }],
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
  metadataBase: new URL(SITE_URL),
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
  // The share image comes from app/opengraph-image.jpg and app/twitter-image.jpg, sized and tagged by Next
  openGraph: {
    title: 'Aura: Daily affirmations, written for your goals',
    description:
      'Tell Aura your goals once. Every morning it writes a two-minute audio affirmation in your own words and reads it to you by name. Free on iPhone and Android.',
    url: SITE_URL,
    siteName: 'Aura: Manifest Daily',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura: Daily affirmations, written for your goals',
    description:
      'Tell Aura your goals once. Every morning it writes a two-minute audio affirmation in your own words and reads it to you by name. Free on iPhone and Android.',
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
  // Google Search Console: set GOOGLE_SITE_VERIFICATION to the code from the HTML-tag method
  ...(process.env.GOOGLE_SITE_VERIFICATION && { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }),
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
