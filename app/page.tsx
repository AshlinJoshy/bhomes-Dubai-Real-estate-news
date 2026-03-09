import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ConfidenceIndicator } from "@/components/confidence-indicator";
import { MarketSignals } from "@/components/market-signals";
import { VideoBriefings } from "@/components/video-briefings";
import { DataSnapshot } from "@/components/data-snapshot";
import { MarketTimeline } from "@/components/market-timeline";
import { NewsletterSection } from "@/components/newsletter-section";
import { AdvisorCTA } from "@/components/advisor-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ConfidenceIndicator />
        <MarketSignals />
        <VideoBriefings />
        <DataSnapshot />
        <MarketTimeline />
        <NewsletterSection />
        <AdvisorCTA />
      </main>
      <SiteFooter />
    </>
  );
}
