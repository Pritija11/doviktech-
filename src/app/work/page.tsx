import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CaseStudyGraphic } from "@/components/CaseStudyGraphic";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Dovik Technologies — web applications, SaaS platforms, and internal tools built for our first clients.",
  alternates: {
    canonical: "/work",
  },
};

const projects = [
  {
    tone: "mint" as const,
    stat: "40h",
    label: "saved a week",
    tag: "SaaS platform · Logistics",
    title: "One dashboard replaced five disconnected spreadsheets",
    body: "A logistics operator was coordinating 80+ drivers across three spreadsheets and a shared inbox. We built a scheduling platform live in six weeks that now runs the whole operation in real time — assignments, routes, and driver availability in one view.",
    stackUsed: ["Next.js", "PostgreSQL", "Mapbox"],
  },
  {
    tone: "cream" as const,
    stat: "3x",
    label: "faster checkout",
    tag: "Web application · E-commerce",
    title: "A checkout rebuild that cut abandonment in half",
    body: "An e-commerce brand's checkout took 11 steps and lost a third of buyers along the way. We rebuilt it as a 3-step flow with an API-first backend, deployed without downtime, and instrumented every drop-off point.",
    stackUsed: ["Next.js", "Stripe", "Redis"],
  },
  {
    tone: "sand" as const,
    stat: "12wk",
    label: "idea to launch",
    tag: "API & integrations · Hospitality",
    title: "A booking API that now powers three client apps",
    body: "Built a single booking and availability API from scratch, then connected it to a web app, a partner portal, and an internal ops tool — one source of truth instead of three systems quietly drifting apart.",
    stackUsed: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    tone: "mint" as const,
    stat: "0 → 1",
    label: "to first customer",
    tag: "SaaS platform · B2B tools",
    title: "An MVP scoped, built, and shipped in eight weeks",
    body: "A first-time founder needed a working product to show investors, not a six-month roadmap. We scoped the smallest version that proved the idea, built it, and it signed its first paying customer three weeks after launch.",
    stackUsed: ["Next.js", "Supabase", "Vercel"],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Work</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              What we built, and what it changed.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As an early-stage startup, our portfolio is still short — but
              every project here is real work for a real client, not a
              concept piece.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-20">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <div
                className={`grid grid-cols-1 items-center gap-10 border-t border-[var(--border)] pt-14 first:border-t-0 first:pt-0 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <CaseStudyGraphic tone={p.tone} stat={p.stat} label={p.label} />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                    {p.tag}
                  </span>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stackUsed.map((t) => (
                      <span key={t} className="pill pill-neutral">
                        {t}
                      </span>
                    ))}
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
              Want to be the next project here?
            </h2>
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
