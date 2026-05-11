import { SectionHead } from "../section-head";

const STEPS = [
  {
    n: 1,
    tag: "DAY 1",
    title: "Tell us about the property",
    body: "Address, property type, settlement timeline. Two minutes, online or by phone.",
  },
  {
    n: 2,
    tag: "WITHIN 24 HOURS",
    title: "Get matched with three licensed inspectors",
    body: "Verified against your suburb, property type, and your urgency. You see prices, turnaround, inspector profiles.",
  },
  {
    n: 3,
    tag: "WITHIN 5 DAYS",
    title: "Compare, book, receive your report",
    body: "Pick your inspector. They visit the property and deliver an AS 4349.1 report within 48 hours of inspection.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="wrap">
        <SectionHead
          eyebrow="HOW IT WORKS"
          title="From request to report in 5 days."
          sub="Built around the cooling-off period and Adelaide settlement timelines. Skip the back-and-forth, get to a confident decision faster."
        />

        <div className="relative grid md:grid-cols-3 gap-6">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[12%] right-[12%] top-[40px] h-[2px]"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(30,58,95,.25) 0 6px, transparent 6px 12px)",
            }}
          />
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="relative z-[1] bg-white border border-[var(--color-line)] rounded-2xl p-8 px-7"
            >
              <div
                className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white grid place-items-center font-[var(--font-display)] font-extrabold text-[22px] mb-5"
                style={{ boxShadow: "0 8px 18px -8px rgba(220,53,69,.55)" }}
              >
                {s.n}
              </div>
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] text-[var(--color-muted)] mb-1.5">
                {s.tag}
              </div>
              <h3 className="text-[20px] mb-2 text-[var(--color-primary-dark)]">{s.title}</h3>
              <p className="text-[var(--color-muted)] text-[14.5px] m-0 leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
