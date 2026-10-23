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
    `This Privacy Policy explains how ${COMPANY_NAME} ("we", "us", or "our") collects, uses, encrypts, and protects your personal information when you use the ${APP_NAME} mobile application (iOS and Android), our website, and all related services (collectively, the "Service").`,
    'Your thoughts, intentions, and vulnerability are sacrosanct. We operate on a strict privacy-by-design framework: we collect only what is strictly necessary to craft your intimate daily audio moments and affirmations, we never sell your personal data, and we never train public artificial intelligence models on your private journal reflections.',
    'By downloading, accessing, or using Aura: Manifest Daily, you acknowledge and agree to the data handling practices described in this Privacy Policy.',
  ],
  sections: [
    {
      heading: '1. Information We Collect',
      body: [
        'Account & Identity Information: When you create an account, we collect your email address and a cryptographic unique user identifier (UID). If you sign in using Apple Sign-In or Google Sign-In, we receive the authenticated identity token and associated email (including Apple Private Relay email aliases if selected). We do not collect or access your contact list, social media friends, or external identity profiles.',
        'Personal Intentions & Onboarding Reflections: During onboarding, you share your aspirations (such as financial abundance, career purpose, relationships, calm mindset, and personal milestones), chosen voice persona, preferred morning listening hour, and specific topics you designate to "never mention" (strict personal boundaries).',
        'Daily Journaling & Evening Gratitude: When you practice evening gratitude or complete reflection rituals, we store the sentences and notes you write or speak to enrich your personalized morning moments.',
        'Living Memory Profile: Aura synthesizes your ongoing aspirations and gratitude entries into a structured memory vector ("What Aura Knows"). This living memory exists exclusively to personalize future audio moments and affirmations so your companion understands your journey.',
        'Synthesized Audio Content: We generate and store the audio files for your daily morning moments and your initial "Letter from your future self". These audio moments are rendered using studio-quality voice synthesis and stored in private cloud storage accessible solely by your authenticated account.',
        'In-App Purchase & Subscription Status: We track your subscription entitlements (such as Active, Trial, Expired, Renewal Date) and store receipts issued by the Apple App Store and Google Play Store. We never receive, process, or store your credit card numbers, CVVs, bank account information, or billing street addresses — all monetary transactions are managed directly by Apple and Google.',
        'Diagnostic & Telemetry Data: We collect non-identifiable technical data including device model, operating system version, app release version, preferred language, crash stack traces, and anonymous performance metrics. This telemetry is used solely to maintain stability, prevent audio streaming buffer errors, and optimize app responsiveness.',
        'Information We NEVER Collect: We never collect precise GPS location data, biometric faceprints or fingerprints, physical address books, microphone audio recordings without explicit user speech-to-text activation, or sensitive health records.',
      ],
    },
    {
      heading: '2. How We Use Your Information',
      body: [
        'Generating Personalized Audio Moments: We transform your onboarding dreams, evening gratitude lines, and memory context into intimate, spoken-word morning audio moments addressed to you by name.',
        'Tailoring Evidence-Based Affirmations: We configure custom affirmation cards utilizing evidence-based mindset methodologies (including the 369 method, present-tense sensory grounding, and identity reframing) tailored to your specific goals.',
        'Maintaining Your Living Memory Engine: We keep your reflections organized in "What Aura Knows", giving your AI companion ongoing continuity so it never speaks to you generically.',
        'Managing Subscriptions & Cross-Device Sync: We authenticate your user session and verify your active subscription status across multiple devices (such as iPhone, iPad, and Android).',
        'Customer Care & Troubleshooting: We use your registered email and provided diagnostic logs to investigate customer support inquiries, assist with purchase restoration, and resolve audio playback issues.',
        'Platform Security & Abuse Prevention: We monitor infrastructure traffic to detect unauthorized API scraping, protect server integrity, and ensure compliance with our Terms of Service.',
      ],
    },
    {
      heading: '3. Artificial Intelligence (AI) Architecture & Data Ethics',
      body: [
        'Trusted AI Infrastructure Subprocessors: To compose your personalized text moments and synthesize intimate spoken audio, your text inputs are transmitted via encrypted connections to our enterprise AI partners: OpenAI (for natural language synthesis) and ElevenLabs (for natural neural voice synthesis).',
        'Strict Zero-Training Guarantee: Under our commercial enterprise agreements with our AI infrastructure partners, your private journal entries, dreams, aspirations, and synthesized scripts are NEVER used to train, retrain, or improve foundational AI or machine learning models.',
        'No Commercial Data Sale or Brokerage: We do not sell, rent, monetize, license, or trade your personal information, journal entries, or audio files to third-party data brokers, advertising agencies, or marketing networks.',
        'Transient Processing: Data sent to voice synthesis engines is processed solely to generate the requested MP3/AAC audio stream and is not retained by third-party processors beyond transient generation windows.',
      ],
    },
    {
      heading: '4. Storage, Encryption & Security Architecture',
      body: [
        'Encryption in Transit: All data transmitted between the Aura mobile app, web application, and backend infrastructure is protected using Transport Layer Security (TLS 1.3 / HTTPS) with modern cipher suites and perfect forward secrecy.',
        'Encryption at Rest: All database records (including journal entries, user profiles, and memory items) are stored in enterprise-grade cloud databases (Supabase / AWS PostgreSQL) utilizing AES-256 bit encryption at rest.',
        'Database Row-Level Security (RLS): Our database enforces strict cryptographic Row-Level Security policies. Every query is validated against your unique authenticated JWT session, making it technically impossible for another user to view, query, or intercept your memories or entries.',
        'Private Signed Audio Storage: Your synthesized audio moments are stored in private cloud storage buckets protected against public indexing. Media URLs are generated dynamically with short-lived cryptographic signatures that expire automatically.',
      ],
    },
    {
      heading: '5. Your Rights & Living Memory Control',
      body: [
        'Full Memory Transparency ("What Aura Knows"): You have continuous, complete visibility into everything Aura remembers about you. Open the app at any time to inspect your living memory profile.',
        'Granular Memory Editing & Deletion: You can edit or permanently delete any individual memory item from "What Aura Knows" with a single tap. Once removed, that memory is purged immediately and will never influence future moments.',
        'Complete Account Deletion: You possess the absolute right to delete your account and all associated data at any time directly in the app (Settings -> Delete Account) or through our public self-service portal (/delete-account).',
        'Instant Purge Policy: Upon confirming account deletion, your user profile, email identity, journal entries, letters from your future self, synthesized audio files, and memory vectors are immediately and permanently erased from our production databases.',
        'Right to Access & Data Portability: You may request a machine-readable export of all personal journal reflections and memory entries associated with your account by contacting our data protection team.',
      ],
    },
    {
      heading: '6. Subscriptions & Payment Data Handling',
      body: [
        'App Store Exclusivity: All subscription purchases, trial authorizations, renewals, and cancellations are handled exclusively by Apple App Store (Apple Media Services) and Google Play Store (Google Play Billing).',
        'Zero Financial Data Exposure: EmperorBrains never sees, handles, or stores your credit card numbers, billing zip codes, PayPal accounts, or bank routing information.',
        'Cancellation Responsibility: Because payments are processed by Apple and Google, deleting your account or uninstalling the app does not automatically cancel an active App Store or Google Play subscription. Subscriptions must be cancelled directly in your device account settings.',
      ],
    },
    {
      heading: '7. Children’s Privacy Protection (COPPA & GDPR)',
      body: [
        'Strict Age Restriction: Aura: Manifest Daily is strictly intended for individuals aged 13 and older (or 16 in the European Economic Area / UK).',
        'No Intentional Collection: We do not knowingly solicit, collect, or process personal data from children under these minimum ages. If we become aware that a child under 13 has registered without verified parental consent, we will immediately delete the account and all related data.',
      ],
    },
    {
      heading: '8. Global Privacy Compliance (GDPR, CCPA/CPRA, DPDP)',
      body: [
        'European Union & UK Users (GDPR / UK GDPR): Our legal basis for processing your personal data is the performance of our contract with you (delivering requested personalized audio moments and companion features) and our legitimate interest in securing our platform. You hold rights to access, rectification, erasure, restriction of processing, and data portability under Articles 15–22 of the GDPR.',
        'California Residents (CCPA / CPRA): We do not "sell" or "share" your personal information as defined under the California Consumer Privacy Act. You have the right to know what personal data we collect, request deletion, correct inaccurate data, and receive equal service without discrimination.',
        'Indian Digital Personal Data Protection Act (DPDP): Personal data is processed lawfully with strict purpose limitation and robust technical safeguards in accordance with applicable Indian data protection regulations.',
      ],
    },
    {
      heading: '9. Third-Party Service Providers (Subprocessors)',
      body: [
        'Database & Hosting: Supabase Inc. / Amazon Web Services (AWS) — Encrypted PostgreSQL database hosting, authentication, and private cloud storage.',
        'AI Language Processing: OpenAI LLC — Transient natural language generation under enterprise zero-data-retention agreements.',
        'AI Voice Synthesis: ElevenLabs Inc. — Natural voice audio synthesis under commercial confidentiality agreements.',
        'Payment Platforms: Apple Inc. (App Store) & Google LLC (Google Play Store) — Mobile subscription billing and receipt verification.',
        'Diagnostic Telemetry: Sentry / Crashlytics — Anonymous crash reporting and performance error monitoring.',
      ],
    },
    {
      heading: '10. Changes to This Privacy Policy',
      body: [
        'We may update this Privacy Policy from time to time to reflect product enhancements, legal requirements, or evolving industry privacy standards.',
        'When changes are made, we will update the "Effective Date" at the top of this document. Material changes will be accompanied by prominent in-app notification or notice on our website prior to taking effect.',
      ],
    },
    {
      heading: '11. Contact & Data Protection Inquiries',
      body: [
        `If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our Data Protection Officer at: ${CONTACT_EMAIL}.`,
        `Corporate Entity: ${COMPANY_NAME}, ${JURISDICTION}.`,
      ],
    },
  ],
};

