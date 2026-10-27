import React from 'react';
import { APP_STORE_URL, PLAY_STORE_URL, SITE_URL } from '@/data/site';

export default function StructuredData() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'EmperorBrains',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/logo.png`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'emperorbrains.official@gmail.com',
      contactType: 'customer support',
      availableLanguage: ['English'],
    },
    sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  };

  const schemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Aura: Manifest Daily',
    alternateName: ['Aura', 'Aura App', 'Aura Manifest Daily'],
    description:
      'An AI companion that transforms your dream life into intimate, personalized audio moments and daily affirmations tailored to who you are becoming.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-US',
  };

  const schemaApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#app`,
    name: 'Aura: Manifest Daily',
    alternateName: ['Aura', 'Aura Manifest Daily'],
    headline: 'Your Dream Life Spoken Into Reality Each Morning',
    operatingSystem: 'iOS 16.0+, Android 10.0+',
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: 'Mindfulness, Meditation & Manifestation',
    description:
      'An AI companion that transforms your dream life into intimate, personalized audio moments and daily affirmations. Designed with warm editorial elegance, living memory intelligence, and zero guilt.',
    url: SITE_URL,
    downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
    installUrl: [APP_STORE_URL, PLAY_STORE_URL],
    screenshot: [
      `${SITE_URL}/assets/screenshots/aura-01-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-02-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-03-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-04-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-05-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-06-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-07-1242x2688.png`,
      `${SITE_URL}/assets/screenshots/aura-08-1242x2688.png`,
    ],
    featureList: [
      'Personalized Morning Audio Moments synthesized with custom AI voices in your own words',
      'Living Memory Engine that remembers your aspirations and gratitude entries',
      'Evidence-based Affirmations tailored with proven psychological techniques',
      'Evening Gratitude Journaling with voice and text reflection',
      'Soft Streaks with Held Days so missing a day never brings guilt',
      'Letter from Your Future Self created during onboarding',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      category: 'Free download with optional in-app membership',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1280',
      bestRating: '5',
      worstRating: '1',
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Aura generate my personalized morning moments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aura writes from what you told it during onboarding, your evening gratitude lines, and what it has learned since. The moment is then read aloud with an ElevenLabs voice. Each one is new, and it addresses you by name.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my personal information and journal data private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Your entries are protected with row-level security and encrypted storage. We never sell your data, and we never train public AI models on what you write. You can view, edit, or delete everything in "What Aura Knows" at any time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do subscriptions and the free trial work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aura is free to start, and your first letter is always free. Premium comes yearly, monthly or weekly, and every price is shown on this page. Plans with a free trial show the exact day you would be charged, Aura reminds you before the trial ends, and you can cancel anytime from your App Store or Google Play subscriptions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I restore my purchase after reinstalling the app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open Aura, go to your Profile or the Paywall screen, and tap "Restore Purchase". Your subscription is securely linked to your Apple ID / Google account and will reactivate instantly with no additional charge.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why doesn’t Aura use streaks that shame me for missing a day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Growth comes in seasons, not straight lines. A missed day is held for you, and a longer pause can be restored, so coming back always feels like a welcome.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
    </>
  );
}
