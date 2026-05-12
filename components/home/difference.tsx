import { Clock, BadgeCheck, ShieldCheck, FileCheck, Eye, ListChecks } from "lucide-react";
import { SectionHead } from "../section-head";

const ITEMS = [
  {
    Icon: Clock,
    title: "Same-day match",
    body: "We work to your settlement deadline, not ours. Most matches inside 24 hours, often inside 4 to 6.",
  },
  {
    Icon: BadgeCheck,
    title: "Licensed only",
    body: "Every inspector holds an active SA Building Work Contractors Licence. Verified before they ever quote.",
  },
  {
    Icon: ShieldCheck,
    title: "Fully insured",
    body: "Comprehensive public liability and professional indemnity insurance held by every inspector in the network.",
  },
  {
    Icon: FileCheck,
    title: "AS 4349.1-2007",
    body: "Every report meets the Australian Standard for pre-purchase residential. Use it confidently in negotiation.",
  },
  {
    Icon: Eye,
    title: "Independent",
    body: "No commercial relationship with sellers, agents, or builders. No kickbacks. No referrals. Ever.",
  },
  {
    Icon: ListChecks,
    title: "Three quotes, you choose",
    body: "Compare price, turnaround, and inspector style before booking. Full transparency.",
  },
];

export function Difference() {
  return (
    <section className="py-24 bg-[var(--color-primary-dark)] text-white">
      <div className="wrap">
        <SectionHead
          eyebrow="WHY WE'RE DIFFERENT"
          title="Six promises every Adelaide inspector in our network keeps."
          sub="The matching is free. The standards are non-negotiable. The price is yours to compare."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map(({ Icon, title, body }) => (
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
  );
}
