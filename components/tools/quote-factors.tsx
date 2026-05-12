"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Minus, ArrowDown } from "lucide-react";

type Tag = "increase" | "neutral" | "decrease";

type FactorOutput = {
  title: string;
  tag: Tag;
  body: string;
};

const SIZE_OPTIONS = [
  { v: "unit", label: "1-2br unit / apartment" },
  { v: "3br-1s", label: "3br single-storey standalone" },
  { v: "4br-1s", label: "4+br single-storey standalone" },
  { v: "2s", label: "Two-storey home" },
  { v: "acreage", label: "Acreage / rural-residential" },
];

const AGE_OPTIONS = [
  { v: "pre1940", label: "Pre-1940 heritage stone / brick" },
  { v: "1940-1986", label: "1940-1986 brick veneer" },
  { v: "1987-2010", label: "1987-2010 modern" },
  { v: "2010+", label: "2010+ new build" },
];

const SCOPE_OPTIONS = [
  { v: "building", label: "Pre-purchase building only (AS 4349.1)" },
  { v: "combo", label: "Building + Pest combo (AS 4349.1 + .3)" },
  { v: "pest", label: "Pest / termite inspection only" },
  { v: "handover", label: "Handover / practical completion" },
  { v: "staged", label: "Staged construction (multiple stages)" },
  { v: "defect", label: "Defect / targeted inspection" },
];

const URGENCY_OPTIONS = [
  { v: "same-day", label: "Same-day or next-day report" },
  { v: "48hr", label: "Standard 48-hour turnaround" },
  { v: "flexible", label: "Flexible / not urgent" },
];

const LOCATION_OPTIONS = [
  { v: "metro", label: "Adelaide metro" },
  { v: "hills", label: "Adelaide Hills" },
  { v: "fleurieu", label: "Fleurieu / Victor Harbor" },
  { v: "northern", label: "Outer northern / Gawler corridor" },
  { v: "coastal-south", label: "Southern coastal (Aldinga, Seaford)" },
];

function compute(answers: {
  size: string;
  age: string;
  scope: string;
  urgency: string;
  location: string;
}): FactorOutput[] {
  const out: FactorOutput[] = [];

  // Size
  const sizeMap: Record<string, FactorOutput> = {
    unit: {
      title: "Smaller property",
      tag: "decrease",
      body: "Units and apartments take less time on site than standalone homes. Inspectors typically quote lower.",
    },
    "3br-1s": {
      title: "Baseline property size",
      tag: "neutral",
      body: "3br single-storey is the baseline most inspectors price against. Expect mid-range quotes for your property type.",
    },
    "4br-1s": {
      title: "Larger property",
      tag: "increase",
      body: "More square metreage means more inspection time. Inspectors usually quote at the upper end for your property size.",
    },
    "2s": {
      title: "Two-storey",
      tag: "increase",
      body: "Two storeys means more roof access, more walls, more rooms. Adds inspection time, reflected in quotes.",
    },
    acreage: {
      title: "Acreage / rural-residential",
      tag: "increase",
      body: "Multiple buildings, water tanks, septic, retaining walls, larger boundary. Specialist scope, top-of-range pricing.",
    },
  };
  if (sizeMap[answers.size]) out.push(sizeMap[answers.size]);

  // Age
  const ageMap: Record<string, FactorOutput> = {
    pre1940: {
      title: "Heritage stone / pre-1940",
      tag: "increase",
      body: "Heritage construction needs an inspector experienced with stonework, lime mortar, salt damp, and old roof structures. Heritage-experienced inspectors typically quote at the upper end.",
    },
    "1940-1986": {
      title: "1940-1986 construction",
      tag: "neutral",
      body: "Standard mid-century brick veneer. Most inspectors are comfortable with this era. Expect mid-range pricing.",
    },
    "1987-2010": {
      title: "Modern construction",
      tag: "neutral",
      body: "Modern brick veneer / mixed construction. Standard scope, mid-range pricing typical.",
    },
    "2010+": {
      title: "New-build / 2010+",
      tag: "decrease",
      body: "Slab-and-frame construction is the fastest scope. Lower complexity inspections often quote at the lower end.",
    },
  };
  if (ageMap[answers.age]) out.push(ageMap[answers.age]);

  // Scope
  const scopeMap: Record<string, FactorOutput> = {
    building: {
      title: "Pre-purchase building only",
      tag: "neutral",
      body: "Standard AS 4349.1 scope. Single-visit, single report.",
    },
    combo: {
      title: "Building + Pest combo",
      tag: "neutral",
      body: "Two AS standards (4349.1 + 4349.3) in one visit. Combos typically quote LOWER than two separate bookings because the inspector only mobilises once.",
    },
    pest: {
      title: "Pest / termite only",
      tag: "decrease",
      body: "Shorter site visit, focused scope. Usually the lowest standalone quote.",
    },
    handover: {
      title: "Handover / practical completion",
      tag: "neutral",
      body: "Defect-list focused. Pricing depends on build size and project complexity.",
    },
    staged: {
      title: "Staged construction",
      tag: "increase",
      body: "Multiple visits across slab / frame / lock-up / fix-out / completion. Higher total cost but each stage catches cheaper-to-fix defects.",
    },
    defect: {
      title: "Targeted defect inspection",
      tag: "decrease",
      body: "AS 4349.7 narrow scope. Faster site visit, focused on your specific concern. Usually the cheapest scope option.",
    },
  };
  if (scopeMap[answers.scope]) out.push(scopeMap[answers.scope]);

  // Urgency
  const urgencyMap: Record<string, FactorOutput> = {
    "same-day": {
      title: "Same-day / next-day urgency",
      tag: "increase",
      body: "Most inspectors charge a premium for compressed turnaround. Common during cooling-off period. Worth it for the timeline.",
    },
    "48hr": {
      title: "Standard turnaround",
      tag: "neutral",
      body: "48-hour report is what most inspectors quote against. No premium, no discount.",
    },
    flexible: {
      title: "Flexible timing",
      tag: "decrease",
      body: "Some inspectors offer a small discount for off-peak weekday bookings without urgency. Worth asking.",
    },
  };
  if (urgencyMap[answers.urgency]) out.push(urgencyMap[answers.urgency]);

  // Location
  const locationMap: Record<string, FactorOutput> = {
    metro: {
      title: "Adelaide metro",
      tag: "neutral",
      body: "Most inspectors are metro-based, so no travel premium. Expect competitive pricing.",
    },
    hills: {
      title: "Adelaide Hills",
      tag: "neutral",
      body: "Hills properties may attract travel from city-based inspectors. We route requests to hills-based inspectors who don't charge this premium.",
    },
    fleurieu: {
      title: "Fleurieu / Victor Harbor",
      tag: "increase",
      body: "Distance from Adelaide can mean a travel surcharge with some inspectors. Specialist coastal inspectors in the network minimise this.",
    },
    northern: {
      title: "Outer-north / Gawler corridor",
      tag: "neutral",
      body: "Some inspectors charge travel. The network includes northern-based inspectors avoiding the surcharge.",
    },
    "coastal-south": {
      title: "Southern coast",
      tag: "neutral",
      body: "Coastal inspector specialists in the network avoid travel surcharges for southern locations.",
    },
  };
  if (locationMap[answers.location]) out.push(locationMap[answers.location]);

  return out;
}

