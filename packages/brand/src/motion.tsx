"use client";

import { motion, useReducedMotion } from "motion/react";

export const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

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
      initial={{ y: reduce ? 0 : 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0 : 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Cascade item for grids/strips: rises into place with a per-index delay so a
 * section's cells arrive as a sequence instead of one slab. Opacity floors at
 * 0.4 for the same never-invisible reason as Reveal.
 */
export function RevealItem({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ y: reduce ? 0 : 16, opacity: reduce ? 1 : 0.4 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: reduce ? 0 : 0.5,
        delay: Math.min(index, 8) * 0.06,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
