"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Subtle in-frame parallax for images inside an overflow-hidden frame.
 * The child is oversized by `amount` so no edge ever shows.
 */
export function Parallax({ children, amount = 8 }: { children: React.ReactNode; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // y is a % of the oversized layer (100 + 2*amount), so cap it to stay inside the frame.
  const shift = ((amount / (100 + 2 * amount)) * 100 * 0.9).toFixed(2);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : [`-${shift}%`, `${shift}%`]);
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div className="absolute inset-x-0" style={{ y, top: `-${amount}%`, bottom: `-${amount}%` }}>
        {children}
      </motion.div>
    </div>
  );
}
