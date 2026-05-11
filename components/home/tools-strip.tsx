import Link from "next/link";
import { Search, Calculator, ListChecks, ArrowRight } from "lucide-react";

const TOOLS = [
  {
    icon: Search,
    title: "Find an Inspector",
    body: "Tell us about the property. Three quotes inside 24 hours.",
    href: "/contact",
    primary: true,
  },
  {
    icon: Calculator,
    title: "Inspection Cost Estimator",
    body: "Indicative pricing for your property type.",
    href: "/pricing",
    primary: false,
  },
  {
    icon: ListChecks,
    title: "Pre-Purchase Checklist",
    body: "What to look for before you make an offer.",
    href: "/guides/what-to-look-for-house-inspection",
    primary: false,
  },
];

export function ToolsStrip() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="wrap">
        <div className="grid md:grid-cols-3 gap-5">
          {TOOLS.map(({ icon: Icon, title, body, href, primary }) => (
            <Link
              key={title}
              href={href}
              className={`group rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(20,41,68,0.25)] flex flex-col text-inherit no-underline ${
                primary
                  ? "bg-[var(--color-primary-dark)] text-white"
                  : "bg-white border border-[var(--color-line)]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl grid place-items-center mb-4 ${
                  primary ? "bg-white/12" : "bg-[var(--color-primary-container)]"
                }`}
                style={{
                  color: primary ? "var(--color-secondary-light)" : "var(--color-primary)",
                }}
              >
                <Icon size={22} />
              </div>
              <h3 className={`text-[19px] mb-2 ${primary ? "text-white" : "text-[var(--color-primary-dark)]"}`}>
                {title}
              </h3>
              <p
                className={`text-[14.5px] m-0 mb-6 leading-relaxed ${
                  primary ? "text-white/70" : "text-[var(--color-muted)]"
                }`}
              >
                {body}
              </p>
              <span
                className={`mt-auto inline-flex items-center gap-2 font-semibold text-[13.5px] group-hover:gap-3 transition-all ${
                  primary ? "text-[var(--color-secondary-light)]" : "text-[var(--color-primary)]"
                }`}
              >
                Open <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
