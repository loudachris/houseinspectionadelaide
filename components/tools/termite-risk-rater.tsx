"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bug, AlertTriangle, CheckCircle2 } from "lucide-react";

type Risk = "low" | "medium" | "high";

const AGE_OPTIONS = [
  { v: "pre1940", label: "Pre-1940 (heritage)", score: 3 },
  { v: "1940-1986", label: "1940-1986", score: 4 },
  { v: "1987-2010", label: "1987-2010", score: 2 },
  { v: "2010+", label: "2010+ new build", score: 1 },
];

const SUBURB_OPTIONS = [
  { v: "hills", label: "Adelaide Hills (Stirling, Mount Barker, Aldgate)", score: 4 },
  { v: "eastern", label: "Established east (Norwood, Unley, Burnside)", score: 3 },
  { v: "fleurieu", label: "Fleurieu / coastal south", score: 2 },
  { v: "northern", label: "Northern (Gawler, Salisbury, Tea Tree Gully)", score: 2 },
  { v: "metro", label: "Metro standard (Glenelg, Mitcham, Marion)", score: 2 },
  { v: "cbd", label: "Inner city / CBD apartment", score: 1 },
];

const CONSTRUCTION_OPTIONS = [
  { v: "timber-floor", label: "Timber sub-floor (bearer + joist + stumps)", score: 4 },
  { v: "weatherboard", label: "Weatherboard / timber-clad", score: 4 },
  { v: "brick-veneer-slab", label: "Brick veneer on concrete slab", score: 2 },
  { v: "double-brick-slab", label: "Double brick on slab", score: 1 },
  { v: "modern-steel-frame", label: "Modern steel-frame slab", score: 1 },
];

const CONDUCIVE_OPTIONS = [
  { v: "low", label: "None visible - all timber 100mm+ above ground, vents clear", score: 0 },
  { v: "moderate", label: "Some conditions: garden beds against wall, blocked vents, decking", score: 3 },
  { v: "high", label: "Multiple conditions: timber-to-ground contact, dampness, dense vegetation", score: 5 },
];

const HISTORY_OPTIONS = [
  { v: "none", label: "No known history", score: 0 },
  { v: "treated", label: "Treated previously (with current barrier)", score: 1 },
  { v: "treated-old", label: "Treated >10 years ago, barrier status unclear", score: 3 },
  { v: "evidence", label: "Visible mud-tubes or termite evidence on site", score: 6 },
];

function classify(total: number): Risk {
  if (total >= 14) return "high";
  if (total >= 8) return "medium";
  return "low";
}

