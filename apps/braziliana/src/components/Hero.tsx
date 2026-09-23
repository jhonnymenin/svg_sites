"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BroadLeaf, Flower, Frond, Monstera } from "./Botanicals";
import { JoinForm } from "./JoinForm";

const LINES = [
  { text: "Culture.", cls: "text-paper" },
  { text: "Community.", cls: "text-paper" },
  { text: "Good Vibes.", cls: "text-ouro" },
];

/** The seam cluster: leaves and flowers pasted over the photo's left edge. */
function SeamFoliage({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <Frond className="absolute bottom-[-4%] left-[18%] h-[92%] w-auto -rotate-[14deg]" color="#2b7a45" />
      <BroadLeaf className="absolute bottom-[-6%] left-[-8%] h-[70%] w-auto -rotate-[28deg]" color="var(--folha)" />
      <Frond className="absolute bottom-[-2%] left-[44%] h-[64%] w-auto rotate-[22deg]" color="#8a9a2a" rib="#4a5410" leaflets={12} />
      <Monstera className="absolute bottom-[-10%] left-[4%] h-[42%] w-auto rotate-[12deg]" color="#0c2f1b" />
      <BroadLeaf className="absolute bottom-[-8%] left-[52%] h-[46%] w-auto rotate-[34deg]" color="#1a5230" />
      <Flower className="absolute bottom-[18%] left-[30%] h-[15%] w-auto rotate-12" />
      <Flower className="absolute bottom-[6%] left-[56%] h-[10%] w-auto -rotate-12" petal="var(--ouro)" center="var(--urucum)" />
      <Flower className="absolute bottom-[34%] left-[6%] h-[8%] w-auto" petal="var(--laranja)" center="var(--ouro)" />
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const leavesY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);

  return (
    <section
      id="join"
      ref={ref}
      aria-label="Culture. Community. Good Vibes. Join Braziliana"
      className="grain relative overflow-hidden bg-mata text-paper"
    >
      <style>{`
        @keyframes bzRise { from { transform: translateY(104%); } to { transform: translateY(0); } }
        @keyframes bzFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes bzPhoto { from { transform: scale(1.08); } to { transform: scale(1); } }
        .bz-line > span { display: block; animation: bzRise .9s cubic-bezier(.2,.7,.2,1) both; }
        .bz-fade { animation: bzFade .8s cubic-bezier(.2,.7,.2,1) both; }
        .bz-photo-in { animation: bzPhoto 1.8s cubic-bezier(.2,.7,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .bz-line > span, .bz-fade, .bz-photo-in { animation: none; }
        }
      `}</style>
      <div className="flex flex-col lg:grid lg:min-h-[720px] lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-[max(var(--gutter),calc((100vw-var(--page-max))/2+var(--gutter)))] lg:py-16 xl:min-h-[760px]">
        {/* ---------- copy ---------- */}
        <div className="relative z-10 px-[var(--gutter)] pb-10 pt-10 sm:pt-14 lg:col-span-4 lg:row-start-1 lg:p-0">
          <h1 className="display text-[clamp(62px,17.5vw,100px)] leading-[0.88] sm:text-[108px] lg:text-[clamp(64px,6vw,100px)]">
            {LINES.map((l, i) => (
              <span key={l.text} className={`bz-line block overflow-hidden pb-[0.04em] ${l.cls}`}>
                <span style={{ animationDelay: `${150 + i * 120}ms` }}>{l.text}</span>
              </span>
            ))}
          </h1>
          <div className="bz-fade mt-7 max-w-[30rem] lg:mt-9 lg:max-w-[23rem] xl:max-w-[26rem]" style={{ animationDelay: "560ms" }}>
            <p className="text-[19px] font-medium leading-[1.35] text-paper sm:text-[21px] lg:text-[19px] xl:text-[21px]">
              Braziliana is the philanthropic and community arm of Serving Good Vibes.
            </p>
            <p className="mt-3 text-[16px] leading-[1.5] text-paper/80 sm:text-[17px]">
              Uniting people through culture, experiences, and purpose &ndash; creating positive impact in our
              community and beyond.
            </p>
          </div>
        </div>

        {/* ---------- photo (mobile: between copy and form; desktop: a torn print in the middle) ---------- */}
        <div className="relative h-[min(118vw,540px)] overflow-hidden sm:h-[560px] bz-torn lg:absolute lg:inset-y-0 lg:left-[29%] lg:right-[28%] lg:h-auto xl:left-[30%] xl:right-[29%]">
          <motion.div style={{ y: photoY }} className="absolute inset-x-0 -inset-y-[8%] overflow-hidden">
            <Image
              src="/images/hero-bossa-nova.jpg"
              alt="Couples dance to live bossa nova in the Good Vibes Room — a Brazilian flag on the wall, green congas and a guitarist by the window."
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="grade-live bz-photo-in object-cover object-[82%_62%] sm:object-[74%_60%] lg:object-[100%_58%]"
            />
          </motion.div>
          {/* warm lamp-light wash, then melt into the green field */}
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(238,184,31,.16),rgba(224,120,43,.1)_60%,rgba(15,58,35,.35))] mix-blend-multiply" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,var(--mata)_0%,transparent_18%)] lg:bg-[linear-gradient(90deg,var(--mata)_0%,rgba(15,58,35,.8)_10%,rgba(15,58,35,.2)_26%,transparent_36%)]" />
          <motion.div style={{ y: leavesY }} className="absolute inset-0 hidden lg:block">
            <SeamFoliage className="absolute bottom-0 left-[-6%] h-[52%] w-[40%]" />
          </motion.div>
          <SeamFoliage className="absolute right-[-30%] top-[-6%] h-[48%] w-[64%] rotate-180 sm:right-auto sm:top-auto sm:bottom-[-2%] sm:left-[-10%] sm:h-[62%] sm:w-[40%] sm:rotate-0 lg:hidden" />
          <p className="bz-fade absolute right-3 top-16 whitespace-nowrap rotate-[1.5deg] bg-ouro px-3 py-1.5 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.18em] text-mata-deep shadow-[0_6px_14px_-8px_rgba(0,0,0,.6)] sm:right-6 sm:top-8 lg:bottom-9 lg:left-auto lg:right-12 lg:top-auto" style={{ animationDelay: "900ms" }}>
            Bossa Nova night &middot; the Good Vibes Room
          </p>
        </div>

        {/* ---------- form ---------- */}
        <div
          className="bz-fade relative z-10 -mt-24 px-[var(--gutter)] pb-12 sm:-mt-32 sm:mx-auto sm:w-[560px] lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:m-0 lg:w-auto lg:max-w-[420px] lg:justify-self-end lg:p-0"
          style={{ animationDelay: "420ms" }}
        >
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
