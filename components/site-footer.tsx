import Link from "next/link";
import { Phone, ShieldCheck, BadgeCheck, FileCheck } from "lucide-react";
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
                  Independent · AS 4349.1
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
              We match Adelaide property buyers with three independent, licensed building
              inspectors within 24 hours. No agent referrals, no kickbacks, no conflicts of
              interest.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-[13px] text-white/80">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--color-secondary-light)]" />
                $5M Public Liability
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
              Contact
            </h3>
            <ul className="space-y-3 text-[14.5px]">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 hover:text-[var(--color-secondary-light)]"
                >
                  <Phone size={16} /> {SITE.phone}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-secondary-light)]">
                  Contact form
                </Link>
              </li>
              <li>
                <Link href="/book-online" className="hover:text-[var(--color-secondary-light)]">
                  Book online
                </Link>
              </li>
              <li className="text-white/70 pt-2 text-[13.5px] leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.suburb} {SITE.address.state} {SITE.address.postcode}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row gap-3 justify-between text-[12.5px] text-white/55">
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
