import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | House Inspection Adelaide",
  description:
    "Adelaide property buyer reviews of our independent inspector matching service. Pre-purchase, handover, building and pest outcomes from real clients.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/testimonials" },
};

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    sub: "Pre-purchase · Glenelg",
    quote:
      "Found three cracks the agent kept calling 'cosmetic'. Inspector flagged them as movement in the footings. Negotiated a substantial price reduction, walked away from a money pit.",
  },
  {
    name: "James H.",
    sub: "Heritage · Unley",
    quote:
      "The matching service was the easy bit. Got three quotes inside a day, picked the one with heritage experience. Worth every cent.",
  },
  {
    name: "Linda T.",
    sub: "Pre-sale · North Adelaide",
    quote:
      "I'm the seller. Getting our own report up front meant fewer surprises in negotiation. Buyer accepted without renegotiating.",
  },
  {
    name: "David K.",
    sub: "Handover · Mount Barker",
    quote:
      "New build. 22 defects flagged at handover, builder fixed every one before final payment. Inspection paid for itself ten times over.",
  },
  {
    name: "Body Corp.",
    sub: "Defect · Hyde Park",
    quote:
      "Eight-unit block with persistent water ingress. Got an independent defect report in a week, used it to action the builder.",
  },
  {
    name: "Michelle R.",
    sub: "Building + Pest · Prospect",
    quote:
      "Could have done two bookings, didn't. One inspector, one visit, two reports. Saved a small fortune and a Saturday.",
  },
  {
    name: "James P.",
    sub: "Staged build · Campbelltown",
    quote:
      "Five-stage inspection through the build. Caught a frame issue at lock-up that would have been a nightmare post-completion.",
  },
  {
    name: "Tom B.",
    sub: "Apartment · Adelaide CBD",
    quote:
      "Inner-city apartment. Got matched with someone who knew strata reports inside out. Clear summary, no jargon.",
  },
  {
    name: "Karen W.",
    sub: "Pre-purchase · Morphett Vale",
    quote:
      "Quick turnaround under cooling-off pressure. Had three quotes in my inbox by 11am the next day. Inspection happened that Friday.",
  },
  {
    name: "Mohammed A.",
    sub: "Termite · Stirling",
    quote:
      "Found active termite activity I had no idea about. Treatment specialist referred separately. Saved my home, not exaggerating.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumb
        items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/testimonials" }]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(36px,4.5vw,54px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            What Adelaide buyers say about the network.
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed">
            Real outcomes from real Adelaide property buyers. Negotiation wins, defect catches, and
            the kind of peace of mind that lets you sleep through settlement.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <article
                key={`${t.name}-${t.sub}`}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(20,41,68,0.18)]"
              >
                <Quote size={22} className="text-[var(--color-secondary)] mb-3" />
                <p className="text-[14.5px] leading-relaxed text-[var(--color-fg)] mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[var(--color-line)] pt-4">
                  <div className="font-semibold text-[14px] text-[var(--color-primary-dark)]">
                    {t.name}
                  </div>
                  <div className="font-[var(--font-mono)] text-[11px] tracking-[.08em] text-[var(--color-muted)] mt-0.5">
                    {t.sub}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
