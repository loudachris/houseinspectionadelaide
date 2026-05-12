"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

// SA public holidays - 2025 to 2027 inclusive.
// Source: SafeWork SA published list. If a holiday falls on a weekend it's
// observed on the following Monday (Christmas / Boxing Day / New Year only).
const SA_HOLIDAYS_ISO: string[] = [
  // 2025
  "2025-01-01", // New Year's Day
  "2025-01-27", // Australia Day (observed)
  "2025-03-10", // Adelaide Cup Day
  "2025-04-18", // Good Friday
  "2025-04-19", // Easter Saturday
  "2025-04-21", // Easter Monday
  "2025-04-25", // Anzac Day
  "2025-06-09", // King's Birthday
  "2025-10-06", // Labour Day
  "2025-12-25", // Christmas Day
  "2025-12-26", // Proclamation Day
  // 2026
  "2026-01-01",
  "2026-01-26",
  "2026-03-09",
  "2026-04-03", // Good Friday 2026
  "2026-04-04",
  "2026-04-06",
  "2026-04-25",
  "2026-06-08",
  "2026-10-05",
  "2026-12-25",
  "2026-12-28", // Proclamation Day observed (26th is a Saturday)
  // 2027
  "2027-01-01",
  "2027-01-26",
  "2027-03-08",
  "2027-03-26",
  "2027-03-27",
  "2027-03-29",
  "2027-04-26", // Anzac Day observed (25th is a Sunday)
  "2027-06-14",
  "2027-10-04",
  "2027-12-27", // Christmas Day observed (25th is a Saturday)
  "2027-12-28",
];

const SA_HOLIDAY_NAMES: Record<string, string> = {
  "2025-01-01": "New Year's Day",
  "2025-01-27": "Australia Day (observed)",
  "2025-03-10": "Adelaide Cup Day",
  "2025-04-18": "Good Friday",
  "2025-04-19": "Easter Saturday",
  "2025-04-21": "Easter Monday",
  "2025-04-25": "Anzac Day",
  "2025-06-09": "King's Birthday",
  "2025-10-06": "Labour Day",
  "2025-12-25": "Christmas Day",
  "2025-12-26": "Proclamation Day",
  "2026-01-01": "New Year's Day",
  "2026-01-26": "Australia Day",
  "2026-03-09": "Adelaide Cup Day",
  "2026-04-03": "Good Friday",
  "2026-04-04": "Easter Saturday",
  "2026-04-06": "Easter Monday",
  "2026-04-25": "Anzac Day",
  "2026-06-08": "King's Birthday",
  "2026-10-05": "Labour Day",
  "2026-12-25": "Christmas Day",
  "2026-12-28": "Proclamation Day (observed)",
  "2027-01-01": "New Year's Day",
  "2027-01-26": "Australia Day",
  "2027-03-08": "Adelaide Cup Day",
  "2027-03-26": "Good Friday",
  "2027-03-27": "Easter Saturday",
  "2027-03-29": "Easter Monday",
  "2027-04-26": "Anzac Day (observed)",
  "2027-06-14": "King's Birthday",
  "2027-10-04": "Labour Day",
  "2027-12-27": "Christmas Day (observed)",
  "2027-12-28": "Proclamation Day",
};

function toIso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isBusinessDay(d: Date) {
  const day = d.getDay();
  if (day === 0 || day === 6) return false;
  if (SA_HOLIDAYS_ISO.includes(toIso(d))) return false;
  return true;
}

function addClearBusinessDays(start: Date, n: number) {
  const skipped: { date: Date; reason: string }[] = [];
  const result = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  let counted = 0;
  let safety = 0;
  while (counted < n && safety < 100) {
    safety++;
    result.setDate(result.getDate() + 1);
    if (!isBusinessDay(result)) {
      const day = result.getDay();
      const iso = toIso(result);
      const isWeekend = day === 0 || day === 6;
      const reason = isWeekend
        ? day === 0
          ? "Sunday"
          : "Saturday"
        : SA_HOLIDAY_NAMES[iso] || "SA public holiday";
      skipped.push({ date: new Date(result), reason });
      continue;
    }
    counted++;
  }
  return { deadline: result, skipped };
}

function formatLong(d: Date) {
  return d.toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatShort(d: Date) {
  return d.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function CoolingOffCalculator() {
  const today = useMemo(() => {
    const t = new Date();
    return toIso(t);
  }, []);

  const [contractDate, setContractDate] = useState<string>(today);

  const result = useMemo(() => {
    if (!contractDate) return null;
    const parts = contractDate.split("-").map(Number);
    if (parts.length !== 3 || parts.some((n) => isNaN(n))) return null;
    const start = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(start.getTime())) return null;
    const { deadline, skipped } = addClearBusinessDays(start, 2);
    // Deadline is END of that business day; rescission must be IN WRITING before end of day.
    return { start, deadline, skipped };
  }, [contractDate]);

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-line)] p-7 md:p-9 shadow-[0_24px_60px_-24px_rgba(20,41,68,0.15)]">
      <label className="block">
        <span className="block text-[13px] font-semibold text-[var(--color-primary-dark)] mb-2">
          Day you received the signed contract (Form 1)
        </span>
        <input
          type="date"
          value={contractDate}
          onChange={(e) => setContractDate(e.target.value)}
          className="w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3 text-[15px] text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-container)] transition"
        />
      </label>

      {result && (
        <div className="mt-7">
          <div
            className="rounded-2xl p-6 md:p-7 border-l-[6px]"
            style={{
              background: "var(--color-primary-container)",
              borderLeftColor: "var(--color-primary)",
            }}
          >
            <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-primary-dark)] mb-2 flex items-center gap-2">
              <Calendar size={13} /> COOLING-OFF DEADLINE
            </div>
            <div className="font-[var(--font-display)] font-extrabold text-[26px] md:text-[34px] text-[var(--color-primary-dark)] leading-[1.1] mb-2">
              {formatLong(result.deadline)}
            </div>
            <p className="text-[15px] text-[var(--color-fg)] m-0">
              You must rescind <strong>in writing</strong> before end of business on this day.
              That&apos;s two clear business days after contract receipt on{" "}
              {formatShort(result.start)}.
            </p>
          </div>

          {result.skipped.length > 0 && (
            <div className="mt-5">
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase text-[var(--color-muted)] mb-2.5">
                DAYS THAT DON&apos;T COUNT
              </div>
              <ul className="space-y-2">
                {result.skipped.map((s) => (
                  <li
                    key={toIso(s.date)}
                    className="flex items-center gap-3 px-4 py-2.5 bg-[var(--color-cream)] border border-[var(--color-line)] rounded-lg text-[14px]"
                  >
                    <AlertCircle size={14} className="text-[var(--color-secondary-dark)] flex-shrink-0" />
                    <span className="text-[var(--color-fg)]">
                      <strong>{formatShort(s.date)}</strong> - {s.reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Get 3 free quotes <ArrowRight size={14} />
            </Link>
            <Link href="/guides/cooling-off-period-sa" className="btn btn-secondary">
              Read the cooling-off guide
            </Link>
          </div>

          <p className="mt-6 flex items-start gap-2.5 text-[13px] text-[var(--color-muted)] leading-relaxed">
            <CheckCircle2 size={14} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            General guidance only. Always confirm timing with your SA conveyancer. We&apos;re not a
            law firm or conveyancing service.
          </p>
        </div>
      )}
    </div>
  );
}
