import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center pt-24 pb-16">
      <div className="wrap max-w-[640px] text-center">
        <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-3">
          404 · NOT FOUND
        </div>
        <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.1] text-[var(--color-primary-dark)] mb-4">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-[17px] text-[var(--color-muted)] leading-relaxed mb-7">
          The page may have moved, or the link may be wrong. Head back to the homepage or jump
          straight to the matching form.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            <Home size={16} /> Go home
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Get 3 free quotes <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
