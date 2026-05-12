"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, RotateCcw, Printer, ArrowRight } from "lucide-react";

type Item = { id: string; label: string };
type Group = { id: string; title: string; items: Item[] };

const GROUPS: Group[] = [
  {
    id: "external",
    title: "Approach & external",
    items: [
      { id: "ext-1", label: "Stepped or diagonal cracks in external walls (esp. above doors/windows)" },
      { id: "ext-2", label: "Bricks or render bulging, blown, or visibly leaning" },
      { id: "ext-3", label: "Salt-damp efflorescence on lower brick courses" },
      { id: "ext-4", label: "Site drainage - does land slope towards or away from the house?" },
      { id: "ext-5", label: "Retaining walls - lean, cracks, drainage at base" },
      { id: "ext-6", label: "Boundary fence condition and obvious ownership questions" },
    ],
  },
  {
    id: "roof",
    title: "Roof, gutters, drainage",
    items: [
      { id: "roof-1", label: "Roof tiles - cracked, missing, displaced, mossy" },
      { id: "roof-2", label: "Ridge capping mortar - crumbling, gaps, recent patches" },
      { id: "roof-3", label: "Gutter sag, rust streaks, blocked or detached downpipes" },
      { id: "roof-4", label: "Downpipes discharge to legal stormwater (not just into garden)" },
      { id: "roof-5", label: "Visible flashings around chimneys and roof penetrations" },
    ],
  },
  {
    id: "internal-general",
    title: "Internal - structural cues",
    items: [
      { id: "int-1", label: "Diagonal cracks at door/window corners (look behind furniture)" },
      { id: "int-2", label: "Doors stick or don't close cleanly = possible movement" },
      { id: "int-3", label: "Floors that feel sloped or springy underfoot" },
      { id: "int-4", label: "Ceiling sag, water staining (even faint rings)" },
      { id: "int-5", label: "Fresh paint patches that look suspicious - covering what?" },
      { id: "int-6", label: "Musty smell in any room, behind closed doors, or sub-floor" },
    ],
  },
  {
    id: "wet-areas",
    title: "Bathrooms, kitchens, laundries",
    items: [
      { id: "wet-1", label: "Tile lippage (tiles not flush) and grout condition" },
      { id: "wet-2", label: "Silicone seals around shower, bath, basin - perished or missing?" },
      { id: "wet-3", label: "Floor falls towards drain (or does water pool in corners?)" },
      { id: "wet-4", label: "Leaks under sinks, around shower waste, behind taps" },
      { id: "wet-5", label: "Soft floor underfoot near showers and baths" },
      { id: "wet-6", label: "Exhaust fans working, vented externally not into roof void" },
    ],
  },
  {
    id: "windows-doors",
    title: "Windows, doors, glazing",
    items: [
      { id: "win-1", label: "Window frames - rust, perished seals, fogged double glazing" },
      { id: "win-2", label: "Window locks and security latches functional" },
      { id: "win-3", label: "Internal doors close cleanly, latches engage" },
      { id: "win-4", label: "External doors weather-sealed, deadlocks work" },
    ],
  },
  {
    id: "electrical-plumbing",
    title: "Electrical, plumbing, gas",
    items: [
      { id: "ele-1", label: "Switchboard age - modern RCDs (safety switches) or old ceramic fuses?" },
      { id: "ele-2", label: "Visible exposed wiring, junction boxes without covers" },
      { id: "ele-3", label: "Hot water system age (look for sticker/plate on unit)" },
      { id: "ele-4", label: "Gas points functional, visible gas pipes" },
      { id: "ele-5", label: "Smoke alarms present in bedrooms and hallways" },
    ],
  },
  {
    id: "sub-floor-roof-void",
    title: "Sub-floor & roof void (if accessible)",
    items: [
      { id: "sub-1", label: "Sub-floor vents - blocked by garden beds, paving, or skirting?" },
      { id: "sub-2", label: "Visible moisture, fungal smell, or staining under floor" },
      { id: "sub-3", label: "Mud-tubes on brick piers (subterranean termite sign)" },
      { id: "sub-4", label: "Roof void insulation completeness, water staining" },
    ],
  },
  {
    id: "termite-pest",
    title: "Termite / timber pest signs",
    items: [
      { id: "pst-1", label: "Frass (small pile of timber dust) at base of skirting or framing" },
      { id: "pst-2", label: "Borer flight holes in floorboards, joinery, architraves" },
      { id: "pst-3", label: "Timber-to-ground contact: sleepers, decking posts, fence posts" },
      { id: "pst-4", label: "Tree stumps near house (termite-attractive)" },
    ],
  },
  {
    id: "external-buildings",
    title: "Garage, shed, outbuildings",
    items: [
      { id: "out-1", label: "Garage door operates cleanly" },
      { id: "out-2", label: "Outbuildings approved (council certificate?) or DIY?" },
      { id: "out-3", label: "Pool fencing compliance (if applicable)" },
      { id: "out-4", label: "Decking, pergola structural integrity, timber pest signs" },
    ],
  },
  {
    id: "questions",
    title: "Ask the agent (and note the answer)",
    items: [
      { id: "ask-1", label: "Year of build / major renovation dates" },
      { id: "ask-2", label: "Any previous building work disputes or claims?" },
      { id: "ask-3", label: "Form 1 / Vendor's Statement reviewed?" },
      { id: "ask-4", label: "Reason for sale" },
      { id: "ask-5", label: "Recent inspection report from the seller?" },
    ],
  },
];

