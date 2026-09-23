"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const POSTER = "/video/braziliana-loop-poster.jpg";
const ALT =
  "The Braziliana House Band at golden hour at DTA! ft. Braziliana — cavaquinho, trumpet and keys in front of the painted mural stage, couples dancing on the plaza.";

/**
 * 720p phone footage — only ever shown at print size (≤ ~560px wide) so it
 * stays crisp. Muted, inline, looping; plays only while on screen. Under
 * reduced motion the poster frame is shown instead.
 */
export function BandLoop() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, [reduce]);

  if (reduce) {
    return <Image src={POSTER} alt={ALT} fill sizes="(min-width: 1280px) 30vw, 90vw" className="grade-live object-cover" />;
  }

  return (
    <video
      ref={ref}
      className="grade-live absolute inset-0 h-full w-full object-cover"
      poster={POSTER}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-label={ALT}
    >
      <source src="/video/braziliana-loop.webm" type="video/webm" />
      <source src="/video/braziliana-loop.mp4" type="video/mp4" />
    </video>
  );
}
