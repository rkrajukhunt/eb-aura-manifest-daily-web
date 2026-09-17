import type { MetadataRoute } from 'next';

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
