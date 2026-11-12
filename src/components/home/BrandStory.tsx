"use client";

import { motion } from "framer-motion";

const storyLines = [
  "In every language, in every culture, there's a word for cleverness.",
  "In Sanskrit, it's ‘Dhurta.’",
  "We are Dhurta.",
  "The clever ones who see what others miss.",
  "The clever ones who solve what others can't.",
  "The clever ones who deliver what others promise.",
];

const scripts = [
  { text: "धूर्त", font: "font-devanagari" },
  { text: "ধূর্ত", font: "font-bengali" },
  { text: "دهورتا", font: "font-arabic" },
  { text: "达尔塔", font: "font-sc" },
  { text: "ダルタ", font: "font-jp" },
  { text: "다르타", font: "font-kr" },
  { text: "தூர்த்தா", font: "font-tamil" },
];

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-10 opacity-[0.05]">
        {scripts.map((s, i) => (
          <span key={i} className={`${s.font} text-7xl font-bold text-gold`}>
            {s.text}
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          The Global Brand Story
        </motion.span>

        <div className="space-y-3">
          {storyLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={
                i < 2
                  ? "font-display text-2xl italic text-gray-light sm:text-3xl"
                  : "font-display text-3xl font-semibold text-white sm:text-4xl"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-10 max-w-2xl text-lg text-gray-light"
        >
          From Mumbai to Manhattan, from London to Lagos, from Singapore to San
          Francisco — we are the clever choice for digital transformation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.05, ease: "backOut" }}
          className="mt-8 font-display text-4xl font-black tracking-wide text-gradient-gold sm:text-5xl"
        >
          DHURTA. Clever. Global. Trusted.
        </motion.p>
      </div>
    </section>
  );
}