export const TERMS_DOC: LegalDocument = {
  title: 'Terms of Service',
  effectiveDate: EFFECTIVE_DATE,
  intro: [
    `These Terms of Service ("Terms") constitute a legally binding agreement between you ("you", "your", or "User") and ${COMPANY_NAME} ("we", "us", or "our") governing your access to and use of the ${APP_NAME} mobile application, website, and all associated software and services (collectively, the "Service").`,
    'By downloading, installing, accessing, or using Aura: Manifest Daily, you represent that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Service.',
  ],
  sections: [
    {
      heading: '1. The Service & Core Features',
      body: [
        'Aura: Manifest Daily is an artificial intelligence-driven personal companion engineered to support daily mindfulness, manifestation rituals, and self-reflection.',
        'Core Features include: Personalized Morning Audio Moments spoken by name, Letter from Your Future Self created during onboarding, Daily Affirmations with evidence-based techniques (such as 369 practices and sensory visualization), Evening Gratitude Journaling, Living Memory contextual reflection, Studio on-demand moments, and Soft Streaks with Held Days.',
        'The Service is provided for personal, non-commercial self-development and inspiration purposes only.',
      ],
    },
    {
      heading: '2. Critical Health & Non-Medical Disclaimer',
      body: [
        'Mindset & Mindfulness Companion Only: Aura is a tool for personal contemplation, mindset alignment, and self-reflection. Aura is NOT a medical device, mental health clinic, psychiatric service, or suicide prevention service.',
        'No Medical or Professional Advice: The Service does NOT offer medical, psychological, psychiatric, clinical, financial, or legal advice. Content generated by Aura should never replace diagnosis, treatment, therapy, or advice from qualified physicians, psychologists, psychiatrists, or licensed healthcare providers.',
        'Emergency Resources: If you are experiencing emotional distress, mental health crisis, suicidal thoughts, or a medical emergency, please immediately call your local emergency service (such as 988 or 911 in the US/Canada, 112 in Europe, 999 in the UK) or contact a licensed crisis counselor. Aura displays complimentary 24/7 crisis support contact information within the app for anyone in acute distress.',
      ],
    },
    {
      heading: '3. Eligibility & User Accounts',
      body: [
        'Age Requirement: You must be at least 13 years of age (or 16 in the European Economic Area / UK) to create an account or use the Service. By using Aura, you represent and warrant that you meet this requirement.',
        'Account Registration: To access personalized features, you must create an account using a valid email address or authenticated Apple / Google sign-in credentials. You agree to provide accurate and truthful information.',
        'Account Security: You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately at emperorbrains.official@gmail.com of any suspected unauthorized access.',
      ],
    },
    {
      heading: '4. Subscriptions, Free Trials & Payment Terms',
      body: [
        'Free Tier Practice: Aura provides a free daily practice tier featuring basic daily affirmations, onboarding future-self letter review, and core mindfulness reflections without requiring payment.',
        'Aura Premium Membership: We offer optional premium subscriptions (Annual and Monthly billing plans) that unlock unlimited daily personalized morning audio moments, living memory intelligence, unlimited studio generation, and custom voice models.',
        '7-Day Complimentary Free Trial: Eligible first-time subscribers may receive a 7-day free trial. You will not be charged during the trial period. To avoid being charged, you must cancel your subscription at least 24 hours before the 7-day trial concludes.',
        'Automatic Renewal: All subscriptions automatically renew at the end of each billing cycle (annually or monthly) at the current published price, unless auto-renewal is turned off at least 24 hours prior to the end of the current billing cycle.',
        'App Store In-App Billing: All purchases, billing, payments, and recurring charges are processed directly by Apple Inc. (App Store) or Google LLC (Google Play Store). EmperorBrains does not collect or hold your credit card credentials.',
        'Managing & Cancelling Subscriptions: You can manage or cancel your subscription at any time directly through your device account settings: On iOS: Device Settings -> [Your Name] -> Subscriptions -> Aura: Manifest Daily -> Cancel Subscription. On Android: Google Play Store app -> Profile -> Payments & Subscriptions -> Subscriptions -> Aura: Manifest Daily -> Cancel Subscription.',
        'Refund Policy: Because billing is executed exclusively through Apple and Google platforms, all refund requests are subject to the policies of Apple Media Services and Google Play Billing. We cannot issue direct refunds. To request a refund, please contact Apple (reportaproblem.apple.com) or Google Play Support.',
        'Price Changes: We reserve the right to adjust subscription pricing. Any price change will be communicated in advance via your app store platform, and will only apply to subsequent billing cycles upon your agreement.',
      ],
    },
    {
      heading: '5. Intellectual Property Rights & Ownership',
      body: [
        'Your Content Ownership: You retain 100% full intellectual property ownership of all original text, thoughts, dreams, goals, and gratitude journal entries you write or input into the Service ("User Content").',
        'Limited Operational License: You grant EmperorBrains a limited, worldwide, non-exclusive, royalty-free license solely to process, host, parse, and transmit your User Content as strictly required to operate the app, personalize your companion, and synthesize your requested audio moments.',
        'No Public Publication: We will never publish, broadcast, broadcast-stream, or publicly display your private User Content or generated voice moments without your prior explicit written authorization.',
        'Aura Proprietary Property: EmperorBrains and its licensors retain all right, title, and interest in and to the Service, including the mobile applications, website code, graphical interfaces, Ember & Bone design system, editorial voice styles, audio mixing algorithms, Glim mascot illustrations, and trademarks.',
      ],
    },
    {
      heading: '6. Artificial Intelligence Disclosures & Output',
      body: [
        'AI-Generated Content: Aura utilizes advanced generative artificial intelligence and deep neural voice models to compose affirmations and spoken audio moments. While engineered for inspiration and warmth, AI outputs are generated algorithmically.',
        'No Guarantees of Material Outcomes: Manifestation and mindset practices are psychological and motivational rituals. EmperorBrains makes no claims, warranties, or guarantees that using Aura will produce specific material, financial, romantic, or supernatural outcomes in your physical life.',
      ],
    },
    {
      heading: '7. Acceptable Use Policy',
      body: [
        'Lawful Use Only: You agree to use the Service exclusively for lawful purposes and in strict accordance with these Terms.',
        'Prohibited Conduct: You agree not to: (a) reverse engineer, decompile, disassemble, or attempt to extract the source code, prompts, or neural voice weights of Aura; (b) deploy automated bots, spiders, or scrapers against our infrastructure; (c) bypass or attempt to breach any authentication, encryption, or database Row-Level Security policies; (d) input harmful, defamatory, obscene, harassing, or infringing content; (e) resell, rent, lease, or commercially exploit access to Aura audio generation pipelines.',
      ],
    },
    {
      heading: '8. Disclaimer of Warranties',
      body: [
        'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
        'EMPERORBRAINS DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR DEFECTS, NOR THAT AUDIO PLAYBACK OR TRANSCRIPTION WILL ALWAYS BE COMPLETELY ACCURATE.',
      ],
    },
    {
      heading: '9. Limitation of Liability',
      body: [
        'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EMPERORBRAINS, ITS DIRECTORS, EMPLOYEES, AFFILIATES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE SERVICE.',
        'IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF: (A) ONE HUNDRED UNITED STATES DOLLARS ($100.00 USD), OR (B) THE TOTAL SUBSCRIPTION FEES ACTUALLY PAID BY YOU TO EMPERORBRAINS FOR THE SERVICE IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM.',
      ],
    },
    {
      heading: '10. Indemnification',
      body: [
        'You agree to defend, indemnify, and hold harmless EmperorBrains and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms or your misuse of the Service.',
      ],
    },
    {
      heading: '11. Termination & Account Deletion',
      body: [
        'User Termination: You may terminate this agreement at any time by deleting your account through the app settings or via /delete-account and discontinuing all use of the Service.',
        'Suspension by Aura: We reserve the right to suspend or terminate your account and access to the Service immediately, without prior notice, if you breach any provision of these Terms or engage in conduct that harms our platform or other users.',
        'Survival: Sections 2, 5, 6, 8, 9, 10, 12, and 13 shall survive any termination of these Terms.',
      ],
    },
    {
      heading: '12. Governing Law & Dispute Resolution',
      body: [
        `Governing Law: These Terms and any dispute arising from them shall be governed by and construed in accordance with the laws of ${JURISDICTION}, without regard to its conflict of law principles.`,
        'Informal Resolution: Prior to initiating formal legal proceedings, you and EmperorBrains agree to attempt in good faith to resolve any dispute, controversy, or claim informally by contacting emperorbrains.official@gmail.com.',
      ],
    },
    {
      heading: '13. General Provisions',
      body: [
        'Entire Agreement: These Terms, together with our Privacy Policy, constitute the complete and exclusive agreement between you and EmperorBrains regarding the Service.',
        'Severability: If any provision of these Terms is deemed unlawful, void, or unenforceable, that provision shall be severed without affecting the validity and enforceability of the remaining provisions.',
        'No Waiver: The failure of EmperorBrains to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.',
        `Questions: For questions or formal legal notices, please write to us at: ${CONTACT_EMAIL} (${COMPANY_NAME}).`,
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
