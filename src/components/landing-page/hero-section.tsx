"use client";

import { ChevronRight } from "lucide-react";
import { ContainerWrapper } from "../container-wrapper";
import { HeroSubTitle, HeroTitle, Highlight } from "./hero-wrappers";
import { StarIcon } from "../icon/star-icon";
import { Button } from "../ui/button";
import { HeroImage } from "./hero-image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative py-32">
      <ContainerWrapper className="space-y-5 text-center">
        <div className="item-center group flex w-full justify-center">
          <Highlight className="flex items-center gap-1 text-purple-400 shadow-sm shadow-purple-400 transition-colors group-hover:shadow-md group-hover:shadow-purple-400">
            <StarIcon className="h-4 w-4 font-serif" />
            Create Thumbnails Now{" "}
            <ChevronRight
              size={14}
              className="transition-transform delay-75 group-hover:translate-x-2"
            />
          </Highlight>
        </div>

        <HeroTitle>
          Create{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text font-serif text-transparent">
            Captivating <br />
          </span>
          Thumbnails{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text font-serif text-transparent">
            Seamlessly
          </span>
        </HeroTitle>

        <HeroSubTitle className="mb-6">
          Upload your images effortlessly and watch as our app creates stunning
          thumbnails, placing bold, <br /> eye-catching text behind your
          characters for maximum visual impact.
        </HeroSubTitle>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="flex w-full items-center justify-center gap-5"
        >
          <Button className="shadow-sm shadow-purple-500 transition-colors">
            Get Started Now
          </Button>
        </motion.div>

        <HeroImage />
      </ContainerWrapper>
    </div>
  );
}
