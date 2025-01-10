"use client";

import React from "react";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementsProps {
  children: React.ReactNode;
  className?: string;
}

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      className={cn(
        "mb-4 pt-6 text-center text-6xl font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {children}
    </motion.h1>
  );
};

export const HeroSubTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      className={cn(
        "py-1 text-center text-lg font-medium text-slate-400",
        className,
      )}
    >
      {children}
    </motion.p>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={cn("text-center", className)}>{children}</div>;
};

export const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      className={cn(
        "flex w-fit cursor-pointer items-center justify-center rounded-3xl border border-purple-400 px-4 py-1 text-sm font-semibold",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
