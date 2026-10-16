import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  IconCompass,
  IconPencilRuler,
  IconCode,
  IconRocket,
  IconArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Dovik Technologies runs a project from first call to launch, and the three ways clients engage us.",
  alternates: {
    canonical: "/process",
  },
};

const steps = [
  {
    icon: IconCompass,
    step: "01",
    title: "Discovery",
    duration: "1–2 weeks",
    body: "We map what you actually need against what you think you need — the two aren't always the same. You leave with a scoped plan, not a vague proposal.",
  },
  {
    icon: IconPencilRuler,
    step: "02",
    title: "Design",
    duration: "1–3 weeks",
    body: "Wireframes and key screens before a line of production code is written, so changes happen on paper, not after three weeks of engineering.",
  },
  {
    icon: IconCode,
    step: "03",
    title: "Build",
    duration: "4–12 weeks",
    body: "Weekly demos against a working build, not a status update slide. You see progress because the software runs, not because we say it does.",
  },
  {
    icon: IconRocket,
    step: "04",
    title: "Launch & support",
    duration: "Ongoing",
    body: "We stay on through launch and the weeks after, when real usage surfaces the edge cases nobody thought to test for.",
  },
];

const engagements = [
  {
    name: "Fixed-bid project",
    body: "A scoped deliverable, a fixed price, a fixed timeline. Best when the requirements are clear and stable.",
    fit: "Good fit for a defined MVP or a single feature build.",
  },
  {
    name: "Dedicated team",
    body: "One or more engineers embedded with your team on a monthly retainer, working from your backlog.",
    fit: "Good fit for ongoing product development or filling a hiring gap.",
  },
  {
    name: "Hourly consulting",
    body: "Pay for the hours you use — code review, architecture advice, or a specific technical problem.",
    fit: "Good fit for a short, well-defined technical question.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Process</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              From a first call to something your users touch.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a small startup, we don&apos;t run a heavyweight process —
              four stages, weekly contact, no surprises at the end.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 50}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)]">
                      <s.icon className="h-5 w-5 text-[var(--primary)]" />
                    </span>
                    {i < steps.length - 1 && (
                      <span className="mt-2 h-full w-px flex-1 bg-[var(--border)]" />
                    )}
                  </div>
                  <div className="pb-14 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                        {s.title}
                      </h2>
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                        {s.duration}
                      </span>
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we price</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Three ways to work with us
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              No subscription tiers — every project gets a quote based on
              what it actually needs.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.name} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {e.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {e.body}
                  </p>
                  <p className="mt-4 border-t border-[var(--border)] pt-4 text-xs text-[var(--fg-faint)]">
                    {e.fit}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 text-center">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Ready to scope your project?
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
