import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SUBURBS } from "@/lib/site";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Areas We Cover - Building Inspections Across Adelaide",
  description:
    "Building inspection coverage across Adelaide and South Australia. From Glenelg to the Adelaide Hills, north to Gawler, south to Aldinga. Suburb-specific inspector matching.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/areas" },
};

const GROUPED: Record<string, typeof SUBURBS[number][]> = {};
for (const s of SUBURBS) {
  if (!GROUPED[s.region]) GROUPED[s.region] = [];
  GROUPED[s.region].push(s);
}

export default function AreasPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Areas", href: "/areas" }]} />
      <section className="pt-12 pb-16">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.1] text-[var(--color-primary-dark)] mb-5">
            Areas we cover across Adelaide
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px]">
            From bayside Glenelg to the Adelaide Hills, north to Gawler, south to Aldinga. Every
            inspector in our network is suburb-matched - they know the local build types, soil
            conditions, and common issues.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-10">
            {Object.entries(GROUPED).map(([region, list]) => (
              <div key={region}>
                <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-4">
                  {region}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {list.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/areas/${s.slug}`}
                      className="group bg-white border border-[var(--color-line)] rounded-xl px-5 py-4 flex items-center justify-between no-underline text-inherit hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-container)] transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <MapPin size={16} className="text-[var(--color-primary)]" />
                        <span className="font-semibold text-[14.5px] text-[var(--color-primary-dark)]">
                          {s.name}
                        </span>
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-[var(--color-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-primary)] transition-all"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
