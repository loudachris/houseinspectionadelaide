import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title: "Request Received - House Inspection Adelaide",
  description:
    "Your quote request has been received. We will match you with three independent licensed Adelaide building inspectors within 24 hours.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Request received", href: "/thank-you" }]} />

      <section className="pt-12 pb-16">
        <div className="wrap max-w-[760px]">
          <div
            className="rounded-3xl p-10 md:p-14"
            style={{
              background:
                "radial-gradient(120% 90% at 100% 0%, var(--color-primary-container) 0%, white 60%)",
              border: "1px solid var(--color-line)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full grid place-items-center mb-6"
              style={{ background: "var(--color-primary)", color: "white" }}
            >
              <CheckCircle2 size={30} />
            </div>
            <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-3">
              REQUEST RECEIVED
            </div>
            <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
              Thanks - your request is in.
            </h1>
            <p className="text-[17.5px] text-[var(--color-muted)] leading-relaxed mb-6 max-w-[600px]">
              We&apos;ll match you with three independent licensed Adelaide building inspectors and
              send their quotes to your email within 24 hours. Most matches arrive inside 4 to 6
              business hours.
            </p>
            <p className="text-[15.5px] text-[var(--color-muted)] leading-relaxed mb-8 max-w-[600px]">
              You&apos;ll receive an email from each inspector with their quote, turnaround time,
              and inspector credentials. You compare and choose. We never share your details with
              anyone outside the three matched inspectors.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/guides/what-to-look-for-house-inspection" className="btn btn-primary">
                Read the buyer checklist <ArrowRight size={16} />
              </Link>
              <Link href="/" className="btn btn-secondary">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="WHAT HAPPENS NEXT"
            title="From request to inspection in 5 days."
            center
          />
          <div className="grid sm:grid-cols-3 gap-5">
            <Step
              icon={<Clock size={20} />}
              title="Inside 24 hours"
              body="Three quotes land in your inbox. Most arrive inside 4 to 6 business hours."
            />
            <Step
              icon={<ShieldCheck size={20} />}
              title="You compare and choose"
              body="Each quote includes price, turnaround, inspector licence number, and what's specifically covered."
            />
            <Step
              icon={<CheckCircle2 size={20} />}
              title="Inspector attends"
              body="Most inspectors can attend within 48 hours of booking. AS 4349.1 report follows within 48 hours of inspection."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="WHILE YOU WAIT"
            title="Get ready for the inspection report."
            sub="A 4-minute read on what an Adelaide inspection actually covers, what to look for yourself, and which questions to ask your inspector."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            <ResourceLink
              href="/guides/what-does-a-building-inspection-cover"
              title="What does a building inspection cover?"
              blurb="The six main areas of an AS 4349.1 inspection."
            />
            <ResourceLink
              href="/guides/what-to-look-for-house-inspection"
              title="Buyer's checklist"
              blurb="What to look for yourself when you walk the property."
            />
            <ResourceLink
              href="/sample-report"
              title="Sample inspection report"
              blurb="What an AS 4349.1 compliant report looks like."
            />
            <ResourceLink
              href="/guides/how-long-does-a-building-inspection-take"
              title="How long does it take?"
              blurb="Site visit duration and report turnaround timing."
            />
          </div>
        </div>
      </section>

      <ConversionPing />
    </>
  );
}

function Step({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="bg-white border border-[var(--color-line)] rounded-2xl p-6">
      <div
        className="w-11 h-11 rounded-xl grid place-items-center mb-3"
        style={{
          background: "var(--color-primary-container)",
          color: "var(--color-primary)",
        }}
      >
        {icon}
      </div>
      <h3 className="text-[17px] mb-2 text-[var(--color-primary-dark)]">{title}</h3>
      <p className="text-[14px] text-[var(--color-muted)] m-0 leading-relaxed">{body}</p>
    </article>
  );
}

function ResourceLink({
  href,
  title,
  blurb,
}: {
  href: string;
  title: string;
  blurb: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-5 no-underline text-inherit hover:bg-white hover:shadow-[0_14px_30px_-16px_rgba(20,41,68,0.18)] transition-all"
    >
      <span
        className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0"
        style={{ background: "var(--color-primary-container)", color: "var(--color-primary)" }}
      >
        <ArrowRight size={16} />
      </span>
      <div>
        <div className="font-[var(--font-display)] font-semibold text-[15.5px] text-[var(--color-primary-dark)] mb-1 leading-[1.25]">
          {title}
        </div>
        <div className="text-[13.5px] text-[var(--color-muted)] leading-relaxed">{blurb}</div>
      </div>
    </Link>
  );
}

// Fire a GA4 event when the thank-you page loads.
// /thank-you page_view itself is the primary conversion marker -
// this just adds a named event for clarity in GA4 reporting.
function ConversionPing() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "quote_request_submitted", {
              event_category: "lead",
              event_label: "quote_form",
              send_to: "G-9VSYM6TJ56"
            });
            window.gtag("event", "generate_lead", {
              event_category: "lead",
              event_label: "quote_form",
              send_to: "G-9VSYM6TJ56"
            });
          }
        `,
      }}
    />
  );
}
