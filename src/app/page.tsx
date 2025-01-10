import { ContainerWrapper } from "~/components/container-wrapper";
import { FeatureSection } from "~/components/landing-page/feature/feature-section";
import { Header } from "~/components/landing-page/header";
import { HeroSection } from "~/components/landing-page/hero/hero-section";
import { TestimonialsSection } from "~/components/landing-page/testimonial/testimonials-section";

export default function HomePage() {
  return (
    <div className="px-4 xl:p-0">
      <ContainerWrapper>
        <Header />
      </ContainerWrapper>

      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
    </div>
  );
}
