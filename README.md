# Optilinked NGO Website

A complete Vite + React + Tailwind CSS website for Optilinked, built for the GitHub to Bolt.new workflow.

## Pages included

- Home
- AI Readiness Audit
- Services
- Fundraising Accelerator
- NGO Growth System
- Resources
- Example NGO Work
- About
- How It Works
- Contact
- Privacy Policy
- Terms

## Tech stack

- Vite
- React
- React Router
- Tailwind CSS

## Contact form

The contact form uses Web3Forms.

Before launch, replace this placeholder in `src/components/ContactForm.jsx`:

```js
YOUR_WEB3FORMS_ACCESS_KEY
```

with your real Web3Forms access key.

The visible contact details are:

- Email: hello@optilinked.com
- Phone: +63 994 335 8424

The phone field in the form is optional.

## Logo and brand asset

The header uses a clean coded Optilinked logo with a gradient icon.

The attached Optilinked banner has been added as:

```txt
src/assets/optilinked-brand-banner.png
```

It is used in the footer as a brand banner.

## Social links

Footer social links are placeholders:

- LinkedIn
- Facebook
- Instagram
- YouTube
- TikTok

Replace `#` links in `src/data/site.js` when the real links are ready.

## Pricing

Full pricing ranges are shown across the site.

The AI Readiness Audit is shown as:

- Free introductory audit
- Paid deeper audit available from 150 USD

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Open in Bolt.new through GitHub

1. Create a public GitHub repository.
2. Upload all files from this project folder.
3. Copy the public GitHub repository URL.
4. Open the repository in Bolt.new using the GitHub bridge format you planned.

## Notes before launch

- Add the real Web3Forms access key.
- Replace social placeholder links.
- Review Privacy Policy and Terms with your preferred legal wording.
- Add testimonials later when approved.
