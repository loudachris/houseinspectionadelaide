import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Adelaide Building Inspection Pricing | $400-$1500 by Property Type",
  description:
    "Transparent Adelaide building inspection pricing. Standard $400-$650, combo $550-$900, heritage $700-$1500. All prices include AS 4349.1 compliant report.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/pricing" },
};

const TIERS = [
  {
    tag: "Standard",
    title: "Pre-purchase building inspection",
    lo: 400,
    hi: 650,
    body: "Single-storey, 3-bedroom standalone homes across suburban Adelaide.",
    feature: false,
    inclusions: [
      "AS 4349.1-2007 compliant report",
      "2 to 3 hours on site",
      "48-hour report turnaround",
      "Photographic evidence",
      "Plain-English executive summary",
      "Recommendations and risk rating",
    ],
  },
  {
    tag: "Most common",
    title: "Building + Pest combo",
    lo: 550,
    hi: 900,
    body: "One visit, two reports. Building (AS 4349.1) plus timber pest (AS 4349.3).",
    feature: true,
    inclusions: [
      "AS 4349.1 + AS 4349.3 compliant",
      "Saves $150 to $250 vs separate",
      "3 to 4 hours on site, single visit",
      "Termite, borer, fungal decay coverage",
      "48-hour combined report turnaround",
      "Best value for pre-1987 homes",
    ],
  },
  {
    tag: "Specialist",
    title: "Heritage or specialist property",
    lo: 700,
    hi: 1500,
    body: "Heritage stone, two-storey, commercial, or unusual builds.",
    feature: false,
    inclusions: [
      "Heritage-experienced inspector",
      "Engineer-led where structural concerns",
      "4+ hours on site",
      "Custom scope per property",
      "Heritage register interpretation",
      "Full AS 4349.1 + extended scope",
    ],
  },
];

const OTHER_SERVICES = [
  { name: "Timber pest inspection only (AS 4349.3)", lo: 200, hi: 400 },
  { name: "Termite inspection (focused)", lo: 200, hi: 350 },
  { name: "Handover / practical completion (AS 4349.0)", lo: 450, hi: 700 },
  { name: "Staged construction inspection (5 stages)", lo: 1500, hi: 2500 },
  { name: "Defect inspection (AS 4349.7)", lo: 350, hi: 800 },
  { name: "Asbestos inspection (plus lab sample fees)", lo: 400, hi: 800 },
  { name: "Mould inspection (plus air sampling)", lo: 350, hi: 700 },
];

const ADD_ONS = [
  { name: "Same-day report turnaround", value: "+$100-$200" },
  { name: "Weekend or after-hours inspection", value: "+$100-$150" },
  { name: "Outer-metro travel", value: "+$50-$150 (or use a regional inspector)" },
  { name: "Engineer report on flagged structural concerns", value: "$300-$800 separate" },
  { name: "Asbestos lab analysis", value: "$40-$80 per sample" },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Adelaide building inspection pricing
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[680px]">
            Transparent ranges from the network. The matching service is free - you pay only for
            the inspection itself, direct to your chosen inspector. Get three free quotes inside 24
            hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="wrap">
          <div className="grid md:grid-cols-3 gap-5">
            {TIERS.map((t) => (
              <article
                key={t.title}
                className={`relative bg-white rounded-2xl p-8 border ${
                  t.feature
                    ? "border-[var(--color-secondary)] shadow-[0_24px_60px_-24px_rgba(184,116,44,0.45)]"
                    : "border-[var(--color-line)]"
                }`}
              >
                {t.feature && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)] text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-[.04em]">
                    MOST COMMON
                  </span>
                )}
                <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-3">
                  {t.tag}
                </div>
                <h3 className="text-[20px] mb-3 text-[var(--color-primary-dark)]">{t.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-[var(--font-display)] font-extrabold text-[38px] text-[var(--color-primary-dark)]">
                    ${t.lo}
                  </span>
                  <span className="text-[var(--color-muted)] text-[17px]">to ${t.hi}</span>
                </div>
                <p className="text-[14.5px] text-[var(--color-muted)] leading-relaxed mb-5">{t.body}</p>
                <ul className="space-y-2.5 mb-7">
                  {t.inclusions.map((inc) => (
                    <li
                      key={inc}
                      className="flex gap-2.5 items-start text-[13.5px] text-[var(--color-fg)]"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                      />
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn w-full justify-center ${t.feature ? "btn-primary" : "btn-secondary"}`}
                >
                  Get 3 free quotes <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap">
          <SectionHead
            eyebrow="OTHER INSPECTIONS"
            title="Specialist and stand-alone inspections."
            sub="Outside of pre-purchase, the network also covers handover, staged, defect, and specialty inspections."
          />
          <div className="bg-white rounded-2xl border border-[var(--color-line)] overflow-hidden">
            <ul className="divide-y divide-[var(--color-line)]">
              {OTHER_SERVICES.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5"
                >
                  <span className="font-semibold text-[15px] text-[var(--color-primary-dark)]">
                    {s.name}
                  </span>
                  <span className="text-[15px] text-[var(--color-fg)]">
                    <span className="font-semibold">${s.lo}</span> to{" "}
                    <span className="font-semibold">${s.hi}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[920px]">
          <SectionHead eyebrow="ADD-ONS" title="Premium options and additions." />
          <div className="bg-[var(--color-cream)] rounded-2xl border border-[var(--color-line)] overflow-hidden">
            <ul className="divide-y divide-[var(--color-line)]">
              {ADD_ONS.map((a) => (
                <li
                  key={a.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-5"
                >
                  <span className="text-[15px] text-[var(--color-fg)]">{a.name}</span>
                  <span className="font-semibold text-[15px] text-[var(--color-secondary-dark)]">
                    {a.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-10 p-6 rounded-2xl flex gap-4 items-start"
            style={{ background: "var(--color-primary-container)" }}
          >
            <Info size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-[15px] text-[var(--color-primary-dark)] mb-1">
                Why prices vary across the network
              </div>
              <p className="text-[14px] text-[var(--color-fg)] m-0 leading-relaxed">
                Inspectors set their own prices based on experience, scope, and urgency. The
                matching service surfaces three quotes inside 24 hours so you can compare. You pay
                the inspector directly - we make no commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
