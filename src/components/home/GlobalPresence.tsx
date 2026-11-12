"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { regions } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GlobalPresence() {
  const [active, setActive] = useState(regions[0]);

  return (
    <section className="relative bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Presence"
          title="Wherever Clever Is Needed"
          description="Clients across every inhabited continent, served by a team fluent in local nuance."
          className="mb-16"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="relative lg:col-span-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(74,158,255,0.08),transparent_70%)]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full opacity-20"
                preserveAspectRatio="none"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 10}
                    x2="100"
                    y2={i * 10}
                    stroke="#B8C5D6"
                    strokeWidth="0.1"
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 10}
                    y1="0"
                    x2={i * 10}
                    y2="100"
                    stroke="#B8C5D6"
                    strokeWidth="0.1"
                  />
                ))}
              </svg>

              {regions.map((region) => (
                <button
                  key={region.id}
                  onMouseEnter={() => setActive(region)}
                  onClick={() => setActive(region)}
                  style={{ left: `${region.x}%`, top: `${region.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                        active.id === region.id ? "bg-gold/60" : "bg-teal/40"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                        active.id === region.id ? "bg-gold" : "bg-teal"
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-2xl p-8"
            >
                <div className="mb-3 flex items-center gap-2 text-gold">
                  <MapPin size={18} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {active.name}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white">
                  {active.city}
                </h3>
                <p className="mt-4 text-sm text-gray-light">
                  Active regional hub with dedicated account leadership,
                  cultural design consultants, and localized delivery teams.
                </p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-4xl font-black text-gradient-gold">
                    {active.clients}
                  </span>
                  <span className="mb-1 text-sm text-gray-light">
                    active clients in region
                  </span>
                </div>
            </motion.div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {regions
                .filter((r) => r.id !== active.id)
                .slice(0, 4)
                .map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActive(region)}
                    className="rounded-lg border border-white/10 px-3 py-2 text-left text-xs text-gray-light transition-colors hover:border-gold/30 hover:text-gold"
                  >
                    {region.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
