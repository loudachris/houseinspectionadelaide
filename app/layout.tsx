import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationSchema } from "@/components/schema";

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://houseinspectionadelaide.com.au"),
  title: {
    default: "House Inspection Adelaide | Independent Building Inspectors, Matched in 24 Hours",
    template: "%s | House Inspection Adelaide",
  },
  description:
    "Get matched with 3 independent licensed Adelaide building inspectors within 24 hours. AS 4349.1 compliant. No agent referrals, no conflicts of interest.",
  applicationName: "House Inspection Adelaide",
  authors: [{ name: "House Inspection Adelaide" }],
  generator: "Next.js",
  keywords: [
    "building inspections adelaide",
    "house inspection adelaide",
    "building inspector adelaide",
    "pre purchase building inspection adelaide",
    "building and pest inspection adelaide",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://houseinspectionadelaide.com.au",
    siteName: "House Inspection Adelaide",
    title: "House Inspection Adelaide | Independent Building Inspectors",
    description:
      "Get matched with 3 independent licensed Adelaide building inspectors within 24 hours. AS 4349.1 compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Inspection Adelaide",
    description:
      "Independent building inspectors matched in 24 hours across Adelaide. AS 4349.1 compliant.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://houseinspectionadelaide.com.au",
  },
};

const GA_ID = "G-9VSYM6TJ56";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <OrganizationSchema />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}
        </Script>
      </body>
    </html>
  );
}
