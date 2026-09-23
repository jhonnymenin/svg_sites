"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { GoodVibesStamp } from "./marks";
import { roughCircle, torn } from "@/lib/torn";

/*
  The hero collage — hand-assembled from printed scraps:
  a mustard sun, halftone screens, a duotone cut-out of a historic Lafayette
  facade, a palm, a letterboard marquee, a vertical VIBES sign and a rubber stamp.

  Two compositions: a tall mobile board (<640px) and a wide board (≥640px) that
  is reused for the stacked tablet layout and the desktop right-hand column.
  Every piece is laid down with a CSS "paste" keyframe (runs without JS); scroll
  parallax is layered on top with Motion as progressive enhancement.

  REAL: /video/se-loop-bw.* is the client's own event footage (keys, the SGV sign,
  dancing feet, accordion, crowds) — silent 9.6s loop, paused for reduced motion.
  PLACEHOLDER IMAGERY: /images/collage-building.webp and collage-palm.webp are
  processed from freely-licensed photos (see public/images/CREDITS.md). Replace
  with the client's own venue photography when available — any high-contrast
  facade cut-out on a transparent background drops straight in.
*/

const SUN_CLIP = roughCircle(11, { amp: 1.1 });
const TEAL_A = torn(21, { amp: 4.5, steps: 16 });
const TEAL_B = torn(34, { amp: 5, steps: 14 });
const MUSTARD_SCRAP = torn(52, { amp: 5, steps: 12 });
const CROWD_CLIP = torn(88, { amp: 2, steps: 18 });

function Layer({
  y,
  className,
  children,
  delay = 0,
  fromRot = "3deg",
}: {
  y?: MotionValue<number>;
  className: string;
  children: React.ReactNode;
  delay?: number;
  fromRot?: string;
}) {
  return (
    <motion.div className={clsx("absolute", className)} style={y ? { y } : undefined}>
      <div
        className="paste h-full w-full"
        style={{ animationDelay: `${delay}ms`, ["--from-rot" as string]: fromRot }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* String lights draped across the facade — bulbs sampled along a quadratic curve. */
function StringLights() {
  const W = 360;
  const H = 90;
  const seg = (p0: number[], c: number[], p1: number[], n: number) =>
    Array.from({ length: n }, (_, i) => {
      const t = (i + 0.5) / n;
      const x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * c[0] + t ** 2 * p1[0];
      const y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * c[1] + t ** 2 * p1[1];
      return [x, y];
    });
  const a: [number[], number[], number[]] = [[0, 8], [90, 78], [185, 34]];
  const b: [number[], number[], number[]] = [[185, 34], [275, 88], [360, 22]];
  const bulbs = [...seg(...a, 9), ...seg(...b, 9)];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full overflow-visible" aria-hidden>
      <path
        d={`M${a[0]} Q${a[1]} ${a[2]} Q${b[1]} ${b[2]}`}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.3"
      />
      {bulbs.map(([x, y], i) => (
        <g key={i} className="twinkle" style={{ animationDelay: `${(i % 5) * 0.55}s` }}>
          <circle cx={x} cy={y + 5} r="7" fill="#f2c566" opacity="0.28" />
          <circle cx={x} cy={y + 5} r="3.3" fill="#f6d27c" stroke="var(--color-ink)" strokeWidth="0.8" />
          <rect x={x - 1.2} y={y - 0.5} width="2.4" height="3" fill="var(--color-ink)" />
        </g>
      ))}
    </svg>
  );
}

/* Letterboard marquee — black cabinet, cream board with rails, chasing bulbs. */
function Marquee() {
  const bulbs = Array.from({ length: 11 });
  return (
    <div className="@container relative h-full w-full">
      {/* wall bracket */}
      <div className="absolute -left-[7%] top-[38%] hidden h-[5%] w-[9%] bg-ink sm:block" />
      <div className="absolute -left-[9%] top-[30%] hidden h-[22%] w-[3%] rounded-[1px] bg-ink sm:block" />
      <div className="relative h-full w-full rounded-[3px] bg-ink p-[4.5%] shadow-[6px_8px_0_rgba(21,20,18,0.18)]">
        {/* bulbs along the top rail */}
        <div className="absolute inset-x-[5%] top-[1.6%] flex justify-between">
          {bulbs.map((_, i) => (
            <span
              key={i}
              className="bulb block aspect-square w-[2.6%] rounded-full bg-[#f6d27c] shadow-[0_0_6px_1px_rgba(246,210,124,0.65)]"
              style={{ animationDelay: `${(i % 3) * 0.6}s` }}
            />
          ))}
        </div>
        <div className="paper relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2px] shadow-[inset_0_0_0_2px_rgba(21,20,18,0.55)]">
          {/* letterboard rails */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, transparent 0 calc(19% - 1px), rgba(21,20,18,0.45) calc(19% - 1px) 19%)",
            }}
          />
          <p className="relative text-center font-label text-[15.5cqw] font-bold uppercase leading-[1.02] tracking-[0.1em] text-ink">
            <span className="block">Serving</span>
            <span className="block">Good Vibes</span>
          </p>
        </div>
      </div>
      {/* cabinet base */}
      <div className="absolute -bottom-[7%] left-[8%] right-[8%] h-[8%] rounded-b-[3px] bg-ink" />
    </div>
  );
}

