import React from 'react';

export default function StructuredData() {
  const schemaApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Aura: Manifest Daily',
    operatingSystem: 'iOS 16.0+, Android',
    applicationCategory: 'LifestyleApplication',
    description:
      'An AI companion that turns your dream life into personalized audio moments and daily affirmations — and gets to know you better every day.',
    url: 'https://eb-aura-manifest-daily.onrender.com',
    downloadUrl: 'https://apps.apple.com/app/id6795523727',
    offers: [
      {
        '@type': 'Offer',
        name: 'Annual Membership (7-Day Free Trial)',
        price: '49.99',
        priceCurrency: 'USD',
        category: 'Subscription',
      },
      {
        '@type': 'Offer',
        name: 'Monthly Membership',
        price: '7.99',
        priceCurrency: 'USD',
        category: 'Subscription',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1280',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EmperorBrains',
      url: 'https://eb-aura-manifest-daily.onrender.com',
      logo: 'https://eb-aura-manifest-daily.onrender.com/assets/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'emperorbrains.official@gmail.com',
        contactType: 'customer support',
      },
    },
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Aura generate my personalized morning moments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aura synthesizes your onboarding dreams, daily evening gratitude entries, and ongoing aspirations using advanced language intelligence and ElevenLabs studio-quality voice models. Each morning’s moment is unique, intimate, and addresses you by name.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my personal information and journal data private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Your thoughts and vulnerability are sacrosanct. We use strict database Row-Level Security (RLS) and encrypted storage. We never sell your personal data, nor do we train public AI models on your private memories.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do subscriptions and the free trial work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aura offers Annual and Monthly subscription plans with a 7-day complimentary free trial. You will not be charged until the trial period concludes, and you can cancel anytime directly via Apple App Store / Google Play Subscriptions without hassle.',
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
          text: 'True personal growth is cyclical, not linear. Unlike apps that punish missed days with broken streak guilt, Aura uses "Soft Streaks" designed to gently welcome you back whenever you are ready.',
        },
      },
    ],
  };

  return (
    <>
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
