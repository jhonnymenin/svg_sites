"use client";

import { useRef, useState } from "react";

/**
 * A still that comes alive on hover/focus: a short silent loop fades in over
 * the photograph. Loads nothing until first hover; never plays under
 * prefers-reduced-motion or on touch (no hover), where the still remains.
 */
export function HoverLoop({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false);
  const [on, setOn] = useState(false);

  const canPlay = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const start = () => {
    if (!canPlay()) return;
    setArmed(true);
    setOn(true);
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  };
  const stop = () => {
    setOn(false);
    ref.current?.pause();
  };

  return (
    <span
      aria-hidden
      className={`absolute inset-0 ${className}`}
      onPointerEnter={start}
      onPointerLeave={stop}
    >
      {armed ? (
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          className={`h-full w-full object-cover transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0"}`}
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
      ) : null}
    </span>
  );
}
