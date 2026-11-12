"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Sparkles,
  Cloud,
  Cpu,
  TrendingUp,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  sparkles: Sparkles,
  cloud: Cloud,
  cpu: Cpu,
  "trending-up": TrendingUp,
};

const colorMap: Record<string, { from: string; icon: string }> = {
  gold: { from: "from-gold/20", icon: "text-gold" },
  teal: { from: "from-teal/20", icon: "text-teal" },
  blue: { from: "from-blue/20", icon: "text-blue" },
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function ServicesGrid() {
  return (
    <section className="relative bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Clever Solutions, Engineered Globally"
          description="Six disciplines, one clever philosophy — outsmart the problem before you solve it."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const colors = colorMap[service.color] ?? colorMap.gold;
            const isLarge = i === 0;
            const isMedium = i === 1;
            const colClass = isLarge
              ? "md:col-span-3 md:row-span-2"
              : isMedium
              ? "md:col-span-3"
              : "md:col-span-2";

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
                className={colClass}
              >
                <TiltCard
                  className={`glass-card h-full p-8 ${
                    isLarge ? "bg-gradient-to-br from-gold/10 to-transparent" : ""
                  }`}
                >
                  <div
                    className={`mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors.from} ${colors.icon} border border-white/10 ${isLarge ? "h-16 w-16" : "h-14 w-14"}`}
                  >
                    <Icon size={isLarge ? 32 : 26} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gold/80">
                    {service.shortDesc}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-light/80">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-gold"
                  >
                    Learn more
                    <ArrowUpRight size={15} />
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
