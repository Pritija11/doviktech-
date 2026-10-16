import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CaseStudyGraphic } from "@/components/CaseStudyGraphic";
import { Avatar } from "@/components/Avatar";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCode,
  IconLayers,
  IconServer,
  IconUsers,
} from "@/components/icons";

const stats = [
  { value: "6", label: "Projects delivered" },
  { value: "8", label: "Team members" },
  { value: "2026", label: "Founded" },
  { value: "100%", label: "Client retention so far" },
];

const caseStudies = [
  {
    tone: "navy" as const,
    stat: "40h",
    label: "saved a week",
    tag: "SaaS platform",
    title: "One dashboard replaced five disconnected spreadsheets",
    body: "A logistics operator was coordinating 80+ drivers across three spreadsheets and a shared inbox. We built a scheduling platform live in six weeks that now runs the whole operation in real time.",
  },
  {
    tone: "primary" as const,
    stat: "3x",
    label: "faster checkout",
    tag: "Web application",
    title: "A checkout rebuild that cut abandonment in half",
    body: "An e-commerce brand's checkout took 11 steps and lost a third of buyers along the way. We rebuilt it as a 3-step flow with an API-first backend, deployed without downtime.",
  },
  {
    tone: "taupe" as const,
    stat: "12wk",
    label: "idea to launch",
    tag: "API & integrations",
    title: "A booking API that now powers three client apps",
    body: "Built a single booking and availability API from scratch, then connected it to a web app, a partner portal, and an internal ops tool — one source of truth instead of three.",
  },
];

const services = [
  {
    icon: IconCode,
    title: "Web applications",
    body: "Custom-built, fast, and maintainable — from marketing sites to complex internal tools.",
  },
  {
    icon: IconLayers,
    title: "SaaS platforms",
    body: "Multi-tenant products built to scale from your first customer to your thousandth.",
  },
  {
    icon: IconServer,
    title: "APIs & integrations",
    body: "The backend layer that connects your product to the tools your business already runs on.",
  },
  {
    icon: IconUsers,
    title: "Business software",
    body: "Internal tools and dashboards that replace the spreadsheet your team has outgrown.",
  },
];

const testimonials = [
  {
    quote:
      "Dovik got the brief right the first time. The prototype was ready in a week and the production build shipped on the date they promised.",
    highlight: "shipped on the date they promised",
    name: "Anjali Rai",
    initials: "AR",
    role: "Head of Product, design-partner team",
  },
  {
    quote:
      "We came in with a messy internal tool held together with spreadsheets. They replaced it with something our whole ops team actually enjoys using.",
    highlight: "actually enjoys using",
    name: "Marcus Webb",
    initials: "MW",
    role: "COO, design-partner team",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — left-aligned, not centered */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-28">
        <Container>
          <Reveal>
            <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] md:text-6xl">
              Custom software, built by people who answer the phone.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Since 2026, Dovik Technologies has designed and built web
              applications, SaaS platforms, APIs, and business software for
              our first clients — small team, direct access, no account
              managers in between. As a startup ourselves, we build the way
              we&apos;d want a vendor to build for us.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact">
                Start a project
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/work" variant="outline">
                See our work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Case studies */}
      <section className="bg-[var(--ink)] py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Selected work</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
              What we built, and what it changed
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-20">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                  <CaseStudyGraphic tone={c.tone} stat={c.stat} label={c.label} />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--on-dark-muted)]">
                      {c.tag}
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--on-dark-muted)]">
                      {c.body}
                    </p>
                    <Link
                      href="/work"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
                    >
                      Read the full story
                      <IconArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>What we build</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Four kinds of software, one team
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 30}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <s.icon className="h-5 w-5 text-[var(--primary)]" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:underline"
            >
              See the full services breakdown
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Testimonials — 2-col with highlighted phrase */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 50}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <span className="quote-mark text-5xl">&ldquo;</span>
                <p className="mt-2 text-lg leading-[1.6] text-[var(--ink)]">
                  {t.quote.split(t.highlight)[0]}
                  <span className="font-semibold text-[var(--primary)]">
                    {t.highlight}
                  </span>
                  {t.quote.split(t.highlight)[1]}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  <Avatar initials={t.initials} />
                  <div>
                    <p className="text-sm font-medium text-[var(--ink)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--fg-faint)]">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Final CTA — personal */}
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Tell us what you want to build.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--fg-muted)]">
              We&apos;ll walk you through how we&apos;d approach it, what it
              would take, and whether we&apos;re the right fit — no
              obligation either way.
            </p>
            <Button href="/contact" className="mt-8">
              Get in touch
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>

          <Reveal delay={60} className="flex justify-center lg:justify-end">
            <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-6">
              <Avatar initials="FE" className="h-16 w-16 text-lg" />
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                  Founder &amp; Lead Engineer
                </p>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">
                  Replies personally to every project inquiry.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
