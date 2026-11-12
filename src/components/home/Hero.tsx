"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import LanguageTypewriter from "@/components/ui/LanguageTypewriter";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const letters = "DHURTA".split("");

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-navy/40 via-transparent to-navy" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-noise" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          Global Digital Transformation
        </motion.span>

        <h1 className="perspective-container flex flex-wrap items-center justify-center gap-x-1 font-display text-7xl font-black tracking-tight sm:text-8xl md:text-9xl">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
                textShadow:
                  "0 1px 0 #A68B3A, 0 2px 0 #97792f, 0 3px 0 #866a29, 0 4px 8px rgba(0,0,0,0.5)",
              }}
              className="text-gradient-gold"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <LanguageTypewriter className="mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-4 max-w-2xl text-balance text-lg text-gray-light sm:text-xl"
        >
          We don&apos;t just build websites and apps. We build clever solutions
          that outsmart challenges, outpace competitors, and outperform
          expectations — anywhere in the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/contact" icon={<ArrowRight size={16} />}>
            Start Your Transformation
          </Button>
          <Button href="/portfolio" variant="secondary">
            Explore Our Work
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-gray-light"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
