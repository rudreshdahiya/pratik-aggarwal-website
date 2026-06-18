import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { PageMeta } from "@/components/page-meta";
import { JsonLd } from "@/components/json-ld";
import { track } from "@vercel/analytics";

// ── Data ──────────────────────────────────────────────────────────────────────

const stories = [
  {
    id: 1,
    tag: "Chronic Pain",
    title: "The Language of Invisible Pain",
    excerpt:
      "There are no words in the standard vocabulary for the specific weight of waking up in pain before you've had the chance to remember who you are.",
    readTime: "7 min",
    author: "Pratik Aggarwal",
    href: "https://medium.com/@BloomingInPain",
    imgTint: "sand",
  },
  {
    id: 2,
    tag: "Society",
    title: "What 'You Look Fine' Actually Costs",
    excerpt:
      "Every time someone says it — even with kindness — you spend a moment recalculating whether your experience of your own body can be trusted.",
    readTime: "5 min",
    author: "Riya Menon",
    href: "https://medium.com/@BloomingInPain",
    imgTint: "plum",
  },
  {
    id: 3,
    tag: "Work",
    title: "On Working While Disabled and Keeping It Secret",
    excerpt:
      "The energy it takes to hide a condition is energy borrowed from the future — from your evenings, your weekends, your recovery time.",
    readTime: "8 min",
    author: "Arun K.",
    href: "https://medium.com/@BloomingInPain",
    imgTint: "sand",
  },
  {
    id: 4,
    tag: "Diagnosis",
    title: "When the Diagnosis Comes Late",
    excerpt:
      "By the time I got a name for what was happening to me, I had spent six years believing I was the problem. The diagnosis was a relief and a grief at once.",
    readTime: "6 min",
    author: "Priya Sharma",
    href: "https://medium.com/@BloomingInPain",
    imgTint: "plum",
  },
  {
    id: 5,
    tag: "Personal",
    title: "The Good Day Trap",
    excerpt:
      "On good days I try to do everything I couldn't do last week. Then I pay for it for three days after. It took me years to understand this was a pattern, not a failure.",
    readTime: "5 min",
    author: "Meera V.",
    href: "https://medium.com/@BloomingInPain",
    imgTint: "sand",
  },
  {
    id: 6,
    tag: "Community",
    title: "Finding People Who Don't Need It Explained",
    excerpt:
      "There's a specific relief in a room — or a thread, or a message — where you don't have to start from the beginning every single time.",
    readTime: "4 min",
    author: "Kavya R.",
    href: "https://medium.com/@BloomingInPain",
    imgTint: "plum",
  },
];

const cardGradient = {
  sand: "linear-gradient(145deg, #EDE8E0 0%, #D8CEBC 100%)",
  plum: "linear-gradient(145deg, #EAE4F0 0%, #D4C8E4 100%)",
};

