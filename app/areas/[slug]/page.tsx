import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { SUBURBS } from "@/lib/site";
import { SUBURB_CONTENT } from "@/data/suburbs-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";

export function generateStaticParams() {
  return Object.keys(SUBURB_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const content = SUBURB_CONTENT[slug];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `https://houseinspectionadelaide.com.au/areas/${slug}` },
  };
}

export default async function SuburbPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const content = SUBURB_CONTENT[slug];
  if (!content) notFound();
  const suburb = SUBURBS.find((s) => s.slug === slug);
  if (!suburb) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
          { name: content.name, href: `/areas/${slug}` },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap max-w-[920px]">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-[var(--color-primary-container)] text-[var(--color-primary)] font-semibold text-[13px]">
            <MapPin size={14} /> {suburb.region} · {content.name}, SA
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(36px,4.5vw,54px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
            Building Inspections {content.name}
          </h1>
          <p className="text-[17.5px] text-[var(--color-muted)] leading-relaxed max-w-[680px] mb-6">
            {content.intro}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[920px]">
          <SectionHead eyebrow="PROPERTY MIX" title={`The ${content.name} property profile.`} />
          <p className="text-[17px] text-[var(--color-fg)] leading-relaxed max-w-[700px]">
            {content.propertyTypes}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap">
          <SectionHead
            eyebrow="LOCAL ISSUES"
            title={`What ${content.name} inspectors look for.`}
            sub="Suburb-specific issues that a generic inspection scope can miss. Every inspector matched to you knows these patterns."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {content.localIssues.map((issue) => (
              <article
                key={issue.title}
                className="bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0"
                    style={{
                      background: "rgba(220,53,69,0.1)",
                      color: "var(--color-accent-dark)",
                    }}
                  >
                    <AlertCircle size={18} />
                  </span>
                  <div>
                    <h3 className="text-[17px] mb-2 text-[var(--color-primary-dark)]">{issue.title}</h3>
                    <p className="text-[14.5px] text-[var(--color-muted)] m-0 leading-relaxed">
                      {issue.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="LOCAL NOTE" title={`When you book a ${content.name} inspection.`} light />
          <p className="text-[18px] text-white/85 leading-relaxed">{content.notes}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <SectionHead
              eyebrow={`MATCH WITH ${content.name.toUpperCase()} INSPECTORS`}
              title="Three free quotes inside 24 hours."
              sub={`We route ${content.name} requests to inspectors with local experience and minimal travel cost.`}
            />
          </div>
          <QuoteForm defaultSuburb={content.name} />
        </div>
      </section>

      {content.nearby.length > 0 && (
        <section className="py-20 bg-[var(--color-cream)]">
          <div className="wrap">
            <SectionHead eyebrow="NEARBY" title="Other suburbs we cover" />
            <div className="grid sm:grid-cols-3 gap-4">
              {content.nearby.map((slug) => {
                const nearby = SUBURB_CONTENT[slug];
                if (!nearby) return null;
                return (
                  <Link
                    key={slug}
                    href={`/areas/${slug}`}
                    className="group bg-white border border-[var(--color-line)] rounded-xl px-5 py-4 flex items-center justify-between no-underline text-inherit hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-container)] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin size={16} className="text-[var(--color-primary)]" />
                      <span className="font-semibold text-[14.5px] text-[var(--color-primary-dark)]">
                        {nearby.name}
                      </span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[var(--color-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-primary)] transition-all"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <QuoteCta />
    </>
  );
}
