import type { MetadataRoute } from 'next';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aura: Manifest Daily',
    short_name: 'Aura',
    description:
      'Personalized audio moments and daily affirmations tailored to who you are becoming.',
    start_url: '/',
    scope: '/',
    lang: 'en-US',
    dir: 'ltr',
    orientation: 'portrait',
    display: 'standalone',
    background_color: '#0b0a08',
    theme_color: '#0b0a08',
    categories: ['lifestyle', 'health', 'productivity'],
    related_applications: [
      { platform: 'play', url: PLAY_STORE_URL, id: 'com.aura.manifestdaily' },
      { platform: 'itunes', url: APP_STORE_URL },
    ],
    icons: [
      {
        src: '/assets/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
