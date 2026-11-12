"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function ProcessTimeline() {
  return (
    <section className="relative bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A Clever, Repeatable Process"
          description="Five stages. Zero guesswork. Built to work the same way in every market we touch."
          className="mb-20"
        />

        <div className="relative">
          <svg
            className="absolute left-6 top-0 hidden h-full w-0.5 overflow-visible lg:left-1/2 lg:block lg:-translate-x-1/2"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0%" stopColor="#c9a84c" stopOpacity="0" />
                <stop offset="20%" stopColor="#c9a84c" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#c9a84c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              strokeDasharray={9999}
              initial={{ strokeDashoffset: 9999 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: easeOutExpo }}
                className={`relative flex flex-col gap-6 pl-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0 lg:py-10 ${
                  i % 2 === 0 ? "" : "lg:[direction:rtl]"
                }`}
              >
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-black font-display text-sm font-bold text-gold lg:left-1/2 lg:-translate-x-1/2">
                  {step.step}
                </div>

                <div className={i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16 lg:[direction:ltr]"}>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-gray-light lg:ml-auto">
                    {step.description}
                  </p>
                </div>
                <div className="hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
