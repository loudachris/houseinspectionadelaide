import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use | House Inspection Adelaide",
  description: "Terms of use for the House Inspection Adelaide matching service.",
  alternates: { canonical: "https://houseinspectionadelaide.com.au/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Terms", href: "/terms" }]} />
      <section className="pt-12 pb-24">
        <div className="wrap max-w-[820px]">
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(32px,4vw,46px)] leading-[1.1] text-[var(--color-primary-dark)] mb-8">
            Terms of Use
          </h1>
          <div className="space-y-6 text-[16.5px] leading-relaxed text-[var(--color-fg)]">
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-2 mb-3">
              About the service
            </h2>
            <p>
              House Inspection Adelaide operates a matching service that connects property buyers
              with independent licensed building inspectors in Adelaide and surrounding South
              Australia. We do not conduct inspections ourselves.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              The matching service is free
            </h2>
            <p>
              We do not charge users for matching. You pay only the inspector you choose to book.
              The inspector charges you directly for their inspection.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              Inspector responsibility
            </h2>
            <p>
              The inspection itself, the report, and any advice arising from it are the
              responsibility of the licensed inspector you engage. House Inspection Adelaide is not
              party to the inspection contract between you and the inspector.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              No legal or financial advice
            </h2>
            <p>
              Information on this website is general in nature and does not constitute legal,
              financial, insurance, or property-purchase advice. For decisions about specific
              properties, consult a licensed conveyancer or solicitor.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              Pricing ranges
            </h2>
            <p>
              Indicative pricing ranges shown on the site are based on the network at the time of
              publication. Actual inspector quotes will vary by property and inspector. You
              compare three quotes before booking.
            </p>
            <h2 className="font-[var(--font-display)] font-bold text-[22px] text-[var(--color-primary-dark)] mt-8 mb-3">
              Liability
            </h2>
            <p>
              To the maximum extent permitted by Australian Consumer Law, House Inspection
              Adelaide is not liable for any direct, indirect, or consequential loss arising from
              the matching service or any inspection conducted by an inspector matched through the
              service.
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
