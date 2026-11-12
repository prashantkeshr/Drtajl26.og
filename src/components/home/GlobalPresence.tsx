"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

/*
 * World map base: equirectangular projection, viewBox 0 0 2000 1280
 * Map © fla-shop.com (CC-BY-4.0) — fla-shop.com
 * Node placement: x = (lon + 180) / 360 * 2000
 *                 y = (90  − lat) / 180 * 1280
 */

const HQ = { x: 1414, y: 495 };

const HUBS = [
  { id: "in", x: 1414, y: 495, name: "India",     city: "Mumbai",    clients: "180+", isHQ: true  },
  { id: "us", x:  588, y: 352, name: "USA",        city: "New York",  clients: "32+",  isHQ: false },
  { id: "gb", x: 1000, y: 268, name: "UK",         city: "London",    clients: "24+",  isHQ: false },
  { id: "ae", x: 1305, y: 462, name: "UAE",        city: "Dubai",     clients: "28+",  isHQ: false },
  { id: "sg", x: 1577, y: 634, name: "Singapore",  city: "Singapore", clients: "18+",  isHQ: false },
  { id: "au", x: 1835, y: 882, name: "Australia",  city: "Sydney",    clients: "12+",  isHQ: false },
  { id: "de", x: 1070, y: 262, name: "Germany",    city: "Berlin",    clients: "14+",  isHQ: false },
  { id: "jp", x: 1778, y: 384, name: "Japan",      city: "Tokyo",     clients: "16+",  isHQ: false },
  { id: "ca", x:  554, y: 328, name: "Canada",     city: "Toronto",   clients: "10+",  isHQ: false },
];

/* Build quadratic bezier arc paths & gradient ids */
const CONNECTIONS = HUBS.filter((h) => !h.isHQ).map((hub, i) => {
  const dist = Math.hypot(hub.x - HQ.x, hub.y - HQ.y);
  const mx = (HQ.x + hub.x) / 2;
  const my = (HQ.y + hub.y) / 2;
  const cpY = my - dist * 0.26; // arc height proportional to distance
  return {
    id: i,
    pathD: `M ${HQ.x},${HQ.y} Q ${mx},${cpY} ${hub.x},${hub.y}`,
    hub,
    dur:   2.4 + i * 0.28,
    begin: i * 0.55,
    gradId: `cg-${i}`,
  };
});

const GLOBAL_STATS = [
  { value: "12",    label: "Countries" },
  { value: "5",     label: "Continents" },
  { value: "180+",  label: "Global Clients" },
  { value: "24/7",  label: "Support Coverage" },
];

