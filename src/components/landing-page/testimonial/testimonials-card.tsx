"use client";

import { Repeat2, ThumbsUp } from "lucide-react";
import { testimonials } from "~/utils/constant";
import { motion } from "framer-motion";

export function TestimonialCard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, amount: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mask-image-custom mask-image-custom mb-8 flex items-center overflow-hidden"
      >
        <div className="animate-infinite-scroll flex [--animation-delay:100s]">
          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border-transparent-border mx-4 flex min-w-[40rem] flex-col items-center space-y-2 rounded-lg border p-5"
            >
              <div className="flex w-full items-center gap-x-2">
                <div className="h-10 w-10 rounded-full border bg-gradient-to-tr from-purple-500 to-purple-300"></div>

                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex h-full flex-col justify-between space-y-2">
                <p className="text-secondary-text text-sm">{data.content}</p>

                <div className="flex w-full items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border-transparent-border mx-4 flex min-w-[40rem] flex-col items-center space-y-2 rounded-lg border p-5"
            >
              <div className="flex w-full items-center gap-x-2">
                <div className="h-10 w-10 rounded-full border bg-gradient-to-tr from-purple-500 to-purple-300"></div>

                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex h-full flex-col justify-between space-y-2">
                <p className="text-secondary-text text-sm">{data.content}</p>

                <div className="flex w-full items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, amount: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mask-image-custom mask-gradient-opacity flex items-center overflow-hidden"
      >
        <div className="animate-infinite-scroll flex [--animation-delay:60s]">
          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border-transparent-border mx-4 flex min-w-[40rem] flex-col items-center space-y-2 rounded-lg border p-5"
            >
              <div className="flex w-full items-center gap-x-2">
                <div className="h-10 w-10 rounded-full border bg-gradient-to-tr from-purple-500 to-purple-300"></div>
                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex h-full flex-col justify-between space-y-2">
                <p className="text-secondary-text text-sm">{data.content}</p>

                <div className="flex w-full items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border-transparent-border mx-4 flex min-w-[40rem] flex-col items-center space-y-2 rounded-lg border p-5"
            >
              <div className="flex w-full items-center gap-x-2">
                <div className="border-transparent-border from-green via-brand to-primary-button h-10 w-10 rounded-full border bg-gradient-to-tr"></div>
                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex h-full flex-col justify-between space-y-2">
                <p className="text-secondary-text text-sm">{data.content}</p>

                <div className="flex w-full items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
