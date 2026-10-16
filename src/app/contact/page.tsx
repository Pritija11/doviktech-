import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Dovik Technologies — tell us what you're building and we'll reply directly, as a small startup should.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-20 text-center md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Tell us what you want to build.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
            As a startup, a founder reads every message personally — no
            account manager, no automated sequence.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--fg-muted)]">
            <span className="flex items-center gap-2">
              <IconMail className="h-4 w-4 text-[var(--primary)]" />
              <a
                href="mailto:hello@doviktechnologies.ltd"
                className="hover:text-[var(--ink)]"
              >
                hello@doviktechnologies.ltd
              </a>
            </span>
            <span className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 text-[var(--primary)]" />
              <a
                href="tel:+9779841122334"
                className="hover:text-[var(--ink)]"
              >
                +977 984-1122334
              </a>
            </span>
            <span className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 text-[var(--primary)]" />
              Dillibazar, Kathmandu 44600, Nepal
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-left shadow-[0_24px_60px_-28px_rgba(20,24,31,0.15)] md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
