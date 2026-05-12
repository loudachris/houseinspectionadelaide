"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 800) setShow(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-[320px] hidden md:block">
      <div className="rounded-2xl bg-white shadow-[0_24px_60px_-12px_rgba(20,41,68,0.45)] border border-[var(--color-line)] p-5">
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="absolute top-2.5 right-2.5 text-[var(--color-muted)] hover:text-[var(--color-fg)]"
        >
          <X size={14} />
        </button>
        <div className="font-[var(--font-mono)] text-[10px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-1">
          24HR MATCH
        </div>
        <div className="font-[var(--font-display)] font-bold text-[15px] text-[var(--color-primary-dark)] leading-[1.3]">
          3 free quotes from licensed Adelaide inspectors.
        </div>
        <div className="mt-3 flex gap-2">
          <Link href="/contact" className="btn btn-primary flex-1 justify-center text-[13px] py-2.5 px-3">
            Get quotes <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
