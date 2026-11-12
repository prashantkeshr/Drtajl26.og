"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-navy to-black py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why DHURTA — Global"
          title="Proof, Not Promises"
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-5xl font-black text-gradient-gold sm:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-3 text-sm font-medium uppercase tracking-wider text-gray-light">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
