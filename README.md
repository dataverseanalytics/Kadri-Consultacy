# Kadri Consultancy

Marketing website for **Kadri Consultancy** — an IT consulting and software delivery company serving both
businesses (B2B) and individuals (B2C).

Built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**, styled with a hand-written CSS design
system (no UI framework).

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, tech stack, B2B/B2C, services explorer, impact stats, industries, process, case studies, testimonials, why us, engagement models, FAQ |
| `/services` | All services |
| `/services/[slug]` | 8 statically generated service detail pages |
| `/about` | Story, mission, vision and values |
| `/work` | Case studies |
| `/contact` | Contact channels and enquiry form |
| `/api/contact` | Enquiry endpoint (validation + honeypot spam protection) |

Also included: mega menus, mobile drawer navigation, scroll-reveal animations, animated counters, testimonial
carousel, WhatsApp button, `sitemap.xml`, `robots.txt` and per-page SEO metadata.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Requires Node.js 18.18 or newer.

## Editing content

All copy — services, industries, case studies, testimonials, FAQs, stats and contact details — lives in
[`src/content/site.ts`](src/content/site.ts). Components only handle layout, so most changes never touch them.

Photography lives in [`public/images`](public/images) (sourced from Unsplash, free to use under the Unsplash
License).

## Before going live

- [ ] Replace placeholder **stats, case studies and testimonials** with real ones in `src/content/site.ts`
- [ ] Set the real **email and social links** in `company`
- [ ] Connect the contact form to email/CRM — see the `TODO` in `src/app/api/contact/route.ts`
  (e.g. Resend, SendGrid or HubSpot)
- [ ] Update the domain in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` if it isn't
  `kadriconsultancy.com`
- [ ] Add Privacy Policy and Terms pages

## Project structure

```
src/
  app/                 # routes, layout, global styles, API route, sitemap/robots
  components/
    layout/            # top bar, header + mega menus, footer, WhatsApp button, reveal observer
    sections/          # page sections (hero, services explorer, testimonials, …)
    ui/                # primitives (logo, section heading, counter, page hero, brand icons)
  content/site.ts      # all site content
public/images/         # photography
```
