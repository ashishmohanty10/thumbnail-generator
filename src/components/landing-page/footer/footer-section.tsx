import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { ContainerWrapper } from "~/components/container-wrapper";
import { Button } from "~/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-transparent-white mt-12 border-t py-6 text-sm">
      <ContainerWrapper className="flex flex-col justify-between md:flex-row">
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="text-grey mb-8 flex items-center text-2xl font-semibold">
            Thumb <span className="gradientText font-serif">Hero</span>
          </div>
          <div className="text-grey mt-auto flex space-x-4">
            <Button asChild size="icon" variant="ghost">
              <Link href="https://x.com/tw_sk1llz" target="_blank">
                <Twitter />
              </Link>
            </Button>

            <Button asChild size="icon" variant="ghost">
              <Link href="https://github.com/ashishmohanty10" target="_blank">
                <Github />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <p className="gradientText text-sm">Made By Me</p>
        </div>
      </ContainerWrapper>
    </footer>
  );
};