export function QuoteFactors() {
  const [answers, setAnswers] = useState({
    size: "3br-1s",
    age: "1940-1986",
    scope: "building",
    urgency: "48hr",
    location: "metro",
  });

  const factors = useMemo(() => compute(answers), [answers]);

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-line)] p-7 md:p-9 shadow-[0_24px_60px_-24px_rgba(20,41,68,0.15)]">
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        <SelectBlock
          label="Property size & type"
          value={answers.size}
          onChange={(v) => setAnswers((s) => ({ ...s, size: v }))}
          options={SIZE_OPTIONS}
        />
        <SelectBlock
          label="Property age & construction"
          value={answers.age}
          onChange={(v) => setAnswers((s) => ({ ...s, age: v }))}
          options={AGE_OPTIONS}
        />
        <SelectBlock
          label="Inspection scope"
          value={answers.scope}
          onChange={(v) => setAnswers((s) => ({ ...s, scope: v }))}
          options={SCOPE_OPTIONS}
        />
        <SelectBlock
          label="Turnaround urgency"
          value={answers.urgency}
          onChange={(v) => setAnswers((s) => ({ ...s, urgency: v }))}
          options={URGENCY_OPTIONS}
        />
        <SelectBlock
          label="Location"
          value={answers.location}
          onChange={(v) => setAnswers((s) => ({ ...s, location: v }))}
          options={LOCATION_OPTIONS}
          className="sm:col-span-2"
        />
      </div>

      <div>
        <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
          FACTORS DRIVING YOUR QUOTE
        </div>
        <ul className="space-y-3">
          {factors.map((f) => (
            <li
              key={f.title}
              className="flex gap-3.5 items-start bg-[var(--color-cream)] border border-[var(--color-line)] rounded-xl p-4"
            >
              <span
                className="w-9 h-9 rounded-lg grid place-items-center flex-shrink-0"
                style={{
                  background:
                    f.tag === "increase"
                      ? "rgba(220,53,69,0.12)"
                      : f.tag === "decrease"
                        ? "rgba(31,138,91,0.12)"
                        : "var(--color-primary-container)",
                  color:
                    f.tag === "increase"
                      ? "var(--color-accent-dark)"
                      : f.tag === "decrease"
                        ? "#1f8a5b"
                        : "var(--color-primary)",
                }}
              >
                {f.tag === "increase" ? (
                  <TrendingUp size={16} />
                ) : f.tag === "decrease" ? (
                  <ArrowDown size={16} />
                ) : (
                  <Minus size={16} />
                )}
              </span>
              <div>
                <div className="font-[var(--font-display)] font-semibold text-[15.5px] text-[var(--color-primary-dark)] mb-0.5">
                  {f.title}
                </div>
                <div className="text-[14px] text-[var(--color-muted)] leading-relaxed">
                  {f.body}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/contact" className="btn btn-primary">
          Get 3 actual quotes <ArrowRight size={14} />
        </Link>
        <Link href="/pricing" className="btn btn-secondary">
          How pricing works
        </Link>
      </div>
    </div>
  );
}

function SelectBlock({
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
