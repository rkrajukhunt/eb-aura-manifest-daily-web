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
    `Welcome to ${APP_NAME}, developed and operated by ${COMPANY_NAME} ("we", "us", or "our"). This Privacy Policy explains how your information is handled when you use the ${APP_NAME} mobile app on your iPhone, iPad, or Android device, and when you visit our website.`,
    'We built Aura to be a quiet, personal sanctuary for your thoughts and intentions. We believe your reflections are sacred. We collect only what is needed to make your daily audio moments personal, we never sell your data, and we never use your private journal entries to train public artificial intelligence models.',
    'By using Aura, you agree to the transparent, user-first practices described in this policy.',
  ],
  sections: [
    {
      heading: '1. What You Share With Aura (And Why)',
      body: [
        'Your Account: When you sign up, we save your email address so your daily moments, affirmations, and practice history stay synced if you switch phones. If you use "Sign in with Apple" or "Sign in with Google", we only receive the basic sign-in confirmation from them. We never ask for your contacts or social media profiles.',
        'Your Goals & Onboarding Dreams: When you first meet Aura, you tell it what you are building — whether that is creative work, financial peace, career growth, or a calmer mind. You also pick a voice you enjoy and set topics you want Aura to never mention. This helps Aura speak to you with care and respect from day one.',
        'Your Daily Gratitude & Journal Reflections: When you write an evening gratitude line or reflect in the app, those words are saved to your private journal and help your companion understand your journey over time.',
        'Your Living Memory ("What Aura Knows"): As you use Aura, it remembers the aspirations and themes you have shared so your morning moments feel continuous rather than generic. You have complete visibility and control over this memory at all times.',
        'Your Morning Audio & Letters: The audio moments and future-self letters Aura creates for you are saved to your account so you can listen back to them whenever you wish.',
        'Subscription Status: When you subscribe to Aura Premium, your purchase is processed directly by Apple App Store or Google Play. We only receive confirmation that your subscription is active. We never see, receive, or store your credit card or bank details.',
        'What We Never Ask For: We never track your exact GPS location, we never access your photo library without your permission, and we never record your microphone unless you choose to speak your gratitude aloud.',
      ],
    },
    {
      heading: '2. How Aura Uses Your Information to Help You',
      body: [
        'To create your daily personalized morning audio moments, spoken to you by name and in your own words.',
        'To write daily affirmations tailored to your goals, explaining the technique behind each one (such as the 369 method or sensory visualization).',
        'To keep your companion consistent from one morning to the next, so you never have to repeat your story.',
        'To sync your practice across your devices, so your journal and letters follow you whenever you sign in.',
        'To help you when you reach out for customer support or need help restoring your purchases.',
        'To make sure the app stays fast, reliable, and free of audio streaming issues.',
      ],
    },
    {
      heading: '3. Our AI & Privacy Promises to You',
      body: [
        'Safe, Private Processing: To turn your intentions into gentle morning audio, your words are processed through trusted AI language and voice partners solely to generate your requested moment.',
        'Zero Training on Your Private Words: Our agreements ensure that your personal journal entries, dreams, and audio moments are NEVER used to train or teach public AI models. Your vulnerability is never used to build public products.',
        'We Never Sell Your Data: We have never sold, rented, or monetized personal information to advertisers, marketing agencies, or data brokers, and we never will.',
        'No Tracking for Ads: Aura is a paid, subscriber-supported mindfulness service. We do not place third-party advertising in your daily rituals and do not track you across other websites or apps.',
      ],
    },
    {
      heading: '4. How Your Memories Are Protected',
      body: [
        'Private and Protected: Your journal, memories, and audio moments are protected with industry-standard encryption both in transit across the internet and when stored securely with us.',
        'Account-Level Privacy: Only your authenticated account can ever access your reflections and audio files. No other Aura user or stranger can see, hear, or search your personal reflections.',
        'Private Audio Playback: Your morning audio moments are stored in private secure cloud storage and can only be played through temporary, secure links created solely for your app session.',
      ],
    },
    {
      heading: '5. You Are in Complete Control',
      body: [
        'Inspect Everything ("What Aura Knows"): In the app, you can open "What Aura Knows" at any time to see every single topic or aspiration Aura remembers about you.',
        'Forget Anything With One Tap: If your goals change or you no longer want Aura to remember a specific detail, you can delete that individual memory instantly. Once deleted, Aura forgets it completely.',
        'Delete Your Entire Account Instantly: You can delete your account and wipe all your data at any time from Profile -> Settings -> Delete Account, or through our website at /delete-account.',
        'Instant Removal: When you delete your account, your profile, journal entries, future-self letters, audio files, and memories are immediately and permanently removed from our active systems.',
        'Exporting Your Journal: You can request a copy of your journal entries by emailing our support team at any time.',
      ],
    },
    {
      heading: '6. Subscriptions, App Store Billing & Cancellations',
      body: [
        'Managed by Apple and Google: All subscription payments, free trials, and renewals are handled directly through your Apple ID or Google Play account for your security.',
        'Cancel Anytime: You can turn off auto-renewal at any time in your phone’s subscription settings. You will continue to have full access until the end of your paid period.',
        'Important Reminder: Because billing is handled by your app store, deleting the Aura app or deleting your account does not automatically cancel an active subscription with Apple or Google. Please be sure to cancel your subscription in your device settings.',
      ],
    },
    {
      heading: '7. Children’s Privacy',
      body: [
        'Aura is designed for people aged 13 and older (or 16 in Europe and the UK). We do not knowingly create accounts for or collect information from children under these ages.',
        'If you believe a child has created an account, please let us know at emperorbrains.official@gmail.com and we will promptly remove the account.',
      ],
    },
    {
      heading: '8. Updates to This Policy',
      body: [
        'As we add new features to Aura, we may occasionally update this Privacy Policy. We will always show the effective date at the top, and if we make any important changes, we will let you know with an in-app notice.',
      ],
    },
    {
      heading: '9. How to Contact Us',
      body: [
        `If you have any questions about this policy, want to request your data, or need help with your account, our friendly team is here for you: ${CONTACT_EMAIL} (${COMPANY_NAME}).`,
      ],
    },
  ],
};