const faqs = [
  {
    q: "What is an invisible disability?",
    a: "An invisible disability is a physical, mental, or neurological condition that is not immediately apparent to others — fibromyalgia, chronic fatigue, lupus, anxiety disorders, endometriosis, and hundreds more. People with invisible disabilities often face disbelief and the burden of having to prove their condition, because they 'don't look sick.' Blooming in Pain exists to tell the truth about what these conditions feel like from the inside.",
  },
  {
    q: "Can I contribute without a formal diagnosis?",
    a: "Yes. Getting a diagnosis for an invisible condition is itself often a long, difficult, gatekept process. You don't need a name for what you have. If you have lived experience of an invisible or chronic condition — whether named or not — your story belongs here. We'll work with you from there.",
  },
  {
    q: "What kinds of conditions are covered here?",
    a: "The full range: fibromyalgia, chronic fatigue syndrome (ME/CFS), lupus, endometriosis, anxiety, depression, PTSD, Crohn's, IBS, multiple sclerosis, POTS, PCOS, chronic migraine, and more. We also welcome stories about navigating healthcare, employment, and relationships with an invisible condition — not just the condition itself.",
  },
  {
    q: "How is this different from a support group?",
    a: "Blooming in Pain is a storytelling platform, not a support group. A support group is structured around helping members cope. This platform is structured around bearing witness — creating a public record of what life with invisible disability actually looks like. It's closer to literary non-fiction than peer support.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function BloomingInPain() {
  return (
    <div>
      <PageMeta
        title="Blooming in Pain — Stories of Invisible Disability"
        description="Blooming in Pain is a storytelling platform for people living with invisible disabilities — fibromyalgia, chronic fatigue, lupus, anxiety, and more. Real stories. Honest voices. Founded by Pratik Aggarwal."
        path="/blooming-in-pain"
        keywords="invisible disability stories, fibromyalgia community, chronic illness platform, Blooming in Pain, invisible illness blog India"
      />
      <JsonLd schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pratikaggarwal.in" },
            { "@type": "ListItem", "position": 2, "name": "Blooming in Pain", "item": "https://pratikaggarwal.in/blooming-in-pain" }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://pratikaggarwal.in/#blooming-in-pain",
          "name": "Blooming in Pain",
          "url": "https://pratikaggarwal.in/blooming-in-pain",
          "sameAs": [
            "https://medium.com/@BloomingInPain",
            "https://instagram.com/blooming.in.pain"
          ],
          "founder": { "@id": "https://pratikaggarwal.in/#pratik-aggarwal" },
          "description": "Blooming in Pain is a storytelling platform founded by Pratik Aggarwal for people living with invisible disabilities — including fibromyalgia, chronic fatigue syndrome, lupus, anxiety disorders, endometriosis, and other conditions that exist between what bodies hold and what medicine is prepared to name. It publishes honest, first-person accounts of life with invisible illness — without inspiration framing, tragedy arcs, or the requirement to be believed first.",
          "knowsAbout": [
            "Invisible disabilities", "Fibromyalgia", "Chronic fatigue syndrome",
            "Lupus", "Anxiety disorders", "Endometriosis", "Chronic pain",
            "Community storytelling", "Lived experience of disability"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a },
          })),
        }
      ]} />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <header
        className="px-6 pt-20 pb-20 border-b border-border"
        style={{ backgroundColor: "#F8F4FB" }}
      >
        <div className="max-w-[70ch] mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#6E4C7E" }}
          >
            Initiative by Pratik Aggarwal
          </p>

          <h1
            className="text-5xl md:text-7xl text-foreground mb-10 tracking-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.07 }}
          >
            Blooming<br />
            <em style={{ fontStyle: "italic", color: "#6E4C7E" }}>
              in Pain
            </em>
          </h1>

          <p className="text-lg text-foreground leading-relaxed mb-8 max-w-[58ch]">
            A storytelling platform for people with invisible disabilities —
            fibromyalgia, chronic fatigue, lupus, anxiety, endometriosis, and the
            hundreds of other conditions that live in the gap between what bodies
            hold and what medicine is prepared to name. Not a resource hub. Not a
            support group. A place where people write honestly about their lives,
            without having to explain themselves first.
          </p>

          <p
            className="text-xl text-foreground leading-relaxed"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic" }}
          >
            We started this because we couldn't find it.
            You're welcome to stay.
          </p>
        </div>
      </header>

      {/* ── Pull quote ────────────────────────────────────────────────── */}
      <div
        className="px-6 py-20 md:py-24"
        style={{ backgroundColor: "#6E4C7E" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p
              className="text-2xl md:text-3xl lg:text-[2rem] italic leading-snug"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                color: "#FFFFFF",
                lineHeight: 1.35,
              }}
            >
              "A space to be believed — not explained, not inspired, not
              compared to someone who has it worse. Just heard."
            </p>
            <footer
              className="mt-6 text-sm not-italic"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              — Pratik Aggarwal, founder
            </footer>
          </blockquote>
        </div>
      </div>

      {/* ── Story grid ────────────────────────────────────────────────── */}
      <section aria-labelledby="stories-heading" className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#6E4C7E" }}
              >
                Stories
              </p>
              <h2
                id="stories-heading"
                className="text-3xl md:text-4xl text-foreground"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                From the community
              </h2>
            </div>
            <a
              href="https://medium.com/@BloomingInPain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors shrink-0"
              onClick={() => track("outbound_click", { destination: "medium", location: "stories_section" })}
            >
              All stories on Medium
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>

          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none m-0 p-0"
            role="list"
          >
            {stories.map((story) => (
              <li key={story.id} className="flex">
                <Card className="flex flex-col w-full bg-card border-border shadow-none hover:shadow-sm transition-shadow">

                  <div
                    className="relative w-full rounded-t-lg overflow-hidden flex-none"
                    style={{ aspectRatio: "16/9" }}
                    role="img"
                    aria-label={`Illustration for: ${story.title}`}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: cardGradient[story.imgTint as keyof typeof cardGradient] }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.85)", color: "#6E4C7E" }}
                    >
                      {story.tag}
                    </span>
                  </div>

                  <CardContent className="flex flex-col flex-1 p-5">
                    <h3
                      className="text-lg text-foreground leading-snug mb-2.5"
                      style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {story.author} · {story.readTime}
                      </span>
                      <a
                        href={story.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                        style={{ color: "#6E4C7E" }}
                        aria-label={`Read "${story.title}" on Medium (opens in new tab)`}
                      >
                        Read →
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="bip-faq-heading"
        className="px-6 py-20 border-t border-border"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="bip-faq-heading"
            className="text-3xl md:text-4xl text-foreground mb-12"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Questions about the platform
          </h2>
          <dl className="divide-y divide-border">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-8">
                <dt
                  className="text-lg font-semibold text-foreground mb-3 leading-snug"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {q}
                </dt>
                <dd className="text-base text-muted-foreground leading-relaxed max-w-[70ch]">
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Share your story ──────────────────────────────────────────── */}
      <section
        aria-labelledby="share-heading"
        className="px-6 py-20 border-t border-border"
        style={{ backgroundColor: "#F8F4FB" }}
      >
        <div className="max-w-[60ch] mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#6E4C7E" }}
          >
            Contribute
          </p>
          <h2
            id="share-heading"
            className="text-3xl md:text-4xl text-foreground mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Your story belongs here
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            We're not looking for polished essays or resolved conclusions —
            just honest accounts of what your life actually looks like.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            You don't need a diagnosis to contribute. You need to have lived
            it. We'll work with you from there.
          </p>
          <Link
            to="/blooming-in-pain/submit"
            className="inline-flex items-center px-8 py-3.5 rounded-md font-semibold text-base text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#6E4C7E" }}
          >
            Share your story
          </Link>
          <p className="mt-5 text-sm text-muted-foreground">
            Stories are reviewed before publication. We'll be in touch within
            two weeks.
          </p>
        </div>
      </section>

      {/* ── Stay connected ────────────────────────────────────────────── */}
      <section
        aria-labelledby="follow-heading"
        className="px-6 py-16 md:py-20 border-t border-border"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="follow-heading"
            className="text-3xl md:text-4xl text-foreground mb-10"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Stay connected
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">

            <a
              href="https://instagram.com/blooming.in.pain"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-secondary/50 transition-colors"
              aria-label="Follow @blooming.in.pain on Instagram (opens in new tab)"
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#6E4C7E" }}
              >
                Instagram
              </p>
              <p
                className="text-3xl text-foreground mb-3 group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                @blooming.in.pain
              </p>
              <p className="text-base text-muted-foreground mb-7 leading-relaxed">
                Short posts, community moments, and the kind of things that
                don't make it into an essay — but still need to be said.
              </p>
              <span
                className="inline-flex items-center text-sm font-semibold underline underline-offset-4"
                style={{ color: "#6E4C7E" }}
              >
                Follow on Instagram →
                <span className="sr-only">(opens in new tab)</span>
              </span>
            </a>

            <a
              href="https://medium.com/@BloomingInPain"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-secondary/50 transition-colors"
              aria-label="Read Blooming in Pain on Medium (opens in new tab)"
              onClick={() => track("outbound_click", { destination: "medium", location: "follow_section" })}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#6E4C7E" }}
              >
                Medium
              </p>
              <p
                className="text-3xl text-foreground mb-3 group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                @BloomingInPain
              </p>
              <p className="text-base text-muted-foreground mb-7 leading-relaxed">
                Long-form personal essays and guest pieces — stories told in
                full, without the word count running out.
              </p>
              <span
                className="inline-flex items-center text-sm font-semibold underline underline-offset-4"
                style={{ color: "#6E4C7E" }}
              >
                Read on Medium →
                <span className="sr-only">(opens in new tab)</span>
              </span>
            </a>

          </div>

          <div className="mt-10 pt-10 border-t border-border max-w-[60ch]">
            <p className="text-base text-muted-foreground leading-relaxed">
              We send a short newsletter a couple of times a month — new
              stories, occasional resources, nothing more. No pitch, no
              algorithm.{" "}
              <Link
                to="/contact"
                className="font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                style={{ color: "#6E4C7E" }}
              >
                Subscribe here.
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
