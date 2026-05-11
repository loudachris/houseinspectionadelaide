import type { Metadata } from "next";
import { CheckCircle2, FileText } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Sample Building Inspection Report Adelaide | AS 4349.1",
  description:
    "What an Adelaide building inspection report looks like. AS 4349.1 compliant format, photographic evidence, executive summary, defect rating, and recommendations.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/sample-report" },
};

const SECTIONS = [
  {
    title: "Executive summary (page 1)",
    body: "Plain-English overview of the most important findings. If you only read one page, it's this one. Lists major structural concerns, urgent issues, and the inspector's headline opinion on the property's overall condition.",
  },
  {
    title: "Scope and limitations",
    body: "Defined per AS 4349.1-2007. States what areas were inspected, what was not accessible, weather conditions on the day, and any specific exclusions. Critical for understanding what's covered and what's not.",
  },
  {
    title: "Property identification",
    body: "Address, inspection date, weather, occupier status, and a property summary. Inspector's licence number, insurance details, and certifications.",
  },
  {
    title: "Structural elements",
    body: "Foundations, footings, framing, roof structure, retaining walls. Each defect photographed and location-tagged. Movement, cracking, or any structural concerns rated by severity.",
  },
  {
    title: "Roof, walls, ceilings, floors",
    body: "External cladding, roof covering, internal lining boards, ceilings, floor coverings. Weatherproofing, water damage indicators, paint and surface condition.",
  },
  {
    title: "Wet areas",
    body: "Bathrooms, kitchens, laundries. Tiling, waterproofing visibility, drain falls, silicone integrity, taps and shower function, leaks under sinks.",
  },
  {
    title: "Sub-floor and roof void",
    body: "Where accessible. Sub-floor: ventilation, dampness, framing condition, vermin signs. Roof void: insulation, water entry signs, truss/rafter integrity.",
  },
  {
    title: "Drainage and site",
    body: "Stormwater management, gutter and downpipe function, site falls, retaining walls, paths and driveways. Adelaide-specific reactive clay considerations.",
  },
  {
    title: "Ancillary buildings",
    body: "Garages, sheds, granny flats, decking, pergolas, fencing. Visual condition assessment - full structural review of ancillary buildings is typically out of standard scope.",
  },
  {
    title: "Defect log with photographs",
    body: "Each defect numbered, photographed, location-tagged, severity-rated (urgent / major / minor / maintenance), and accompanied by indicative cost commentary where possible.",
  },
  {
    title: "Recommendations",
    body: "Where the inspector recommends further investigation - electrical compliance test, engineer's structural review, asbestos testing, termite specialist - these are flagged with the reason.",
  },
];

const RATINGS = [
  {
    label: "Urgent",
    color: "var(--color-accent)",
    body: "Safety or significant structural concern that needs immediate attention.",
  },
  {
    label: "Major",
    color: "var(--color-secondary-dark)",
    body: "Substantial defect affecting habitability, weatherproofing, or value. Negotiation-worthy.",
  },
  {
    label: "Minor",
    color: "var(--color-primary)",
    body: "Defect that affects appearance or function but not safety. Often part of normal ageing.",
  },
  {
    label: "Maintenance",
    color: "var(--color-muted)",
    body: "Routine wear that needs attention in coming 12-24 months. Budget item, not deal-breaker.",
  },
];

export default function SampleReportPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Sample report", href: "/sample-report" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
                AS 4349.1-2007 COMPLIANT
              </div>
              <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(36px,4.5vw,54px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
                What an Adelaide inspection report looks like.
              </h1>
              <p className="text-[17.5px] text-[var(--color-muted)] leading-relaxed max-w-[560px]">
                Every report from the network follows the same AS 4349.1-2007 framework. 25-40
                pages, photographic evidence on every flagged defect, plain-English executive
                summary on page 1, and clear recommendations.
              </p>
            </div>

            <div className="aspect-[4/5] max-w-[420px] ml-auto w-full rounded-2xl overflow-hidden relative shadow-[0_30px_60px_-20px_rgba(20,41,68,0.35)]">
              <div className="absolute inset-0 p-8 flex flex-col gap-4 bg-[#f6f4ef] text-[var(--color-primary-dark)]">
                <div className="font-[var(--font-mono)] text-[10px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)]">
                  INSPECTION REPORT · AS 4349.1
                </div>
                <div className="font-[var(--font-display)] font-extrabold text-[22px] leading-[1.1]">
                  Pre-Purchase Building Inspection
                </div>
                <div className="text-[12px] text-[var(--color-muted)] border-t border-[rgba(20,41,68,0.1)] pt-3">
                  Sample Property · Adelaide SA
                </div>
                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div>
                    <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9px]">
                      Inspector
                    </div>
                    <div className="font-semibold">Network-matched</div>
                  </div>
                  <div>
                    <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9px]">
                      Inspection date
                    </div>
                    <div className="font-semibold">11 May 2026</div>
                  </div>
                  <div>
                    <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9px]">
                      Property type
                    </div>
                    <div className="font-semibold">3-br standalone</div>
                  </div>
                  <div>
                    <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9px]">
                      Standard
                    </div>
                    <div className="font-semibold">AS 4349.1-2007</div>
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-center bg-[var(--color-primary-dark)] text-white px-4 py-3 rounded-[10px] text-[11px]">
                  <span className="font-semibold">23 defects identified</span>
                  <span
                    className="font-[var(--font-mono)] text-[9px] tracking-[.12em] px-2 py-1 rounded"
                    style={{ background: "var(--color-secondary)" }}
                  >
                    REPORT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[920px]">
          <SectionHead
            eyebrow="REPORT STRUCTURE"
            title="What's in every section."
            sub="The order is consistent across the network. Each inspector adapts the depth and emphasis to your property type."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {SECTIONS.map((s) => (
              <article
                key={s.title}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <FileText
                    size={18}
                    className="text-[var(--color-primary)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-[16px] mb-2 text-[var(--color-primary-dark)]">{s.title}</h3>
                    <p className="text-[14px] text-[var(--color-muted)] m-0 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="DEFECT RATING" title="How defects are categorised." />
          <div className="grid sm:grid-cols-2 gap-4">
            {RATINGS.map((r) => (
              <article
                key={r.label}
                className="rounded-2xl p-6 border-l-[6px] bg-[var(--color-cream)]"
                style={{ borderLeftColor: r.color }}
              >
                <div
                  className="font-[var(--font-display)] font-extrabold text-[18px] mb-1"
                  style={{ color: r.color }}
                >
                  {r.label}
                </div>
                <p className="text-[14.5px] text-[var(--color-muted)] m-0 leading-relaxed">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
