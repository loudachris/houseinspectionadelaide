import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ComboPromo() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)] text-white text-[11px] tracking-[.12em] uppercase font-semibold font-[var(--font-mono)] mb-5">
              <Sparkles size={12} /> Most popular bundle
            </span>
            <h2 className="font-[var(--font-display)] font-bold text-[clamp(28px,3.5vw,42px)] leading-[1.1] text-[var(--color-primary-dark)] mb-5">
              Building + Pest, one visit, one combined report.
            </h2>
            <p className="text-[16.5px] text-[var(--color-muted)] leading-relaxed max-w-[560px] mb-7">
              Pre-1987 Adelaide homes almost always have timber framing. Termites and timber
              borers don&apos;t care how pretty the kitchen is. Combo bookings save $150 to $250
              over separate bookings and you only schedule one visit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/building-and-pest-inspection" className="btn btn-primary">
                Learn about the combo <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get a quote
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Stat label="Saved vs separate booking" value="$150-$250" highlight />
            <Stat label="Inspection time on site" value="3-4 hrs" />
            <Stat label="Report turnaround" value="48 hrs" />
            <Stat label="Standards covered" value="AS 4349.1 + .3" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        highlight
          ? "bg-[var(--color-primary-dark)] text-white border-transparent"
          : "bg-white border-[var(--color-line)]"
      }`}
    >
      <div
        className={`font-[var(--font-display)] font-extrabold text-[26px] mb-1 leading-[1.05] ${
          highlight ? "text-[var(--color-secondary-light)]" : "text-[var(--color-primary-dark)]"
        }`}
      >
        {value}
      </div>
      <div
        className={`text-[13px] ${highlight ? "text-white/75" : "text-[var(--color-muted)]"}`}
      >
        {label}
      </div>
    </div>
  );
}
