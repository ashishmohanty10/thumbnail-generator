"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Background } from "../../background";

export function HeroImage() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto mt-10 max-w-sm rounded-lg border border-purple-400 p-2 dark:border-purple-500/40 md:max-w-3xl xl:max-w-5xl"
    >
      <div className="relative mx-auto w-full rounded-md border border-purple-400/40 backdrop-blur-md">
        <Image
          src="/image.png"
          alt="hero-image"
          width={800}
          height={800}
          className="h-full w-full rounded-md object-contain"
        />
        <Background />
      </div>
    </motion.div>
  );
}
