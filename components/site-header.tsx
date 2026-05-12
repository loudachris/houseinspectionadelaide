"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/pricing", label: "How pricing works" },
  { href: "/about", label: "About" },
  { href: "/guides", label: "Guides" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(20,41,68,0.96)] backdrop-blur-md shadow-[0_2px_24px_-10px_rgba(0,0,0,0.3)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="wrap">
        <div className="flex items-center gap-7 h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 text-white no-underline">
            <span
              className="grid place-items-center w-[38px] h-[38px] rounded-[9px] text-white font-[var(--font-display)] font-extrabold text-[16px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.25)",
              }}
            >
              HIA
            </span>
            <span className="flex flex-col leading-[1.05]">
              <span className="font-[var(--font-display)] font-bold text-[15px] tracking-[.01em]">
                House Inspection Adelaide
              </span>
              <span className="text-[11px] opacity-75 tracking-[.12em] uppercase">
                Independent matching service
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex gap-1 ml-auto">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/85 px-3 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-auto lg:ml-0">
            <Link href="/contact" className="btn btn-primary">
              Get 3 Free Quotes
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden ml-auto text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-5 flex flex-col gap-2 border-t border-white/10 pt-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Get 3 Free Quotes
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
