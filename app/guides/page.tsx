import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { GUIDE_CONTENT } from "@/data/guides-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Building Inspection Guides for Adelaide Buyers",
  description:
    "Plain-English guides to Adelaide building inspections: costs, scope, duration, what to look for, and how to choose an independent inspector.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/guides" },
};

export default function GuidesPage() {
  const guides = Object.values(GUIDE_CONTENT);
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <section className="pt-12 pb-16">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.1] text-[var(--color-primary-dark)] mb-5">
            Building inspection guides for Adelaide buyers
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px]">
            Plain-English answers to the questions Adelaide property buyers actually ask. Cost,
            scope, duration, what to look for, and how to brief an inspector for your specific
            property.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <SectionHead eyebrow="ALL GUIDES" title="Pick your question" />
          <div className="grid md:grid-cols-2 gap-5">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group bg-white border border-[var(--color-line)] rounded-2xl p-7 no-underline text-inherit transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(20,41,68,0.18)]"
              >
                <div className="flex items-center gap-2.5 text-[var(--color-secondary)] mb-3">
                  <BookOpen size={16} />
                  <span className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase">
                    Guide
                  </span>
                </div>
                <h3 className="text-[19px] mb-3 text-[var(--color-primary-dark)] leading-[1.25]">
                  {g.h1}
                </h3>
                <p className="text-[14.5px] text-[var(--color-muted)] m-0 mb-5 leading-relaxed line-clamp-3">
                  {g.answer}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13.5px] group-hover:gap-2.5 transition-all">
                  Read guide <ArrowRight size={13} />
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
