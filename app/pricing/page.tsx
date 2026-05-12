import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info, Home, Bug, Mountain, Clock, ListChecks, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

export const metadata: Metadata = {
  title: "How Adelaide Building Inspection Pricing Works",
  description:
    "Adelaide building inspection pricing varies by property and inspector. We don't set prices - we connect you with three independent inspectors who quote your specific property. Here's what affects pricing.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/pricing" },
};

const FACTORS = [
  {
    Icon: Home,
    title: "Property size and type",
    body: "Square metreage, number of bedrooms, single vs double storey, unit vs standalone. Larger properties take longer to inspect, which inspectors reflect in pricing.",
  },
  {
    Icon: Mountain,
    title: "Age and construction",
    body: "Pre-war stone villas need heritage-experienced inspectors. Mid-century brick veneer is standard scope. Modern slab-and-frame is faster. Each inspector prices accordingly.",
  },
  {
    Icon: Bug,
    title: "Scope and inclusions",
    body: "Pre-purchase building only is the cheapest base. Building plus pest combo bundles two AS standards into one visit. Specialist scopes (asbestos, mould, staged construction) price differently.",
  },
  {
    Icon: Clock,
    title: "Turnaround urgency",
    body: "Same-day or overnight reports usually carry a premium. Standard 48-hour turnaround is what most inspectors quote against. Cooling-off-period bookings often warrant same-day pricing.",
  },
  {
    Icon: ListChecks,
    title: "Inspector experience",
    body: "Senior inspectors with 15+ years and heritage or commercial backgrounds charge more than newer entrants. Both can deliver AS-compliant reports - you weigh experience vs price.",
  },
  {
    Icon: MapPin,
    title: "Travel and location",
    body: "Outer-metro, hills, and Fleurieu coast can attract travel charges from some inspectors. Our network includes regional-based inspectors who avoid travel surcharges for their patch.",
  },
];

const COMPARE_ROWS = [
  "AS 4349 standard the inspector works to",
  "What's specifically inspected on your property type",
  "Report turnaround time",
  "Inspector's licence number and insurance",
  "Whether attending the inspection is included",
  "Whether the inspector takes phone follow-up calls about the report",
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "How pricing works", href: "/pricing" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            How Adelaide building inspection pricing works
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[680px]">
            We don&apos;t set inspector prices. We&apos;re a matching service - we connect you with
            three independent licensed Adelaide inspectors who each quote your specific property.
            The three quotes give you a real-market comparison for the work you need.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="wrap max-w-[920px]">
          <DisclaimerBanner />
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap">
          <SectionHead
            eyebrow="WHAT AFFECTS PRICING"
            title="Six factors every inspector considers."
            sub="Different weightings explain why three quotes for the same property can vary. Knowing the levers helps you read the quotes."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACTORS.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-7"
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
                <h3 className="text-[18px] mb-2 text-[var(--color-primary-dark)]">{title}</h3>
                <p className="text-[14.5px] text-[var(--color-muted)] m-0 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[920px]">
          <SectionHead
            eyebrow="COMPARING QUOTES"
            title="When you receive three quotes, compare these."
            sub="Price is one input. The five others below are equally important. Always compare like-for-like before booking."
          />
          <ul className="space-y-3 bg-[var(--color-cream)] rounded-2xl border border-[var(--color-line)] overflow-hidden">
            {COMPARE_ROWS.map((row, i) => (
              <li
                key={row}
                className={`flex gap-3 items-start px-6 py-4 ${i > 0 ? "border-t border-[var(--color-line)]" : ""}`}
              >
                <CheckCircle2 size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span className="text-[15px] text-[var(--color-fg)]">{row}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[920px]">
          <SectionHead
            eyebrow="THE MATCHING SERVICE"
            title="What we cost and what we don't."
            center
          />
          <div className="grid md:grid-cols-2 gap-5">
            <article className="bg-white border border-[var(--color-line)] rounded-2xl p-7">
              <h3 className="text-[18px] mb-3 text-[var(--color-primary-dark)]">For property buyers</h3>
              <ul className="space-y-3 text-[15px] text-[var(--color-fg)]">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  Matching is free - always.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  You receive three quotes inside 24 hours.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  You pay the inspector you choose directly - we never handle payment.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  You can dismiss the quotes and walk away at any point.
                </li>
              </ul>
            </article>

            <article className="bg-white border border-[var(--color-line)] rounded-2xl p-7">
              <h3 className="text-[18px] mb-3 text-[var(--color-primary-dark)]">For inspectors in the network</h3>
              <ul className="space-y-3 text-[15px] text-[var(--color-fg)]">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  Inspectors don&apos;t pay to be listed.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  Inspectors pay a small per-lead referral fee only when they accept a lead. Industry standard cost of doing business.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  Inspectors set their own prices for every quote. No price markup is added because you came through us.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  Inspectors with current agent or builder relationships are excluded.
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  Full breakdown on the <a href="/how-we-make-money" className="text-[var(--color-primary)] font-semibold underline">transparency page</a>.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <div className="bg-[var(--color-primary-dark)] text-white rounded-3xl p-10 md:p-14 text-center">
            <h2 className="font-[var(--font-display)] font-bold text-[clamp(26px,3vw,38px)] leading-[1.15] mb-4">
              Get three real quotes for your Adelaide property.
            </h2>
            <p className="text-[16px] text-white/80 leading-relaxed mb-7 max-w-[640px] mx-auto">
              The fastest way to know what your inspection actually costs is to brief us in two
              minutes. Three independent licensed inspectors quote your specific property and
              timeline.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request 3 free quotes <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
