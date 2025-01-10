import { ContainerWrapper } from "~/components/container-wrapper";
import { SubTitle, Title } from "../titles";
import { features } from "~/utils/constant";

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

        <div className="grid grid-cols-1 gap-10 py-5 xl:grid-cols-2">
          {features.map((item, idx) => (
            <div key={idx} className="">
              <div className="relative space-y-4 overflow-hidden rounded-xl border p-10 shadow-sm shadow-purple-400/60">
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-br from-purple-500 to-orange-200 opacity-80 blur-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </div>
  );
}
