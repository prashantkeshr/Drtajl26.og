"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/*
 * World map: equirectangular projection, viewBox 0 0 2000 1280
 * Map © fla-shop.com (CC-BY-4.0) — fla-shop.com
 * Node placement: x = (lon + 180) / 360 * 2000
 *                 y = (90  − lat) / 180 * 1280
 */

const NODES = [
  { id: "ny",  x:  589, y: 350, name: "New York",    region: "americas"   },
  { id: "la",  x:  343, y: 398, name: "Los Angeles", region: "americas"   },
  { id: "to",  x:  559, y: 329, name: "Toronto",     region: "americas"   },
  { id: "sp",  x:  741, y: 808, name: "São Paulo",   region: "americas"   },
  { id: "lo",  x: 1000, y: 274, name: "London",      region: "europe"     },
  { id: "pa",  x: 1013, y: 292, name: "Paris",       region: "europe"     },
  { id: "be",  x: 1075, y: 267, name: "Berlin",      region: "europe"     },
  { id: "mo",  x: 1209, y: 243, name: "Moscow",      region: "europe"     },
  { id: "ca2", x: 1173, y: 426, name: "Cairo",       region: "africa"     },
  { id: "lg",  x: 1019, y: 594, name: "Lagos",       region: "africa"     },
  { id: "nr",  x: 1204, y: 649, name: "Nairobi",     region: "africa"     },
  { id: "ct",  x: 1102, y: 881, name: "Cape Town",   region: "africa"     },
  { id: "du",  x: 1307, y: 461, name: "Dubai",       region: "middleeast" },
  { id: "mu",  x: 1404, y: 504, name: "Mumbai",      region: "asia"       },
  { id: "dl",  x: 1429, y: 437, name: "Delhi",       region: "asia"       },
  { id: "sg",  x: 1577, y: 631, name: "Singapore",   region: "asia"       },
  { id: "bj",  x: 1647, y: 357, name: "Beijing",     region: "asia"       },
  { id: "sh",  x: 1675, y: 418, name: "Shanghai",    region: "asia"       },
  { id: "se",  x: 1705, y: 373, name: "Seoul",       region: "asia"       },
  { id: "tk",  x: 1776, y: 386, name: "Tokyo",       region: "asia"       },
  { id: "sy",  x: 1839, y: 881, name: "Sydney",      region: "oceania"    },
  { id: "jk",  x: 1593, y: 685, name: "Jakarta",     region: "asia"       },
];

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));

type Pair = [string, string];

const PAIRS: Pair[] = [
  ["ny", "lo"],   // New York ↔ London
  ["la", "lo"],   // LA ↔ London
  ["ny", "to"],   // New York ↔ Toronto
  ["ny", "sp"],   // New York ↔ São Paulo
  ["lo", "be"],   // London ↔ Berlin
  ["lo", "pa"],   // London ↔ Paris
  ["be", "mo"],   // Berlin ↔ Moscow
  ["lo", "du"],   // London ↔ Dubai
  ["pa", "ca2"],  // Paris ↔ Cairo
  ["du", "mu"],   // Dubai ↔ Mumbai
  ["du", "ca2"],  // Dubai ↔ Cairo
  ["du", "nr"],   // Dubai ↔ Nairobi
  ["mu", "dl"],   // Mumbai ↔ Delhi
  ["mu", "sg"],   // Mumbai ↔ Singapore
  ["sg", "sh"],   // Singapore ↔ Shanghai
  ["sg", "jk"],   // Singapore ↔ Jakarta
  ["sg", "sy"],   // Singapore ↔ Sydney
  ["tk", "se"],   // Tokyo ↔ Seoul
  ["tk", "sh"],   // Tokyo ↔ Shanghai
  ["tk", "sy"],   // Tokyo ↔ Sydney
  ["la", "tk"],   // LA ↔ Tokyo (Trans-Pacific)
  ["ca2", "lg"],  // Cairo ↔ Lagos
  ["ca2", "nr"],  // Cairo ↔ Nairobi
  ["lg", "ct"],   // Lagos ↔ Cape Town
  ["nr", "ct"],   // Nairobi ↔ Cape Town
];

function buildArc(a: { x: number; y: number }, b: { x: number; y: number }, factor = 0.28) {
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const cpY = my - dist * factor;
  return { d: `M ${a.x},${a.y} Q ${mx},${cpY} ${b.x},${b.y}`, dist };
}

const REGION_COLORS: Record<string, string> = {
  americas:   "#F59E0B",
  europe:     "#60A5FA",
  africa:     "#34D399",
  middleeast: "#A78BFA",
  asia:       "#F472B6",
  oceania:    "#38BDF8",
};

const CONNECTIONS = PAIRS.map(([aId, bId], i) => {
  const a = NODE_MAP[aId];
  const b = NODE_MAP[bId];
  const { d, dist } = buildArc(a, b);
  const ca = REGION_COLORS[a.region];
  const cb = REGION_COLORS[b.region];
  return {
    id: i,
    aId, bId,
    pathD: d,
    dist,
    gradId: `ng-${i}`,
    arcId:  `na-${i}`,
    colorA: ca,
    colorB: cb,
    dur: 3.0 + (i % 7) * 0.3,
    begin: (i * 0.38) % 5,
  };
});

