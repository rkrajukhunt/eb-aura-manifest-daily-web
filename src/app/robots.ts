import type { MetadataRoute } from 'next';

const BASE_URL = 'https://eb-aura-manifest-daily.onrender.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
