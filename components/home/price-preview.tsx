import Link from "next/link";
import { ArrowRight, Home, Bug, Mountain } from "lucide-react";
import { SectionHead } from "../section-head";

const FACTORS = [
  {
    icon: Home,
    title: "Property size and type",
    body: "Square metreage, number of storeys, and construction type drive how long the inspector spends on site.",
  },
  {
    icon: Bug,
    title: "Scope you need",
    body: "Pre-purchase only, building + pest combo, defect-targeted, or staged construction. Combos cost less than booking separately.",
  },
  {
    icon: Mountain,
    title: "Age and complexity",
    body: "Heritage stone, multi-storey, and rural-residential properties take longer than standard single-storey brick veneer.",
  },
];

export function PricePreview() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="wrap">
        <SectionHead
          eyebrow="HOW PRICING WORKS"
          title="Inspectors set their own prices. You compare three quotes."
          sub="We're a matching service - we don't set inspector prices. The three quotes you receive reflect real pricing from independent inspectors based on your property and timeline."
          center
        />

        <div className="grid md:grid-cols-3 gap-5">
          {FACTORS.map(({ icon: Icon, title, body }) => (
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

        <div
          className="mt-10 rounded-2xl p-7 md:p-8 border border-[var(--color-line)] bg-white"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex-1">
              <h3 className="font-[var(--font-display)] font-semibold text-[20px] text-[var(--color-primary-dark)] mb-2">
                See actual prices for your property
              </h3>
              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed m-0">
                Brief us in two minutes. Three independent inspectors quote you directly. You pick
                the price, turnaround, and inspector that suits.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn btn-primary">
                Get 3 free quotes <ArrowRight size={14} />
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                How pricing works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
