import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import { GUIDE_CONTENT } from "@/data/guides-content";
import { Breadcrumb } from "@/components/breadcrumb";
import { QuoteCta } from "@/components/quote-cta";
import { ArticleSchema, FaqSchema } from "@/components/schema";

export function generateStaticParams() {
  return Object.keys(GUIDE_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = GUIDE_CONTENT[slug];
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://houseinspectionadelaide.com.au/guides/${slug}` },
  };
}

export default async function GuidePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const guide = GUIDE_CONTENT[slug];
  if (!guide) notFound();

  return (
    <>
      <ArticleSchema
        title={guide.h1}
        description={guide.answer}
        slug={`/guides/${slug}`}
        datePublished={guide.publishedAt}
      />
      <FaqSchema items={[{ question: guide.h1, answer: guide.answer }]} />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: guide.h1, href: `/guides/${slug}` },
        ]}
      />

      <article>
        <section className="pt-12 pb-12">
          <div className="wrap max-w-[820px]">
            <div className="flex items-center gap-2.5 text-[var(--color-secondary)] mb-4">
              <BookOpen size={16} />
              <span className="font-[var(--font-mono)] text-[11px] tracking-[.14em] uppercase">
                Adelaide guide
              </span>
            </div>
            <h1 className="font-[var(--font-display)] font-extrabold text-[clamp(34px,4vw,52px)] leading-[1.1] text-[var(--color-primary-dark)] mb-6">
              {guide.h1}
            </h1>
            <div
              className="rounded-2xl p-7 md:p-8 mb-2"
              style={{
                background: "var(--color-primary-container)",
                borderLeft: "5px solid var(--color-primary)",
              }}
            >
              <div className="font-[var(--font-mono)] text-[11px] tracking-[.12em] uppercase text-[var(--color-primary-dark)] mb-2">
                Quick answer
              </div>
              <p className="text-[17px] text-[var(--color-primary-dark)] leading-relaxed m-0">
                {guide.answer}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="wrap max-w-[820px]">
            <div className="prose-like">
              {guide.body.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="font-[var(--font-display)] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.15] text-[var(--color-primary-dark)] mb-4">
                    {section.heading}
                  </h2>
                  {section.paras.map((p, j) => (
                    <p
                      key={j}
                      className="text-[16.5px] leading-[1.7] text-[var(--color-fg)] mb-4 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {guide.related.length > 0 && (
          <section className="py-20 bg-[var(--color-cream)]">
            <div className="wrap max-w-[920px]">
              <div className="font-[var(--font-mono)] text-[12px] tracking-[.14em] uppercase text-[var(--color-secondary-dark)] mb-4">
                RELATED GUIDES
              </div>
              <h2 className="font-[var(--font-display)] font-bold text-[clamp(24px,2.5vw,32px)] text-[var(--color-primary-dark)] mb-8">
                Continue reading
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {guide.related.map((rs) => {
                  const r = GUIDE_CONTENT[rs];
                  if (!r) return null;
                  return (
                    <Link
                      key={rs}
                      href={`/guides/${rs}`}
                      className="group bg-white border border-[var(--color-line)] rounded-2xl p-6 no-underline text-inherit transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(20,41,68,0.18)]"
                    >
                      <h3 className="text-[17px] mb-2 text-[var(--color-primary-dark)]">{r.h1}</h3>
                      <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold text-[13.5px] group-hover:gap-2.5 transition-all">
                        Read <ArrowRight size={13} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </article>

      <QuoteCta />
    </>
  );
}
