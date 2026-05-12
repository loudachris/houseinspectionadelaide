import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { CoolingOffCalculator } from "@/components/tools/cooling-off-calculator";

export const metadata: Metadata = {
  title: "Cooling-Off Period Calculator (South Australia)",
  description:
    "Free SA cooling-off period calculator. Enter your contract date, get the exact two-clear-business-day deadline with weekends and public holidays accounted for.",
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au/tools/cooling-off-calculator",
  },
};

export default function CoolingOffCalculatorPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Cooling-off calculator", href: "/tools/cooling-off-calculator" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            TOOL · COOLING-OFF SA
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Cooling-off period calculator (South Australia)
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px] mb-8">
            SA cooling-off on residential property contracts is two clear business days from the
            day you receive the signed contract. Weekends and SA public holidays don&apos;t count.
            Enter your contract date below to see your deadline.
          </p>

          <CoolingOffCalculator />
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <h2 className="font-[var(--font-display)] font-bold text-[28px] mb-5 text-[var(--color-primary-dark)]">
            How SA cooling-off works
          </h2>
          <div className="space-y-4 text-[16px] leading-[1.7] text-[var(--color-fg)]">
            <p>
              South Australia&apos;s Land and Business (Sale and Conveyancing) Act provides for a
              two-clear-business-day cooling-off period on residential property contracts. The
              clock starts the day you receive the signed contract (sometimes called Form 1
              service).
            </p>
            <p>
              <strong>&quot;Clear business days&quot;</strong> means full business days. The day
              you receive the contract doesn&apos;t count, weekends don&apos;t count, and SA
              public holidays don&apos;t count. You must rescind in writing before the deadline
              ends.
            </p>
            <p>
              <strong>Cooling-off is short.</strong> Most buyers use it to confirm finance, get a
              building inspection done, and review the Form 1. If you&apos;re in cooling-off, brief
              us as soon as possible - many inspectors in our network can deliver same-day or
              next-day reports.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <h2 className="font-[var(--font-display)] font-bold text-[28px] mb-5 text-[var(--color-primary-dark)]">
            Important caveats
          </h2>
          <ul className="space-y-3 text-[16px] leading-[1.65] text-[var(--color-fg)]">
            <li>
              · This tool is for general guidance only. Cooling-off rules and exceptions vary
              (auction sales, business sales, off-the-plan). Always confirm timing with your
              conveyancer.
            </li>
            <li>
              · We are not a law firm, solicitor, or conveyancer. For binding advice on your
              specific contract, speak to a licensed SA conveyancer.
            </li>
            <li>
              · SA public holidays are pre-loaded for the current and next calendar year. If
              you&apos;re calculating for a date much further out, double-check the holiday list
              independently.
            </li>
          </ul>
        </div>
      </section>

      <QuoteCta
        title="In cooling-off? Get inspectors lined up today."
        sub="Brief us now and the three matched inspectors usually quote within 4 to 6 business hours. Many can attend same-day or next-day inside cooling-off."
      />
    </>
  );
}
