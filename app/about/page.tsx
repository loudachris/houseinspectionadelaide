import type { Metadata } from "next";
import { ShieldCheck, BadgeCheck, FileCheck, Eye, ListChecks, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

export const metadata: Metadata = {
  title: "About House Inspection Adelaide | Independent Inspector Matching",
  description:
    "Independent Adelaide building inspector matching service. No agent referrals. Licensed, insured, AS 4349.1 compliant inspectors only. Free matching, you pay the inspector directly.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/about" },
};

const PROMISES = [
  {
    Icon: Eye,
    title: "Independent from agents",
    body: "Zero commercial relationship with sellers, real estate agents, or builders. We don't accept agent referrals or pay kickbacks. Inspectors pay a per-lead referral fee to us (industry-standard cost of doing business) - that's it. Read the full breakdown at our transparency page.",
  },
  {
    Icon: BadgeCheck,
    title: "Licensed only",
    body: "Every inspector in the network holds an active SA Building Work Contractors Licence. We verify before they ever quote.",
  },
  {
    Icon: ShieldCheck,
    title: "Comprehensively insured",
    body: "Every inspector in the network holds current public liability and professional indemnity insurance. We confirm each policy is current before matching.",
  },
  {
    Icon: FileCheck,
    title: "AS 4349.1-2007 compliant",
    body: "Every pre-purchase inspection report meets the Australian Standard. The same applies to AS 4349.3 timber pest and AS 4349.0 handover reports.",
  },
  {
    Icon: Clock,
    title: "24-hour match",
    body: "From the moment you brief us, three quotes are in your inbox inside 24 hours. Often inside 4 to 6 business hours.",
  },
  {
    Icon: ListChecks,
    title: "Three quotes, your choice",
    body: "We don't pick your inspector. We match three. You compare price, turnaround, and inspector profiles before booking direct.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(38px,4.5vw,56px)] leading-[1.05] text-[var(--color-primary-dark)] mb-6">
            We match Adelaide buyers with independent inspectors. Nothing else.
          </h1>
          <p className="text-[18.5px] text-[var(--color-muted)] leading-relaxed mb-8">
            House Inspection Adelaide is a free matching service that connects property buyers in
            Adelaide and surrounding South Australia with three independent, licensed, insured
            building inspectors inside 24 hours. We don&apos;t inspect properties. We don&apos;t
            take commission from inspectors. We don&apos;t refer to agents. Our only job is to
            surface the right inspector for your property and timeline.
          </p>
          <DisclaimerBanner />
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="wrap">
          <SectionHead
            eyebrow="SIX PROMISES"
            title="Every Adelaide inspector in the network keeps these."
            sub="Non-negotiable standards. If an inspector doesn't meet all six, they don't get matched to your enquiry."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROMISES.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl p-7 border border-white/10 bg-white/[0.04] backdrop-blur-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center mb-4"
                  style={{
                    background: "rgba(216,146,83,0.18)",
                    color: "var(--color-secondary-light)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-[18px] mb-2 text-white">{title}</h3>
                <p className="text-white/70 text-[14.5px] m-0 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="HOW WE'RE DIFFERENT" title="What we do and don't do." />
          <ul className="space-y-4 text-[16.5px] leading-relaxed text-[var(--color-fg)]">
            <li className="flex gap-3.5 items-start">
              <span className="font-semibold text-[var(--color-accent-dark)] flex-shrink-0">
                We don&apos;t inspect.
              </span>
              <span>
                Inspectors do. We&apos;re a matching layer between Adelaide property buyers and the
                independent inspectors who actually do the work.
              </span>
            </li>
            <li className="flex gap-3.5 items-start">
              <span className="font-semibold text-[var(--color-accent-dark)] flex-shrink-0">
                The site is free for you.
              </span>
              <span>
                We charge nothing to match you with inspectors. Inspectors in our network pay us a
                small per-lead referral fee (industry standard, already in their cost base) - so
                your quoted price is the same as if you found the inspector directly. Full
                breakdown on the{" "}
                <a
                  href="/how-we-make-money"
                  className="text-[var(--color-primary)] font-semibold underline"
                >
                  transparency page
                </a>
                .
              </span>
            </li>
            <li className="flex gap-3.5 items-start">
              <span className="font-semibold text-[var(--color-accent-dark)] flex-shrink-0">
                We don&apos;t accept agent referrals.
              </span>
              <span>
                Inspectors with active commercial relationships with sellers or real estate agents
                are excluded from the network. This is the most common source of
                conflict-of-interest in the industry, and we cut it out at the door.
              </span>
            </li>
            <li className="flex gap-3.5 items-start">
              <span className="font-semibold text-[var(--color-accent-dark)] flex-shrink-0">
                We don&apos;t share your details.
              </span>
              <span>
                Only the three matched inspectors receive your contact details, and only so they
                can quote. We don&apos;t resell data, we don&apos;t market third-party services, we
                don&apos;t add you to any other list.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="THE NETWORK"
            title="Who&apos;s in our Adelaide inspector network."
          />
          <p className="text-[16.5px] text-[var(--color-fg)] leading-relaxed mb-5">
            Every inspector in the network holds:
          </p>
          <ul className="space-y-3 text-[16px] text-[var(--color-fg)] mb-8">
            <li>· An active SA Building Work Contractors Licence (verified annually).</li>
            <li>· Current public liability insurance.</li>
            <li>· Current professional indemnity insurance.</li>
            <li>· Either a trade background (carpentry, building, structural engineering) or formal building inspection qualifications.</li>
            <li>· Zero current commercial relationship with real estate agencies, sellers, or building companies.</li>
          </ul>
          <p className="text-[16px] text-[var(--color-fg)] leading-relaxed">
            Inspectors range from independent specialists who&apos;ve worked the Adelaide market for
            20+ years to newer entrants vetted carefully. We match by suburb knowledge, property
            type expertise, and your urgency - so you don&apos;t end up with a generalist on a
            heritage stone inspection.
          </p>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
