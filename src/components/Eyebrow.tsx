export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-px w-6 bg-[var(--primary)]" />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.14em] ${
          tone === "dark" ? "text-[var(--on-dark-muted)]" : "text-[var(--fg-muted)]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
