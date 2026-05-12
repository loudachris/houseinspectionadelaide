import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import { GLOSSARY } from "@/data/glossary-content";
import { SERVICES } from "@/lib/site";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";

export function generateStaticParams() {
  return Object.keys(GLOSSARY).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const entry = GLOSSARY[slug];
  if (!entry) return {};
  return {
    title: `${entry.term} - Adelaide Building Inspection Glossary`,
    description: entry.short,
    alternates: {
      canonical: `https://houseinspectionadelaide.com.au/glossary/${slug}`,
    },
  };
}

export default async function GlossaryEntryPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const entry = GLOSSARY[slug];
  if (!entry) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Glossary", href: "/glossary" },
          { name: entry.term, href: `/glossary/${slug}` },
        ]}
      />

      <article>
        <section className="pt-12 pb-12">
          <div className="wrap max-w-[760px]">
            <div className="flex items-center gap-2.5 text-[var(--color-secondary)] mb-4">
              <BookOpen size={16} />
              <span className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase">
                GLOSSARY · ADELAIDE
              </span>
            </div>
            <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-6">
              {entry.term}
            </h1>
            <div
              className="rounded-2xl p-6 md:p-7 mb-2"
              style={{
                background: "var(--color-primary-container)",
                borderLeft: "5px solid var(--color-primary)",
              }}
            >
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase text-[var(--color-primary-dark)] mb-2">
                Plain English
              </div>
              <p className="text-[16.5px] text-[var(--color-primary-dark)] leading-relaxed m-0">
                {entry.short}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="wrap max-w-[760px]">
            {entry.body.map((p, i) => (
              <p
                key={i}
                className="text-[16.5px] leading-[1.75] text-[var(--color-fg)] mb-5 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {(entry.relatedSlugs?.length || entry.relatedServices?.length) && (
          <section className="py-16 bg-[var(--color-cream)]">
            <div className="wrap max-w-[920px]">
              {entry.relatedSlugs && entry.relatedSlugs.length > 0 && (
                <div className="mb-10">
                  <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-4">
                    RELATED TERMS
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {entry.relatedSlugs.map((s) => {
                      const r = GLOSSARY[s];
                      if (!r) return null;
                      return (
                        <Link
                          key={s}
                          href={`/glossary/${s}`}
                          className="group bg-white border border-[var(--color-line)] rounded-xl p-5 no-underline text-inherit transition-all hover:-translate-y-0.5"
                        >
                          <h3 className="font-[var(--font-display)] font-semibold text-[15px] text-[var(--color-primary-dark)] mb-1.5">
                            {r.term}
                          </h3>
                          <p className="text-[13px] text-[var(--color-muted)] m-0 leading-relaxed line-clamp-2">
                            {r.short}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {entry.relatedServices && entry.relatedServices.length > 0 && (
                <div>
                  <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-4">
                    RELATED INSPECTIONS
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {entry.relatedServices.map((s) => {
                      const svc = SERVICES.find((x) => x.slug === s);
                      if (!svc) return null;
                      return (
                        <Link
                          key={s}
                          href={`/services/${s}`}
                          className="group bg-white border border-[var(--color-line)] rounded-xl p-5 no-underline text-inherit flex items-center justify-between gap-3 hover:border-[var(--color-primary)]"
                        >
                          <div>
                            <h3 className="font-[var(--font-display)] font-semibold text-[15.5px] text-[var(--color-primary-dark)] mb-1">
                              {svc.name}
                            </h3>
                            <p className="text-[13px] text-[var(--color-muted)] m-0">
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
            </div>
          </section>
        )}
      </article>

      <QuoteCta />
    </>
  );
}
