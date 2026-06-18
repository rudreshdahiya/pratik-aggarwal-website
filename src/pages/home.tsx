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
    outcome: "Real understanding — not training slides.",
    href: "/services#corporate",
  },
  {
    title: "NGO Capacity Building",
    outcome: "Frameworks to include those most often excluded.",
    href: "/services#ngo",
  },
  {
    title: "Academic & Public Talks",
    outcome: "Changed understanding that lasts beyond the room.",
    href: "/services#talks",
  },
  {
    title: "Government & Multilateral Advisory",
    outcome: "Policy that reflects invisible reality, not just documented cases.",
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
    year: "2023",
  },
  {
    event: "UNICEF Bihar",
    org: "UNICEF India",
    year: "2023",
  },
  {
    event: "NDMA + UN India",
    org: "National Disaster Management Authority",
    year: "2022",
  },
  {
    event: "HCL Foundation Summit",
    org: "HCL Foundation",
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
      <section aria-labelledby="hero-heading" className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_300px] gap-14 items-center">

          {/* Text */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6"
              aria-hidden="true"
            >
              Disability inclusion · Speaker · Researcher · Director, ASTHA
            </p>

            <h1
              id="hero-heading"
              className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-7 tracking-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.05 }}
            >
              Pratik<br />Aggarwal
            </h1>

            <p className="text-lg md:text-xl text-foreground mb-10 max-w-[40ch] leading-relaxed">
              The pain no one can see is often the pain institutions miss most.
              I know this firsthand — and have spent nine years helping change it.
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

          {/* Portrait — replace with <img> when photo is available */}
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

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. PULL QUOTE                                                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="story-heading"
        className="px-6 py-24 md:py-32"
        style={{ backgroundColor: "#1B3A5B" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="story-heading" className="sr-only">About Pratik</h2>
          <blockquote
            className="text-2xl md:text-3xl lg:text-[2.25rem] italic leading-snug mb-8"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              color: "#FFFFFF",
              lineHeight: 1.3,
            }}
          >
            "I have fibromyalgia. I've also spent nine years inside the
            institutions meant to address it. Those two facts are the same story."
          </blockquote>
          <p
            className="text-base mb-10 max-w-[46ch] mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            My work sits at the intersection of lived experience and
            institutional change — because real inclusion can't come from one
            without the other.
          </p>
          <Link
            to="/about"
            className="inline-block font-semibold underline underline-offset-4 transition-colors hover:opacity-80"
            style={{ color: "#5BBFBF" }}
          >
            My full story →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. WHAT I OFFER                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="offer-heading"
        className="px-6 py-24"
        style={{ backgroundColor: "#F2EEE7" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-[52ch] mb-14">
            <h2
              id="offer-heading"
              className="text-3xl md:text-4xl text-foreground mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              What I offer
            </h2>
            <p className="text-base text-muted-foreground">
              Each engagement begins with listening — to what your context
              actually needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {offerings.map((item) => (
              <Card
                key={item.title}
                className="bg-card border-border shadow-none"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <h3
                    className="text-xl text-foreground mb-2"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1 mb-7 leading-relaxed">
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
        className="px-6 py-24"
        style={{ backgroundColor: "#F8F4FB" }}
      >
        <div className="max-w-5xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
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
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Blooming in Pain
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-[42ch] md:text-right leading-relaxed">
              Where people with invisible disabilities tell it like it actually
              is — honest, undramatic, and rarely believed.
            </p>
          </div>

          <ul
            className="grid sm:grid-cols-3 gap-4 list-none m-0 p-0 mb-10"
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
          <div className="mb-10">
            <h2
              id="engagements-heading"
              className="text-3xl md:text-4xl text-foreground mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
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
                className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8 py-5 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 min-w-0">
                  <p
                    className="text-base text-foreground shrink-0"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {eng.event}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {eng.org}
                  </p>
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest shrink-0"
                  style={{ color: "#1B6B6B" }}
                >
                  {eng.year}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-7 mt-2">
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
