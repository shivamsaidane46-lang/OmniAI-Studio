# OmniAI Studio

Official website for OmniAI Studio: AI automation and intelligent systems.

## Stack

- Astro
- GitHub as the source of truth
- Decap CMS for browser-based owner content editing
- Netlify for free deployment + Decap authentication/Git Gateway
- Static HTML output for fast, crawlable pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## CMS

The owner CMS lives at `/admin/`.

Decap is configured to use Netlify Git Gateway. After the site is connected to Netlify, enable Netlify Identity with **Invite only** registration and enable Git Gateway. Only the invited owner account should be allowed into the CMS.

The CMS currently manages project entries and editable site contact settings. Published project Markdown is rendered into crawlable Astro pages automatically.

## Deployment

Netlify build command: `npm run build`

Publish directory: `dist`

The production domain is `https://omniaistudio.in`.

## GEO / search foundation

The site includes semantic page content, canonical URLs, Organization structured data, `robots.txt`, `sitemap.xml`, and `llms.txt`. These are foundations for discoverability, not guarantees that an AI system will recommend the business.

Never commit API keys, OAuth client secrets, passwords, or other credentials to this repository.
