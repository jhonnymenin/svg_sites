"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Restrained rise-into-place on scroll. Deliberately does NOT animate
 * opacity from 0 — content must stay visible even if JS is slow, fails to
 * hydrate, or an intersection observer never fires (e.g. a tool that
 * captures the full page without a real scroll). Worst case the block
 * simply sits a few pixels off its final position forever, never invisible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0 : 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
