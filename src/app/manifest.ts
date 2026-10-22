import type { MetadataRoute } from 'next';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aura: Manifest Daily',
    short_name: 'Aura',
    description:
      'Personalized audio moments and daily affirmations tailored to who you are becoming.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0a08',
    theme_color: '#0b0a08',
    related_applications: [
      { platform: 'play', url: PLAY_STORE_URL, id: 'com.aura.manifestdaily' },
      { platform: 'itunes', url: APP_STORE_URL },
    ],
    icons: [
      {
        src: '/assets/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
