# Changelog

## Project: Pratik Aggarwal Portfolio / Blooming in Pain

A personal portfolio + disability storytelling site for Pratik Aggarwal.
Stack: Vite + React 19 + TypeScript + React Router + Tailwind CSS v4 + Shadcn UI

---

## Current State (2026-06-16)

### Routes (src/main.tsx)
- `/` → `src/pages/home.tsx`
- `/about` → `src/pages/about.tsx`
- `/services` → `src/pages/services.tsx`
- `/work` → `src/pages/work.tsx`
- `/blooming-in-pain` → `src/pages/blooming-in-pain.tsx`

### Layout (src/layout.tsx)
- Sticky header with nav: About, Services, Blooming in Pain, Connect
- Mobile hamburger menu
- Footer: 3-column grid (brand/role, nav links, contact/socials)
- Person: Pratik Aggarwal — disability inclusion expert, Director at ASTHA, Founder of Blooming in Pain
- Contact: hello@bloominginpain.com | Instagram: bloominginpain | LinkedIn: pratikaggarwal
- Accessibility statement link in footer

### Pages
- `home.tsx` — landing page
- `about.tsx` — about Pratik
- `services.tsx` — services offered
- `work.tsx` — portfolio/work showcase
- `blooming-in-pain.tsx` — Blooming in Pain project page

### Missing / Placeholder Routes
- `/connect` — nav link exists but no route/page yet
- `/accessibility` — footer link exists but no route/page yet

### Notes
- Font: Fraunces (serif) for name/brand, Comic Neue signals mockup
- Monochrome palette only
- No real functionality — all static placeholder data

---

## Update Log

| Date | Change |
|------|--------|
| 2026-06-16 | Changelog created. Captured current project state. |
| 2026-06-16 | Contact page built (`src/pages/contact.tsx`). Route `/contact` added to `main.tsx`. Nav link updated from `/connect` to `/contact` in `layout.tsx`. Includes inquiry type selector (4 types), name, organisation, email, message fields, client-side validation with accessible error messages, and success state. |
| 2026-06-16 | Accessibility Statement page built (`src/pages/accessibility.tsx`). Route `/accessibility` added to `main.tsx`. Footer link was already in place. Covers commitment, WCAG 2.1 AA, what's been done, known limitations, issue reporting, and review date. |
| 2026-06-16 | Vercel Analytics installed (`@vercel/analytics`). `<Analytics />` added to `main.tsx`. Custom events: `contact_form_submitted` (inquiry_type), `cta_clicked` (label + location) on hero and split-section CTAs, `outbound_click` (destination + location) on Instagram and LinkedIn links in home and footer. |
| 2026-06-16 | SEO implemented. `react-helmet-async` installed. `<HelmetProvider>` added to `main.tsx`. `PageMeta` component created at `src/components/page-meta.tsx`. Per-page title + description + OG + Twitter card meta added to all 7 pages. `index.html` updated with home-page static defaults. `public/robots.txt` and `public/sitemap.xml` created. Placeholder domain: `pratikaggarwal.in` — update before launch. Placeholder OG image: `/og-image.jpg` — needs to be created. |
| 2026-06-17 | Story submission page built (`src/pages/blooming-in-pain-submit.tsx`). Route `/blooming-in-pain/submit` added. Form: name (with pseudonym note), email, condition (optional), working title (optional), story (required), anything else (optional), consent checkbox. Validation + success state. `story_submitted` analytics event. Added to sitemap. Formspree endpoint still needs wiring (production step). |
| 2026-06-17 | Accessibility audit. Fixed 6 issues: (1) Darkened primary teal #2E8B8B → #1B6B6B across app.css and all 5 pages — was failing WCAG AA 4.5:1 (~3.7:1 on sand), now passes (~5.0:1 on sand, ~5.5:1 on white). (2) Fixed contact form focus management — `getElementById("inquiryType")` targeted null; now maps to correct input IDs. (3) Added `has-[:focus-visible]:outline` to radio card labels so keyboard focus is visible on styled cards. (4) Removed `role="img"` + `aria-label` from placeholder divs in work.tsx — set `aria-hidden` instead. (5) Added Escape key handler + hamburger ref in layout.tsx — Escape closes mobile menu and returns focus to trigger. (6) Changed `<ol>` → `<ul>` for engagements list on home page. |
| 2026-06-16 | GEO/AEO pass. `JsonLd` component created (`src/components/json-ld.tsx`). Schema.org JSON-LD added to all 7 pages: Person + WebSite (home), Person + Organization/ASTHA (about), ItemList of Services + FAQPage (services), ItemList of Events (work), Organization + FAQPage (blooming-in-pain), ContactPage (contact), WebPage (accessibility). BreadcrumbList added to inner pages. PageMeta updated with `author` + `keywords` meta. FAQ sections added to Services and Blooming in Pain pages. Broken `/connect` links fixed to `/contact` on services, work, and blooming-in-pain. Medium outbound tracking added to blooming-in-pain. |
| 2026-06-17 | Formspree wiring complete. `.env.example` created with `VITE_CONTACT_FORM_ENDPOINT` and `VITE_STORY_FORM_ENDPOINT`. Both forms (`contact.tsx` and `blooming-in-pain-submit.tsx`) updated: async `handleSubmit` POSTs JSON to env-var endpoint, button disabled + shows "Sending…"/"Submitting…" during submission, `submitError` shown via `role="alert"`. `tsc --noEmit` passes. |

# CHANGELOG.md

# Project

Pratik Aggarwal Personal Brand Website

---

## Current Status

### Completed

Pages Created

* Home
* About
* Services
* Work & Engagements
* Blooming in Pain

Global Components

* Header Navigation
* Mobile Navigation
* Footer

Brand Foundation

* Initial site architecture established
* Core navigation established
* Professional positioning defined
* Blooming in Pain integrated into site structure

Technical Foundation

* React application configured
* Routing configured
* Tailwind configured
* Shadcn configured

---

## Outstanding Work

### High Priority

Contact Page

Status: Not Complete

Requirements

* Accessible contact form
* Inquiry routing
* Partner inquiry flow
* Speaking inquiry flow
* Community inquiry flow
* Success state
* Validation

Accessibility Statement Page

Status: Missing

Requirements

* Accessibility commitment
* WCAG statement
* Contact method for accessibility issues

---

### Medium Priority

Analytics

* Vercel Analytics setup
* CTA tracking
* Contact conversion tracking

SEO

* Meta titles
* Meta descriptions
* Open Graph tags
* Structured data

---

### Low Priority

Future Enhancements

* Testimonials
* Speaker profile PDF
* Story submission workflow
* Social content integration

---

## Architectural Decisions

* Accessibility-first design
* Partner/Hire remains primary conversion path
* Blooming in Pain content remains externally hosted
* ASTHA acts as credibility signal rather than primary brand
* Minimal navigation and low cognitive load preferred

---

## Next Session

1. Complete Contact page
2. Build Accessibility page
3. Run PRD compliance audit
4. Implement analytics
5. Complete SEO pass
6. Conduct accessibility review
