import { SITE, SUBURBS } from "@/lib/site";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    areaServed: SUBURBS.map((s) => ({
      "@type": "Place",
      name: `${s.name}, South Australia`,
    })),
    serviceType: "Building Inspection Matching Service",
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.region.coords.lat,
      longitude: SITE.region.coords.lng,
    },
    sameAs: [],
    priceRange: "$$",
  };
  return <JsonLd data={data} />;
}

export function ServiceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}/services/${slug}`,
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: { "@type": "City", name: "Adelaide" },
    serviceType: name,
  };
  return <JsonLd data={data} />;
}

export function FaqSchema({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${SITE.url}${item.href}`,
    })),
  };
  return <JsonLd data={data} />;
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE.url}${slug}`,
    datePublished,
    dateModified: datePublished,
    author: { "@id": `${SITE.url}#organization` },
    publisher: { "@id": `${SITE.url}#organization` },
  };
  return <JsonLd data={data} />;
}
