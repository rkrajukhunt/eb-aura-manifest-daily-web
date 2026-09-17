export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDocument {
  title: string;
  effectiveDate?: string;
  intro: string[];
  sections: LegalSection[];
}

export const APP_NAME = 'Aura: Manifest Daily';
export const COMPANY_NAME = 'EmperorBrains';
export const CONTACT_EMAIL = 'emperorbrains.official@gmail.com';
export const JURISDICTION = 'Hyderabad, India';
export const EFFECTIVE_DATE = 'July 28, 2026';

export const PRIVACY_DOC: LegalDocument = {
  title: 'Privacy Policy',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `This Privacy Policy explains how ${COMPANY_NAME} ("we", "us") collects, uses, and protects your information when you use ${APP_NAME} (the "app"). By using the app you agree to this policy.`,
  ],
  sections: [
    {
      heading: 'Information We Collect',
      body: [
        'Account information: the email address you sign up with, and — if you use Google or Apple sign-in — the identity those providers return to us.',
        'Your content: the answers, intentions, journal and gratitude entries you write, and the letters and affirmations generated for you.',
        'Usage and diagnostics: anonymous product-usage events and crash reports that help us keep the app working.',
        'Purchases: your subscription status. We never see or store your card details — payment is handled entirely by the app store.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      body: [
        'To create your personalized letters, affirmations, and moments tailored specifically to your goals.',
        'To operate, secure, and continuously improve the app experience.',
        'To manage your subscription, process restore requests, and provide responsive customer support.',
      ],
    },
    {
      heading: 'AI Processing & Data Ethics',
      body: [
        'To generate your content, the text you write is sent to our trusted AI infrastructure partners: a large-language-model provider (OpenAI) generates the words, and a voice synthesis provider (ElevenLabs) synthesizes the audio.',
        'These providers process your text solely to return the requested audio or text generation under strict confidentiality agreements. We never sell your personal data, nor do we train public models on your private journal reflections.',
      ],
    },
    {
      heading: 'Storage and Security',
      body: [
        'Your data is encrypted in transit (TLS 1.3) and encrypted at rest using enterprise-grade database security (Supabase / AWS PostgreSQL with strict Row Level Security policies).',
        'Audio files generated for your moments are stored in private, signed storage buckets accessible only by your verified session.',
      ],
    },
    {
      heading: 'Your Rights & Data Control',
      body: [
        'You can access, view, and modify your stored memories directly from within the app in the "What Aura Knows" section.',
        'You can delete your account and all associated data at any time directly from Settings -> Delete Account, or by visiting our public deletion page.',
        `For any data inquiry or deletion assistance, contact ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        'The app is not directed to children under 13 (or the minimum age in your jurisdiction), and we do not knowingly collect personal information from children.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      body: [
        'We may update this policy periodically to reflect operational, legal, or regulatory improvements. Material updates will be clearly documented here with an updated effective date.',
      ],
    },
    {
      heading: 'Contact Information',
      body: [`Questions regarding this policy may be directed to: ${CONTACT_EMAIL} (${COMPANY_NAME}).`],
    },
  ],
};

export const TERMS_DOC: LegalDocument = {
  title: 'Terms of Service',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `These Terms of Service ("Terms") govern your use of ${APP_NAME} (the "app"), developed and provided by ${COMPANY_NAME}. By downloading, accessing, or using the app, you agree to be bound by these Terms.`,
  ],
  sections: [
    {
      heading: 'The Service',
      body: [
        `${APP_NAME} provides an AI-powered mindfulness and manifestation companion that turns your personal intentions into daily affirmations, reflections, and audio moments.`,
        'Important Notice: The app is a self-reflection and personal growth companion. It is NOT medical, psychological, legal, or financial advice, and should never substitute professional healthcare or medical treatment.',
      ],
    },
    {
      heading: 'Eligibility',
      body: [
        'You must be at least 13 years old, or the legal minimum age required in your jurisdiction, to create an account and use the service.',
      ],
    },
    {
      heading: 'Your Account & Security',
      body: [
        'You are responsible for maintaining the confidentiality of your sign-in credentials and for all activities that occur under your account.',
      ],
    },
    {
      heading: 'Subscriptions and Billing',
      body: [
        'Aura offers optional auto-renewable premium subscriptions (Annual, Monthly, Weekly) unlocking full audio moments, unlimited affirmations, and living memory intelligence.',
        'Payment will be charged to your Apple App Store or Google Play account at confirmation of purchase.',
        'Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.',
        'You can manage and cancel your subscriptions in your device account settings after purchase.',
      ],
    },
    {
      heading: 'Acceptable Use Policy',
      body: [
        'You agree not to misuse the app: no unlawful actions, no harassment, no unauthorized automated scraping, no reverse engineering of audio or generation pipelines, and no interference with our infrastructure.',
      ],
    },
    {
      heading: 'Your Intellectual Property & Privacy',
      body: [
        'You retain full ownership of the original text, reflections, and gratitude entries you write.',
        'You grant us a limited, worldwide, non-exclusive license solely to process, host, and transform your input to deliver your personalized audio moments and app features.',
      ],
    },
    {
      heading: 'Disclaimers of Warranties',
      body: [
        'The app and all generated audio/text content are provided "as is" and "as available" without warranty of any kind, express or implied. We do not guarantee specific personal outcomes or manifestation results.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      body: [
        `To the fullest extent permitted by applicable law, ${COMPANY_NAME} and its affiliates shall not be liable for any indirect, punitive, incidental, or consequential damages resulting from your use of the service.`,
      ],
    },
    {
      heading: 'Termination',
      body: [
        'You may terminate your agreement at any time by deleting your account and discontinuing use of the application.',
      ],
    },
    {
      heading: 'Governing Law and Dispute Resolution',
      body: [`These Terms are governed by and construed in accordance with the laws of ${JURISDICTION}.`],
    },
    {
      heading: 'Contact Information',
      body: [`For questions regarding these Terms, contact ${CONTACT_EMAIL}.`],
    },
  ],
};

export const DELETION_DOC: LegalDocument = {
  title: 'Delete Your Account',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `This page explains how to delete your ${APP_NAME} account and completely erase all personal data, fulfilling Apple App Store and Google Play data protection requirements.`,
  ],
  sections: [
    {
      heading: 'Method 1: Direct deletion within the app (Instant)',
      body: [
        '1. Open the Aura: Manifest Daily app on your device.',
        '2. Navigate to your Profile tab.',
        '3. Tap the Settings (gear icon) in the upper corner.',
        '4. Scroll down and tap "Delete account".',
        '5. Confirm your decision. Your account, profile, journal entries, affirmations, and audio files are wiped immediately.',
      ],
    },
    {
      heading: 'Method 2: Request deletion via email (Without app)',
      body: [
        `If you have uninstalled the app or lost access to your device, send an email to ${CONTACT_EMAIL} from the address linked to your account with the subject "Account Deletion Request".`,
        'We will verify ownership and permanently purge your account and records within 30 days.',
      ],
    },
    {
      heading: 'What is permanently deleted',
      body: [
        'Your user account, email address, and authentication tokens.',
        'All onboarding answers, declared goals, and core desires.',
        'All gratitude journals, morning notes, and daily entries.',
        'All synthesized speech audio files, letters, and custom affirmation cards.',
        'All living memory vectors and personalized companion records.',
      ],
    },
    {
      heading: 'Subscriptions note',
      body: [
        'Deleting your account deletes your in-app data, but active app store subscriptions must be cancelled through your Apple ID or Google Play subscription management screen to prevent future renewal charges by the store.',
      ],
    },
    {
      heading: 'Assistance',
      body: [`Need assistance with your account deletion? Contact us at ${CONTACT_EMAIL}.`],
    },
  ],
};

export const SUPPORT_DOC: LegalDocument = {
  title: 'Support & Help Center',
  intro: [
    `Have a question about Aura, experiencing an issue with audio playback, or need help with your subscription? Our team is here to assist you.`,
  ],
  sections: [
    {
      heading: 'Direct Email Support',
      body: [
        `Email our engineering & support team at: ${CONTACT_EMAIL}`,
        'We strive to answer all inquiries within 24–48 business hours.',
        'Tip: Please include your registered email address and iPhone/Android model for faster troubleshooting.',
      ],
    },
    {
      heading: 'Restoring Purchases on a New Device',
      body: [
        'If you switched devices or reinstalled Aura, your purchase is safely preserved on your Apple ID.',
        'Open Aura -> Go to Profile / Settings -> Tap "Restore Purchases". Your subscription will immediately reactivate.',
      ],
    },
    {
      heading: 'Managing or Cancelling Subscriptions',
      body: [
        'On iOS: Open your iPhone "Settings" app -> Tap your Name/Apple ID at the top -> Tap "Subscriptions" -> Select "Aura: Manifest Daily" -> Tap "Cancel Subscription".',
        'You will retain full premium access until the end of your prepaid billing period.',
      ],
    },
    {
      heading: 'Audio & Push Notification Permissions',
      body: [
        'To receive your personalized morning moment at your preferred time, make sure Notifications are permitted in your device settings.',
        'Ensure Silent Mode / Do Not Disturb does not mute media if you wish to hear morning audio as your alarm companion.',
      ],
    },
  ],
};
