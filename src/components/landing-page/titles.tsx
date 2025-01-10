"use client";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { StarIcon } from "../icon/star-icon";

interface ServiceProps {
  children: React.ReactNode;
  className?: string;
}

interface ServiceElementsProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: ServiceElementsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "text-brand mb-4 text-center text-3xl font-bold leading-snug tracking-tight",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const SubTitle = ({ children, className }: ServiceElementsProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "text-text text-balance text-center text-lg font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </motion.p>
  );
};

export const Feature = ({ children, className }: ServiceProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const FeatureHighlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={cn(
        "text-brand mb-3 flex items-center gap-2 text-sm font-semibold",
        className,
      )}
    >
      <StarIcon className="h-4 w-4 text-purple-300" />
      {children}
      <StarIcon className="h-4 w-4 text-purple-300" />
    </motion.div>
  );
};