export default function GlobalNetwork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_50%,rgba(74,158,255,0.04),transparent)]" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 pb-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-teal/60"
        >
          Human Connectivity
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-black leading-tight text-white md:text-5xl"
        >
          One Signal.{" "}
          <span className="text-gradient-gold">Every Corner</span> of Earth.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-base text-gray-light/50 leading-relaxed max-w-2xl mx-auto"
        >
          Connecting peoples across the globe — from São Paulo to Seoul, Lagos to London —
          ideas, language, and trust flow without borders.
        </motion.p>
      </div>

      {/* Full-width map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative w-full"
      >
        {/* Map base */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/world-map.svg"
          alt=""
          aria-hidden
          className="w-full select-none block"
          style={{
            filter: "invert(1) sepia(1) hue-rotate(195deg) saturate(0.25) brightness(0.12)",
          }}
        />

        {/* Animated SVG overlay */}
        <svg
          viewBox="0 0 2000 1280"
          className="absolute inset-0 w-full h-full"
          aria-label="Global human connection network"
        >
          <defs>
            {/* Per-connection gradient */}
            {CONNECTIONS.map(({ gradId, aId, bId, colorA, colorB }) => {
              const a = NODE_MAP[aId];
              const b = NODE_MAP[bId];
              return (
                <linearGradient
                  key={gradId}
                  id={gradId}
                  x1={a.x} y1={a.y}
                  x2={b.x} y2={b.y}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%"   stopColor={colorA} stopOpacity="0.85" />
                  <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor={colorB} stopOpacity="0.85" />
                </linearGradient>
              );
            })}

            {/* Particle glow */}
            <filter id="nglow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Node glow */}
            <filter id="nodeglow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Hidden arc paths for animateMotion */}
            {CONNECTIONS.map(({ arcId, pathD }) => (
              <path key={arcId} id={arcId} d={pathD} />
            ))}
          </defs>

          {/* Connection arcs */}
          {CONNECTIONS.map(({ id, pathD, gradId }) => (
            <path
              key={id}
              d={pathD}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="1"
              strokeLinecap="round"
              style={{
                strokeDasharray: 4000,
                strokeDashoffset: isInView ? 0 : 4000,
                transition: `stroke-dashoffset ${2.0 + id * 0.07}s ease ${0.5 + id * 0.06}s`,
                opacity: 0.45,
              }}
            />
          ))}

          {/* Animated data particles */}
          {isInView && CONNECTIONS.map(({ id, arcId, dur, begin, colorA, colorB }) => (
            <circle
              key={id}
              r="4"
              fill={colorA}
              filter="url(#nglow)"
            >
              <animateMotion
                dur={`${dur}s`}
                repeatCount="indefinite"
                begin={`${begin}s`}
              >
                <mpath href={`#${arcId}`} />
              </animateMotion>
              <animate
                attributeName="fill"
                values={`${colorA};#ffffff;${colorB}`}
                dur={`${dur}s`}
                repeatCount="indefinite"
                begin={`${begin}s`}
              />
              <animate
                attributeName="r"
                values="3;5;3"
                dur={`${dur}s`}
                repeatCount="indefinite"
                begin={`${begin}s`}
              />
            </circle>
          ))}

          {/* City nodes */}
          {NODES.map((node, i) => {
            const color = REGION_COLORS[node.region];
            return (
              <g
                key={node.id}
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: `opacity 0.5s ease ${1.0 + i * 0.06}s`,
                }}
              >
                {/* Outer ping ring */}
                <circle cx={node.x} cy={node.y} r="5" fill="none" stroke={color} strokeWidth="1">
                  <animate
                    attributeName="r"
                    values="4;20;20"
                    dur={`${3.5 + (i % 4) * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${(i * 0.35) % 3}s`}
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.6;0;0"
                    dur={`${3.5 + (i % 4) * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${(i * 0.35) % 3}s`}
                  />
                </circle>
                {/* Core */}
                <circle cx={node.x} cy={node.y} r="4.5" fill={color} filter="url(#nodeglow)" opacity="0.9" />
                <circle cx={node.x} cy={node.y} r="2" fill="#ffffff" opacity="0.9" />
                {/* Label */}
                <text
                  x={node.x + 7}
                  y={node.y - 5}
                  fontSize="11"
                  fontFamily="system-ui,sans-serif"
                  fontWeight="600"
                  fill={color}
                  fillOpacity="0.9"
                  letterSpacing="0.3"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Legend + attribution */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {Object.entries(REGION_COLORS).map(([region, color]) => (
            <span key={region} className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold" style={{ color }}>
              <span className="h-1.5 w-1.5 rounded-full inline-block" style={{ background: color }} />
              {region === "middleeast" ? "Middle East" : region.charAt(0).toUpperCase() + region.slice(1)}
            </span>
          ))}
        </div>
        <p className="text-[10px] text-gray-light/30">
          Map data © <a href="https://www.fla-shop.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">fla-shop.com</a> (CC-BY-4.0)
        </p>
      </div>
    </section>
  );
}
