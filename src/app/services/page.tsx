import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  IconCode,
  IconLayers,
  IconServer,
  IconUsers,
  IconCheck,
  IconArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web applications, SaaS platforms, APIs, and business software — what Dovik Technologies builds, what's included, and how long it takes.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: IconCode,
    name: "Web applications",
    summary:
      "Custom-built sites and applications — fast, accessible, and maintainable by whoever inherits the codebase after us.",
    includes: [
      "Design and frontend build, from Figma or from scratch",
      "Content management where you need it, static where you don't",
      "Performance and accessibility audited before launch",
    ],
    timeline: "4–10 weeks",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: IconLayers,
    name: "SaaS platforms",
    summary:
      "Multi-tenant products built to handle your first customer and your thousandth without a rewrite in between.",
    includes: [
      "Auth, billing, and multi-tenancy architected from day one",
      "Admin tooling so your team can support customers without us",
      "Infrastructure sized to your actual usage, not guessed at",
    ],
    timeline: "8–16 weeks for v1",
    stack: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    icon: IconServer,
    name: "APIs & integrations",
    summary:
      "The backend layer that connects your product to the tools your business already depends on.",
    includes: [
      "REST or GraphQL APIs designed around how your data is actually used",
      "Third-party integrations — payments, CRM, calendars, messaging",
      "Documentation your own team can onboard against",
    ],
    timeline: "3–8 weeks",
    stack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    icon: IconUsers,
    name: "Business software",
    summary:
      "Internal tools and dashboards that replace the spreadsheet your team has already outgrown.",
    includes: [
      "Workflows mapped from how your team actually works, not assumed",
      "Role-based access so the right people see the right data",
      "Built to extend as your process changes, not rebuilt",
    ],
    timeline: "4–8 weeks",
    stack: ["Next.js", "PostgreSQL", "Retool-style admin"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Four kinds of software. The same team end to end.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup ourselves, we don&apos;t hand you off between a
              sales team, a design team, and a dev team — the people who
              scope your project are the people who build it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-20">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 40}>
              <div className="grid grid-cols-1 gap-10 border-t border-[var(--border)] pt-14 first:border-t-0 first:pt-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <s.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                    {s.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-faint)]">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                        <span className="text-sm leading-6 text-[var(--fg-muted)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                    <div>
                      <p className="text-xs text-[var(--fg-faint)]">
                        Typical timeline
                      </p>
                      <p className="text-sm font-medium text-[var(--ink)]">
                        {s.timeline}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span key={t} className="pill pill-neutral">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24 text-center">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Not sure which of these fits?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Most projects are a mix. Tell us what you&apos;re trying to
              build and we&apos;ll help you scope it.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">
                Start a project
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