const STORAGE_KEY = "hia-checklist-v1";

export function PrePurchaseChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setChecked(parsed);
      }
    } catch {
      // Ignore localStorage errors
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // Ignore localStorage errors
    }
  }, [checked, loaded]);

  function toggle(id: string) {
    setChecked((s) => ({ ...s, [id]: !s[id] }));
  }

  function reset() {
    if (confirm("Reset all ticks?")) {
      setChecked({});
    }
  }

  function print() {
    window.print();
  }

  const totalItems = GROUPS.reduce((sum, g) => sum + g.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-7">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 print:hidden">
        <div className="flex-1 bg-[var(--color-primary-container)] rounded-2xl p-5">
          <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-primary-dark)] mb-1">
            PROGRESS
          </div>
          <div className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)]">
            {checkedCount} of {totalItems} items ticked
          </div>
          <div
            className="mt-3 h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(20,41,68,0.12)" }}
          >
            <div
              className="h-full transition-all"
              style={{
                background: "var(--color-primary)",
                width: `${(checkedCount / totalItems) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={print}
            className="btn btn-secondary"
          >
            <Printer size={14} /> Print
          </button>
          <button
            type="button"
            onClick={reset}
            className="btn btn-secondary"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      {GROUPS.map((group) => (
        <section
          key={group.id}
          className="bg-white border border-[var(--color-line)] rounded-2xl p-6 md:p-7 break-inside-avoid"
        >
          <h2 className="font-[var(--font-display)] font-bold text-[19px] text-[var(--color-primary-dark)] mb-4">
            {group.title}
          </h2>
          <ul className="space-y-1">
            {group.items.map((item) => {
              const isChecked = !!checked[item.id];
              return (
                <li key={item.id}>
                  <label
                    className="flex gap-3 items-start cursor-pointer py-2 px-1 rounded-md hover:bg-[var(--color-cream)]"
                  >
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-md border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                          : "bg-white border-[var(--color-line)]"
                      }`}
                    >
                      {isChecked && <Check size={13} strokeWidth={3} />}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(item.id)}
                      className="sr-only"
                    />
                    <span
                      className={`text-[15px] leading-[1.55] ${
                        isChecked
                          ? "text-[var(--color-muted)] line-through"
                          : "text-[var(--color-fg)]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <div className="bg-[var(--color-primary-dark)] text-white rounded-2xl p-7 md:p-8 print:hidden">
        <h2 className="font-[var(--font-display)] font-bold text-[22px] mb-2">
          Done a walk-through?
        </h2>
        <p className="text-[15px] text-white/80 leading-relaxed mb-5">
          Brief us with anything you flagged. The three matched inspectors will pay particular
          attention to your concerns on site.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Get 3 free quotes <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
