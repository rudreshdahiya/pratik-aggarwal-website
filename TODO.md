# TODO.md

## Immediate Priority

### Contact Page

Status: Complete

Tasks

* [x] Create /contact route
* [x] Build contact page layout
* [x] Add inquiry type selector
* [x] Add organization field
* [x] Add message field
* [x] Add validation
* [x] Add success state
* [x] Add fallback email contact
* [x] Add social links
* [x] Ensure keyboard accessibility
* [ ] Test mobile responsiveness
* [ ] Wire Formspree endpoint (production step)

---

## Accessibility Statement Page

Status: Complete

Tasks

* [x] Create /accessibility route
* [x] Write accessibility commitment
* [x] Add WCAG compliance statement
* [x] Add reporting/contact mechanism
* [x] Link from footer

---

## Analytics

Status: Complete

Tasks

* [x] Enable Vercel Analytics
* [x] Track contact form submissions
* [x] Track CTA clicks
* [ ] Track outbound Medium clicks (no Medium links exist in site yet)
* [x] Track outbound Instagram clicks
* [x] Track outbound LinkedIn clicks

---

## SEO

Status: Complete

Tasks

* [x] Home page metadata
* [x] About page metadata
* [x] Services page metadata
* [x] Work page metadata
* [x] Blooming in Pain metadata
* [x] Contact page metadata
* [x] Open Graph tags
* [x] Sitemap (`public/sitemap.xml`)
* [x] Robots.txt (`public/robots.txt`)
* [ ] OG image — create `/og-image.jpg` and place in `public/` before launch
* [ ] Confirm final domain and replace `pratikaggarwal.in` in `src/components/page-meta.tsx` and `index.html`

---

## Accessibility Audit

Status: Complete (code audit) — screen reader test pending

Tasks

* [x] Keyboard navigation audit — fixed focus bug, radio focus indicator, Escape key, ol→ul
* [x] Heading hierarchy audit — passes on all pages; About uses landmarks (intentional editorial choice)
* [x] Contrast audit — primary teal darkened to #1B6B6B; all text now passes AA
* [x] Form accessibility audit — labels, aria-required, aria-invalid, aria-describedby, focus management all correct
* [ ] Screen reader test — requires real browser + assistive technology (VoiceOver/NVDA)

---

## GEO / AEO

Status: Complete

* [x] Schema.org JSON-LD on all 7 pages
* [x] Person entity with knowsAbout, sameAs, affiliation
* [x] Organization schema for ASTHA and Blooming in Pain
* [x] Service ItemList schema on Services
* [x] Event schemas on Work
* [x] FAQPage schema on Services and Blooming in Pain
* [x] BreadcrumbList on all inner pages
* [x] author + keywords meta in PageMeta
* [x] FAQ sections on Services and Blooming in Pain pages
* [x] Medium outbound tracking added

---

## Home Page Design

Status: Complete (phase 1 — portrait photo pending)

* [x] Curiosity-first hero tagline
* [x] Role label above name
* [x] Pull quote section (Ink Navy) replacing 3-paragraph story
* [x] Offering cards stripped to title + single-line outcome
* [x] Engagement descriptions removed — clean event/org/year list
* [x] Blooming in Pain description sharpened
* [ ] Add Pratik's portrait photo to hero (replace placeholder div)

---

## Launch Checklist

* [x] Contact page complete
* [x] Accessibility page complete
* [x] Analytics configured
* [x] SEO configured
* [x] Accessibility review complete (code audit — screen reader test pending)
* [x] Story submission page (/blooming-in-pain/submit)
* [x] Wire Formspree endpoint on contact form + story submission form — copy `.env.example` to `.env.local` and fill in real form IDs before deploying
* [ ] Create OG image (1200×630px → public/og-image.jpg)
* [ ] Confirm domain → update SITE_URL in page-meta.tsx + index.html
* [x] Production build passes (npm run build)
* [x] Deploy to Vercel — https://pratik-aggarwal-website.vercel.app/
* [ ] Final QA review
