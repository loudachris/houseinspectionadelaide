import { Hero } from "@/components/home/hero";
import { DisclaimerBanner } from "@/components/disclaimer-banner";
import { RevealCards } from "@/components/home/reveal-cards";
import { HowItWorks } from "@/components/home/how-it-works";
import { ServicesSection } from "@/components/home/services-section";
import { SuburbsSection } from "@/components/home/suburbs-section";
import { ReportSection } from "@/components/home/report-section";
import { PricePreview } from "@/components/home/price-preview";
import { Testimonials } from "@/components/home/testimonials";
import { Difference } from "@/components/home/difference";
import { ToolsStrip } from "@/components/home/tools-strip";
import { FAQ } from "@/components/home/faq";
import { Urgency } from "@/components/home/urgency";
import { ComboPromo } from "@/components/home/combo-promo";
import { FloatingCta } from "@/components/home/floating-cta";
import { SocialProof } from "@/components/home/social-proof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DisclaimerBanner variant="muted" />
      <RevealCards />
      <HowItWorks />
      <ServicesSection />
      <SuburbsSection />
      <ReportSection />
      <PricePreview />
      <Testimonials />
      <Difference />
      <ToolsStrip />
      <FAQ />
      <Urgency />
      <ComboPromo />
      <FloatingCta />
      <SocialProof />
    </>
  );
}
