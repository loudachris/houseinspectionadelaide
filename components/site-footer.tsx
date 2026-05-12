import Link from "next/link";
import { ShieldCheck, BadgeCheck, FileCheck, Info } from "lucide-react";
import { SITE, SUBURBS, SERVICES } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-charcoal)] text-white pt-20 pb-10">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid place-items-center w-[44px] h-[44px] rounded-[10px] font-[var(--font-display)] font-extrabold text-[18px]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))",
                }}
              >
                HIA
              </span>
              <div className="leading-[1.05]">
                <div className="font-[var(--font-display)] font-bold text-[17px]">
                  House Inspection Adelaide
                </div>
                <div className="text-[11px] tracking-[.12em] uppercase opacity-75">
                  Independent matching service
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
              We connect Adelaide property buyers with three independent, licensed building
              inspectors. No agent referrals, no kickbacks, no conflicts of interest.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-[13px] text-white/80">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--color-secondary-light)]" />
                Fully insured network
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[var(--color-secondary-light)]" />
                Licensed Only
              </span>
              <span className="flex items-center gap-2">
                <FileCheck size={16} className="text-[var(--color-secondary-light)]" />
                AS 4349.1
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] uppercase tracking-[.14em] text-white/60 font-[var(--font-mono)] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5 text-[14.5px]">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-[var(--color-secondary-light)]">
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] uppercase tracking-[.14em] text-white/60 font-[var(--font-mono)] mb-5">
              Areas
            </h3>
            <ul className="space-y-2.5 text-[14.5px]">
              {SUBURBS.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/areas/${s.slug}`} className="hover:text-[var(--color-secondary-light)]">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-[var(--color-secondary-light)] font-semibold">
                  All areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] uppercase tracking-[.14em] text-white/60 font-[var(--font-mono)] mb-5">
              Resources
            </h3>
            <ul className="space-y-2.5 text-[14.5px]">
              <li>
                <Link href="/contact" className="hover:text-[var(--color-secondary-light)]">
                  Request 3 free quotes
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[var(--color-secondary-light)]">
                  Free tools
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[var(--color-secondary-light)]">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-[var(--color-secondary-light)]">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/standards" className="hover:text-[var(--color-secondary-light)]">
                  AS 4349 standards
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[var(--color-secondary-light)]">
                  How pricing works
                </Link>
              </li>
              <li>
                <Link href="/how-we-make-money" className="hover:text-[var(--color-secondary-light)]">
                  How we make money
                </Link>
              </li>
              <li>
                <Link href="/sample-report" className="hover:text-[var(--color-secondary-light)]">
                  Sample report
                </Link>
              </li>
              <li className="text-white/70 pt-2 text-[13.5px] leading-relaxed">
                {SITE.address.suburb} {SITE.address.state} {SITE.address.postcode}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 rounded-2xl p-6 md:p-7 border border-white/10"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <div className="flex gap-4 items-start">
            <span
              className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0"
              style={{
                background: "rgba(216,146,83,0.15)",
                color: "var(--color-secondary-light)",
              }}
            >
              <Info size={18} />
            </span>
            <div>
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-light)] mb-1.5">
                IMPORTANT - ABOUT THIS SERVICE
              </div>
              <p className="text-[14px] text-white/85 leading-relaxed m-0">
                {SITE.disclaimer}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row gap-3 justify-between text-[12.5px] text-white/55">
          <div>© {year} House Inspection Adelaide. All rights reserved.</div>
          <div className="flex gap-5 flex-wrap">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
