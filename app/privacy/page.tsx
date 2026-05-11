import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | House Inspection Adelaide",
  description: "Privacy policy for the House Inspection Adelaide matching service.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Privacy", href: "/privacy" }]} />
      <section className="pt-12 pb-24">
        <div className="wrap max-w-[820px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(32px,4vw,46px)] leading-[1.1] text-[var(--color-primary-dark)] mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-[16.5px] leading-relaxed text-[var(--color-fg)]">
            <p>
              House Inspection Adelaide ("we", "us", "our") respects your privacy and is bound by
              the Australian Privacy Principles under the Privacy Act 1988 (Cth).
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              What we collect
            </h2>
            <p>
              When you submit a quote request, we collect your name, phone, email, property
              address, suburb, inspection type, and any notes you provide. We only use these
              details to match you with up to three independent licensed building inspectors.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              How we share your details
            </h2>
            <p>
              Your details are only shared with the three matched inspectors so they can prepare a
              quote. We do not sell your details, share them with marketers, or pass them to real
              estate agents, builders, or any other third party.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              How long we keep your details
            </h2>
            <p>
              Quote request details are retained for 24 months for service quality and audit
              purposes, then deleted. You can request earlier deletion at any time via the
              contact form.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              Cookies and analytics
            </h2>
            <p>
              We use Google Analytics 4 with IP anonymisation to understand how the site is used.
              No personally identifiable information is collected via analytics. You can opt out by
              using browser do-not-track settings or Google&apos;s opt-out extension.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              Contact about privacy
            </h2>
            <p>
              For any privacy question, use the contact form on the site and we will respond
              within two business days.
            </p>
            <p className="text-[14px] text-[var(--color-muted)] mt-10">
              Last updated: 11 May 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
