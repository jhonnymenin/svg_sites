"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * A muted ambient loop of real nights at the house. Under
 * prefers-reduced-motion the video is never shown or played — the still
 * poster stands in.
 */
export function LoopVideo({
  src,
  poster,
  still,
  stillAlt,
  sizes,
  className = "",
  stillPosition = "50% 50%",
}: {
  /** Path without extension; expects .webm and .mp4 siblings. */
  src: string;
  poster: string;
  /** Photo used for reduced motion (defaults to the poster). */
  still?: string;
  stillAlt: string;
  sizes: string;
  className?: string;
  stillPosition?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover motion-reduce:hidden ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden
        tabIndex={-1}
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
      <Image
        src={still ?? poster}
        alt={stillAlt}
        fill
        sizes={sizes}
        style={{ objectPosition: stillPosition }}
        className={`hidden object-cover motion-reduce:block ${className}`}
      />
    </>
  );
}
