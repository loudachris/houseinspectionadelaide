"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, RotateCcw } from "lucide-react";

type Question = {
  id: string;
  prompt: string;
  options: { label: string; value: string }[];
};

const QUESTIONS: Question[] = [
  {
    id: "role",
    prompt: "Where are you in the process?",
    options: [
      { label: "Considering buying - haven't made an offer yet", value: "considering" },
      { label: "Made an offer / about to sign / in cooling-off", value: "buying" },
      { label: "Building a new home - inspection during the build", value: "building" },
      { label: "Owner / occupier - existing property concern", value: "owner" },
      { label: "Builder dispute or warranty claim", value: "dispute" },
    ],
  },
  {
    id: "age",
    prompt: "Property age & construction?",
    options: [
      { label: "Pre-1940 heritage stone or brick villa", value: "heritage" },
      { label: "1940-1986 brick veneer / weatherboard", value: "pre1987" },
      { label: "1987-2010 brick veneer / mixed", value: "modern" },
      { label: "2010 onwards new build", value: "newbuild" },
      { label: "Apartment / unit / townhouse", value: "strata" },
    ],
  },
  {
    id: "urgency",
    prompt: "How urgent is your timeline?",
    options: [
      { label: "Cooling-off - days, not weeks", value: "cooling-off" },
      { label: "Within 1-2 weeks", value: "soon" },
      { label: "Within a month", value: "month" },
      { label: "Just researching", value: "researching" },
    ],
  },
  {
    id: "concerns",
    prompt: "Any specific concerns?",
    options: [
      { label: "No specific concerns - want a full general assessment", value: "general" },
      { label: "Cracks, movement, structural concerns", value: "structural" },
      { label: "Possible water damage, damp, or mould", value: "moisture" },
      { label: "Termite or timber pest concerns", value: "pest" },
      { label: "Asbestos worried (pre-1987 home or planning renovations)", value: "asbestos" },
      { label: "Specific defects I want investigated", value: "defects" },
    ],
  },
  {
    id: "scope",
    prompt: "Comfort level with scope?",
    options: [
      { label: "Want the strongest possible due diligence (combo)", value: "full" },
      { label: "Standard pre-purchase only", value: "standard" },
      { label: "Targeted on my known concern - keep it focused", value: "targeted" },
    ],
  },
];

function recommend(answers: Record<string, string>): {
  primary: { name: string; href: string; reason: string };
  secondary?: { name: string; href: string; reason: string };
} {
  // Owner / dispute = defect inspection
  if (answers.role === "dispute") {
    return {
      primary: {
        name: "Defect Inspection",
        href: "/services/defect-inspection",
        reason:
          "AS 4349.7 targeted defect reports are designed for builder disputes and warranty claims.",
      },
    };
  }

  // Building new home
  if (answers.role === "building") {
    if (answers.urgency === "cooling-off" || answers.urgency === "soon") {
      return {
        primary: {
          name: "Handover Inspection",
          href: "/services/handover-inspection",
          reason:
            "Practical-completion / handover inspections catch defects before final payment to the builder.",
        },
      };
    }
    return {
      primary: {
        name: "Staged Construction Inspections",
        href: "/services/staged-building-inspections",
        reason:
          "Five-stage inspections (slab, frame, lock-up, fix-out, completion) catch defects early when they're cheapest to fix.",
      },
      secondary: {
        name: "Handover Inspection (if late in build)",
        href: "/services/handover-inspection",
        reason: "If you've already passed lock-up, jump straight to handover.",
      },
    };
  }

  // Owner with specific concern
  if (answers.role === "owner") {
    if (answers.concerns === "pest") {
      return {
        primary: {
          name: "Termite Inspection",
          href: "/services/termite-inspection",
          reason: "Focused on active termite detection. AS 4349.3 compliant.",
        },
      };
    }
    if (answers.concerns === "asbestos") {
      return {
        primary: {
          name: "Asbestos Inspection",
          href: "/services/asbestos-inspection",
          reason: "NATA-accredited sampling for any pre-1987 home or planned renovation.",
        },
      };
    }
    if (answers.concerns === "moisture") {
      return {
        primary: {
          name: "Mould Inspection",
          href: "/services/mould-inspection",
          reason: "Visual + moisture + optional air sampling to locate the moisture source.",
        },
      };
    }
    return {
      primary: {
        name: "Defect Inspection",
        href: "/services/defect-inspection",
        reason: "AS 4349.7 targeted defect inspection on your specific concern.",
      },
    };
  }

  // Buying / considering paths from here

  // Asbestos
  if (answers.concerns === "asbestos") {
    return {
      primary: {
        name: "Pre-Purchase Building Inspection",
        href: "/services/pre-purchase-building-inspection",
        reason:
          "Get the standard inspection first - it will flag asbestos concerns and recommend further sampling.",
      },
      secondary: {
        name: "Asbestos Inspection (add-on)",
        href: "/services/asbestos-inspection",
        reason: "Add asbestos-specific sampling if the standard inspection flags concerns.",
      },
    };
  }

  // Strata
  if (answers.age === "strata") {
    return {
      primary: {
        name: "Pre-Purchase Building Inspection",
        href: "/services/pre-purchase-building-inspection",
        reason:
          "Standard pre-purchase covers your unit's accessible interior. Pair with a separate strata report from your conveyancer.",
      },
    };
  }

  // Targeted scope
  if (answers.scope === "targeted") {
    return {
      primary: {
        name: "Defect Inspection",
        href: "/services/defect-inspection",
        reason: "AS 4349.7 focused on your specific concern. Faster, lower scope than full pre-purchase.",
      },
    };
  }

  // Pre-1987 buyers - combo is the call
  const isPre1987 = answers.age === "heritage" || answers.age === "pre1987";
  if (isPre1987 || answers.scope === "full" || answers.concerns === "pest") {
    return {
      primary: {
        name: "Building + Pest Combo",
        href: "/services/building-and-pest-inspection",
        reason:
          "Combo is the strongest call for pre-1987 homes (timber pest risk) and the best-value due diligence overall.",
      },
      secondary: {
        name: "Standalone Pre-Purchase",
        href: "/services/pre-purchase-building-inspection",
        reason: "If you've already arranged pest separately, standalone building works too.",
      },
    };
  }

  // Default - modern home, standard scope
  return {
    primary: {
      name: "Pre-Purchase Building Inspection",
      href: "/services/pre-purchase-building-inspection",
      reason: "AS 4349.1 full-scope pre-purchase. The baseline due diligence for any property purchase.",
    },
    secondary: {
      name: "Add a Pest Inspection",
      href: "/services/pest-inspection",
      reason:
        "Good due diligence even on modern slab-and-frame homes if there's significant timber decking, pergolas, or sub-floor.",
    },
  };
}

