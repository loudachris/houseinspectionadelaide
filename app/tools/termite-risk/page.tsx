import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { TermiteRiskRater } from "@/components/tools/termite-risk-rater";

export const metadata: Metadata = {
  title: "Termite Risk Rater for Adelaide Properties",
  description:
    "Rate your Adelaide property's termite risk. Property age, suburb, construction type, sub-floor condition - free risk rating and recommended action.",
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au/tools/termite-risk",
  },
};

export default function TermiteRiskPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Termite risk rater", href: "/tools/termite-risk" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            TOOL · TERMITE RISK
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Termite risk rater for Adelaide properties
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px] mb-8">
            Adelaide&apos;s dominant termite species (Coptotermes acinaciformis) is highly
            destructive. This tool rates your property&apos;s termite risk based on age, location,
            construction type, and conducive conditions. General guidance only - book an AS 4349.3
            inspection for an actual assessment.
          </p>

          <TermiteRiskRater />
        </div>
      </section>

      <QuoteCta
        title="Found high or medium risk?"
        sub="Book a timber pest inspection through the network. Three independent inspectors quote within 24 hours."
      />
    </>
  );
}
