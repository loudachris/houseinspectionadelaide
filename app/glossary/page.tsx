import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GLOSSARY } from "@/data/glossary-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Building Inspection Glossary (Adelaide-Specific Terms)",
  description:
    "A plain-English glossary of 40 building inspection and Adelaide-specific terms: salt damp, reactive clay, slab heave, Coptotermes, AS 4349 standards, and more.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/glossary" },
};

const CATEGORY_LABELS: Record<string, string> = {
  structural: "Structural & foundations",
  roof: "Roof & weatherproofing",
  "wet-areas": "Wet areas",
  "sub-floor": "Sub-floor & framing",
  pest: "Termites & timber pests",
  standards: "Australian Standards",
  process: "Process & legal",
};

const CATEGORY_ORDER: (keyof typeof CATEGORY_LABELS)[] = [
  "structural",
  "roof",
  "wet-areas",
  "sub-floor",
  "pest",
  "standards",
  "process",
];

export default function GlossaryPage() {
  const entries = Object.values(GLOSSARY);
  const grouped: Record<string, typeof entries> = {};
  for (const e of entries) {
    if (!grouped[e.category]) grouped[e.category] = [];
    grouped[e.category].push(e);
  }
  for (const cat in grouped) {
    grouped[cat].sort((a, b) => a.term.localeCompare(b.term));
  }

  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Glossary", href: "/glossary" }]} />

      <section className="pt-12 pb-16">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Building inspection glossary
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[680px]">
            Forty plain-English definitions of the terms Adelaide building inspectors and SA
            property contracts use. Click any term for a full explanation, common causes, and
            relevance to your property.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          {CATEGORY_ORDER.map((cat) => {
            const list = grouped[cat] || [];
            if (list.length === 0) return null;
            return (
              <div key={cat} className="mb-14 last:mb-0">
                <SectionHead eyebrow={CATEGORY_LABELS[cat].toUpperCase()} title={CATEGORY_LABELS[cat]} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {list.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/glossary/${e.slug}`}
                      className="group bg-white border border-[var(--color-line)] rounded-2xl p-5 no-underline text-inherit transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,41,68,0.18)]"
                    >
                      <h3 className="font-[var(--font-display)] font-semibold text-[16px] text-[var(--color-primary-dark)] mb-2 leading-[1.25]">
                        {e.term}
                      </h3>
                      <p className="text-[13.5px] text-[var(--color-muted)] m-0 leading-relaxed line-clamp-3">
                        {e.short}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[12.5px] group-hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
