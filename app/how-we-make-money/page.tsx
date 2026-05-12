import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Info } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  title:
    "How We Make Money (and Why It Doesn't Change Your Quote) | House Inspection Adelaide",
  description:
    "Plain-English explanation of the House Inspection Adelaide matching-service business model: how inspectors pay, why your quote isn't affected, what we will and won't do with your data.",
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au/how-we-make-money",
  },
};

const QUOTE_OUTCOMES = [
  {
    title: "The site is genuinely free for you.",
    body: "No charge to use the form, no charge to receive quotes, no premium tier, no \"we'll only forward to inspectors if you upgrade\".",
  },
  {
    title: "The price you're quoted is the same as if you'd found the inspector directly.",
    body: "The referral fee is already in the inspector's cost base; no markup is added because you came through us.",
  },
  {
    title: "Inspectors don't pay to be listed.",
    body: "The fee is per accepted lead, not per listing. That means inspectors compete on speed of response, quality of quote, and quality of service, not on who paid for visibility.",
  },
];

const WONT_DO = [
  "Sell your details.",
  "Pass your information to marketing lists.",
  "Run remarketing pixels or sell ad space to competing services.",
  "List inspectors who pay extra above other inspectors.",
  "\"Boost\" any inspector's chance of getting your lead in exchange for payment.",
];

const TRUST_PILLARS = [
  {
    title: "Free for property buyers",
    body: "The site is free to use and there is no fee for receiving quotes.",
  },
  {
    title: "No obligation",
    body: "You decide if you accept any quote. No pressure, no follow-up calls.",
  },
  {
    title: "Compare in under 2 minutes",
    body: "Three short steps, then sit back while inspectors come to you.",
  },
  {
    title: "Vetted Adelaide inspectors",
    body: "We only forward to inspectors who hold a current SA Building Work Contractors Licence and current insurance.",
  },
];

