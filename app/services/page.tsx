import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Bug,
  Hammer,
  Layers,
  List,
  FlaskConical,
  Droplet,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Building Inspection Services in Adelaide",
  description:
    "Every building inspection service Adelaide buyers and owners need. Pre-purchase, building and pest, handover, staged, asbestos, mould, and defect inspections.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/services" },
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  home: Home,
  bug: Bug,
  hammer: Hammer,
  layers: Layers,
  list: List,
  flask: FlaskConical,
  drop: Droplet,
  calc: Calculator,
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <section className="pt-12 pb-16">
        <div className="wrap max-w-[920px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.1] text-[var(--color-primary-dark)] mb-5">
            Adelaide building inspection services
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px]">
            From pre-purchase to handover, asbestos to mould - the full range of inspections an
            Adelaide property buyer, owner, or investor needs. Matched with independent licensed
            inspectors inside 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <SectionHead eyebrow="ALL SERVICES" title="Pick your inspection" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] || Home;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`group relative bg-white rounded-2xl p-7 flex flex-col min-h-[220px] transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,41,68,0.18)] no-underline text-inherit border ${
                    s.popular ? "border-[var(--color-secondary)]" : "border-[var(--color-line)]"
                  }`}
                >
                  {s.popular && (
                    <span className="absolute -top-2.5 right-4 bg-[var(--color-secondary)] text-white text-[11px] px-2.5 py-1 rounded-full font-semibold tracking-[.04em]">
                      POPULAR
                    </span>
                  )}
                  <div
                    className="w-11 h-11 rounded-[10px] grid place-items-center mb-4"
                    style={{
                      background: "var(--color-primary-container)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[17px] mb-2 text-[var(--color-primary-dark)]">{s.name}</h3>
                  <p className="text-[14px] text-[var(--color-muted)] m-0 mb-5 leading-relaxed">
                    {s.blurb}
                  </p>
                  <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase text-[var(--color-secondary-dark)] mb-3">
                    {s.standard}
                  </div>
                  <span className="mt-auto flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13.5px] group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
