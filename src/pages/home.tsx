import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { track } from "@vercel/analytics";
import { PageMeta } from "@/components/page-meta";
import { JsonLd } from "@/components/json-ld";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "9+", label: "years in disability inclusion" },
  { value: "40+", label: "talks & panels" },
  { value: "20+", label: "organisations" },
];

const logos = [
  "ASTHA",
  "UNICEF",
  "NDMA / UN India",
  "HCL Foundation",
  "Tech Mahindra Foundation",
];

const offerings = [
  {
    title: "Corporate Sensitization",
    outcome:
      "Your teams understand invisible disability — not from a training slide, but from lived experience.",
    href: "/services#corporate",
  },
  {
    title: "NGO Capacity Building",
    outcome:
      "Your organisation gains the frameworks and confidence to include people with invisible disabilities meaningfully.",
    href: "/services#ngo",
  },
  {
    title: "Academic & Public Talks",
    outcome:
      "Your audience leaves with a changed understanding of disability that they carry into their work and lives.",
    href: "/services#talks",
  },
  {
    title: "Government & Multilateral Advisory",
    outcome:
      "Your policies reflect the reality of invisible disability — not just the visible, documented cases.",
    href: "/services#advisory",
  },
];

const storyPreviews = [
  {
    tag: "Chronic Pain",
    title: "The Day I Called in Sick (And Wasn't 'Really' Sick)",
    href: "/blooming-in-pain",
  },
  {
    tag: "Work & Disability",
    title: "Disclosing at Work: What I Wish Someone Had Told Me",
    href: "/blooming-in-pain",
  },
  {
    tag: "Community",
    title: "When Your Body Says No and Your Calendar Says Yes",
    href: "/blooming-in-pain",
  },
];

