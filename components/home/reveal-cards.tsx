import { Eye, Tag, Search } from "lucide-react";
import { SectionHead } from "../section-head";

const CARDS = [
  {
    num: "01",
    tone: "default",
    icon: Eye,
    title: "What you see",
    body: "The agent's brochure, the renovated kitchen, the tidy garden, the open inspection styled to within an inch of its life.",
  },
  {
    num: "02",
    tone: "alt",
    icon: Tag,
    title: "What the agent is selling",
    body: "The lifestyle story. The dream. The pressure to make an offer before someone else does.",
  },
  {
    num: "03",
    tone: "warn",
    icon: Search,
    title: "What an inspector finds",
    body: "Cracks behind the paint. Dodgy past renovations. Water damage. Asbestos. Missing insulation. The leverage to negotiate, or the reason to walk.",
  },
];

export function RevealCards() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="wrap">
        <SectionHead
          eyebrow="WHAT YOU'RE REALLY BUYING"
          title="Three perspectives on every Adelaide property."
          sub="The agent shows you one. The other two cost about $500 to uncover. They could save you hundreds of thousands."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((c) => {
            const Icon = c.icon;
            const iconBg =
              c.tone === "alt"
                ? "rgba(184,116,44,.12)"
                : c.tone === "warn"
                  ? "rgba(220,53,69,.1)"
                  : "var(--color-primary-container)";
            const iconColor =
              c.tone === "alt"
                ? "var(--color-secondary-dark)"
                : c.tone === "warn"
                  ? "var(--color-accent-dark)"
                  : "var(--color-primary)";
            return (
              <article
                key={c.num}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-[rgba(30,58,95,.25)] hover:shadow-[0_18px_40px_-20px_rgba(20,41,68,0.2)]"
              >
                <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] text-[var(--color-muted)]">
                  {c.num}
                </div>
                <div
                  className="w-14 h-14 rounded-2xl mt-4 mb-5 grid place-items-center"
                  style={{ background: iconBg, color: iconColor }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-[21px] mb-2.5 text-[var(--color-primary-dark)]">{c.title}</h3>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed m-0">
                  {c.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
