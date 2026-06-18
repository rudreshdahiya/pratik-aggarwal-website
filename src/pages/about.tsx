import { Link } from "react-router";
import { PageMeta } from "@/components/page-meta";
import { JsonLd } from "@/components/json-ld";

// ── Reusable pull-quote ───────────────────────────────────────────────────────

function PullQuote({
  children,
  accent = "teal",
}: {
  children: React.ReactNode;
  accent?: "teal" | "plum";
}) {
  const color = accent === "teal" ? "#1B6B6B" : "#6E4C7E";
  return (
    <blockquote
      className="my-14 pl-7 border-l-4"
      style={{ borderColor: color }}
    >
      <p
        className="text-2xl md:text-3xl text-foreground italic leading-relaxed"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        {children}
      </p>
    </blockquote>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
      {children}
    </p>
  );
}

// ── Reusable portrait placeholder ─────────────────────────────────────────────

function Portrait({
  alt,
  caption,
  aspectRatio = "16/7",
  size = "full",
}: {
  alt: string;
  caption: string;
  aspectRatio?: string;
  size?: "full" | "contained";
}) {
  return (
    <figure className={`my-14 ${size === "contained" ? "max-w-[480px] mx-auto" : "-mx-4 md:-mx-12"}`}>
      <div
        className="relative w-full rounded-xl overflow-hidden"
        style={{ aspectRatio }}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(140deg, #EDE8E0 0%, #D6CEBC 55%, #C8BAA4 100%)",
          }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 flex items-center justify-center text-sm italic px-6 text-center"
          style={{ color: "rgba(27,58,91,0.25)" }}
          aria-hidden="true"
        >
          [{alt}]
        </span>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <article aria-labelledby="about-heading">
      <PageMeta
        title="About Pratik Aggarwal"
        description="Pratik Aggarwal has fibromyalgia and 9+ years of experience in disability inclusion. Learn how lived experience shapes his work with organisations, governments, and communities."
        path="/about"
        keywords="who is Pratik Aggarwal, fibromyalgia advocate India, invisible disability expert, ASTHA director, disability storyteller"
      />
      <JsonLd schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pratikaggarwal.in" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://pratikaggarwal.in/about" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://pratikaggarwal.in/#pratik-aggarwal",
          "name": "Pratik Aggarwal",
          "url": "https://pratikaggarwal.in/about",
          "jobTitle": "Disability Inclusion Expert, Speaker & Director",
          "description": "Pratik Aggarwal is a disability inclusion expert and storyteller based in New Delhi, India. He lives with fibromyalgia — a chronic invisible disability — and has spent over nine years working at the intersection of disability, public policy, community development, and storytelling. He is Director of ASTHA, a non-profit working with children with disabilities in Delhi's urban informal settlements, and founder of Blooming in Pain, a storytelling platform for people living with invisible disabilities.",
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Published in The Journal of Pain — on invisible chronic pain, healthcare access, and the politics of medical legitimacy"
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Op-Ed in The Telegraph — on disability, identity, and the language we use to talk about bodies that don't conform"
            }
          ],
          "worksFor": {
            "@type": "Organization",
            "@id": "https://pratikaggarwal.in/#astha",
            "name": "ASTHA",
            "url": "https://asthaindia.in"
          },
          "knowsAbout": [
            "Fibromyalgia", "Invisible disabilities", "Chronic illness", "Disability inclusion",
            "Disability sensitization", "Inclusive development", "Public policy",
            "Community storytelling", "Child disability rights", "Accessibility",
            "DEI", "Rights of Persons with Disabilities Act 2016", "Social model of disability",
            "Intersectionality of disability, poverty, and gender"
          ],
          "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" },
          "sameAs": [
            "https://linkedin.com/in/pratikaggarwal",
            "https://instagram.com/bloominginpain",
            "https://medium.com/@BloomingInPain",
            "https://asthaindia.in"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://pratikaggarwal.in/#astha",
          "name": "ASTHA",
          "url": "https://asthaindia.in",
          "description": "ASTHA is a New Delhi-based non-profit organisation working with children with disabilities in urban informal settlements. Pratik Aggarwal serves as its Director.",
          "areaServed": { "@type": "City", "name": "New Delhi" },
          "founder": { "@type": "Person", "name": "ASTHA founding team" },
          "employee": { "@id": "https://pratikaggarwal.in/#pratik-aggarwal" }
        }
      ]} />

      {/* ── Page header ───────────────────────────────────────────────── */}
      <header className="px-6 pt-20 pb-14 border-b border-border">
        <div className="max-w-[70ch] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            About Pratik
          </p>
          <h1
            id="about-heading"
            className="text-5xl md:text-6xl text-foreground mb-5 tracking-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.07 }}
          >
            My story
          </h1>
          <p className="text-lg text-muted-foreground max-w-[52ch] leading-relaxed">
            On living with fibromyalgia, the work it led me towards, and the
            platform I built because I couldn't find the stories I needed.
          </p>
        </div>
      </header>

      {/* ── Body ──────────────────────────────────────────────────────── */}
      <div className="px-6 py-20">
        <div className="max-w-[70ch] mx-auto">

          {/* ── 1. The body ───────────────────────────────────────────── */}
          <section aria-label="Living with persistent pain">
            <SectionLabel>01 — The body</SectionLabel>

            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                There are two kinds of medical appointments I've learned to
                dread. The ones where the doctor looks at your chart, finds
                nothing, and tells you to rest. And the ones where the doctor
                looks at you — really looks — and you can see them calculating
                whether you appear unwell enough to be taken seriously.
              </p>
              <p>
                I have fibromyalgia. It means I live with pain that has no
                single clear origin, doesn't appear on most scans, and doesn't
                follow the rules people expect pain to follow. On a difficult
                day, getting out of bed is an act of negotiation between what I
                need to do and what my body will allow. On a better day, I can
                work, think clearly, and do most of what I love. From the
                outside, both days look the same.
              </p>
              <p>
                What I wasn't prepared for, when the diagnosis eventually came,
                was the exhaustion of proof. The way every new doctor, every HR
                form, every sceptical colleague, every well-meaning family
                member required a fresh round of justification. Pain, it turns
                out, is socially acceptable primarily when it is legible — when
                it can be photographed, graphed, categorised. Mine wasn't.
              </p>
            </div>

            <PullQuote accent="teal">
              "Pain is socially acceptable when it's legible. Mine wasn't —
              which meant it often felt like it wasn't permitted to exist."
            </PullQuote>
          </section>

          <Portrait
            alt="Portrait photograph of Pratik Aggarwal"
            caption="Pratik Aggarwal — disability inclusion expert, writer, and Director of ASTHA."
            aspectRatio="16/9"
          />

          {/* ── 2. The turn ───────────────────────────────────────────── */}
          <section aria-label="How lived experience became advocacy">
            <SectionLabel>02 — The turn</SectionLabel>

            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                At some point — and I couldn't tell you the exact date, because
                it wasn't a moment so much as a slow accumulation — I stopped
                trying to make my pain legible on other people's terms. I
                stopped calibrating my self-description to what a listener might
                accept, and I started trying to understand my own experience
                without editing it first.
              </p>
              <p>
                That shift is, I think, where the advocacy came from. Not from
                expertise — though expertise followed — but from the particular
                clarity that comes when you stop performing and start paying
                careful attention to what is actually there.
              </p>
              <p>
                I started writing — first to make sense of what was happening
                to me, then because I kept meeting people with invisible
                disabilities in the same position I'd been: isolated, doubted,
                and unable to find stories that reflected their experience
                without dramatising it or sanitising it into something more
                palatable. The triumphant overcoming arcs existed in abundance.
                What didn't were honest accounts of living — fully, imperfectly,
                sometimes in significant pain — in a world that finds that
                complexity inconvenient.
              </p>
            </div>

            <PullQuote accent="plum">
              "I couldn't find the stories I needed. So I started building
              the space where they could exist — and where the people who
              needed them would be believed."
            </PullQuote>
          </section>

          {/* ── 3. The work ───────────────────────────────────────────── */}
          <section aria-label="Professional work in disability inclusion">
            <SectionLabel>03 — The work</SectionLabel>

            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                For eight years, I worked alongside children with disabilities
                in Delhi's urban slums through ASTHA, the organisation I now
                direct. It brought me face to face with disability in its most
                unprotected forms — not in corporate DEI workshops or policy
                seminars, but in homes without reliable sanitation, in families
                navigating four or five simultaneous crises, in the lives of
                children who had no word for what was different about them
                and no system prepared to find out.
              </p>
              <p>
                You cannot work in that context without understanding how
                disability weaves into poverty, homelessness, healthcare access,
                and gender — all at once, not in sequence. There is no clean
                framework that holds it. That is where I learned to think in
                intersections: to resist the tidy category, to stay with
                complexity, and to distrust inclusion that doesn't reach the
                people most difficult to reach.
              </p>
            </div>

            <PullQuote accent="teal">
              "Those years gave me something training cannot replicate — an
              unromanticised understanding of what it costs to be disabled
              in a world not built for you, and a deep, settled impatience
              with inclusion that stays comfortable."
            </PullQuote>
          </section>

          <Portrait
            alt="Pratik Aggarwal with families supported by ASTHA in Delhi"
            caption="Community outreach with ASTHA, New Delhi — work with children with disabilities in urban poverty."
            aspectRatio="3/2"
            size="contained"
          />

          {/* ── 4. Credibility ────────────────────────────────────────── */}
          <section aria-label="Roles, publications, and affiliations">
            <div className="border-t border-b border-border py-9 my-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Roles &amp; publications
              </p>
              <ul className="space-y-4 list-none m-0 p-0">
                <li className="text-base text-foreground leading-snug">
                  Director,{" "}
                  <a
                    href="https://asthaindia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    ASTHA
                    <span className="sr-only">(opens in new tab)</span>
                  </a>{" "}
                  <span className="text-muted-foreground">
                    — non-profit working with children with disabilities in
                    Delhi's urban informal settlements
                  </span>
                </li>
                <li className="text-base text-foreground leading-snug">
                  Published in{" "}
                  <cite className="not-italic font-semibold">
                    The Journal of Pain
                  </cite>{" "}
                  <span className="text-muted-foreground">
                    — on invisible chronic pain, healthcare access, and the
                    politics of medical legitimacy
                  </span>
                </li>
                <li className="text-base text-foreground leading-snug">
                  Op-Ed in{" "}
                  <cite className="not-italic font-semibold">The Telegraph</cite>{" "}
                  <span className="text-muted-foreground">
                    — on disability, identity, and the language we use to talk
                    about bodies that don't conform
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── 5. CTA ────────────────────────────────────────────────── */}
          <section aria-label="Work together or read stories" className="pt-6">
            <p className="text-lg text-muted-foreground mb-9 max-w-[54ch] leading-relaxed">
              There are two ways to be here. If you're looking for a collaborator
              or speaker — someone who brings lived experience alongside
              institutional expertise — the services page is the right next step.
              If you recognise something in this story, Blooming in Pain was
              built for you.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                className="inline-flex items-center px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
              >
                Work with me
              </Link>
              <Link
                to="/blooming-in-pain"
                className="inline-flex items-center px-7 py-3.5 rounded-md font-semibold text-base text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#6E4C7E" }}
              >
                Read stories
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
