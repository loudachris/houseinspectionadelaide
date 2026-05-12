import { Info } from "lucide-react";
import { SITE } from "@/lib/site";

export function DisclaimerBanner({ variant = "default" }: { variant?: "default" | "muted" | "dark" }) {
  if (variant === "muted") {
    return (
      <div className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <div className="wrap py-3.5 flex items-start gap-3 text-[12.5px] text-[var(--color-muted)] leading-relaxed">
          <Info size={14} className="flex-shrink-0 mt-0.5 text-[var(--color-secondary-dark)]" />
          <p className="m-0">{SITE.disclaimerShort}</p>
        </div>
      </div>
    );
  }
  if (variant === "dark") {
    return (
      <div className="bg-white/[0.04] border-y border-white/10">
        <div className="wrap py-4 flex items-start gap-3 text-[12.5px] text-white/70 leading-relaxed">
          <Info size={14} className="flex-shrink-0 mt-0.5 text-[var(--color-secondary-light)]" />
          <p className="m-0">{SITE.disclaimerShort}</p>
        </div>
      </div>
    );
  }
  return (
    <aside
      role="note"
      className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-5 md:p-6 flex gap-4 items-start"
    >
      <span
        className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0"
        style={{
          background: "rgba(184,116,44,0.15)",
          color: "var(--color-secondary-dark)",
        }}
      >
        <Info size={18} />
      </span>
      <div>
        <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-1.5">
          IMPORTANT
        </div>
        <p className="text-[14.5px] text-[var(--color-fg)] leading-relaxed m-0">
          {SITE.disclaimer}
        </p>
      </div>
    </aside>
  );
}
