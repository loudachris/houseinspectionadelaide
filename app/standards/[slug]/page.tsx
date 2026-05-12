import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, FileText, AlertCircle } from "lucide-react";
import { STANDARDS } from "@/data/standards-content";
import { SERVICES } from "@/lib/site";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export function generateStaticParams() {
  return Object.keys(STANDARDS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const std = STANDARDS[slug];
  if (!std) return {};
  return {
    title: std.metaTitle,
    description: std.metaDescription,
    alternates: { canonical: `https://houseinspectionadelaide.com.au/standards/${slug}` },
  };
}

export default async function StandardPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const std = STANDARDS[slug];
  if (!std) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Standards", href: "/standards" },
          { name: std.code, href: `/standards/${slug}` },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[820px]">
          <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
            {std.fullCode}
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            {std.title}
          </h1>
          <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[720px]">
            {std.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="SCOPE" title="What's inspected under this standard." />
          <ul className="space-y-3">
            {std.scope.map((s) => (
              <li
                key={s}
                className="flex gap-3 items-start bg-white border border-[var(--color-line)] rounded-xl p-4"
              >
                <CheckCircle2
                  size={18}
                  className="text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                />
                <span className="text-[15px] text-[var(--color-fg)] leading-[1.5]">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="WHAT THE STANDARD DEFINES"
            title="Key requirements and structure."
          />
          <div className="space-y-4">
            {std.whatItDefines.map((item) => (
              <article
                key={item.title}
                className="bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-6"
              >
                <h3 className="font-[var(--font-display)] font-semibold text-[18px] text-[var(--color-primary-dark)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[var(--color-muted)] m-0 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-cream)]">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="WHO USES IT" title="Inspections under this standard are typically for..." />
          <ul className="space-y-2.5">
            {std.whoUsesIt.map((u) => (
              <li
                key={u}
                className="flex gap-3 items-start bg-white border border-[var(--color-line)] rounded-xl px-5 py-3.5"
              >
                <ArrowRight size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <span className="text-[15px] text-[var(--color-fg)]">{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="wrap max-w-[820px]">
          <SectionHead
            eyebrow="REPORT REQUIREMENTS"
            title="Every compliant report includes these."
          />
          <div className="bg-[var(--color-cream)] rounded-2xl border border-[var(--color-line)] overflow-hidden">
            <ul className="divide-y divide-[var(--color-line)]">
              {std.reportRequirements.map((r) => (
                <li key={r} className="flex gap-3 items-start px-5 py-4">
                  <FileText
                    size={16}
                    className="text-[var(--color-secondary-dark)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[15px] text-[var(--color-fg)]">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-dark)] text-white">
        <div className="wrap max-w-[820px]">
          <div className="flex gap-4 items-start mb-5">
            <span
              className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0"
              style={{
                background: "rgba(220,53,69,0.15)",
                color: "var(--color-accent-light)",
              }}
            >
              <AlertCircle size={22} />
            </span>
            <div>
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-light)] mb-1.5">
                LIMITATIONS
              </div>
              <h2 className="font-[var(--font-display)] font-bold text-[24px] md:text-[28px] leading-[1.15]">
                What this standard doesn&apos;t cover
              </h2>
            </div>
          </div>
          <p className="text-[16px] leading-[1.7] text-white/85 m-0">{std.limitations}</p>
        </div>
      </section>

      {(std.relatedServices.length > 0 || std.relatedStandards.length > 0) && (
        <section className="py-16 bg-white">
          <div className="wrap max-w-[920px]">
            {std.relatedServices.length > 0 && (
              <div className="mb-10">
                <SectionHead eyebrow="RELATED INSPECTIONS" title={`Inspections conducted under ${std.code}`} />
                <div className="grid sm:grid-cols-2 gap-4">
                  {std.relatedServices.map((s) => {
                    const svc = SERVICES.find((x) => x.slug === s);
                    if (!svc) return null;
                    return (
                      <Link
                        key={s}
                        href={`/services/${s}`}
                        className="group bg-[var(--color-cream)] border border-[var(--color-line)] rounded-xl p-5 no-underline text-inherit flex items-center justify-between gap-3 hover:bg-white hover:border-[var(--color-primary)]"
                      >
                        <div>
                          <h3 className="font-[var(--font-display)] font-semibold text-[16px] text-[var(--color-primary-dark)] mb-1">
                            {svc.name}
                          </h3>
                          <p className="text-[13.5px] text-[var(--color-muted)] m-0">
                            {svc.blurb}
                          </p>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-[var(--color-primary)] flex-shrink-0 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {std.relatedStandards.length > 0 && (
              <div>
                <SectionHead eyebrow="OTHER STANDARDS" title="Related standards in the AS 4349 family" />
                <div className="grid sm:grid-cols-3 gap-4">
                  {std.relatedStandards.map((s) => {
                    const r = STANDARDS[s];
                    if (!r) return null;
                    return (
                      <Link
                        key={s}
                        href={`/standards/${s}`}
                        className="group bg-[var(--color-cream)] border border-[var(--color-line)] rounded-xl p-5 no-underline text-inherit hover:bg-white hover:border-[var(--color-primary)]"
                      >
                        <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase text-[var(--color-secondary-dark)] mb-1.5">
                          {r.code}
                        </div>
                        <h3 className="font-[var(--font-display)] font-semibold text-[14.5px] text-[var(--color-primary-dark)] leading-[1.3] mb-1">
                          {r.title}
                        </h3>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <QuoteCta />
    </>
  );
}
