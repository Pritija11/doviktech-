import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dovik Technologies is an early-stage custom software development startup based in Kathmandu, Nepal, building software for a small number of clients directly.",
  alternates: {
    canonical: "/about",
  },
};

const snapshot = [
  { value: "Pre-seed", label: "Current stage" },
  { value: "8", label: "People on the team" },
  { value: "Kathmandu", label: "Where we're based" },
];

const roles = [
  {
    title: "Founder & Lead Engineer",
    initials: "FE",
    body: "Scopes every project personally and stays on it from first call to launch.",
  },
  {
    title: "Design Lead",
    initials: "DL",
    body: "Owns the interface work across every engagement, from wireframe to shipped screen.",
  },
  {
    title: "Backend Engineering",
    initials: "BE",
    body: "Two engineers covering APIs, infrastructure, and everything that doesn't render in a browser.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--ink)] md:text-5xl">
              We got tired of agencies that disappear after the kickoff
              call.
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <div className="flex flex-col gap-5 text-sm leading-7 text-[var(--fg-muted)]">
              <p>
                Between us, we&apos;d each worked with an agency that sent a
                senior person to the pitch and a junior team to actually
                build the thing — then disappeared the moment the invoice
                was paid, leaving a codebase nobody internally understood.
              </p>
              <p className="border-l-2 border-[var(--primary)] pl-5 text-base italic text-[var(--ink)]">
                <span className="quote-mark text-3xl not-italic">
                  &ldquo;
                </span>
                We wanted the people who scope a project to be the same
                people who are still answering questions about it six
                months later.
              </p>
              <p>
                Dovik Technologies is our attempt at that: a small team,
                direct contact with whoever&apos;s actually writing the
                code, and a codebase we&apos;d be comfortable inheriting
                ourselves.
              </p>
              <p>
                We&apos;re a few months in, pre-seed, and still building our
                portfolio one real client at a time. There&apos;s no account
                management layer to hide behind yet — which is, frankly,
                the point. As a startup, our incentives are simple: good
                work now is how we get the next client.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--ink)] py-14 text-center">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {snapshot.map((s) => (
            <div key={s.label}>
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[var(--on-dark-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Who you&apos;d actually work with
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 40}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <Avatar initials={r.initials} className="h-10 w-10 text-sm" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24 text-center">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Want to work with us directly?
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">
                Get in touch
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