export default function GlobalPresence() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative bg-navy py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(74,158,255,0.05),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Presence"
          title="Wherever Clever Is Needed"
          description="Clients across every inhabited continent, served by a team fluent in local nuance."
          className="mb-14"
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">

          {/* ── World map ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative lg:col-span-3"
          >
            {/* Glow behind map */}
            <div className="absolute inset-0 rounded-2xl bg-blue/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black/40">
              {/* Base world map — tinted to match theme */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/world-map.svg"
                alt=""
                aria-hidden
                className="w-full select-none"
                style={{
                  filter: "invert(1) sepia(1) hue-rotate(180deg) saturate(0.3) brightness(0.18)",
                }}
              />

              {/* Interactive SVG layer — same 2000×1280 coordinate space */}
              <svg
                viewBox="0 0 2000 1280"
                className="absolute inset-0 w-full h-full"
                aria-label="Global client network map"
              >
                <defs>
                  {/* Per-connection gradients (gold → teal, source → destination) */}
                  {CONNECTIONS.map(({ gradId, hub }) => (
                    <linearGradient
                      key={gradId}
                      id={gradId}
                      x1={HQ.x} y1={HQ.y}
                      x2={hub.x} y2={hub.y}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.9" />
                      <stop offset="55%"  stopColor="#4A9EFF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.85" />
                    </linearGradient>
                  ))}

                  {/* Particle glow filter */}
                  <filter id="pglow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* HQ glow filter */}
                  <filter id="hqglow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="10" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Hidden arc paths for animateMotion */}
                  {CONNECTIONS.map(({ id, pathD }) => (
                    <path key={id} id={`arc-${id}`} d={pathD} />
                  ))}
                </defs>

                {/* Connection arcs */}
                {CONNECTIONS.map(({ id, pathD, gradId }) => (
                  <path
                    key={id}
                    d={pathD}
                    fill="none"
                    stroke={`url(#${gradId})`}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 3000,
                      strokeDashoffset: isInView ? 0 : 3000,
                      transition: `stroke-dashoffset ${1.8 + id * 0.1}s ease ${0.6 + id * 0.1}s`,
                      opacity: 0.55,
                    }}
                  />
                ))}

                {/* Animated data particles */}
                {isInView && CONNECTIONS.map(({ id, dur, begin, hub }) => (
                  <circle
                    key={id}
                    r="5"
                    fill={hub.isHQ ? "#C9A84C" : "#00D4AA"}
                    filter="url(#pglow)"
                  >
                    <animateMotion
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                      begin={`${begin}s`}
                    >
                      <mpath href={`#arc-${id}`} />
                    </animateMotion>
                    <animate
                      attributeName="fill"
                      values="#C9A84C;#4A9EFF;#00D4AA"
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                      begin={`${begin}s`}
                    />
                  </circle>
                ))}

                {/* Destination hub nodes */}
                {HUBS.filter((h) => !h.isHQ).map((hub, i) => (
                  <g
                    key={hub.id}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transition: `opacity 0.4s ease ${1.4 + i * 0.1}s`,
                    }}
                  >
                    {/* Ping ring */}
                    <circle cx={hub.x} cy={hub.y} r="6" fill="none" stroke="#00D4AA" strokeWidth="1.2">
                      <animate attributeName="r" values="4;18;18" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                      <animate attributeName="stroke-opacity" values="0.7;0;0" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                    </circle>
                    {/* Core dot */}
                    <circle cx={hub.x} cy={hub.y} r="5" fill="#00D4AA" filter="url(#pglow)" />
                    <circle cx={hub.x} cy={hub.y} r="2.5" fill="#E0FFF8" />
                    {/* Label */}
                    <text
                      x={hub.x + 9} y={hub.y - 7}
                      fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700"
                      fill="#00D4AA" fillOpacity="0.85" letterSpacing="0.4"
                    >
                      {hub.name}
                    </text>
                    <text
                      x={hub.x + 9} y={hub.y + 9}
                      fontSize="11" fontFamily="system-ui,sans-serif"
                      fill="#B8C5D6" fillOpacity="0.6"
                    >
                      {hub.city}
                    </text>
                  </g>
                ))}

                {/* India HQ node — larger, gold */}
                <g style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.4s ease 0.4s" }}>
                  {/* Outer pulse rings */}
                  {[28, 48, 70].map((r, i) => (
                    <circle key={i} cx={HQ.x} cy={HQ.y} r={r} fill="none" stroke="#C9A84C" strokeWidth="0.8">
                      <animate attributeName="r" values={`${r};${r + 15};${r}`} dur={`${3 + i * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.8}s`} />
                      <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur={`${3 + i * 0.7}s`} repeatCount="indefinite" begin={`${i * 0.8}s`} />
                    </circle>
                  ))}
                  <circle cx={HQ.x} cy={HQ.y} r="9" fill="#C9A84C" filter="url(#hqglow)" />
                  <circle cx={HQ.x} cy={HQ.y} r="4.5" fill="#FFF8E7" />
                  <text
                    x={HQ.x + 13} y={HQ.y - 8}
                    fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="800"
                    fill="#C9A84C" fillOpacity="0.95"
                  >
                    India HQ
                  </text>
                  <text
                    x={HQ.x + 13} y={HQ.y + 11}
                    fontSize="12" fontFamily="system-ui,sans-serif"
                    fill="#E8D5A3" fillOpacity="0.7"
                  >
                    Mumbai · Delhi · Bengaluru
                  </text>
                </g>
              </svg>
            </div>

            {/* Map attribution */}
            <p className="mt-1.5 text-right text-[10px] text-gray-light/30">
              Map data © <a href="https://www.fla-shop.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">fla-shop.com</a> (CC-BY-4.0)
            </p>
          </motion.div>

          {/* ── Right panel ── */}
          <div className="flex flex-col gap-5 lg:col-span-2">

            {/* Global stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {GLOBAL_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5"
                >
                  <div className="font-display text-3xl font-black text-gradient-gold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-gray-light/60">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hub list */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal/60">
                Active Hubs
              </p>
              <div className="flex flex-col gap-3">
                {HUBS.map((hub, i) => (
                  <motion.div
                    key={hub.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.07 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ background: hub.isHQ ? "#C9A84C" : "#00D4AA" }}
                      />
                      <span className="text-sm font-medium text-white/80">
                        {hub.name}
                      </span>
                      <span className="text-xs text-gray-light/40">{hub.city}</span>
                    </div>
                    <span
                      className="text-xs font-semibold tabular-nums"
                      style={{ color: hub.isHQ ? "#C9A84C" : "#00D4AA" }}
                    >
                      {hub.clients}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-xs text-gray-light/50 leading-relaxed"
            >
              Every connection routes through Dhurta&apos;s India-based delivery teams — blending
              world-class output with the depth of local insight.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
