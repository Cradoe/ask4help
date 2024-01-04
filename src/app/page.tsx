import { AboutSection } from "./_components/about-section";
import { Faqs } from "./_components/faqs";
import { HeroSection } from "./_components/hero-section";
import { HowItWorks } from "./_components/how-it-works";
import { WhyChooseUs } from "./_components/why-choose-us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <AboutSection />
      <WhyChooseUs />
      <Faqs />
    </main>
  );
}
