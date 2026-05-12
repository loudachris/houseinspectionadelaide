import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { QuoteFactors } from "@/components/tools/quote-factors";

export const metadata: Metadata = {
  title: "Inspection Quote Factor Estimator (No Prices - Just Factors)",
  description:
    "Tell us about your Adelaide property. We show which factors will drive your inspector's quote: property size, age, scope, urgency, location. No dollar amounts - we don't set prices.",
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au/tools/quote-factors",
  },
};

export default function QuoteFactorsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Quote factor estimator", href: "/tools/quote-factors" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            TOOL · QUOTE FACTORS
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            What factors will drive your quote?
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px] mb-8">
            We don&apos;t set inspector prices, so we don&apos;t quote dollar amounts. But we can
            show you which factors will be on each inspector&apos;s mind when they quote your
            specific property. Use this to read the three quotes you receive.
          </p>

          <QuoteFactors />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
