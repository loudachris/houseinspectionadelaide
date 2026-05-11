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
import { SectionHead } from "../section-head";
import { SERVICES } from "@/lib/site";

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

export function ServicesSection() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="wrap">
        <SectionHead
          eyebrow="SERVICES"
          title="Every inspection a buyer or builder needs in Adelaide."
          sub="Pre-purchase to handover, asbestos to mould, single inspections to staged builds. One network, every speciality."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5" style={{ gap: "18px" }}>
          {SERVICES.slice(0, 8).map((s) => {
            const Icon = ICON_MAP[s.icon] || Home;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group relative bg-white rounded-2xl p-6 flex flex-col min-h-[200px] transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,41,68,0.18)] hover:border-[rgba(30,58,95,.3)] no-underline text-inherit border ${
                  s.popular
                    ? "border-[var(--color-secondary)]"
                    : "border-[var(--color-line)]"
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-2.5 right-4 bg-[var(--color-secondary)] text-white text-[11px] px-2.5 py-1 rounded-full font-semibold tracking-[.04em]">
                    POPULAR
                  </span>
                )}
                <div
                  className="w-10 h-10 rounded-[10px] grid place-items-center mb-4"
                  style={{
                    background: "var(--color-primary-container)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-[16px] leading-[1.3] mb-1.5 text-[var(--color-primary-dark)]">
                  {s.name}
                </h3>
                <p className="text-[13.5px] text-[var(--color-muted)] m-0 leading-[1.5] mb-4">
                  {s.blurb}
                </p>
                <span className="mt-auto flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13px] group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold no-underline px-4 py-2.5 rounded-lg hover:bg-[var(--color-primary-container)]"
          >
            See all services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
