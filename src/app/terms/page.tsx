import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern engagements with Dovik Technologies for custom software development.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. The service",
    body: [
      "These terms describe the general relationship between Dovik Technologies and prospective or current clients. The specific terms of any engagement — scope, timeline, and fees — are set out in a separate statement of work signed before project work begins.",
    ],
  },
  {
    heading: "2. Intellectual property",
    body: [
      "Unless otherwise agreed in a statement of work, ownership of custom code built for a client transfers to that client upon final payment. We retain the right to reuse general-purpose tooling and patterns developed during an engagement.",
    ],
  },
  {
    heading: "3. Engagement models",
    body: [
      "Projects are delivered as fixed-bid, dedicated-team, or hourly consulting engagements, as described in the relevant statement of work. Payment terms are specific to each engagement type.",
    ],
  },
  {
    heading: "4. Fees",
    body: [
      "Fees are set out in the statement of work for each engagement. Fixed-bid projects are typically invoiced in milestones; dedicated-team and hourly engagements are invoiced monthly in arrears.",
    ],
  },
  {
    heading: "5. Access to client systems",
    body: [
      "Where a project requires access to client infrastructure or accounts, access is scoped to what the project requires and revoked at the end of the engagement unless otherwise agreed.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "Software is delivered following the agreed scope and tested per the statement of work. To the extent permitted by law, liability for indirect or consequential damages is limited as set out in your engagement agreement.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "Either party may terminate an engagement as described in the relevant statement of work. Work completed up to the termination date remains billable.",
    ],
  },
  {
    heading: "8. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of this website or an engagement will be handled in the courts of Kathmandu, Nepal, except as otherwise specified in an individual statement of work.",
    ],
  },
  {
    heading: "9. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active clients by email before the change takes effect.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      "Questions about these terms can be sent to hello@doviktechnologies.ltd, or by post to Dillibazar, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern engagements with Dovik Technologies.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
