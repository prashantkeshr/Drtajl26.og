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

const colorMap: Record<string, string> = {
  gold: "from-gold/20 text-gold",
  teal: "from-teal/20 text-teal",
  blue: "from-blue/20 text-blue",
};

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <TiltCard className="glass-card h-full p-8">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[service.color]} border border-white/10`}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gold/80">
                    {service.shortDesc}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-light">
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
