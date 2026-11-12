"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TiltCard({
  children,
  className,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(201,168,76,0.25), transparent 60%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "perspective-container relative rounded-2xl transition-shadow duration-300",
        hovered ? "shadow-[0_25px_60px_-15px_rgba(201,168,76,0.35)]" : "shadow-none",
        className
      )}
    >
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: glareBackground,
          }}
        />
      )}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
