type Tone = "navy" | "primary" | "taupe" | "cream" | "mint" | "sand";

const toneBg: Record<Tone, string> = {
  navy: "bg-[var(--navy)]",
  primary: "bg-[var(--ink)]",
  taupe: "bg-[var(--navy-alt)]",
  cream: "bg-[var(--tone-cream)]",
  mint: "bg-[var(--tone-mint)]",
  sand: "bg-[var(--tone-taupe)]",
};

const darkTones: Tone[] = ["navy", "primary", "taupe"];

const dotPositions = [
  [10, 15], [30, 10], [55, 20], [78, 12],
  [15, 42], [42, 48], [68, 40], [88, 45],
  [8, 72], [35, 78], [60, 70], [85, 76],
];

export function CaseStudyGraphic({
  tone = "navy",
  stat,
  label,
}: {
  tone?: Tone;
  stat: string;
  label: string;
}) {
  const isDark = darkTones.includes(tone);
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${toneBg[tone]}`}
    >
      <svg
        className={`absolute inset-0 h-full w-full ${isDark ? "opacity-30" : "opacity-50"}`}
        aria-hidden
      >
        {dotPositions.map(([x, y], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={i % 3 === 0 ? 14 : 9}
            fill="var(--primary)"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p
          className={`font-[family-name:var(--font-display)] text-5xl font-semibold italic md:text-6xl ${
            isDark ? "text-white" : "text-[var(--ink)]"
          }`}
        >
          {stat}
        </p>
        <p
          className={`mt-1 text-sm ${isDark ? "text-white/70" : "text-[var(--fg-muted)]"}`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
