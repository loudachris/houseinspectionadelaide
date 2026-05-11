"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

const FEED = [
  { nm: "Sarah", sub: "Glenelg", t: "requested a pre-purchase inspection", when: "2 min ago" },
  { nm: "Marcus", sub: "Unley", t: "matched with 3 inspectors", when: "8 min ago" },
  { nm: "Priya", sub: "Mount Barker", t: "booked a building + pest combo", when: "14 min ago" },
  { nm: "Tom", sub: "North Adelaide", t: "received their inspection report", when: "22 min ago" },
  { nm: "Linda", sub: "Prospect", t: "requested a handover inspection", when: "31 min ago" },
];

export function SocialProof() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showT = setTimeout(() => setVisible(true), 6000);
    const cycle = setInterval(() => setIdx((i) => (i + 1) % FEED.length), 7500);
    return () => {
      clearTimeout(showT);
      clearInterval(cycle);
    };
  }, []);

  if (!visible) return null;
  const item = FEED[idx];
  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-[320px] hidden md:block animate-[slideUp_0.4s_ease-out]">
      <div className="rounded-xl bg-[var(--color-primary-dark)] text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] p-3.5 px-4 flex items-center gap-3.5">
        <div
          className="w-9 h-9 rounded-full grid place-items-center flex-shrink-0"
          style={{ background: "rgba(216,146,83,0.2)", color: "var(--color-secondary-light)" }}
        >
          <Activity size={16} />
        </div>
        <div className="leading-[1.35]">
          <div className="text-[13px]">
            <strong className="text-white font-semibold">{item.nm}</strong>{" "}
            <span className="text-white/70">from {item.sub}</span>
          </div>
          <div className="text-[12px] text-white/65">
            {item.t} <span className="opacity-70">· {item.when}</span>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
