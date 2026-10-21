# Aura: Manifest Daily — Web Application

Official web application and landing experience for **Aura: Manifest Daily**, featuring the luxury *"Ember & Bone"* aesthetic, interactive audio moment previews, product showcase, and compliance pages (**Privacy Policy**, **Terms of Service**, **Support**, and **Account Deletion**) required for App Store and Google Play release.

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Newsreader](https://fonts.google.com/specimen/Newsreader) (voice and display) & [Figtree](https://fonts.google.com/specimen/Figtree) (interface), the same pairing as the app
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## Pages & Routes

- `/` — Landing page: hero with Glim, how it works, audio preview, feature bento, Glim mood dial, screenshot carousel, held days, promises, and FAQ.
- `/privacy` — Comprehensive Privacy Policy with real-time keyword search, table of contents, and AI processing disclosures.
- `/terms` — Terms of Service including subscription clauses, auto-renew rules, and intellectual property.
- `/support` — Help & Support Center with direct inquiry form and troubleshooting guides.
- `/delete-account` — Self-service and email-based data deletion instructions complying with Apple Guideline 5.1.1(v).

---

## Local Development

### Prerequisites

- Node.js `>= 22.12.0`
- pnpm `>= 10.4.1`

```bash
# Ensure correct Node version
source ~/.nvm/nvm.sh && nvm use 22.12.0

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## Production Build

```bash
# Compile and build production bundle
pnpm build

# Start production server
pnpm start
```

---

## License & Copyright

© 2026 EmperorBrains. All rights reserved.