const engagements = [
  {
    event: "Purple Fest Goa",
    org: "Goa Tourism & Disability Rights Coalition",
    description:
      "Keynote on invisible disability and cultural inclusion at India's largest disability arts festival.",
    year: "2023",
  },
  {
    event: "UNICEF Bihar",
    org: "UNICEF India",
    description:
      "Capacity-building workshop for district-level officers on disability-inclusive child rights programming.",
    year: "2023",
  },
  {
    event: "NDMA + UN India",
    org: "National Disaster Management Authority",
    description:
      "Advisory input on disability-inclusive disaster risk reduction frameworks at the national level.",
    year: "2022",
  },
  {
    event: "HCL Foundation Summit",
    org: "HCL Foundation",
    description:
      "Panel discussion on moving corporate disability inclusion from policy to culture.",
    year: "2022",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <PageMeta
        title="Disability Inclusion Expert & Storyteller"
        description="Pratik Aggarwal is a disability inclusion expert, speaker, and researcher with 9+ years of experience. Founder of Blooming in Pain. Work with him on sensitization, capacity building, or advisory engagements."
        path="/"
        keywords="disability inclusion expert India, invisible disability speaker, corporate disability sensitization, NGO capacity building disability"
      />
      <JsonLd schema={[
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Pratik Aggarwal",
          "url": "https://pratikaggarwal.in",
          "description": "Personal website of Pratik Aggarwal — disability inclusion expert, speaker, researcher, and founder of Blooming in Pain.",
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://pratikaggarwal.in/#pratik-aggarwal",
          "name": "Pratik Aggarwal",
          "url": "https://pratikaggarwal.in",
          "jobTitle": "Disability Inclusion Expert",
          "description": "Pratik Aggarwal is a disability inclusion expert, speaker, researcher, and storyteller based in New Delhi, India. He has fibromyalgia and brings lived experience of invisible disability to his work with corporates, NGOs, governments, and multilateral organisations. He is the Director of ASTHA and founder of Blooming in Pain.",
          "knowsAbout": [
            "Disability inclusion",
            "Invisible disabilities",
            "Fibromyalgia",
            "Chronic illness",
            "Disability sensitization",
            "Inclusive development",
            "Public policy and disability",
            "Community storytelling",
            "Accessibility",
            "DEI training",
            "Child disability rights",
            "Rights of Persons with Disabilities Act 2016"
          ],
          "affiliation": {
            "@type": "Organization",
            "name": "ASTHA",
            "url": "https://asthaindia.in",
            "description": "Non-profit organisation working with children with disabilities in Delhi's urban informal settlements."
          },
          "founder": {
            "@type": "Organization",
            "name": "Blooming in Pain",
            "url": "https://pratikaggarwal.in/blooming-in-pain",
            "description": "A storytelling platform for people living with invisible disabilities."
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Delhi",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://linkedin.com/in/pratikaggarwal",
            "https://instagram.com/bloominginpain",
            "https://medium.com/@BloomingInPain",
            "https://asthaindia.in"
          ]
        }
      ]} />
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO                                                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_320px] gap-14 items-center">

          {/* Text */}
          <div>
            <h1
              id="hero-heading"
              className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-5 tracking-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.05 }}
            >
              Pratik<br />Aggarwal
            </h1>

            <p className="text-lg md:text-xl text-foreground mb-10 max-w-[42ch] leading-relaxed">
              Disability inclusion expert. I turn lived experience into real
              inclusion.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
                onClick={() => track("cta_clicked", { label: "Work with me", location: "hero" })}
              >
                Work with me
              </Link>
              <Link
                to="/about"
                className="text-base text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                Read my story
              </Link>
            </div>
          </div>

          {/* Portrait — replace <div> with <img> when photo is available */}
          <div
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden order-first md:order-last"
            role="img"
            aria-label="Portrait of Pratik Aggarwal, disability inclusion expert"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, #EDE8E0 0%, #D6CEBC 55%, #C8BCA8 100%)",
              }}
              aria-hidden="true"
            />
            {/* Monogram placeholder */}
            <span
              className="absolute inset-0 flex items-center justify-center text-8xl font-light select-none"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                color: "rgba(27,58,91,0.12)",
              }}
              aria-hidden="true"
            >
              PA
            </span>
            <p
              className="absolute bottom-4 left-4 text-xs text-muted-foreground italic"
              aria-hidden="true"
            >
              [Portrait photo]
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border" aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. CREDIBILITY STRIP                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section aria-label="Experience and selected partners" className="px-6 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 md:gap-16 pb-12 border-b border-border"
            role="list"
            aria-label="Key statistics"
          >
            {stats.map((stat) => (
              <div key={stat.label} role="listitem">
                <p
                  className="text-4xl md:text-5xl text-foreground mb-1.5"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Logo row */}
          <div className="pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Selected partners &amp; collaborators
            </p>
            <ul
              className="flex flex-wrap items-center gap-x-10 gap-y-4 list-none m-0 p-0"
              role="list"
              aria-label="Organisations Pratik has worked with"
            >
              {logos.map((name) => (
                <li key={name}>
                  {/* Replace with <img src="…" alt={`${name} logo`} …> when assets are available */}
                  <span
                    className="text-sm font-bold tracking-wider uppercase"
                    style={{ color: "#5A6472", opacity: 0.5 }}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-border" aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. STORY (condensed)                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="story-heading" className="px-6 py-20">
        <div className="max-w-[70ch] mx-auto">
          <h2
            id="story-heading"
            className="text-3xl md:text-4xl text-foreground mb-7"
          >
            A little about me
          </h2>

          <div className="space-y-5 text-lg text-foreground leading-relaxed">
            <p>
              I have fibromyalgia — a chronic pain condition that's invisible,
              unpredictable, and largely misunderstood. I also have nine years of
              experience working with organisations, governments, and communities
              on disability inclusion.
            </p>
            <p>
              Those two facts aren't separate. The work I do is shaped by what
              it's actually like to navigate a world that wasn't built for
              bodies like mine — the exhaustion of having to prove a condition,
              the particular loneliness of not fitting any obvious category.
            </p>
            <p>
              I believe inclusion that doesn't reach invisible disabilities isn't
              really inclusion at all. And I've made it my work to change that —
              one conversation, one policy, one story at a time.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            My full story →
          </Link>
        </div>
      </section>

      <div className="border-t border-border" aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. WHAT I OFFER                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="offer-heading"
        className="px-6 py-20"
        style={{ backgroundColor: "#F2EEE7" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-[60ch] mb-12">
            <h2
              id="offer-heading"
              className="text-3xl md:text-4xl text-foreground mb-3"
            >
              What I offer
            </h2>
            <p className="text-base text-muted-foreground">
              Each engagement begins with listening — to what your context
              actually needs, not a fixed programme.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {offerings.map((item) => (
              <Card
                key={item.title}
                className="bg-card border-border shadow-none"
              >
                <CardContent className="p-7 flex flex-col h-full">
                  <h3
                    className="text-xl text-foreground mb-3"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-6">
                    {item.outcome}
                  </p>
                  <Link
                    to={item.href}
                    className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors self-start"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. BLOOMING IN PAIN                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="bip-heading"
        className="px-6 py-20"
        style={{ backgroundColor: "#F8F4FB" }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-11">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2.5"
                style={{ color: "#6E4C7E" }}
              >
                Initiative
              </p>
              <h2
                id="bip-heading"
                className="text-3xl md:text-4xl text-foreground"
              >
                Blooming in Pain
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-[44ch] md:text-right">
              A storytelling platform where people with invisible disabilities
              share what their lives actually look like — honest, undramatic,
              human.
            </p>
          </div>

          {/* Story preview cards */}
          <ul
            className="grid sm:grid-cols-3 gap-4 list-none m-0 p-0 mb-9"
            role="list"
          >
            {storyPreviews.map((story) => (
              <li key={story.title}>
                <Link
                  to={story.href}
                  className="group flex flex-col h-full p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-colors"
                  aria-label={`Read: ${story.title}`}
                >
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "#6E4C7E" }}
                  >
                    {story.tag}
                  </span>
                  <p
                    className="text-base text-foreground leading-snug group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {story.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://instagram.com/bloominginpain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              onClick={() => track("outbound_click", { destination: "instagram", location: "blooming_in_pain_section" })}
            >
              Follow on Instagram
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <Link
              to="/blooming-in-pain"
              className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Read all stories →
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-border" aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. SELECTED ENGAGEMENTS                                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="engagements-heading" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2
              id="engagements-heading"
              className="text-3xl md:text-4xl text-foreground mb-3"
            >
              Selected engagements
            </h2>
            <p className="text-base text-muted-foreground">
              A curated few — not an exhaustive list.
            </p>
          </div>

          <ul className="list-none m-0 p-0" role="list">
            {engagements.map((eng, i) => (
              <li
                key={eng.event}
                className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div>
                  <p
                    className="text-xl text-foreground mb-1"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {eng.event}
                  </p>
                  <p className="text-sm text-muted-foreground">{eng.org}</p>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mt-2"
                    style={{ color: "#1B6B6B" }}
                  >
                    {eng.year}
                  </p>
                </div>
                <p className="text-base text-muted-foreground self-center leading-relaxed">
                  {eng.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-8 mt-2">
            <Link
              to="/work"
              className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              See all work →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. THE SPLIT                                                        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section
        aria-label="Work together or join the community"
        className="px-6 pb-24"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">

          {/* Work with me — Healing Teal */}
          <Link
            to="/services"
            className="group block rounded-2xl p-10 md:p-12 transition-opacity hover:opacity-95"
            style={{ backgroundColor: "#1B6B6B" }}
            onClick={() => track("cta_clicked", { label: "Work with me", location: "split_section" })}
          >
            <p
              className="text-3xl text-white mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.15 }}
            >
              Work with me
            </p>
            <p className="text-white/80 text-base mb-9 max-w-[30ch] leading-relaxed">
              Consulting, speaking, and training — rooted in lived experience
              and nine years of practice.
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-white underline underline-offset-4">
              Explore services →
            </span>
          </Link>

          {/* Join the community — Invisible Plum */}
          <Link
            to="/blooming-in-pain"
            className="group block rounded-2xl p-10 md:p-12 transition-opacity hover:opacity-95"
            style={{ backgroundColor: "#6E4C7E" }}
            onClick={() => track("cta_clicked", { label: "Join the community", location: "split_section" })}
          >
            <p
              className="text-3xl text-white mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.15 }}
            >
              Join the community
            </p>
            <p className="text-white/80 text-base mb-9 max-w-[30ch] leading-relaxed">
              Stories of living fully with invisible disability — from people
              who know what that's really like.
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-white underline underline-offset-4">
              Blooming in Pain →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
