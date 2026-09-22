import Image from "next/image";
import { Reveal, RevealItem } from "./Reveal";
import { torn } from "@/lib/torn";
import { TornEdge } from "./TornEdge";

/*
  PLACEHOLDER PORTRAITS — /public/images/person-*.jpg are stock/freely-licensed
  photos processed to a warm B&W. Replace with the real team, shot in the same
  register (waist-up, candid, at work), and pass real names as alt text.
*/
const PEOPLE = [
  { img: "/images/person-1.jpg", h: 94, rot: -1.6 },
  { img: "/images/person-2.jpg", h: 100, rot: 1.1 },
  { img: "/images/person-3.jpg", h: 91, rot: -0.6 },
  { img: "/images/person-4.jpg", h: 99, rot: 1.4 },
  { img: "/images/person-5.jpg", h: 90, rot: -1.1 },
  { img: "/images/person-6.jpg", h: 100, rot: 0.8 },
  { img: "/images/person-7.jpg", h: 95, rot: -1.3 },
];

/* mobile: a 4-over-3 stagger; desktop: one overlapping strip */
const MOBILE = [
  { l: 0, t: 0 },
  { l: 24.5, t: 3 },
  { l: 49, t: 0 },
  { l: 73.5, t: 4 },
  { l: 12, t: 50 },
  { l: 37, t: 47 },
  { l: 62, t: 51 },
];

const SCRAPS = [
  { cls: "left-[-4%] top-[4%] h-[46%] w-[58%] lg:left-[-2%] lg:top-[8%] lg:h-[82%] lg:w-[36%]", color: "var(--color-rust)", seed: 3 },
  { cls: "left-[40%] top-[30%] h-[44%] w-[64%] lg:left-[33%] lg:top-[-2%] lg:h-[74%] lg:w-[33%]", color: "var(--color-teal)", seed: 8 },
  { cls: "left-[-2%] top-[62%] h-[36%] w-[42%] lg:left-[66%] lg:top-[12%] lg:h-[80%] lg:w-[37%]", color: "var(--color-rust-deep)", seed: 13 },
  { cls: "left-[70%] top-[-4%] h-[30%] w-[34%] lg:left-[24%] lg:top-[58%] lg:h-[44%] lg:w-[20%]", color: "var(--color-mustard)", seed: 21 },
];

export function OurPeople() {
  return (
    <section id="our-people" className="paper relative overflow-x-clip pt-14 md:pt-20 lg:pt-16 lg:pb-4">
      <TornEdge seed={5} />
      <div className="lg:grid lg:grid-cols-[minmax(250px,22%)_minmax(0,1fr)] lg:items-end">
        <Reveal className="px-(--gutter) lg:pb-14 lg:pl-(--edge) lg:pr-10">
          <h2 className="worn font-display text-[clamp(52px,6vw,84px)] uppercase leading-[0.92] tracking-[0.005em] text-teal">
            Our People
          </h2>
          <p className="mt-4 max-w-[22rem] text-[16px] leading-[1.5] text-ink/80 lg:max-w-[15.5rem]">
            A team of builders, doers, creators, and curators who lead with heart and deliver with excellence.
          </p>
          <a
            href="#"
            className="group mt-6 inline-flex items-center justify-between gap-6 bg-mustard px-5 py-[13px] font-label text-[15px] font-semibold uppercase tracking-[0.09em] text-ink shadow-[3px_3px_0_var(--color-ink)] transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--color-ink)]"
            style={{ borderRadius: 2 }}
          >
            Meet the Team
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <div className="relative mx-(--gutter) mt-10 aspect-[390/420] sm:aspect-[16/11] lg:mx-0 lg:mt-0 lg:mr-[max(0px,calc(var(--edge)-24px))] lg:aspect-auto lg:h-[clamp(280px,24vw,360px)]">
          {/* torn coloured paper behind the portraits */}
          {SCRAPS.map(({ cls, color, seed }) => (
            <div
              key={seed}
              aria-hidden
              className={`paper absolute bg-blend-multiply ${cls}`}
              style={{ backgroundColor: color, clipPath: torn(seed, { amp: 3.5, steps: 18 }) }}
            />
          ))}
          <div
            aria-hidden
            className="halftone absolute left-[58%] top-[4%] h-[22%] w-[18%] opacity-80 lg:left-[88%] lg:top-[4%] lg:h-[40%] lg:w-[12%]"
            style={{ ["--dot" as string]: "var(--color-ink)", ["--pitch" as string]: "9px", ["--size" as string]: "1.6px" }}
          />

          {PEOPLE.map(({ img, h, rot }, i) => (
            <div
              key={img}
              className={`group absolute w-[27%] ${i % 2 ? "z-[2]" : "z-[1]"} hover:z-20 max-lg:h-[50%] max-lg:top-(--mt) left-(--ml) lg:bottom-0 lg:left-(--dl) lg:top-auto lg:h-(--dh) lg:w-[15.4%]`}
              style={
                {
                  "--ml": `${MOBILE[i].l}%`,
                  "--mt": `${MOBILE[i].t}%`,
                  "--dl": `${i * 14.1}%`,
                  "--dh": `${h}%`,
                } as React.CSSProperties
              }
            >
              <RevealItem index={i} className="h-full w-full">
                <div
                  className="relative h-full w-full rotate-(--r) transition-[rotate,translate] duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-0"
                  style={{ ["--r" as string]: `${rot}deg` }}
                >
                  <div
                    className="relative h-full w-full bg-paper-hi p-[5px] pb-[5px] shadow-[2px_4px_0_rgba(21,20,18,0.18)]"
                    style={{ clipPath: torn(40 + i * 7, { sides: ["top", "left", "right"], amp: 2.2, steps: 20 }) }}
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={img}
                        alt="Social Entertainment team member (placeholder portrait)"
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 15vw, 27vw"
                        className="object-cover object-top transition-[filter,transform] duration-500 group-hover:scale-[1.03] group-hover:contrast-[1.12]"
                      />
                    </div>
                  </div>
                </div>
              </RevealItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
