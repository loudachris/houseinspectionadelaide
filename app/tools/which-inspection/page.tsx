import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { WhichInspection } from "@/components/tools/which-inspection";

export const metadata: Metadata = {
  title: "Which Building Inspection Do I Need? (5-Question Tool)",
  description:
    "Five short questions about your Adelaide property and situation. We route you to the right building inspection type for your needs.",
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au/tools/which-inspection",
  },
};

export default function WhichInspectionPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Which inspection do I need?", href: "/tools/which-inspection" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            TOOL · DECISION TREE
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Which building inspection do I need?
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[620px] mb-8">
            Five short questions about your Adelaide property and situation. We route you to the
            right inspection type. Takes about 60 seconds.
          </p>

          <WhichInspection />
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
