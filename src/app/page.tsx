import { AboutDsg } from "@/components/sections/about-dsg";
import { Audience } from "@/components/sections/audience";
import { Benefits } from "@/components/sections/benefits";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Offer } from "@/components/sections/offer";
import { Proven } from "@/components/sections/proven";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Audience />
      <Offer />
      <Proven />
      <Testimonials />
      <Benefits />
      <AboutDsg />
      <HowItWorks />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