export const TERMS_DOC: LegalDocument = {
  title: 'Terms of Service',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `Welcome to ${APP_NAME}! These Terms of Service ("Terms") are an agreement between you and ${COMPANY_NAME} ("we", "us", or "our") that govern your use of the Aura: Manifest Daily app and website (the "Service").`,
    'By downloading, creating an account, or using Aura, you agree to these Terms. Please take a few moments to read them so you understand how the service works.',
  ],
  sections: [
    {
      heading: '1. What Aura Provides & How You Use It',
      body: [
        'Personalized Morning Moments: Aura is an AI companion designed to help you begin your day with calm, purpose, and focus by creating short, personalized audio moments spoken to you by name.',
        'Your Future-Self Letter: During onboarding, you share your aspirations and receive a personal letter written from the perspective of who you are becoming, kept in your sanctuary forever.',
        'Daily Affirmation Practice: You receive daily affirmations paired with practical, evidence-based mindset techniques (such as sensory visualization, present-tense reframing, and the 369 method) that you can practice in two to three quiet minutes.',
        'Evening Gratitude: An unhurried space to record a line or two of gratitude each evening, closing out your day and gently informing the next morning’s moment.',
        'Living Memory: Aura remembers the themes of your life so your conversations feel real and continuous, and gives you a dedicated screen ("What Aura Knows") where you can review or delete memories at any time.',
        'Studio Moments: When a specific situation arises in your life — such as preparing for a big presentation, soothing anxiety before sleep, or resetting after a difficult conversation — you can create tailored on-demand moments.',
        'Soft Streaks & Held Days: Aura does not punish you for being human. If you miss a day, it is quietly held for you without guilt or broken streaks, and returning always feels like a warm welcome.',
      ],
    },
    {
      heading: '2. Important Notice: Mindfulness Companion, Not Medical Advice',
      body: [
        'Personal Growth & Contemplation Only: Aura is designed to support your daily motivation, mindfulness, and personal mindset. It is NOT medical, psychiatric, psychological, or healthcare advice.',
        'Not a Substitute for Therapy: Aura does not diagnose, treat, prevent, or cure any medical or mental health condition. If you need mental healthcare or clinical therapy, please consult a licensed physician or mental health professional.',
        'Emergency Help: If you are experiencing acute emotional distress or a mental health crisis, please reach out to emergency services immediately (such as dialing 988 or 911 in the US/Canada, 112 in Europe, or 999 in the UK). Aura includes free, 24/7 crisis support hotline links in the app for anyone in immediate distress.',
      ],
    },
    {
      heading: '3. Your Account & Responsibilities',
      body: [
        'Age Requirement: You must be at least 13 years old (or 16 in Europe and the UK) to use Aura.',
        'Keeping Your Sign-In Safe: You are responsible for safeguarding your login information and for all activity that occurs under your account. Please let us know right away if you notice any unauthorized access.',
        'Honest Use: Aura is built to reflect what you tell it. Using it with honest intentions ensures your daily moments and affirmations are genuinely helpful to you.',
      ],
    },
    {
      heading: '4. Subscriptions, 7-Day Free Trial & Billing',
      body: [
        'Free Daily Practice: Aura includes a generous free tier featuring daily affirmations, your onboarding letter, and core mindfulness tools without requiring a credit card or subscription.',
        'Aura Premium Membership: We offer optional annual and monthly subscriptions that unlock unlimited personalized morning audio moments, living memory continuity, custom voice models, and full studio generation.',
        '7-Day Complimentary Free Trial: When you start a free trial, you enjoy full premium access for 7 days at zero charge. To avoid being charged, you can cancel at any time up to 24 hours before the 7 days end.',
        'Automatic Renewal: Subscriptions automatically renew at the end of each billing cycle (every year or every month) unless you turn off auto-renewal in your device settings at least 24 hours before your current period ends.',
        'In-App Billing by Apple and Google: All purchases, trial activations, and renewals are handled safely and directly by Apple App Store (In-App Purchases) or Google Play. We never ask for or store your credit card numbers.',
        'How to Cancel: You can cancel your subscription at any time through your phone: On iPhone/iPad: Open Settings -> Tap your Apple ID at the top -> Subscriptions -> Aura: Manifest Daily -> Cancel Subscription. On Android: Open Google Play Store -> Tap your profile icon -> Payments & Subscriptions -> Subscriptions -> Aura: Manifest Daily -> Cancel Subscription.',
        'Refunds: Because all payments are processed directly by Apple and Google, refund requests are governed by Apple Media Services and Google Play policies. To request a refund, please visit reportaproblem.apple.com (Apple) or Google Play Customer Support.',
      ],
    },
    {
      heading: '5. Your Words Belong to You',
      body: [
        'You Own Your Words: You retain 100% ownership of everything you write, reflect on, or share in Aura — your dreams, your gratitude entries, and your thoughts are yours and yours alone.',
        'Our Limited Permission: You give Aura permission to process your words solely to create your personalized audio moments, affirmations, and memory reflections. We never broadcast, publish, or publicly share your private words.',
        'Aura’s Intellectual Property: The Aura app, our visual designs, the ember-and-bone theme, logos, animations, Glim mascot illustrations, and software are protected by copyright and belong to EmperorBrains.',
      ],
    },
    {
      heading: '6. Community & Acceptable Use Rules',
      body: [
        'We want Aura to remain a safe and welcoming sanctuary. When using the app, you agree not to:',
        'Attempt to hack, reverse engineer, scrape, or interfere with the app or its services.',
        'Use Aura for any unlawful, harassing, defamatory, or abusive purposes.',
        'Try to access other users’ accounts or probe our security systems.',
      ],
    },
    {
      heading: '7. About AI & Creative Inspiration',
      body: [
        'AI-Powered Creativity: Aura uses modern AI voice and language technology to compose moments that speak directly to what is on your mind. While designed with deep care, these moments are creative and motivational outputs.',
        'Your Life Is in Your Hands: Manifestation and mindset practices help build confidence, focus, and clarity. Aura does not guarantee financial riches, lottery winnings, or supernatural events — your growth and decisions are always your own.',
      ],
    },
    {
      heading: '8. Disclaimers & Limits of Liability',
      body: [
        'Service Availability: We work hard to ensure Aura is always available, beautiful, and working smoothly. However, the app is provided on an "as is" and "as available" basis. Occasionally services may undergo maintenance or updates.',
        'Limitation of Liability: To the extent permitted by law, EmperorBrains and its team will not be liable for any indirect, incidental, or consequential damages resulting from your use of the service. In any case, our total liability is limited to the amount you paid for your subscription over the past 12 months (or $100 if you use the free tier).',
      ],
    },
    {
      heading: '9. Ending Your Use of Aura',
      body: [
        'You are always free to stop using Aura or delete your account at any time through Settings -> Delete Account. If you ever decide to return, our doors are always open.',
        'We reserve the right to suspend accounts that severely violate our acceptable use guidelines to protect our community and systems.',
      ],
    },
    {
      heading: '10. Governing Law & Contact Us',
      body: [
        `These Terms are governed by the laws of ${JURISDICTION}. If you ever have a concern or question, we encourage you to contact us first so we can work together to resolve it informally.`,
        `For any questions about these Terms, reach out to us at: ${CONTACT_EMAIL} (${COMPANY_NAME}).`,
      ],
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
        'Your user account, profile details, and registered email address.',
        'All onboarding answers, declared goals, and personal intentions.',
        'All gratitude journals, morning notes, and daily reflections.',
        'All morning audio moments, future-self letters, and custom affirmation cards.',
        'All living memories and personalized companion conversation history.',
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
        `Email our friendly support team at: ${CONTACT_EMAIL}`,
        'We strive to answer all inquiries within 24–48 business hours.',
        'Tip: Please include your registered email address and iPhone/Android model for faster troubleshooting.',
      ],
    },
    {
      heading: 'Restoring Purchases on a New Device',
      body: [
        'If you switched devices or reinstalled Aura, your purchase is safely preserved on your Apple ID or Google account.',
        'Open Aura -> Go to Profile / Settings -> Tap "Restore Purchases". Your subscription will immediately reactivate.',
      ],
    },
    {
      heading: 'Managing or Cancelling Subscriptions',
      body: [
        'On iPhone or iPad: Open the "Settings" app -> Tap your Name/Apple ID at the top -> Tap "Subscriptions" -> Select "Aura: Manifest Daily" -> Tap "Cancel Subscription".',
        'On Android: Open the Google Play Store app -> Tap your profile icon -> Tap "Payments & subscriptions" -> "Subscriptions" -> Select "Aura: Manifest Daily" -> Tap "Cancel subscription".',
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