export function WhichInspection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const totalSteps = QUESTIONS.length;
  const isResult = step >= totalSteps;

  function pick(value: string) {
    const q = QUESTIONS[step];
    setAnswers((s) => ({ ...s, [q.id]: value }));
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  if (isResult) {
    const result = recommend(answers);
    return (
      <div className="bg-white rounded-2xl border border-[var(--color-line)] p-8 md:p-10 shadow-[0_24px_60px_-24px_rgba(20,41,68,0.15)]">
        <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-3">
          OUR RECOMMENDATION
        </div>
        <h2 className="font-[var(--font-display)] font-extrabold text-[28px] md:text-[34px] leading-[1.1] text-[var(--color-primary-dark)] mb-4">
          {result.primary.name}
        </h2>
        <p className="text-[16px] text-[var(--color-fg)] leading-relaxed mb-6">
          {result.primary.reason}
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href={result.primary.href} className="btn btn-primary">
            Learn about this inspection <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Request 3 free quotes
          </Link>
        </div>

        {result.secondary && (
          <div className="border-t border-[var(--color-line)] pt-7">
            <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-2">
              ALSO CONSIDER
            </div>
            <h3 className="font-[var(--font-display)] font-semibold text-[20px] text-[var(--color-primary-dark)] mb-2">
              {result.secondary.name}
            </h3>
            <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-4">
              {result.secondary.reason}
            </p>
            <Link href={result.secondary.href} className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-[14px]">
              Learn more <ArrowRight size={13} />
            </Link>
          </div>
        )}

        <button
          type="button"
          onClick={restart}
          className="mt-8 inline-flex items-center gap-2 text-[14px] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
        >
          <RotateCcw size={13} /> Start over
        </button>
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="bg-white rounded-2xl border border-[var(--color-line)] p-8 md:p-10 shadow-[0_24px_60px_-24px_rgba(20,41,68,0.15)]">
      <div className="flex items-center justify-between mb-7">
        <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary)]">
          QUESTION {step + 1} OF {totalSteps}
        </div>
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
          >
            <ArrowLeft size={13} /> Back
          </button>
        )}
      </div>

      <div
        className="h-1.5 rounded-full mb-7 overflow-hidden"
        style={{ background: "rgba(20,41,68,0.08)" }}
      >
        <div
          className="h-full transition-all"
          style={{
            background: "var(--color-primary)",
            width: `${(step / totalSteps) * 100}%`,
          }}
        />
      </div>

      <h2 className="font-[var(--font-display)] font-bold text-[24px] md:text-[28px] leading-[1.15] text-[var(--color-primary-dark)] mb-7">
        {q.prompt}
      </h2>

      <div className="space-y-2.5">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => pick(opt.value)}
            className="group w-full text-left px-5 py-4 rounded-xl border border-[var(--color-line)] bg-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-container)] transition-all flex items-center justify-between gap-4"
          >
            <span className="text-[15.5px] text-[var(--color-fg)] font-medium">{opt.label}</span>
            <span
              className="w-7 h-7 rounded-full grid place-items-center flex-shrink-0 transition-colors"
              style={{
                background: "var(--color-primary-container)",
                color: "var(--color-primary)",
              }}
            >
              <CheckCircle2 size={14} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
