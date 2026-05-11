import type { Metadata } from "next";
import { Calendar, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Book Online | House Inspection Adelaide",
  description:
    "Book your Adelaide building inspection online. Brief us in 2 minutes, receive 3 quotes from independent licensed inspectors inside 24 hours.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/book-online" },
};

export default function BookOnlinePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Book online", href: "/book-online" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
                BOOK ONLINE · 24HR MATCH
              </div>
              <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(36px,4.5vw,54px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
                Book your Adelaide building inspection.
              </h1>
              <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[520px] mb-8">
                Brief us once. We match three independent licensed Adelaide inspectors. You compare
                quotes and book directly with your pick. The matching is free.
              </p>

              <div className="space-y-5">
                <Detail
                  icon={<Clock size={18} />}
                  label="Turnaround"
                  value="3 quotes inside 24 hours. Often inside 4 to 6 business hours."
                />
                <Detail
                  icon={<Calendar size={18} />}
                  label="Inspection scheduling"
                  value="Most network inspectors can attend within 48 hours of booking. Same-day available in cooling-off."
                />
                <Detail
                  icon={<Phone size={18} />}
                  label="Prefer to call?"
                  value={SITE.phone}
                  href={SITE.phoneHref}
                />
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
        style={{
          background: "var(--color-primary-container)",
          color: "var(--color-primary)",
        }}
      >
        {icon}
      </span>
      <div>
        <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase text-[var(--color-secondary-dark)] mb-0.5">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            className="text-[16px] font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)]"
          >
            {value}
          </a>
        ) : (
          <div className="text-[15px] text-[var(--color-fg)] leading-relaxed">{value}</div>
        )}
      </div>
    </div>
  );
}
