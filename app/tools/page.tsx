import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ListChecks, Compass, FileSpreadsheet, Bug, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Free Tools for Adelaide Property Buyers",
  description:
    "Free tools for Adelaide property buyers: cooling-off period calculator, pre-purchase inspection checklist, which-inspection picker, quote factor estimator, termite risk rater.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/tools" },
};

const TOOLS = [
  {
    slug: "cooling-off-calculator",
    Icon: Calculator,
    name: "Cooling-off period calculator",
    blurb:
      "Enter your contract date - get the exact SA cooling-off deadline accounting for weekends and public holidays. Two clear business days from contract.",
    audience: "Just signed a contract",
  },
  {
    slug: "pre-purchase-checklist",
    Icon: ListChecks,
    name: "Pre-purchase property checklist",
    blurb:
      "50-item interactive checklist you can use at open inspections. Save to your device, print, or tick as you go. Per-room, per-system.",
    audience: "Walking properties",
  },
  {
    slug: "which-inspection",
    Icon: Compass,
    name: "Which inspection do I need?",
    blurb:
      "Five short questions about your property and situation. We route you to the right inspection type for your needs.",
    audience: "Not sure where to start",
  },
  {
    slug: "quote-factors",
    Icon: FileSpreadsheet,
    name: "Quote factor estimator",
    blurb:
      "Tell us about your property. We show you which pricing factors will apply to the quotes you receive. No dollar amounts - we don't set prices.",
    audience: "Understanding your quote",
  },
  {
    slug: "termite-risk",
    Icon: Bug,
    name: "Termite risk rater",
    blurb:
      "Property age, suburb, construction type, sub-floor condition. Get a low/medium/high termite risk rating and recommended action.",
    audience: "Worried about timber pests",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Tools", href: "/tools" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Free tools for Adelaide property buyers
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[680px]">
            Five free tools built for Adelaide property buyers. Cooling-off deadlines, checklist
            walk-throughs, decision trees, and risk ratings. No sign-up, no data collection beyond
            local storage in your browser.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <SectionHead eyebrow="ALL TOOLS" title="Pick the one that fits your situation" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map(({ slug, Icon, name, blurb, audience }) => (
              <Link
                key={slug}
                href={`/tools/${slug}`}
                className="group bg-white border border-[var(--color-line)] rounded-2xl p-7 no-underline text-inherit transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(20,41,68,0.18)] flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center mb-4"
                  style={{
                    background: "var(--color-primary-container)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div className="font-[var(--font-mono)] text-[10.5px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-1.5">
                  {audience}
                </div>
                <h3 className="text-[17px] mb-3 text-[var(--color-primary-dark)] leading-[1.25]">
                  {name}
                </h3>
                <p className="text-[14px] text-[var(--color-muted)] m-0 mb-5 leading-relaxed">
                  {blurb}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13.5px] group-hover:gap-2.5 transition-all">
                  Open tool <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
