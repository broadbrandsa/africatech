import { AboutDsg } from "@/components/sections/about-dsg";
import { AnchorEvents } from "@/components/sections/anchor-events";
import { Audience } from "@/components/sections/audience";
import { Benefits } from "@/components/sections/benefits";
import { Cta } from "@/components/sections/cta";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { MarketMoment } from "@/components/sections/market-moment";
import { Offer } from "@/components/sections/offer";
import { Proven } from "@/components/sections/proven";
import { SiteNav } from "@/components/sections/site-nav";
import { Speakers } from "@/components/sections/speakers";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Stats />
      <AnchorEvents />
      <Audience />
      <Speakers />
      <Offer />
      <Proven />
      <Testimonials />
      <Experience />
      <Benefits />
      <AboutDsg />
      <HowItWorks />
      <Faq />
      <MarketMoment />
      <Cta />
      <Footer />
    </main>
  );
}