export default function HowWeMakeMoneyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "How we make money", href: "/how-we-make-money" },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            TRANSPARENCY
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(36px,4.5vw,54px)] leading-[1.05] text-[var(--color-primary-dark)] mb-6">
            How we make money (and why it doesn&apos;t change your quote).
          </h1>
          <p className="text-[18.5px] text-[var(--color-muted)] leading-relaxed mb-7 max-w-[700px]">
            Free sites have to be paid for somehow. Here is exactly how the model works, what it
            costs inspectors, and why it does not affect what you pay. We wrote this page in plain
            English because the marketplace model is worth explaining honestly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Get 3 free quotes <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn btn-secondary">
              How matching works
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="THE MODEL" title="In three sentences." />
          <div className="bg-white border border-[var(--color-line)] rounded-2xl p-8 md:p-10">
            <p className="text-[18px] leading-[1.6] text-[var(--color-fg)] m-0">
              You use the site for free. Inspectors in the network pay us a small referral fee
              when they accept a lead. The fee is an industry-standard cost of doing business that
              is already in their cost base, so the price they quote you is the same as if you had
              found them directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="THE LONGER VERSION"
            title="Why lead-matching is a standard part of how trades get customers."
          />
          <div className="space-y-5 text-[16.5px] leading-[1.7] text-[var(--color-fg)]">
            <p>
              Lead generation is a standard part of how trades and service businesses get
              customers. Most building inspectors in Adelaide spend money on Google Ads, on
              directory listings, on local SEO, on van signage, and on referral fees from sites
              like this one. The cost of acquiring a new customer is something they have already
              budgeted for. When they quote you a price, that price already includes a contribution
              toward acquiring you as a customer, whichever path you came through.
            </p>
            <p>
              The referral fee in our model typically sits between $25 and $60 per accepted lead,
              depending on inspection type and suburb. That is well within the standard cost of
              acquiring a new customer in the inspection industry. Many inspectors find that leads
              through our network cost less than running their own Google Ads, which is one reason
              they sign up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[920px]">
          <SectionHead
            eyebrow="WHAT THIS MEANS FOR YOUR QUOTE"
            title="Three things follow from the model."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {QUOTE_OUTCOMES.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-7"
              >
                <span
                  className="w-11 h-11 rounded-xl grid place-items-center mb-4"
                  style={{
                    background: "var(--color-primary-container)",
                    color: "var(--color-primary)",
                  }}
                >
                  <CheckCircle2 size={20} />
                </span>
                <h3 className="text-[17px] mb-2.5 text-[var(--color-primary-dark)]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-[var(--color-muted)] m-0 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="WHAT WE EARN, WHAT WE SPEND ON"
            title="The referral fees pay for the cost of running the site."
          />
          <div className="space-y-5 text-[16.5px] leading-[1.7] text-[var(--color-fg)]">
            <p>
              The referral fees pay for the cost of running the site: domain, hosting, Resend
              transactional email, GA4 (free tier), the development time it took to build it, and
              the ongoing time it takes to vet inspectors and respond to queries. Anything left
              over is taken as profit by Loudachris Digital Marketing.
            </p>
            <p>
              We are not VC funded. We are not chasing growth at all costs. The site is a small,
              honest, slow-and-steady business asset. If it covers its costs and produces a modest
              profit, that is success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="WHAT WE WILL NOT DO"
            title="The lines we don't cross."
            sub="The integrity stance applies to every lead. Every inspector in the network is treated equally; the lead goes to whoever has capacity in your area."
            light
          />
          <ul className="space-y-4">
            {WONT_DO.map((item) => (
              <li
                key={item}
                className="flex gap-3.5 items-start bg-white/[0.04] border border-white/10 rounded-2xl p-5"
              >
                <span
                  className="w-9 h-9 rounded-full grid place-items-center flex-shrink-0"
                  style={{
                    background: "rgba(220,53,69,0.15)",
                    color: "var(--color-accent-light)",
                  }}
                >
                  <XCircle size={18} />
                </span>
                <span className="text-[16px] leading-[1.5] text-white pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="INSPECTOR VETTING"
            title="What we require of every inspector in the network."
          />
          <div className="space-y-4 text-[16.5px] leading-[1.7] text-[var(--color-fg)]">
            <p>
              Inspectors who join the network agree to a basic standard of service: a current SA
              Building Work Contractors Licence, current public liability and professional
              indemnity insurance, AS 4349.1 compliant reporting (and AS 4349.3 where applicable),
              responsive quoting within one business day, and respectful handling of consent.
            </p>
            <p>
              If inspectors do not meet those standards (slow response, poor reporting,
              unprofessional conduct reported by homeowners), they are removed from the network.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="IF YOU HAVE FEEDBACK" title="How to flag an inspector." />
          <p className="text-[16.5px] text-[var(--color-fg)] leading-[1.7]">
            The simplest way to flag feedback about an inspector is to reply to the email you
            received from the system when you submitted the form, or use the quote form again and
            note your feedback in the &quot;anything we should know&quot; box. We read every reply.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="OPERATOR" title="Who runs House Inspection Adelaide." />
          <div
            className="rounded-2xl border border-[var(--color-line)] p-7 md:p-8 flex gap-5 items-start"
            style={{ background: "var(--color-cream)" }}
          >
            <span
              className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
              style={{
                background: "rgba(184,116,44,0.15)",
                color: "var(--color-secondary-dark)",
              }}
            >
              <Info size={22} />
            </span>
            <div className="space-y-3 text-[15.5px] text-[var(--color-fg)] leading-[1.65]">
              <p className="m-0">
                This site is owned and operated by Loudachris Digital Marketing, 21-22 Greenhill
                Road, Wayville SA 5034. The operator&apos;s contact is reachable via the quote
                form.
              </p>
              <p className="m-0">
                We do not display a direct email address on public pages because of the volume of
                spam harvesting that creates. We respond to genuine queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[1080px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_PILLARS.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <h3 className="text-[16px] mb-2 text-[var(--color-primary-dark)]">{p.title}</h3>
                <p className="text-[14px] text-[var(--color-muted)] m-0 leading-relaxed">
                  {p.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn btn-primary">
              Get 3 free quotes - free, 2 mins <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