/* Vertical blade sign. */
function VibesSign() {
  return (
    <div className="@container relative h-full w-full">
      {/* back blade, a second older sign behind */}
      <div className="absolute left-[62%] top-[9%] h-[70%] w-[62%] rounded-[3px] bg-ink-3 shadow-[inset_0_0_0_3px_rgba(0,0,0,0.3)]" />
      {/* posts */}
      <div className="absolute left-[24%] top-[70%] h-[32%] w-[9%] bg-ink" />
      <div className="absolute left-[64%] top-[70%] h-[32%] w-[9%] bg-ink" />
      <div className="relative flex h-[76%] w-full flex-col items-center justify-center rounded-[4px] border-[5px] border-ink bg-teal shadow-[inset_0_0_0_3px_var(--color-teal-deep)]">
        <div className="absolute inset-[6%] rounded-[2px] border border-cream/55" />
        <span
          className="relative flex flex-col items-center font-display text-[62cqw] leading-[1.02] text-cream [text-shadow:0_1px_0_rgba(0,0,0,0.25)]"
          aria-label="Vibes"
        >
          {"VIBES".split("").map((c, i) => (
            <span key={i} aria-hidden>
              {c}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export function HeroCollage({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const k = reduce ? 0 : 1;
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 70 * k]);
  const yDots = useTransform(scrollYProgress, [0, 1], [0, 110 * k]);
  const yBuilding = useTransform(scrollYProgress, [0, 1], [0, 30 * k]);
  const yPalm = useTransform(scrollYProgress, [0, 1], [0, -20 * k]);
  const yCrowd = useTransform(scrollYProgress, [0, 1], [0, -60 * k]);
  const ySign = useTransform(scrollYProgress, [0, 1], [0, -45 * k]);
  const yMarquee = useTransform(scrollYProgress, [0, 1], [0, -70 * k]);
  const yStamp = useTransform(scrollYProgress, [0, 1], [0, -90 * k]);
  const rStamp = useTransform(scrollYProgress, [0, 1], [-10, 26 * k - 10]);

  return (
    <div ref={ref} className={clsx("relative select-none", className)} aria-hidden>
      {/* sun */}
      <Layer
        y={ySun}
        delay={150}
        fromRot="0deg"
        className="left-[16%] top-[3%] aspect-square w-[72%] sm:left-[31%] sm:top-[6%] sm:w-[54%]"
      >
        <div
          className="h-full w-full bg-mustard"
          style={{
            clipPath: SUN_CLIP,
            backgroundImage:
              "url(/textures/paper.png), radial-gradient(circle, rgba(130,70,20,0.28) 1.3px, transparent 1.9px)",
            backgroundSize: "380px 380px, 7px 7px",
          }}
        />
      </Layer>

      {/* halftone screen, top-left of the sun */}
      <Layer
        y={yDots}
        delay={260}
        fromRot="0deg"
        className="left-[4%] top-[5%] h-[20%] w-[34%] sm:left-[25%] sm:top-[4%] sm:h-[24%] sm:w-[18%]"
      >
        <div
          className="halftone h-full w-full"
          style={{
            ["--pitch" as string]: "13px",
            ["--size" as string]: "2.6px",
            maskImage: "linear-gradient(135deg, #000 30%, transparent 95%)",
          }}
        />
      </Layer>

      {/* teal scraps */}
      <Layer
        delay={320}
        fromRot="-4deg"
        className="left-[-3%] top-[73%] h-[27%] w-[26%] sm:left-[4%] sm:top-[70%] sm:h-[30%] sm:w-[17%]"
      >
        <div className="paper h-full w-full bg-teal! bg-blend-multiply" style={{ clipPath: TEAL_A }} />
      </Layer>
      <Layer
        delay={360}
        fromRot="4deg"
        className="right-[-4%] top-[58%] h-[42%] w-[20%] sm:right-[-2%] sm:top-[56%] sm:h-[44%] sm:w-[15%]"
      >
        <div className="paper h-full w-full bg-teal! bg-blend-multiply" style={{ clipPath: TEAL_B }} />
      </Layer>
      <Layer
        delay={380}
        fromRot="0deg"
        className="right-[1%] top-[34%] hidden h-[30%] w-[9%] sm:block"
      >
        <div
          className="halftone h-full w-full"
          style={{ ["--pitch" as string]: "8px", ["--size" as string]: "2.2px", clipPath: MUSTARD_SCRAP }}
        />
      </Layer>

      {/* the building */}
      <Layer
        y={yBuilding}
        delay={420}
        fromRot="-1.5deg"
        className="left-[9%] top-[27%] w-[76%] sm:left-[21%] sm:top-[23%] sm:w-[55%]"
      >
        <Image
          src="/images/collage-building.webp"
          alt=""
          width={1500}
          height={1472}
          priority
          unoptimized
          className="h-auto w-full drop-shadow-[3px_4px_0_rgba(21,20,18,0.12)]"
        />
      </Layer>

      {/* string lights over the facade */}
      <Layer
        delay={900}
        fromRot="0deg"
        className="left-[6%] top-[33%] h-[11%] w-[56%] sm:left-[18%] sm:top-[33%] sm:h-[12%] sm:w-[36%]"
      >
        <StringLights />
      </Layer>

      {/* palm */}
      <Layer
        y={yPalm}
        delay={560}
        fromRot="2deg"
        className="left-[56%] top-[1%] w-[40%] sm:left-[60%] sm:top-[4%] sm:w-[27.5%]"
      >
        <Image
          src="/images/collage-palm.webp"
          alt=""
          width={599}
          height={1354}
          unoptimized
          className="h-auto w-full"
        />
      </Layer>

      {/* a live print: our own event footage (se-loop-bw) running inside a torn snapshot */}
      <Layer
        y={yCrowd}
        delay={740}
        fromRot="6deg"
        className="left-[50%] top-[70%] w-[40%] sm:left-[58%] sm:top-[62%] sm:w-[25%]"
      >
        <div className="rotate-[3.5deg]">
          <div
            className="relative bg-paper-hi p-[4%] pb-[12%] shadow-[3px_5px_0_rgba(21,20,18,0.2)]"
            style={{ clipPath: CROWD_CLIP }}
          >
            <video
              ref={videoRef}
              className="block aspect-video w-full object-cover [filter:sepia(0.22)_contrast(1.05)]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/video/se-loop-bw-poster.jpg"
              aria-hidden
            >
              <source src="/video/se-loop-bw.webm" type="video/webm" />
              <source src="/video/se-loop-bw.mp4" type="video/mp4" />
            </video>
            <span className="absolute inset-x-[5%] bottom-[3.5%] flex items-center gap-[0.6em] font-label text-[clamp(8px,0.8vw,11.5px)] font-semibold uppercase tracking-[0.12em] text-ink/70">
              <span className="live-dot h-[0.6em] w-[0.6em] shrink-0 rounded-full bg-rust" />
              Live from Acadiana
            </span>
          </div>
        </div>
      </Layer>

      {/* VIBES blade sign */}
      <Layer
        y={ySign}
        delay={680}
        fromRot="-3deg"
        className="left-[86%] top-[26%] h-[74%] w-[12%] sm:left-[84.5%] sm:top-[18%] sm:h-[82%] sm:w-[8.5%]"
      >
        <VibesSign />
      </Layer>

      {/* marquee */}
      <Layer
        y={yMarquee}
        delay={780}
        fromRot="8deg"
        className="left-[4%] top-[62%] h-[25%] w-[56%] sm:left-[6%] sm:top-[60%] sm:h-[27%] sm:w-[38%] xl:left-[4%] xl:w-[39%]"
      >
        <div className="h-full w-full [transform:perspective(900px)_rotateY(14deg)_rotate(4deg)]">
          <Marquee />
        </div>
      </Layer>

      {/* rubber stamp */}
      <motion.div
        className="absolute left-[1%] top-[1%] w-[33%] mix-blend-multiply sm:left-[9%] sm:top-[3%] sm:w-[21%]"
        style={{ y: yStamp, rotate: rStamp }}
      >
        <div className="stamp-in" style={{ animationDelay: "1150ms" }}>
          <GoodVibesStamp />
        </div>
      </motion.div>
    </div>
  );
}
