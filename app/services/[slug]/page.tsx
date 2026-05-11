import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, FileText, Clock, Award, AlertCircle, Phone } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { SERVICE_CONTENT } from "@/data/services-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteForm } from "@/components/quote-form";
import { QuoteCta } from "@/components/quote-cta";
import { SectionHead } from "@/components/section-head";
import { ServiceSchema, FaqSchema } from "@/components/schema";

export function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const content = SERVICE_CONTENT[slug];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `https://houseinspectionadelaide.com.au/services/${slug}` },
  };
}

export default async function ServicePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const content = SERVICE_CONTENT[slug];
  if (!content) notFound();

  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceSchema name={service.name} description={content.intro} slug={slug} />
      <FaqSchema items={content.faq.map((f) => ({ question: f.q, answer: f.a }))} />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${slug}` },
        ]}
      />

      <section className="pt-12 pb-12">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
            <div>
              <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary)] mb-4">
                {content.standard}
              </div>
              <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.05] text-[var(--color-primary-dark)] mb-5">
                {content.h1}
              </h1>
              <p className="text-[18px] text-[var(--color-muted)] leading-relaxed max-w-[640px] mb-7">
                {content.intro}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <StatChip icon={<FileText size={18} />} label="From" value={`$${content.priceFrom}-${content.priceTo}`} />
                <StatChip icon={<Clock size={18} />} label="On site" value={content.duration} />
                <StatChip icon={<Award size={18} />} label="Report" value={content.turnaround} />
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Get 3 free quotes <ArrowRight size={16} />
                </Link>
                <a href={SITE.phoneHref} className="btn btn-secondary">
                  <Phone size={16} /> {SITE.phone}
                </a>
              </div>
            </div>

            <aside className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-line)]">
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-3">
                BEST FOR
              </div>
              <ul className="space-y-3">
                {content.whoFor.map((w) => (
                  <li key={w} className="flex gap-2.5 items-start text-[14.5px] text-[var(--color-fg)]">
                    <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                    {w}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap">
          <SectionHead
            eyebrow="WHAT'S COVERED"
            title={`Every ${service.short.toLowerCase()} in our network covers this scope.`}
            sub={`To the ${content.standard} standard. Inspector-specific scopes may extend further - that's part of what you compare in the three quotes.`}
          />
          <div className="grid md:grid-cols-2 gap-5">
            {content.whatsCovered.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <div className="font-[var(--font-display)] font-semibold text-[17px] text-[var(--color-primary-dark)] mb-2">
                  {item.title}
                </div>
                <p className="text-[14.5px] text-[var(--color-muted)] m-0 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap max-w-[920px]">
          <div className="bg-[var(--color-primary-dark)] text-white rounded-3xl p-10 md:p-14">
            <div className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase text-[var(--color-secondary-light)] mb-3.5">
              {content.asStandard.code}
            </div>
            <h2 className="font-[var(--font-display)] font-bold text-[clamp(24px,2.5vw,34px)] leading-[1.15] mb-4 text-white">
              {content.asStandard.title}
            </h2>
            <p className="text-[16px] text-white/80 leading-relaxed max-w-[640px]">
              {content.asStandard.body}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[920px]">
          <SectionHead eyebrow="WHY IT MATTERS" title="The Adelaide-specific case for this inspection." />
          <ul className="space-y-5">
            {content.whyMatter.map((reason, i) => (
              <li
                key={i}
                className="flex gap-4 items-start bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <span
                  className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0"
                  style={{
                    background: "rgba(184,116,44,0.15)",
                    color: "var(--color-secondary-dark)",
                  }}
                >
                  <AlertCircle size={18} />
                </span>
                <p className="text-[15.5px] text-[var(--color-fg)] m-0 leading-relaxed">{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="wrap grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <SectionHead
              eyebrow="GET MATCHED"
              title="3 free quotes inside 24 hours."
              sub="Brief us once, compare three independent inspectors, pick the one that suits your timeline and budget. Matching is free."
            />
          </div>
          <QuoteForm defaultService={service.name} />
        </div>
      </section>

      <section className="py-20 bg-[var(--color-cream)]">
        <div className="wrap max-w-[920px]">
          <SectionHead eyebrow="FAQ" title={`${service.short} questions Adelaide buyers ask.`} />
          <div className="space-y-4">
            {content.faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[var(--color-line)] bg-white p-6 open:shadow-[0_18px_40px_-20px_rgba(20,41,68,0.18)]"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-[var(--font-display)] font-semibold text-[17px] text-[var(--color-primary-dark)]">
                  {f.q}
                  <span className="ml-4 text-[var(--color-primary)] group-open:rotate-45 transition-transform text-[24px] leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {content.related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="wrap">
            <SectionHead eyebrow="RELATED" title="Other services Adelaide buyers often combine." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {content.related.map((rs) => {
                const r = SERVICES.find((s) => s.slug === rs);
                if (!r) return null;
                return (
                  <Link
                    key={rs}
                    href={`/services/${rs}`}
                    className="group bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-7 no-underline text-inherit transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_-16px_rgba(20,41,68,0.18)]"
                  >
                    <h3 className="text-[17px] mb-2 text-[var(--color-primary-dark)]">{r.name}</h3>
                    <p className="text-[14px] text-[var(--color-muted)] m-0 mb-4 leading-relaxed">{r.blurb}</p>
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13.5px] group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={13} />
                    </span>
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

function StatChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-[var(--color-cream)] border border-[var(--color-line)] rounded-xl p-3.5">
      <span
        className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0"
        style={{
          background: "var(--color-primary-container)",
          color: "var(--color-primary)",
        }}
      >
        {icon}
      </span>
      <div className="leading-[1.25]">
        <div className="font-[var(--font-mono)] text-[10px] tracking-[.12em] uppercase text-[var(--color-muted)]">
          {label}
        </div>
        <div className="font-semibold text-[14px] text-[var(--color-primary-dark)]">{value}</div>
      </div>
    </div>
  );
}
