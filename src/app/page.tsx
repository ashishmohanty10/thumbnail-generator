import { ContainerWrapper } from "~/components/container-wrapper";
import { Header } from "~/components/landing-page/header";
import { HeroSection } from "~/components/landing-page/hero-section";

export default function HomePage() {
  return (
    <div className="">
      <ContainerWrapper>
        <Header />
      </ContainerWrapper>

      <HeroSection />
    </div>
  );
}
