import { ContainerWrapper } from "~/components/container-wrapper";
import { TestimonialCard } from "./testimonials-card";
import { SubTitle, Title } from "../titles";

export function TestimonialsSection() {
  return (
    <div
      id="testimonials"
      style={{ scrollBehavior: "smooth" }}
      className="py-16"
    >
      <ContainerWrapper className="mb-8">
        <Title>
          Transform Your <span className="gradientText font-serif">Images</span>{" "}
          <br /> Into Captivating{" "}
          <span className="gradientText font-serif">Thumbnails</span>
        </Title>

        <SubTitle>
          Upload your images effortlessly and watch as our app creates <br />{" "}
          stunning thumbnails, placing bold, eye-catching text behind your{" "}
          <br /> characters for maximum visual impact.
        </SubTitle>
      </ContainerWrapper>
      <TestimonialCard />
    </div>
  );
}
