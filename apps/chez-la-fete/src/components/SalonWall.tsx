"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@sgv/brand/motion";
import { Fleur } from "./Fleur";

/**
 * "Room by room" — the house hung salon-style, like its own gallery walls.
 * Most frames are ink; three borrow the house's colours (pink gate, teal
 * velvet, umbrella yellow). On desktop each piece has a fixed place on a
 * 12-column wall; on mobile the wall becomes two hanging columns.
 */
type Piece = {
  src: string;
  alt: string;
  caption: string;
  pos: string;
  /** lg grid placement */
  place: string;
  /** mobile aspect ratio */
  aspect: string;
  frame: "ink" | "pink" | "teal" | "sun";
  tilt: number;
};

const PIECES: Piece[] = [
  {
    src: "/images/chez-interior-living-01.jpg",
    alt: "The grand living room: a green velvet sofa, a daybed of rainbow cushions, and Bar Bijou glimpsed through the arch",
    caption: "The grand living room",
    pos: "55% 60%",
    place: "lg:col-[1/7] lg:row-[1/9]",
    aspect: "aspect-[4/3]",
    frame: "ink",
    tilt: -1.2,
  },
  {
    src: "/images/chez-detail-pink-door-01.jpg",
    alt: "The hot-pink gate door in the hand-painted magnolia fence, with fleur-de-lis ironwork",
    caption: "The pink gate",
    pos: "33% 55%",
    place: "lg:col-[7/10] lg:row-[2/8]",
    aspect: "aspect-[3/4]",
    frame: "pink",
    tilt: 1.4,
  },
  {
    src: "/images/chez-vinyl-lounge-01.jpg",
    alt: "A record player and a red chinoiserie lamp beneath a wall of Festival International posters",
    caption: "Records & the red lamp",
    pos: "66% 70%",
    place: "lg:col-[10/13] lg:row-[1/5]",
    aspect: "aspect-[4/3.4]",
    frame: "ink",
    tilt: -1.6,
  },
  {
    src: "/images/chez-bath-01.jpg",
    alt: "A deep-green bathroom with arched black mirrors and shell sconces",
    caption: "The green bath",
    pos: "36% 50%",
    place: "lg:col-[10/13] lg:row-[5/11]",
    aspect: "aspect-[3/4]",
    frame: "teal",
    tilt: 1,
  },
  {
    src: "/images/chez-kitchen-01.jpg",
    alt: "The magenta-cabinet kitchen with butcher block counters, saloon doors and yellow walls",
    caption: "A magenta kitchen",
    pos: "55% 60%",
    place: "lg:col-[7/10] lg:row-[8/12]",
    aspect: "aspect-[4/3.2]",
    frame: "ink",
    tilt: -0.8,
  },
  {
    src: "/images/chez-backyard-bistro-01.jpg",
    alt: "Yellow umbrellas over mint bistro sets in the gravel courtyard, the pink door in the fence beyond",
    caption: "Yellow umbrellas, mint bistro sets",
    pos: "45% 60%",
    place: "lg:col-[2/7] lg:row-[9/14]",
    aspect: "aspect-[4/3]",
    frame: "sun",
    tilt: 1.2,
  },
  {
    src: "/images/chez-backyard-lounge-01.jpg",
    alt: "An outdoor lounge nook with navy cushions beneath a yellow sail shade",
    caption: "The sail-shade lounge",
    pos: "45% 70%",
    place: "lg:col-[7/10] lg:row-[12/15]",
    aspect: "aspect-[4/3]",
    frame: "ink",
    tilt: -1.4,
  },
  {
    src: "/images/chez-porch-lounge-01.jpg",
    alt: "The front porch lounge with a teak sofa, aloe and hanging ferns",
    caption: "The front porch",
    pos: "60% 70%",
    place: "lg:col-[10/13] lg:row-[11/15]",
    aspect: "aspect-[4/3.6]",
    frame: "ink",
    tilt: 1.6,
  },
];

const FRAME: Record<Piece["frame"], string> = {
  ink: "border-ink",
  pink: "border-pink",
  teal: "border-teal",
  sun: "border-sun",
};

export function SalonWall() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="salon-title" className="relative overflow-hidden bg-ivory-deep py-24 lg:py-32">
      <div className="frame">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <Fleur className="h-[22px] w-auto text-gold" />
              <span aria-hidden className="h-px w-10 bg-gold/60" />
              <span className="script text-[30px] text-pink-deep">la maison</span>
            </div>
            <h2 id="salon-title" className="display mt-5 text-[clamp(40px,5vw,72px)]">
              Room by Room
            </h2>
          </div>
          <p className="max-w-[48ch] text-[16px] leading-[1.7] text-ink-soft lg:col-span-5 lg:col-start-8">
            Festival posters from Lafayette’s great weekends, velvet in jewel tones, a magenta kitchen and a
            pink gate that opens onto the courtyard. The house is dressed the way Acadiana celebrates —
            generously.
          </p>
        </div>

        {/* The wall */}
        <ul className="mt-14 columns-2 gap-4 sm:gap-6 lg:mt-20 lg:grid lg:columns-auto lg:grid-cols-12 lg:grid-rows-[repeat(14,minmax(0,52px))] lg:gap-x-6 lg:gap-y-5">
          {PIECES.map((p, i) => (
            <motion.li
              key={p.src}
              className={`mb-6 break-inside-avoid lg:mb-0 lg:flex lg:min-h-0 lg:flex-col ${p.place}`}
              initial={reduce ? false : { opacity: 0, y: 26, rotate: p.tilt }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 1.1, delay: (i % 4) * 0.08, ease: EASE }}
            >
              <figure className="group lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
                <div
                  className={`border-[3px] bg-ivory p-[5px] shadow-[0_18px_30px_-22px_rgb(22_19_15/0.6)] sm:p-2 lg:min-h-0 lg:flex-1 ${FRAME[p.frame]}`}
                >
                  <div className={`relative overflow-hidden bg-linen ${p.aspect} lg:aspect-auto lg:h-full`}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width:1024px) 40vw, 46vw"
                      style={{ objectPosition: p.pos }}
                      className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-salon)] group-hover:scale-[1.05]"
                    />
                  </div>
                </div>
                <figcaption className="mt-2 flex items-baseline gap-2 text-[13px] leading-snug text-ink-mute lg:mt-2.5">
                  <span className="italic-serif shrink-0 text-[14px] text-gold">Nº {i + 1}</span>
                  <span className="italic-serif text-[15px]">{p.caption}</span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
