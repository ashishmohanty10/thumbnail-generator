import { ContainerWrapper } from "~/components/container-wrapper";
import { FeatureCard } from "./feature-card";
import { SubTitle, Title } from "../titles";

export function FeatureSection() {
  return (
    <div className="py-16" id="features" style={{ scrollBehavior: "smooth" }}>
      <ContainerWrapper className="space-y-5 text-center">
        <Title>
          Transform Your <span className="gradientText font-serif">Images</span>{" "}
          Into <br className="hidden xl:block" /> Captivating{" "}
          <span className="gradientText font-serif">Thumbnails</span>
        </Title>

        <SubTitle>
          Upload your images effortlessly and watch as our app creates{" "}
          <br className="hidden md:block" /> stunning thumbnails, placing bold,
          eye-catching text behind your <br className="hidden md:block" />{" "}
          characters for maximum visual impact.
        </SubTitle>

        <FeatureCard />
      </ContainerWrapper>
    </div>
  );
}
