import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { BroadLeaf, Flower, Frond, Monstera } from "./Botanicals";

/* PLACEHOLDER photos — product shots to be replaced with Braziliana's own. */
const ITEMS = [
  {
    title: ["Cheese", "Bread Bites"],
    sub: null,
    img: "/images/cheesebread.jpg",
    alt: "A plate of golden pão de queijo cheese bread bites beside a cup of coffee.",
    pos: "object-[50%_78%]",
  },
  {
    title: ["Sugarcane", "Juice"],
    sub: "Fresh & Natural",
    img: "/images/sugarcane.jpg",
    alt: "A tall glass of fresh, pale-gold juice with a straw under palm leaves.",
    pos: "object-[50%_70%]",
  },
  {
    title: ["Pilsner"],
    sub: "Powered by Bayou Teche Downtown",
    img: "/images/pilsner.jpg",
    alt: "A freshly poured pint of golden pilsner on a warm-lit bar top.",
    pos: "object-[70%_60%]",
  },
  {
    title: ["Coffee", "by Reve"],
    sub: "Brazil in every cup",
    img: "/images/coffee.jpg",
    alt: "A cup of strong coffee with crema on a saucer.",
    pos: "object-[40%_62%]",
  },
];

export function FoodBeverage() {
  return (
    <section id="food" aria-labelledby="food-title" className="grain relative overflow-hidden bg-mata text-paper">
      {/* corner foliage, bottom-left, as in a printed menu border */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 hidden h-[62%] w-[300px] lg:block">
        <Frond className="absolute bottom-[-10%] left-[-8%] h-full w-auto -rotate-[30deg]" color="#2b7a45" />
        <Monstera className="absolute bottom-[-12%] left-[14%] h-[48%] w-auto rotate-[8deg]" color="#0a2a19" />
        <BroadLeaf className="absolute bottom-[-14%] left-[40%] h-[62%] w-auto rotate-[24deg]" color="#8a9a2a" vein="#3f4a0c" />
        <Flower className="absolute bottom-[18%] left-[26%] h-[16%] w-auto" petal="var(--urucum)" />
        <Flower className="absolute bottom-[6%] left-[62%] h-[11%] w-auto rotate-12" petal="var(--ouro)" center="var(--laranja)" />
      </div>

      <div className="shell relative py-14 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-8 lg:py-20">
        <Reveal className="lg:col-span-4 xl:col-span-3">
          <h2 id="food-title" className="display text-[clamp(52px,4.8vw,76px)] text-paper">
            Food &amp; <br className="hidden lg:block" />
            Beverage
          </h2>
          <p className="mt-5 max-w-[22rem] text-[18px] leading-[1.45] text-paper/85">
            Rooted in Brazilian flavors.
            <br />
            Made with quality. Shared with good vibes.
          </p>
        </Reveal>

        <ul className="snap-x-strip -mx-[var(--gutter)] mt-10 flex gap-3 overflow-x-auto px-[var(--gutter)] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:col-span-8 lg:mt-0 lg:grid-cols-4 lg:gap-3 xl:col-span-9 xl:gap-4">
          {ITEMS.map((it, i) => (
            <li key={it.title.join(" ")} className="w-[68vw] max-w-[300px] shrink-0 sm:w-auto sm:max-w-none">
              <RevealItem index={i} className="h-full">
                <article className="group relative flex h-full min-h-[380px] flex-col overflow-hidden bg-kraft text-mata shadow-[0_18px_30px_-22px_rgba(0,0,0,.8)] sm:min-h-[420px] xl:min-h-[460px]">
                  <span aria-hidden className="pointer-events-none absolute inset-0 z-[1] opacity-35 mix-blend-multiply [background-image:var(--fibers),var(--grain)] [background-size:600px_600px,220px_220px]" />
                  <div className="relative z-[2] px-5 pb-4 pt-5">
                    <h3 className="display text-[clamp(28px,2.4vw,36px)] leading-[0.92]">
                      {it.title.map((t) => (
                        <span key={t} className="block">
                          {t}
                        </span>
                      ))}
                    </h3>
                    {it.sub ? (
                      <p className="mt-2 max-w-[16ch] text-[11px] font-bold uppercase leading-[1.3] tracking-[0.14em] text-ink-soft">
                        {it.sub}
                      </p>
                    ) : null}
                  </div>
                  <div className="deckle-top relative mt-auto min-h-[230px] flex-1 overflow-hidden sm:min-h-[260px] xl:min-h-[290px]">
                    <Image
                      src={it.img}
                      alt={it.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 68vw"
                      className={`grade object-cover ${it.pos} transition-transform duration-[1.1s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.07]`}
                    />
                  </div>
                </article>
              </RevealItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
