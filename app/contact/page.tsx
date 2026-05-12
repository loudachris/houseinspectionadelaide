import type { Metadata } from "next";
import { MapPin, Clock, Info, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { SectionHead } from "@/components/section-head";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

export const metadata: Metadata = {
  title: "Contact House Inspection Adelaide | 3 Free Quotes in 24 Hours",
  description:
    "Contact House Inspection Adelaide. Get matched with 3 independent licensed building inspectors inside 24 hours. Free matching service, no agent referrals.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(36px,4.5vw,54px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
                Get matched with 3 Adelaide inspectors.
              </h1>
              <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[520px] mb-8">
                Brief us once, compare three independent licensed inspectors, pick the one that
                suits your timeline. The matching service is free.
              </p>

              <div className="space-y-5">
                <ContactItem
                  icon={<Clock size={18} />}
                  label="Turnaround"
                  value="Three quotes in your inbox inside 24 hours. Often within 4 to 6 business hours."
                />
                <ContactItem
                  icon={<MapPin size={18} />}
                  label="Coverage"
                  value="Adelaide metro, Hills, Fleurieu, Gawler corridor, and Aldinga / southern coast."
                />
                <ContactItem
                  icon={<ShieldCheck size={18} />}
                  label="Every inspector verified"
                  value="Active SA licence, current insurance, no agent or builder commercial relationship."
                />
                <ContactItem
                  icon={<Info size={18} />}
                  label="How replies work"
                  value="We reply via email through the form. We don't take phone calls or accept email enquiries - the form is the fastest, most accurate way to brief us."
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
            eyebrow="HOW IT WORKS"
            title="From your enquiry to inspector match."
            sub="Three steps, two minutes of your time."
            center
          />
          <div className="grid md:grid-cols-3 gap-5">
            <StepCard
              n={1}
              title="Brief us"
              body="Fill the form. Two minutes of property details and timeline."
            />
            <StepCard
              n={2}
              title="We match"
              body="Inside 24 hours we identify three licensed independent Adelaide inspectors suited to your property."
            />
            <StepCard
              n={3}
              title="You choose"
              body="Compare prices, turnaround, and inspector experience. Book directly with your pick - we don't handle payment or the inspection contract."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
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

function StepCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <article className="bg-white border border-[var(--color-line)] rounded-2xl p-7">
      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white grid place-items-center font-[var(--font-display)] font-extrabold text-[20px] mb-4">
        {n}
      </div>
      <h3 className="text-[18px] mb-2 text-[var(--color-primary-dark)]">{title}</h3>
      <p className="text-[14.5px] text-[var(--color-muted)] m-0 leading-relaxed">{body}</p>
    </article>
  );
}
