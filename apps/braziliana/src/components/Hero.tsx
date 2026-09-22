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
        <div className="relative z-10 px-[var(--gutter)] pb-10 pt-10 sm:pt-14 lg:col-span-6 lg:row-start-1 lg:p-0 xl:col-span-5">
          <h1 className="display text-[clamp(62px,17.5vw,100px)] leading-[0.88] sm:text-[108px] lg:text-[clamp(84px,7.1vw,116px)]">
            {LINES.map((l, i) => (
              <span key={l.text} className={`bz-line block overflow-hidden pb-[0.04em] ${l.cls}`}>
                <span style={{ animationDelay: `${150 + i * 120}ms` }}>{l.text}</span>
              </span>
            ))}
          </h1>
          <div className="bz-fade mt-7 max-w-[30rem] lg:mt-9" style={{ animationDelay: "560ms" }}>
            <p className="text-[19px] font-medium leading-[1.35] text-paper sm:text-[21px]">
              Braziliana is the philanthropic and community arm of Serving Good Vibes.
            </p>
            <p className="mt-3 max-w-[27rem] text-[16px] leading-[1.5] text-paper/80 sm:text-[17px]">
              Uniting people through culture, experiences, and purpose &ndash; creating positive impact in our
              community and beyond.
            </p>
          </div>
        </div>

        {/* ---------- photo (mobile: between copy and form; desktop: right 61%) ---------- */}
        <div className="relative h-[min(128vw,560px)] overflow-hidden sm:h-[600px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[61%]">
          <motion.div style={{ y: photoY }} className="absolute inset-x-0 -inset-y-[8%] -scale-x-100 overflow-hidden">
            {/* PLACEHOLDER photo — replace with Braziliana community photography */}
            <Image
              src="/images/frevo-girl.jpg"
              alt="A smiling girl in a sequined festival headdress dances with a rainbow frevo umbrella at a street carnival."
              fill
              priority
              sizes="(min-width: 1024px) 61vw, 100vw"
              className="grade-warm bz-photo-in object-cover object-[92%_36%] lg:object-[100%_42%]"
            />
          </motion.div>
          {/* golden-hour wash, then melt into the green field */}
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,178,40,.2),rgba(224,120,43,.14)_60%,rgba(15,58,35,.5))] mix-blend-multiply" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,var(--mata)_0%,transparent_20%)] lg:bg-[linear-gradient(90deg,var(--mata)_0%,var(--mata)_3%,rgba(15,58,35,.75)_14%,rgba(15,58,35,.25)_30%,transparent_42%)]" />
          <motion.div style={{ y: leavesY }} className="absolute inset-0 hidden lg:block">
            <SeamFoliage className="absolute bottom-0 left-[-4%] h-[64%] w-[33%]" />
          </motion.div>
          <SeamFoliage className="absolute right-[-30%] top-[-6%] h-[52%] w-[64%] rotate-180 sm:right-auto sm:top-auto sm:bottom-[-2%] sm:left-[-10%] sm:h-[70%] sm:w-[46%] sm:rotate-0 lg:hidden" />
        </div>

        {/* ---------- form ---------- */}
        <div
          className="bz-fade relative z-10 -mt-28 px-[var(--gutter)] pb-12 sm:-mt-72 sm:ml-auto sm:w-[480px] lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:m-0 lg:w-auto lg:max-w-[440px] lg:justify-self-end lg:p-0 xl:col-span-4 xl:col-start-9"
          style={{ animationDelay: "420ms" }}
        >
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
