import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";

export function Urgency() {
  return (
    <section className="py-20 bg-[var(--color-accent-dark)] text-white">
      <div className="wrap">
        <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div
            className="w-16 h-16 rounded-full grid place-items-center"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <AlertTriangle size={28} />
          </div>
          <div>
            <h2 className="font-[var(--font-display)] font-bold text-[26px] md:text-[32px] leading-[1.15]">
              In cooling-off? You have days, not weeks.
            </h2>
            <p className="mt-2.5 text-[15.5px] text-white/85 leading-relaxed max-w-[640px]">
              Standard South Australian cooling-off is two clear business days from contract.
              We can have three quotes in your inbox before lunchtime tomorrow and the inspector
              you choose can usually attend within 48 hours.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="btn"
              style={{
                background: "#fff",
                color: "var(--color-accent-dark)",
                fontWeight: 700,
              }}
            >
              Request quotes <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
