import type { MetadataRoute } from "next";
import { SERVICE_CONTENT } from "@/data/services-content";
import { SUBURB_CONTENT } from "@/data/suburbs-content";
import { GUIDE_CONTENT } from "@/data/guides-content";
import { GLOSSARY } from "@/data/glossary-content";
import { STANDARDS } from "@/data/standards-content";

const BASE = "https://houseinspectionadelaide.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/standards`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/cooling-off-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tools/pre-purchase-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tools/which-inspection`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tools/quote-factors`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/termite-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/sample-report`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/how-we-make-money`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/book-online`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const services: MetadataRoute.Sitemap = Object.keys(SERVICE_CONTENT).map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const areas: MetadataRoute.Sitemap = Object.keys(SUBURB_CONTENT).map((slug) => ({
    url: `${BASE}/areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guides: MetadataRoute.Sitemap = Object.keys(GUIDE_CONTENT).map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const glossary: MetadataRoute.Sitemap = Object.keys(GLOSSARY).map((slug) => ({
    url: `${BASE}/glossary/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const standards: MetadataRoute.Sitemap = Object.keys(STANDARDS).map((slug) => ({
    url: `${BASE}/standards/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...services, ...areas, ...guides, ...glossary, ...standards];
}
