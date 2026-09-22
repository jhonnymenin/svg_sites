import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { LineBranch } from "./Botanicals";
import { Cap, GiftBox, Mug, Tee } from "./ProductArt";

const PRODUCTS = [
  { name: "Gift Box Subscription", Art: GiftBox, tilt: "-rotate-2", w: "w-[118%] -ml-[9%]" },
  { name: "Shirts", Art: Tee, tilt: "rotate-1", w: "w-full" },
  { name: "Hats", Art: Cap, tilt: "-rotate-3", w: "w-[96%]" },
  { name: "Mugs", Art: Mug, tilt: "rotate-2", w: "w-[82%]" },
];

export function Merch() {
  return (
    <section id="merch" aria-labelledby="merch-title" className="paper relative overflow-hidden">
      <LineBranch className="pointer-events-none absolute -bottom-16 left-[30%] hidden h-[80%] w-auto rotate-[-24deg] opacity-60 lg:block" color="var(--laranja)" />
      <LineBranch className="pointer-events-none absolute -bottom-10 -right-10 hidden h-[60%] w-auto rotate-[20deg] opacity-60 sm:block" color="var(--laranja)" flip />

      <div className="shell relative grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-20">
        <Reveal className="lg:col-span-4">
          <h2 id="merch-title" className="display text-[clamp(50px,4.1vw,64px)] leading-[0.9] text-urucum">
            Products &amp;
            <br />
            Merchandising
          </h2>
          <p className="mt-5 text-[19px] font-medium leading-[1.4] text-ink">
            Wear it. Share it.
            <br />
            Live the good vibes.
          </p>
          <ul className="losango-list mt-5 grid gap-1.5 text-[16px] text-ink-soft">
            <li>Braziliana/SGV Gift Box Subscription</li>
            <li>Merchandise: shirts, hats, and mugs</li>
          </ul>
          <a href="#merch" className="btn mt-8 bg-urucum text-paper hover:bg-urucum-deep">
            Shop now <ArrowRight aria-hidden size={17} className="arrow" />
          </a>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:col-span-8 lg:gap-6 xl:gap-10">
          {PRODUCTS.map(({ name, Art, tilt, w }, i) => (
            <li key={name}>
              <RevealItem index={i} className="group flex flex-col items-center">
                <div className="flex aspect-square w-full items-end justify-center">
                  <div
                    className={`${w} ${tilt} transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:-translate-y-2 group-hover:rotate-0`}
                  >
                    <Art />
                  </div>
                </div>
                <p className="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70">{name}</p>
              </RevealItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
