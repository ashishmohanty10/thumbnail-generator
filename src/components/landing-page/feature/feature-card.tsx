"use client";

import { features } from "~/utils/constant";
import { motion } from "framer-motion";

export function FeatureCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-10 py-5 md:grid-cols-2"
    >
      {features.map((item, idx) => (
        <div key={idx} className="">
          <div className="relative flex flex-col items-center justify-center space-y-4 overflow-hidden rounded-xl border p-10 shadow-sm shadow-purple-400/60">
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-2xl font-semibold"
            >
              {item.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-sm text-muted-foreground"
            >
              {item.description}
            </motion.p>

            <BGSecondary />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export function BGSecondary() {
  return (
    <div className="absolute bottom-0 right-0 h-20 w-20 bg-gradient-to-br from-purple-500 to-orange-200 opacity-80 blur-3xl"></div>
  );
}
