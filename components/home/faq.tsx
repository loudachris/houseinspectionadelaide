"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHead } from "../section-head";
import { FaqSchema } from "../schema";

const ITEMS = [
  {
    q: "How much does a building inspection cost in Adelaide?",
    a: "Prices vary by inspector, property type, size, age, scope, and turnaround urgency. We don't set prices - inspectors do. The matching service gives you three independent quotes so you can compare actual pricing for your specific property. Combos (building + pest) usually quote lower than booking separately.",
  },
  {
    q: "How long does an inspection take?",
    a: "Most pre-purchase inspections take 2 to 3 hours on site. Heritage or larger homes can take 4+ hours. The AS 4349.1 compliant report is typically delivered within 48 hours of the inspection.",
  },
  {
    q: "Do I need a building and pest combo?",
    a: "Strongly recommended for any pre-1987 home or any property with timber framing. Modern slab-and-steel homes carry lower pest risk but combo is still good due diligence. One visit, two reports.",
  },
  {
    q: "What's the difference between a defect inspection and pre-purchase?",
    a: "A pre-purchase inspection is broad: every system, every surface, AS 4349.1 compliant. A defect inspection is targeted at known issues; you tell the inspector what to focus on. Defect inspections cover less ground.",
  },
  {
    q: "How do I choose an independent inspector?",
    a: "Three rules: verify the SA Building Work Contractors Licence, confirm professional indemnity insurance, and check they have no commercial relationship with the seller or agent. Every inspector in our network meets all three before you ever see them.",
  },
  {
    q: "What is an AS 4349.1 inspection?",
    a: "AS 4349.1-2007 is the Australian Standard for pre-purchase residential inspections. It defines scope, format, and limitations. Reports from licensed, insured inspectors follow it. Cheap or unlicensed 'inspections' often skip it, which matters if you need to use the report in negotiation or dispute.",
  },
  {
    q: "Do you charge for the matching service?",
    a: "No. The matching service is free for property buyers. The inspector you choose charges you directly for their inspection. We make no commission from the inspector and have no commercial relationship with them.",
  },
  {
    q: "Are you the inspectors?",
    a: "No. House Inspection Adelaide is an independent lead-matching service. We connect property buyers with independent licensed Adelaide building inspectors. We don't conduct inspections, set prices, or handle the inspection contract - that's directly between you and the inspector you choose.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <FaqSchema items={ITEMS.map((i) => ({ question: i.q, answer: i.a }))} />
      <div className="wrap max-w-[920px]">
        <SectionHead
          eyebrow="FAQ"
          title="Questions Adelaide buyers ask before they book."
          sub="Quick answers on scope, timing, choosing the right inspector, and how the matching service actually works."
          center
        />

        <div className="space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-[var(--color-line)] bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-[var(--font-display)] font-semibold text-[17px] text-[var(--color-primary-dark)] pr-6">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full grid place-items-center transition-colors ${
                      isOpen
                        ? "bg-[var(--color-accent)] text-white"
                        : "bg-[var(--color-primary-container)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-[var(--color-muted)] m-0">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
