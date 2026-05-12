import type { Metadata } from "next";
import { Calendar, Clock, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { SectionHead } from "@/components/section-head";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

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
                  value="Most network inspectors can attend within 48 hours of booking. Same-day or next-day available during cooling-off."
                />
                <Detail
                  icon={<ShieldCheck size={18} />}
                  label="What you can expect"
                  value="Three quotes will arrive via email. Each includes price, turnaround, inspector name, licence number, and what's specifically included for your property."
                />
              </div>

              <div className="mt-10">
                <DisclaimerBanner />
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="HOW BOOKING WORKS"
            title="From booking request to inspection on site."
            center
          />
          <ol className="space-y-4 list-none p-0">
            <ListStep n={1} body="You submit the booking form with property and timeline details." />
            <ListStep n={2} body="We confirm receipt by email within minutes." />
            <ListStep n={3} body="We match you with three independent inspectors and send their quotes to you (inside 24 hours)." />
            <ListStep n={4} body="You choose your inspector and book directly with them. The inspector contracts and charges you directly - the matching service is not party to that contract." />
            <ListStep n={5} body="Inspector attends, completes inspection, delivers report. You raise any follow-up questions with the inspector." />
          </ol>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
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
        <div className="text-[15px] text-[var(--color-fg)] leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function ListStep({ n, body }: { n: number; body: string }) {
  return (
    <li className="flex gap-4 items-start bg-white border border-[var(--color-line)] rounded-2xl p-5">
      <span className="w-9 h-9 rounded-full bg-[var(--color-accent)] text-white grid place-items-center font-[var(--font-display)] font-extrabold text-[15px] flex-shrink-0">
        {n}
      </span>
      <span className="text-[15.5px] text-[var(--color-fg)] leading-relaxed pt-1">{body}</span>
    </li>
  );
}
