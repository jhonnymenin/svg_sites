"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { FilmButton } from "./FilmButton";

const STILLS = [
  { src: "/images/film/still-100.jpg", alt: "A band plays under a fairy-lit oak at night" },
  { src: "/images/film/still-33_5.jpg", alt: "The Serving Good Vibes sign on the HQ building" },
  { src: "/images/film/still-55.jpg", alt: "A couple dances in the sun at a festival" },
  { src: "/images/film/still-103.jpg", alt: "A fiddler under violet stage light" },
  { src: "/images/film/still-43.jpg", alt: "Players celebrate wrapped in a Brazilian flag" },
  { src: "/images/film/still-52.jpg", alt: "An accordion player raises his hand to the crowd" },
  { src: "/images/film/still-88.jpg", alt: "A packed, colorful bar room during a watch party" },
  { src: "/images/film/still-70.jpg", alt: "Close-up of an accordion on stage" },
];

const SERVICES = [
  { t: "Video & Photography", b: "Cinematic storytelling for brands, events and campaigns." },
  { t: "Podcast", b: "Original podcasts that spark conversations and build community." },
  { t: "Live Streaming", b: "Bringing events to audiences near and far." },
  { t: "Brand Content", b: "Creative content that connects brands with people." },
  { t: "Media Strategy", b: "Strategy and storytelling that drive impact and engagement." },
];

/** A strip of 35mm frames — sprocket holes top and bottom. */
function FilmStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "-42%"]);

  const holes =
    "repeating-linear-gradient(90deg, transparent 0 10px, rgba(250,244,228,0.85) 10px 22px, transparent 22px 34px)";

  return (
    <div ref={ref} className="relative overflow-hidden py-14" aria-hidden>
      <motion.div className="flex w-max -rotate-[1.5deg] flex-col bg-[#0b0b0a] py-3" style={{ x: reduce ? 0 : x }}>
        <span className="mx-2 block h-[8px] rounded-[2px]" style={{ background: holes }} />
        <div className="my-3 flex gap-3 px-3">
          {[...STILLS, ...STILLS.slice(0, 4)].map((s, i) => (
            <div key={i} className="grain relative h-[130px] w-[330px] shrink-0 overflow-hidden md:h-[190px] md:w-[480px]">
              <Image src={s.src} alt="" fill sizes="480px" className="object-cover" />
            </div>
          ))}
        </div>
        <span className="mx-2 block h-[8px] rounded-[2px]" style={{ background: holes }} />
      </motion.div>
    </div>
  );
}

export function Media() {
  return (
    <section
      id="production-media"
      aria-labelledby="production-media-title"
      className="tooth relative overflow-hidden bg-teal-ink py-(--band-y) text-paper-hi"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Production &amp; Media</p>
            <h2 id="production-media-title" className="display mt-4 text-[clamp(44px,6vw,92px)]">
              Stories that <span className="display-italic text-gold">move</span> people.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[32rem] text-[17px] leading-[1.6] text-cream/80">
              We film, photograph, stream and tell the story of every stage we build — and we do it for brands and
              partners too. Our own launch film is below: fifteen years of Acadiana nights in two minutes.
            </p>
          </Reveal>
        </div>
      </Container>

      <div className="mt-6 md:mt-10">
        <FilmStrip />
      </div>

      <Container className="mt-16 md:mt-24">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="grain relative aspect-video overflow-hidden rounded-[4px]">
              <Image
                src="/video/sgv-film-poster.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[70%_50%]"
              />
              <span aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-br from-night/80 via-night/10 to-transparent" />
              <div className="absolute top-0 left-0 z-[3] p-5 md:p-7">
                <FilmButton>
                  <span className="leading-tight">
                    <span className="display block text-[26px] md:text-[34px]">Watch the film</span>
                    <span className="block text-[13px] text-white/65">Serving Good Vibes · 2026 · 2 min, sound on</span>
                  </span>
                </FilmButton>
              </div>
            </div>
          </Reveal>

          <ol className="border-t border-white/15">
            {SERVICES.map((s, i) => (
              <li key={s.t} className="border-b border-white/15">
                <RevealItem index={i} className="group grid grid-cols-[40px_1fr] gap-x-3 py-5">
                  <span className="pt-1 text-[12px] font-semibold tabular-nums text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="display text-[26px] leading-none md:text-[28px]">{s.t}</h3>
                    <p className="mt-1.5 text-[15px] leading-[1.5] text-cream/65">{s.b}</p>
                  </div>
                </RevealItem>
              </li>
            ))}
          </ol>
        </div>
        <Reveal className="mt-10">
          <a href="#contact" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-gold">
            <span className="stripe-link">Start a project with our media team</span>
            <span aria-hidden className="arrow">
              →
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
