"use client";

import { useEffect, useReducer } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Clock, ShieldCheck, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site";

const HERO_PHASES = [
  {
    key: "see",
    label: "WHAT YOU SEE",
    tone: "navy",
    callout: {
      tag: "WHAT YOU SEE",
      text: "The agent's brochure. Fresh paint. Tidy garden. Lifestyle dream.",
    },
  },
  {
    key: "selling",
    label: "WHAT'S BEING SOLD",
    tone: "copper",
    callout: {
      tag: "WHAT'S BEING SOLD",
      text: "The story. Make an offer fast before someone else does.",
    },
  },
  {
    key: "find",
    label: "WHAT WE FIND",
    tone: "red",
    callout: {
      tag: "INSPECTION REPORT",
      text: "Cracks behind paint. Roof leaks. Movement in the footings. The reasons to negotiate or walk away.",
    },
  },
] as const;

export function Hero() {
  const [idx, tick] = useReducer((s: number) => (s + 1) % HERO_PHASES.length, 0);

  useEffect(() => {
    const id = setInterval(tick, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-[132px] pb-[88px] text-white"
      style={{
        background:
          "radial-gradient(120% 90% at 0% 0%, var(--color-primary-light) 0%, var(--color-primary) 45%, var(--color-primary-dark) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 90% -10%, rgba(184,116,44,.18), transparent 60%), radial-gradient(600px 600px at 10% 110%, rgba(46,90,143,.5), transparent 60%)",
        }}
      />
      <div className="wrap relative">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-14 items-center">
          <div>
            <div className="eyebrow text-[var(--color-secondary-light)] mb-4">
              <span className="dot" />
              ADELAIDE BUILDING INSPECTORS · MATCHED IN 24 HOURS
            </div>
            <h1 className="text-[clamp(40px,5vw,60px)] mb-4">
              Independent building inspections,{" "}
              <em
                style={{ fontStyle: "normal", color: "var(--color-secondary-light)" }}
              >
                matched to your Adelaide property.
              </em>
            </h1>
            <p className="text-[18px] leading-relaxed text-white/85 mb-7 max-w-[560px]">
              Get three free quotes from licensed independent Adelaide building inspectors
              inside 24 hours. AS 4349.1 compliant reports. No agent referrals, no conflicts
              of interest.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-4 mb-7">
              <ProofItem icon={<Clock size={16} />} label="Same-day match" />
              <ProofItem icon={<BadgeCheck size={16} />} label="AS 4349.1 compliant" />
              <ProofItem icon={<ShieldCheck size={16} />} label="$5M public liability" />
            </div>

            <div className="flex flex-wrap gap-3 mb-7">
              <Link href="/contact" className="btn btn-primary">
                Get 3 Free Quotes <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneHref} className="btn btn-ghost">
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-5 border-t border-white/10">
              {["Licensed inspectors", "$5M insured", "AS 4349.1 compliant", "24hr match"].map(
                (t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 text-[12.5px] text-white/75 font-medium"
                  >
                    <BadgeCheck size={14} className="text-[var(--color-secondary-light)]" />
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative aspect-[4/5] max-w-[480px] ml-auto w-full">
            {HERO_PHASES.map((phase, i) => (
              <article
                key={phase.key}
                className={`absolute inset-0 rounded-[18px] overflow-hidden transition-opacity duration-1000 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  boxShadow:
                    "0 30px 60px -20px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.08)",
                }}
                aria-hidden={i !== idx}
              >
                <PhaseSurface tone={phase.tone} label={phase.label} />
                <div
                  className="absolute left-[22px] right-[22px] bottom-[22px] flex items-center gap-3 px-4 py-3.5 rounded-[12px] text-[13px] leading-[1.4]"
                  style={{
                    background:
                      phase.tone === "red"
                        ? "rgba(220,53,69,.96)"
                        : "rgba(20,41,68,.92)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="font-[var(--font-mono)] text-[10px] tracking-[.14em] uppercase px-2 py-1 rounded-[5px]"
                    style={{ background: "rgba(255,255,255,.18)" }}
                  >
                    {phase.callout.tag}
                  </span>
                  <span>{phase.callout.text}</span>
                </div>
              </article>
            ))}
            <div className="absolute right-[-34px] top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
              {HERO_PHASES.map((phase, i) => (
                <button
                  key={phase.key}
                  type="button"
                  onClick={() => {
                    for (let n = 0; n < (i - idx + HERO_PHASES.length) % HERO_PHASES.length; n++)
                      tick();
                  }}
                  aria-label={`Show ${phase.label}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === idx
                      ? "bg-[var(--color-secondary-light)] scale-150"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <div className="absolute -bottom-9 left-0 right-0 text-center font-[var(--font-mono)] text-[11px] tracking-[.08em] text-white/50">
              SAME PROPERTY · THREE PERSPECTIVES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-2.5 text-[14px] font-medium text-white/92">
      <span
        className="w-7 h-7 rounded-[8px] grid place-items-center text-[var(--color-secondary-light)]"
        style={{ background: "rgba(216,146,83,.18)" }}
      >
        {icon}
      </span>
      {label}
    </span>
  );
}

function PhaseSurface({ tone, label }: { tone: string; label: string }) {
  const bg =
    tone === "navy"
      ? "repeating-linear-gradient(135deg, #1f3851 0 14px, #233e5b 14px 28px)"
      : tone === "copper"
        ? "repeating-linear-gradient(135deg, #3a2918 0 14px, #44321f 14px 28px)"
        : "repeating-linear-gradient(135deg, #f0ebe0 0 14px, #ece6d8 14px 28px)";
  const labelColor = tone === "red" ? "rgba(0,0,0,.06)" : "rgba(0,0,0,.45)";
  const labelFg = tone === "red" ? "#5a4a2a" : "#fff";
  return (
    <div className="absolute inset-0 grid place-items-center" style={{ background: bg }}>
      <span
        className="font-[var(--font-mono)] text-[12px] tracking-[.12em] uppercase px-3.5 py-2.5 rounded-[8px] border border-dashed"
        style={{
          background: labelColor,
          color: labelFg,
          borderColor: tone === "red" ? "rgba(20,41,68,.25)" : "rgba(255,255,255,.35)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
