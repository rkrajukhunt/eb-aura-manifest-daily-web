// Every feature the app ships, described in the app's own words.
// Source: apps/mobile/src/copy/*.ts and docs/09-FEATURE-SPECIFICATIONS.md in eb-aura-manifest-daily.
// Plan gating mirrors apps/mobile/src/features/paywall/gating.ts.

export type Plan = 'free' | 'premium';

export interface Feature {
  id: string;
  title: string;
  body: string;
  details: string[];
  plan: Plan;
}

export interface FeatureGroup {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  features: Feature[];
}

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: 'begin',
    eyebrow: 'Getting started',
    title: 'It begins with a conversation',
    intro: 'A few unhurried questions, so nothing Aura writes is generic.',
    features: [
      {
        id: 'conversation',
        title: 'A conversation, not a form',
        body: 'What you want to bring into your life, how the last week or two has actually been, and what usually gets in the way.',
        details: [
          'Six areas: confidence, love, money, purpose, calm, better habits',
          'Every few answers, Aura reflects back what it heard',
          'Edit any answer before you go on',
        ],
        plan: 'free',
      },
      {
        id: 'belief',
        title: 'Written at a level you can believe',
        body: 'Aura asks how you see this practice and which lines feel true to you, then writes at that level.',
        details: [
          'The universe and energy, neuroscience, faith, or just practical',
          '“That’s true”, “I want it to be true”, or “It feels fake”',
          'Topics you would rather leave out stay out',
        ],
        plan: 'free',
      },
      {
        id: 'ritual-time',
        title: 'The Sky Dial',
        body: 'Choose when your moment arrives: morning, midday, evening, or before bed. It comes at your hour, not whenever.',
        details: ['A living landscape that follows the time you pick', 'Change it any time from your profile'],
        plan: 'free',
      },
      {
        id: 'promise',
        title: 'A promise to yourself',
        body: 'Sign a small promise with your finger: at your time, once a day, always yours. It is kept in What Aura Knows.',
        details: ['Signing is optional', 'One gentle arrival a day, never a stream'],
        plan: 'free',
      },
      {
        id: 'letter',
        title: 'Your first letter, from your future self',
        body: 'Hold to light it. Aura reads what you told it, writes your letter, and records it in a voice that says your name.',
        details: ['Plays word by word as it is read', 'Kept forever, on every plan', 'More letters arrive on day 7, 30 and 100'],
        plan: 'free',
      },
    ],
  },
  {
    id: 'daily',
    eyebrow: 'Every morning',
    title: 'A moment, written around your words',
    intro: 'The heart of Aura: a short scene from the life you described, ready at your hour.',
    features: [
      {
        id: 'moment',
        title: 'Today’s moment',
        body: 'A new moment each morning, shaped around the life you described and the lines you kept.',
        details: ['A note when it is ready, at the time you chose', '“Coming for you” previews of what is being written'],
        plan: 'free',
      },
      {
        id: 'check-in',
        title: 'How are you arriving today?',
        body: 'A one-tap check-in, and a short reply in Aura’s voice.',
        details: ['Calm, hopeful, tired, heavy, restless or grateful', '“Rest counts too. One minute is enough.”'],
        plan: 'free',
      },
      {
        id: 'player',
        title: 'Listen, or read along',
        body: 'Every moment arrives spoken. Read mode highlights each line as it is said.',
        details: ['Back or forward 15 seconds', 'Slow it down: slower lets a line sink in', 'A day or dusk player, to match the hour'],
        plan: 'free',
      },
      {
        id: 'refine',
        title: 'Refine it until it sounds like you',
        body: 'Not quite right? Ask for more realistic, softer, more ambitious, or say it in your own words.',
        details: ['Aura rewrites it, and the next one already knows'],
        plan: 'premium',
      },
      {
        id: 'manifest',
        title: 'Manifest anything',
        body: '“The day I sign my first client.” Ask for a moment about any situation, ready in about a minute.',
        details: ['Three a week, so each one counts', 'Files itself into your library'],
        plan: 'premium',
      },
    ],
  },
  {
    id: 'affirmations',
    eyebrow: 'Through the day',
    title: 'Affirmations that explain themselves',
    intro: 'One line a day, in your words, with the technique behind it.',
    features: [
      {
        id: 'today-affirmation',
        title: 'Words for today',
        body: 'Hold to reveal today’s line. One a day. That is enough.',
        details: ['Written from your own words, and it shows which ones', 'Hear it read aloud', 'Swipe through the lines you kept'],
        plan: 'free',
      },
      {
        id: 'techniques',
        title: 'The technique behind each line',
        body: 'Identity, present tense, 369 and scripting, each with a one-line why.',
        details: ['A 369 counter: three this morning, six today, nine tonight', 'Scripting: write the day as if it already happened'],
        plan: 'free',
      },
      {
        id: 'guided',
        title: 'Create with Aura',
        body: 'Pick what it is for, or say it your way, and choose from three ways to say it.',
        details: ['Work, money, health, love, home, confidence'],
        plan: 'premium',
      },
      {
        id: 'share',
        title: 'Share as a card',
        body: 'Save a line or a moment as a clean typographic image to keep or share.',
        details: ['Only the words, never your personal details'],
        plan: 'premium',
      },
    ],
  },
  {
    id: 'evening',
    eyebrow: 'Each evening',
    title: 'One good thing, kept',
    intro: 'A single line of gratitude, and Aura actually uses it.',
    features: [
      {
        id: 'gratitude',
        title: 'A gratitude line that comes back',
        body: 'Write one thing you are glad about. What you write may return in your moments. That is the point.',
        details: ['Personal prompts: “You mentioned Nadia yesterday. Anything from them today?”', 'Even “my coffee this morning” counts'],
        plan: 'free',
      },
      {
        id: 'sparks',
        title: 'Need a spark?',
        body: 'When the page feels blank, turn the question toward people, small joys, your body, nature or progress.',
        details: [],
        plan: 'free',
      },
      {
        id: 'record',
        title: 'Remember this? and your record',
        body: 'Aura brings back a past good thing, and your record shows a month of lit days.',
        details: ['Every entry can be deleted'],
        plan: 'free',
      },
    ],
  },
  {
    id: 'memory',
    eyebrow: 'Over time',
    title: 'It remembers, and you are in charge',
    intro: 'Aura gets to know you, and shows you everything it knows.',
    features: [
      {
        id: 'what-aura-knows',
        title: 'What Aura knows',
        body: 'Everything it remembers, in your words, grouped plainly. Edit or remove anything and it forgets completely.',
        details: ['About you, your dream, your people, your life, what feels heavy, milestones'],
        plan: 'free',
      },
      {
        id: 'never-mention',
        title: 'Never mention',
        body: 'A word, a name, a topic. Anything here stays out of everything Aura writes for you.',
        details: [],
        plan: 'free',
      },
      {
        id: 'library',
        title: 'Your library and collections',
        body: 'Keep every moment that lands, and gather them into collections to hear again.',
        details: ['Favorites, on demand, all moments', 'Your first letter is kept on every plan'],
        plan: 'premium',
      },
      {
        id: 'streak',
        title: 'Days becoming',
        body: 'Aura counts the days you show up. A missed day is held, never held against you.',
        details: ['Two held days each month', 'Restore a longer run once a month, free', 'Letters on day 7, 30 and 100'],
        plan: 'free',
      },
      {
        id: 'notifications',
        title: 'Notifications that respect you',
        body: 'One note a morning, when yours is ready. An optional affirmation nudge: quiet, once a day, or your hours.',
        details: ['No guilt, no “don’t lose your streak”'],
        plan: 'free',
      },
    ],
  },
  {
    id: 'trust',
    eyebrow: 'Trust',
    title: 'Honest about money, careful with your words',
    intro: 'Built against the things people dislike most about apps like this.',
    features: [
      {
        id: 'pricing',
        title: 'Exactly what happens, and when',
        body: 'The trial timeline is shown before you start: nothing charged today, a reminder two days before, then the price.',
        details: ['Weekly prices also show the monthly figure', 'The free tier stays available', 'Cancel in two taps from your Apple ID'],
        plan: 'free',
      },
      {
        id: 'privacy',
        title: 'Your words are only for you',
        body: 'Used only to write to you. Never sold, and never used to train public AI models.',
        details: ['Row-level security and encrypted storage', 'Delete your account and every word, from Settings'],
        plan: 'free',
      },
      {
        id: 'support',
        title: 'Care on hard days',
        body: 'Aura is a mindset practice, not therapy. If you tell it things are really hard, it shows free support lines that are open around the clock.',
        details: [],
        plan: 'free',
      },
      {
        id: 'any-phone',
        title: 'Keep it on any phone',
        body: 'Sign in with Apple, Google or email so your letters and memories are waiting on a new phone.',
        details: ['Restore purchases any time'],
        plan: 'free',
      },
    ],
  },
];

export const PLAN_SUMMARY: Record<Plan, { title: string; lines: string[] }> = {
  free: {
    title: 'Free, always',
    lines: [
      'Your first letter, kept forever',
      'A moment every morning',
      'Today’s affirmation, with its technique',
      'Evening gratitude and your record',
      'What Aura knows and Never mention',
      'Days becoming, held days and restore',
    ],
  },
  premium: {
    title: 'Premium',
    lines: [
      'Manifest anything, three a week',
      'Refine any moment',
      'Keep every moment, in collections',
      'Create affirmations with Aura',
      'Share moments and lines as cards',
    ],
  },
};
