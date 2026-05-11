import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function QuoteCta({
  title = "Get 3 free quotes inside 24 hours",
  sub = "Two minutes to brief us. We match you with licensed independent Adelaide inspectors. No agent referrals.",
  variant = "navy",
}: {
  title?: string;
  sub?: string;
  variant?: "navy" | "cream";
}) {
  const navy = variant === "navy";
  return (
    <section
      className={`py-20 ${navy ? "bg-[var(--color-primary-dark)] text-white" : "bg-[var(--color-cream)]"}`}
    >
      <div className="wrap">
        <div
          className={`rounded-[24px] p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-10 ${
            navy
              ? "bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary-dark)] shadow-[0_24px_60px_-24px_rgba(20,41,68,0.65)]"
              : "bg-white border border-[var(--color-line)]"
          }`}
        >
          <div className="flex-1">
            <h2
              className={`font-[var(--font-display)] font-bold text-[28px] md:text-[36px] leading-[1.15] ${
                navy ? "text-white" : "text-[var(--color-primary-dark)]"
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-3 text-[16px] leading-relaxed max-w-2xl ${
                navy ? "text-white/80" : "text-[var(--color-muted)]"
              }`}
            >
              {sub}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Get 3 Free Quotes <ArrowRight size={16} />
            </Link>
            <a
              href={SITE.phoneHref}
              className={`btn ${navy ? "btn-ghost" : "btn-secondary"}`}
            >
              <Phone size={16} /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
