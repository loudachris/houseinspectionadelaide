import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHead } from "../section-head";

const PRICES = [
  {
    tag: "Standard",
    title: "Pre-purchase building inspection",
    lo: 400,
    hi: 650,
    body: "Single-storey, 3-bedroom standalone homes across suburban Adelaide.",
    bullets: ["AS 4349.1 compliant", "2 to 3 hours on site", "48hr report turnaround"],
    feature: false,
  },
  {
    tag: "Most common",
    title: "Building + Pest combo",
    lo: 550,
    hi: 900,
    body: "One visit, two reports. Building (AS 4349.1) plus timber pest (AS 4349.3).",
    bullets: ["Saves $150 to $250 vs separate", "Single visit, single report bundle", "Best value for pre-1987 homes"],
    feature: true,
  },
  {
    tag: "Specialist",
    title: "Heritage or specialist property",
    lo: 700,
    hi: 1500,
    body: "Heritage stone, two-storey, commercial, or unusual builds.",
    bullets: ["Heritage-experienced inspectors", "Engineer-led where needed", "Custom scope"],
    feature: false,
  },
];

export function PricePreview() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="wrap">
        <SectionHead
          eyebrow="WHAT IT COSTS"
          title="Transparent Adelaide building inspection pricing."
          sub="Indicative ranges based on the Adelaide network. Your actual quotes will be specific to your property, location, and urgency."
          center
        />

        <div className="grid md:grid-cols-3 gap-5">
          {PRICES.map((p) => (
            <article
              key={p.title}
              className={`relative bg-white rounded-2xl p-7 border ${
                p.feature
                  ? "border-[var(--color-secondary)] shadow-[0_24px_60px_-24px_rgba(184,116,44,0.45)]"
                  : "border-[var(--color-line)]"
              }`}
            >
              {p.feature && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)] text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-[.04em]">
                  MOST COMMON
                </span>
              )}
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-2.5">
                {p.tag}
              </div>
              <h3 className="text-[19px] mb-3 text-[var(--color-primary-dark)]">{p.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-[var(--font-display)] font-extrabold text-[34px] text-[var(--color-primary-dark)]">
                  ${p.lo}
                </span>
                <span className="text-[var(--color-muted)] text-[16px]">to ${p.hi}</span>
              </div>
              <p className="text-[14px] text-[var(--color-muted)] leading-relaxed mb-5">{p.body}</p>
              <ul className="space-y-2.5 mb-6">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2.5 items-start text-[13.5px] text-[var(--color-fg)]"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn w-full justify-center ${p.feature ? "btn-primary" : "btn-secondary"}`}
              >
                Get 3 free quotes <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[14px] text-[var(--color-muted)]">
          For exact pricing visit the <Link href="/pricing" className="underline font-semibold text-[var(--color-primary)]">full pricing page</Link> or
          request three free quotes.
        </p>
      </div>
    </section>
  );
}
