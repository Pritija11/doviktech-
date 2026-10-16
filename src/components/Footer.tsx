import Link from "next/link";
import { Container } from "./Container";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "Web applications" },
      { href: "/services", label: "SaaS platforms" },
      { href: "/services", label: "APIs & integrations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/work", label: "Work" },
      { href: "/process", label: "Process" },
      { href: "/stack", label: "Stack" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)] text-[var(--fg-muted)]">
      <Container className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--ink)]">
              <IconLogo className="h-4.5 w-4.5 text-[var(--primary)]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-base font-semibold italic text-[var(--ink)]">
              Dovik Technologies
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            Custom software development — web applications, SaaS platforms,
            APIs, and business software, built from Kathmandu, Nepal.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-semibold text-[var(--ink)]">
              {col.heading}
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {col.links.map((l, i) => (
                <li key={`${l.href}-${i}`}>
                  <Link href={l.href} className="hover:text-[var(--ink)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-4 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Dovik Technologies. All rights reserved.</p>
          <p>Software, built from Kathmandu, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
