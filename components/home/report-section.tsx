import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";

const REPORT_CHECKS = [
  "Major structural defects (foundations, framing, roof structure)",
  "Major non-structural defects (cracking, weatherproofing, drainage)",
  "Minor defects and maintenance items",
  "Photographic evidence of every defect",
  "Cost estimates where possible",
  "AS 4349.1-2007 compliant scope and limitations",
  "Clear executive summary",
  "Delivered within 48 hours of inspection",
];

export function ReportSection() {
  return (
    <section className="py-24 bg-[var(--color-charcoal)] text-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-[0_30px_60px_-20px_rgba(0,0,0,.5)]">
            <div className="absolute inset-0 p-9 flex flex-col gap-4 bg-[#f6f4ef] text-[var(--color-primary-dark)]">
              <div className="font-[var(--font-mono)] text-[10px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)]">
                INSPECTION REPORT · AS 4349.1
              </div>
              <div className="font-[var(--font-display)] font-extrabold text-[24px] leading-[1.1]">
                Pre-Purchase Building Inspection
              </div>
              <div className="text-[13px] text-[var(--color-muted)] border-t border-[rgba(20,41,68,0.1)] pt-3">
                12 Sample Street, Glenelg SA 5045
              </div>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9.5px]">
                    Inspector
                  </div>
                  <div className="font-semibold">Network-matched</div>
                </div>
                <div>
                  <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9.5px]">
                    Inspection date
                  </div>
                  <div className="font-semibold">11 May 2026</div>
                </div>
                <div>
                  <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9.5px]">
                    Property type
                  </div>
                  <div className="font-semibold">3-br standalone</div>
                </div>
                <div>
                  <div className="text-[var(--color-muted)] font-[var(--font-mono)] tracking-[.08em] uppercase text-[9.5px]">
                    Standard
                  </div>
                  <div className="font-semibold">AS 4349.1-2007</div>
                </div>
              </div>
              <div className="mt-auto flex justify-between items-center bg-[var(--color-primary-dark)] text-white px-4 py-3.5 rounded-[10px] text-[11px]">
                <span className="font-semibold">23 defects identified</span>
                <span
                  className="font-[var(--font-mono)] text-[9px] tracking-[.12em] px-2 py-1 rounded"
                  style={{ background: "var(--color-secondary)" }}
                >
                  REPORT
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary-light)] mb-3.5">
              WHAT YOU RECEIVE
            </div>
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] mb-5 text-white">
              An independent, photo-rich, AS 4349.1 compliant report inside 48 hours.
            </h2>
            <p className="text-[16px] text-white/70 leading-relaxed mb-7 max-w-[520px]">
              Every report from the network meets the Australian Standard for pre-purchase
              inspections. Plain English summary up front, photographic evidence throughout.
            </p>

            <ul className="space-y-3.5">
              {REPORT_CHECKS.map((t) => (
                <li key={t} className="flex gap-3.5 items-start text-[15.5px] leading-[1.5] text-white/90">
                  <span
                    className="w-6 h-6 rounded-full grid place-items-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(216,146,83,.2)",
                      color: "var(--color-secondary-light)",
                    }}
                  >
                    <CheckCircle2 size={14} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/sample-report"
                className="inline-flex items-center gap-2 btn"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#fff",
                }}
              >
                <FileText size={16} /> View sample report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
