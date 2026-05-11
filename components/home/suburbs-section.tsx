import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionHead } from "../section-head";
import { SUBURBS } from "@/lib/site";

export function SuburbsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="wrap">
        <SectionHead
          eyebrow="SUBURBS WE COVER"
          title="From the bay to the hills, north to the coast."
          sub="Our network covers every Adelaide suburb. Pick yours below for area-specific notes from local inspectors."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {SUBURBS.map((s) => (
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

        <div className="mt-8 text-center">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold no-underline px-4 py-2.5 rounded-lg hover:bg-[var(--color-primary-container)]"
          >
            See all areas <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
