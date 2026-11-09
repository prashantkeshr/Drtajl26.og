"use client";

import { motion } from "framer-motion";

const storyLines = [
  "In every language, in every culture, there's a word for cleverness.",
  "In Sanskrit, it's 'Dhurta.'",
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

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Animated marquee background */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-8 overflow-hidden">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...scripts, ...scripts].map((s, i) => (
              <span
                key={i}
                className={`${s.font} select-none font-display text-5xl font-black text-white/[0.08]`}
              >
                {s.text}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          >
            {[...scripts, ...scripts].map((s, i) => (
              <span
                key={i}
                className={`${s.font} select-none font-display text-5xl font-black text-gold/[0.06]`}
              >
                {s.text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mb-8 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold/60"
        >
          The Global Brand Story
        </motion.span>

        <div className="space-y-3">
          {storyLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: easeOutExpo }}
          className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-gray-light/80"
        >
          From Mumbai to Manhattan, from London to Lagos, from Singapore to San
          Francisco — we are the clever choice for digital transformation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8, ease: easeOutExpo }}
          className="mt-8 font-display text-4xl font-black tracking-wide text-gradient-gold sm:text-5xl"
        >
          DHURTA. Clever. Global. Trusted.
        </motion.p>
      </div>
    </section>
  );
}