export function TermiteRiskRater() {
  const [a, setA] = useState({
    age: "1940-1986",
    suburb: "metro",
    construction: "brick-veneer-slab",
    conducive: "low",
    history: "none",
  });

  const result = useMemo(() => {
    const ageScore = AGE_OPTIONS.find((o) => o.v === a.age)?.score ?? 0;
    const suburbScore = SUBURB_OPTIONS.find((o) => o.v === a.suburb)?.score ?? 0;
    const constructionScore =
      CONSTRUCTION_OPTIONS.find((o) => o.v === a.construction)?.score ?? 0;
    const conduciveScore = CONDUCIVE_OPTIONS.find((o) => o.v === a.conducive)?.score ?? 0;
    const historyScore = HISTORY_OPTIONS.find((o) => o.v === a.history)?.score ?? 0;
    const total = ageScore + suburbScore + constructionScore + conduciveScore + historyScore;
    return { total, risk: classify(total) };
  }, [a]);

  const riskMeta = {
    low: {
      label: "Low risk",
      colour: "#1f8a5b",
      bg: "rgba(31,138,91,0.12)",
      Icon: CheckCircle2,
      summary:
        "Termite risk is low for your property profile. Annual or biennial monitoring inspections are still good practice, especially if conducive conditions emerge (e.g. new landscaping).",
      action:
        "Book a routine timber pest inspection (AS 4349.3) every 2 to 3 years. Monitor conducive conditions yourself.",
    },
    medium: {
      label: "Medium risk",
      colour: "#B8742C",
      bg: "rgba(184,116,44,0.15)",
      Icon: AlertTriangle,
      summary:
        "Termite risk is moderate. A combination of factors (age, location, construction, conducive conditions) means active monitoring is recommended.",
      action:
        "Book an AS 4349.3 timber pest inspection within the next few months. Then move to annual monitoring inspections.",
    },
    high: {
      label: "High risk",
      colour: "#B5202F",
      bg: "rgba(220,53,69,0.12)",
      Icon: Bug,
      summary:
        "Termite risk is high. Your property profile combines multiple risk factors - age, location, timber construction, conducive conditions, or known history. Active inspection and possibly treatment management is essential.",
      action:
        "Book an AS 4349.3 timber pest inspection urgently. If evidence is visible, do not disturb it - termites retreat and become harder to treat. Move to 6-monthly monitoring afterwards.",
    },
  } as const;

  const m = riskMeta[result.risk];
  const RiskIcon = m.Icon;

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-line)] p-7 md:p-9 shadow-[0_24px_60px_-24px_rgba(20,41,68,0.15)]">
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        <Select label="Property age" value={a.age} onChange={(v) => setA((s) => ({ ...s, age: v }))} options={AGE_OPTIONS} />
        <Select label="Suburb / area" value={a.suburb} onChange={(v) => setA((s) => ({ ...s, suburb: v }))} options={SUBURB_OPTIONS} />
        <Select
          label="Construction"
          value={a.construction}
          onChange={(v) => setA((s) => ({ ...s, construction: v }))}
          options={CONSTRUCTION_OPTIONS}
        />
        <Select
          label="Conducive conditions on site"
          value={a.conducive}
          onChange={(v) => setA((s) => ({ ...s, conducive: v }))}
          options={CONDUCIVE_OPTIONS}
        />
        <Select
          label="Known termite history"
          value={a.history}
          onChange={(v) => setA((s) => ({ ...s, history: v }))}
          options={HISTORY_OPTIONS}
          className="sm:col-span-2"
        />
      </div>

      <div
        className="rounded-2xl p-6 md:p-7 border-l-[6px] mb-7"
        style={{
          background: m.bg,
          borderLeftColor: m.colour,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span
            className="w-11 h-11 rounded-xl grid place-items-center flex-shrink-0"
            style={{ background: m.colour, color: "white" }}
          >
            <RiskIcon size={20} />
          </span>
          <div>
            <div className="font-[var(--font-mono)] text-[10.5px] tracking-[.14em] uppercase opacity-70">
              YOUR PROPERTY RATING
            </div>
            <div
              className="font-[var(--font-display)] font-extrabold text-[24px] leading-[1.1]"
              style={{ color: m.colour }}
            >
              {m.label}
            </div>
          </div>
        </div>
        <p className="text-[15.5px] text-[var(--color-fg)] leading-relaxed mb-3">{m.summary}</p>
        <p className="text-[15px] text-[var(--color-fg)] leading-relaxed m-0">
          <strong>Recommended:</strong> {m.action}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/contact" className="btn btn-primary">
          Book a pest inspection <ArrowRight size={14} />
        </Link>
        <Link href="/services/termite-inspection" className="btn btn-secondary">
          About termite inspections
        </Link>
      </div>

      <p className="mt-7 text-[13px] text-[var(--color-muted)] leading-relaxed">
        This is general guidance only. An AS 4349.3 inspection by a licensed inspector is the only
        reliable assessment of termite activity. We are not a pest treatment company - the network
        is inspection-only.
      </p>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { v: string; label: string }[];
  className?: string;
}) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-[13px] font-semibold text-[var(--color-primary-dark)] mb-1.5">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3 text-[15px] text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-container)] transition"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
