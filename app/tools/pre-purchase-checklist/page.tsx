import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { PrePurchaseChecklist } from "@/components/tools/pre-purchase-checklist";

export const metadata: Metadata = {
  title: "Pre-Purchase Inspection Checklist (Adelaide Open Homes)",
  description:
    "Free 50-item pre-purchase property checklist for Adelaide open inspections. Per-room, save to your device, print-friendly. Use before booking a professional inspection.",
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au/tools/pre-purchase-checklist",
  },
};

export default function ChecklistPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: "Pre-purchase checklist", href: "/tools/pre-purchase-checklist" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[920px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            TOOL · BUYER CHECKLIST
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Pre-purchase property checklist
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[660px] mb-2">
            Use this at open inspections in Adelaide before you book a professional inspection.
            50 items grouped by area. Your progress saves automatically in your browser - bring
            your phone or print and tick as you walk.
          </p>
          <p className="text-[14.5px] text-[var(--color-muted)] mb-8">
            <strong>Important:</strong> this is your DIY walk-through, not a substitute for an
            AS 4349.1 professional inspection. Use it to spot obvious red flags and brief your
            inspector on areas of concern.
          </p>

          <PrePurchaseChecklist />
        </div>
      </section>

      <QuoteCta
        title="Found something worth investigating?"
        sub="Brief us with what you've noticed. Three independent inspectors quote your property within 24 hours and can pay particular attention to your concerns on site."
      />
    </>
  );
}
