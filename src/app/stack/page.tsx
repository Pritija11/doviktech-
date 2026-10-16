import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  IconCode,
  IconServer,
  IconCloud,
  IconGitBranch,
  IconArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The languages, frameworks, and infrastructure Dovik Technologies builds with, and why we chose them.",
  alternates: {
    canonical: "/stack",
  },
};

const categories = [
  {
    icon: IconCode,
    name: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "React Native"],
  },
  {
    icon: IconServer,
    name: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST"],
  },
  {
    icon: IconCloud,
    name: "Infrastructure",
    items: ["AWS", "Vercel", "Docker", "Terraform", "Cloudflare"],
  },
  {
    icon: IconGitBranch,
    name: "Workflow",
    items: ["GitHub", "GitHub Actions", "Linear", "Figma", "Playwright"],
  },
];

const principles = [
  {
    title: "Boring technology, on purpose",
    body: "We reach for tools with a decade of production track record over whatever's trending this quarter — your codebase outlives the hype cycle.",
  },
  {
    title: "No framework lock-in you didn't choose",
    body: "If a project calls for something outside our default stack, we'll say so upfront rather than force-fitting the wrong tool.",
  },
  {
    title: "Code we'd want to inherit",
    body: "Typed, tested, and documented well enough that a developer who's never seen it can ship a change in their first week.",
  },
];

export default function StackPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Stack</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              A small, deliberate set of tools.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup, we&apos;d rather be excellent with a small
              toolkit than mediocre across twenty frameworks.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                  <c.icon className="h-5 w-5 text-[var(--primary)]" />
                </span>
                <h2 className="mt-5 text-base font-semibold text-[var(--ink)]">
                  {c.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-1.5 text-sm text-[var(--fg-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Why this stack, specifically
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 40}>
                <div className="h-full">
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.body}
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
              Have a stack already in place?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We work within an existing codebase just as often as we start
              from scratch.
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
