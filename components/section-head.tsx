export function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-[760px] mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase mb-3.5 ${
            light ? "text-[var(--color-secondary-light)]" : "text-[var(--color-secondary)]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-[var(--font-display)] font-bold leading-[1.1] tracking-[-.015em] text-[clamp(30px,3.5vw,44px)] mb-3.5 ${
          light ? "text-white" : "text-[var(--color-primary-dark)]"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-[17px] leading-relaxed max-w-[640px] ${
            light ? "text-white/70" : "text-[var(--color-muted)]"
          } ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
