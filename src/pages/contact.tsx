import { useState } from "react";
import { Link } from "react-router";
import { track } from "@vercel/analytics";
import { PageMeta } from "@/components/page-meta";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// ── Types ─────────────────────────────────────────────────────────────────────

type InquiryType = "partner" | "speaking" | "consulting" | "community" | "";

interface FormState {
  inquiryType: InquiryType;
  name: string;
  organisation: string;
  email: string;
  message: string;
}

interface FormErrors {
  inquiryType?: string;
  name?: string;
  email?: string;
  message?: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const inquiryTypes: { value: InquiryType; label: string; description: string }[] = [
  {
    value: "partner",
    label: "Partnership",
    description: "Collaborate on disability inclusion initiatives",
  },
  {
    value: "speaking",
    label: "Speaking / Talk",
    description: "Book Pratik for a keynote, panel, or event",
  },
  {
    value: "consulting",
    label: "Consulting",
    description: "Sensitization, capacity building, or advisory work",
  },
  {
    value: "community",
    label: "Community / Stories",
    description: "Share a story or connect with Blooming in Pain",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.inquiryType) errors.inquiryType = "Please select an inquiry type.";
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Please add a message.";
  return errors;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    inquiryType: "",
    name: "",
    organisation: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleInquiryType(value: InquiryType) {
    setForm((prev) => ({ ...prev, inquiryType: value }));
    if (errors.inquiryType) setErrors((prev) => ({ ...prev, inquiryType: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      const focusableIds: Partial<Record<keyof FormErrors, string>> = {
        name: "name",
        email: "email",
        message: "message",
      };
      const firstKey = Object.keys(validation)[0] as keyof FormErrors;
      const focusId = focusableIds[firstKey];
      if (focusId) document.getElementById(focusId)?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          inquiry_type: form.inquiryType,
          name: form.name,
          organisation: form.organisation,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      track("contact_form_submitted", { inquiry_type: form.inquiryType });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again, or email hello@bloominginpain.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Success state ────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <section
        aria-labelledby="success-heading"
        className="px-6 py-24 md:py-36"
      >
        <div className="max-w-[60ch] mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#1B6B6B" }}
          >
            Message received
          </p>
          <h1
            id="success-heading"
            className="text-4xl md:text-5xl text-foreground mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Thank you for reaching out.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            I read every message personally and typically respond within 3–5
            working days. If your inquiry is time-sensitive, you can also reach
            me directly at{" "}
            <a
              href="mailto:hello@bloominginpain.com"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              hello@bloominginpain.com
            </a>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/"
              className="inline-flex items-center px-7 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              Back to home
            </Link>
            <Link
              to="/blooming-in-pain"
              className="text-base text-foreground underline underline-offset-4 hover:text-primary transition-colors self-center"
            >
              Read stories →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────

  return (
    <>
      <PageMeta
        title="Contact — Work With Pratik Aggarwal"
        description="Get in touch with Pratik Aggarwal for partnership, speaking, consulting, or community inquiries. Disability inclusion work rooted in lived experience."
        path="/contact"
        keywords="hire disability speaker India, partner with Pratik Aggarwal, book disability inclusion training, contact Blooming in Pain"
      />
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Pratik Aggarwal",
        "url": "https://pratikaggarwal.in/contact",
        "description": "Contact page for Pratik Aggarwal — disability inclusion expert, speaker, and founder of Blooming in Pain. Accepts inquiries for partnership, speaking, consulting, and community engagement.",
        "mainEntity": { "@id": "https://pratikaggarwal.in/#pratik-aggarwal" }
      }} />
      {/* ── Page header ────────────────────────────────────────────────────── */}
      <section aria-labelledby="contact-heading" className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#1B6B6B" }}
          >
            Get in touch
          </p>
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl text-foreground mb-5"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Let's work together.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[52ch] leading-relaxed">
            Whether you want to partner, book a talk, commission advisory work,
            or share a story — I'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="border-t border-border" aria-hidden="true" />

      {/* ── Body: sidebar + form ────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-16">

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
          <aside aria-label="Contact details">
            <div className="space-y-10">

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@bloominginpain.com"
                  className="text-base text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  hello@bloominginpain.com
                </a>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  I typically respond within 3–5 working days.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Follow
                </p>
                <ul className="space-y-2.5 list-none m-0 p-0">
                  <li>
                    <a
                      href="https://instagram.com/blooming.in.pain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                    >
                      Instagram
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/pratikaggarwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                    >
                      LinkedIn
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Blooming in Pain
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Want to share your story of living with an invisible disability?
                </p>
                <Link
                  to="/blooming-in-pain"
                  className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  Learn how to contribute →
                </Link>
              </div>

            </div>
          </aside>

          {/* ── Form ─────────────────────────────────────────────────────── */}
          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* Inquiry type */}
              <fieldset className="mb-10">
                <legend className="text-base font-semibold text-foreground mb-4">
                  What's this about?{" "}
                  <span aria-hidden="true" className="text-destructive">*</span>
                </legend>

                {errors.inquiryType && (
                  <p
                    id="inquiryType-error"
                    role="alert"
                    className="text-sm text-destructive mb-3"
                  >
                    {errors.inquiryType}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  {inquiryTypes.map((type) => {
                    const isSelected = form.inquiryType === type.value;
                    return (
                      <label
                        key={type.value}
                        className={`flex flex-col gap-1 p-4 rounded-lg border cursor-pointer transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring ${
                          isSelected
                            ? "border-primary bg-card"
                            : "border-border bg-card hover:border-muted-foreground/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={isSelected}
                          onChange={() => handleInquiryType(type.value as InquiryType)}
                          className="sr-only"
                          aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
                        />
                        <span
                          className="text-sm font-semibold text-foreground"
                          style={isSelected ? { color: "#1B6B6B" } : {}}
                        >
                          {type.label}
                        </span>
                        <span className="text-xs text-muted-foreground leading-snug">
                          {type.description}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Name */}
              <div className="mb-6">
                <Label htmlFor="name" className="text-base font-semibold text-foreground mb-2 block">
                  Your name{" "}
                  <span aria-hidden="true" className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                  className={`text-base h-12 ${errors.name ? "border-destructive" : ""}`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-sm text-destructive mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Organisation */}
              <div className="mb-6">
                <Label htmlFor="organisation" className="text-base font-semibold text-foreground mb-2 block">
                  Organisation{" "}
                  <span className="text-sm font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  value={form.organisation}
                  onChange={handleChange}
                  className="text-base h-12"
                  placeholder="Where are you writing from?"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <Label htmlFor="email" className="text-base font-semibold text-foreground mb-2 block">
                  Email address{" "}
                  <span aria-hidden="true" className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  className={`text-base h-12 ${errors.email ? "border-destructive" : ""}`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-destructive mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-10">
                <Label htmlFor="message" className="text-base font-semibold text-foreground mb-2 block">
                  Message{" "}
                  <span aria-hidden="true" className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                  className={`text-base resize-none ${errors.message ? "border-destructive" : ""}`}
                  placeholder="Tell me a little about what you have in mind."
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-sm text-destructive mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Required note + Submit */}
              {submitError && (
                <p role="alert" className="text-sm text-destructive mb-4">
                  {submitError}
                </p>
              )}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-8 text-base font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
                <p className="text-sm text-muted-foreground">
                  <span aria-hidden="true">*</span> Required fields
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
