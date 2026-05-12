import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { STANDARDS } from "@/data/standards-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Australian Standards for Building Inspections | AS 4349 Library",
  description:
    "Plain-English reference for AS 4349.0, AS 4349.1, AS 4349.3, and AS 4349.7 - the Australian Standards governing building and timber pest inspections in Adelaide.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/standards" },
};

export default function StandardsPage() {
  const entries = Object.values(STANDARDS);
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Standards", href: "/standards" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Australian Standards for building inspections
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[680px]">
            The AS 4349 family of standards governs building and timber pest inspections across
            Australia. Every inspector in our network conducts reports to the appropriate
            standard for your inspection type. Here&apos;s a plain-English reference to each.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-5">
            {entries.map((s) => (
              <Link
                key={s.slug}
                href={`/standards/${s.slug}`}
                className="group bg-white border border-[var(--color-line)] rounded-2xl p-7 no-underline text-inherit transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(20,41,68,0.18)]"
              >
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center mb-4"
                  style={{
                    background: "var(--color-primary-container)",
                    color: "var(--color-primary)",
                  }}
                >
                  <FileText size={22} />
                </div>
                <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-1.5">
                  {s.fullCode}
                </div>
                <h2 className="font-[var(--font-display)] font-bold text-[22px] mb-3 text-[var(--color-primary-dark)] leading-[1.2]">
                  {s.title}
                </h2>
                <p className="text-[14.5px] text-[var(--color-muted)] m-0 mb-5 leading-relaxed">
                  {s.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13.5px] group-hover:gap-2.5 transition-all">
                  Read the standard <ArrowRight size={13} />
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
