import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://houseinspectionadelaide.com.au/sitemap.xml",
    host: "https://houseinspectionadelaide.com.au",
  };
}
