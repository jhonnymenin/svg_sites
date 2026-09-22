import Image from "next/image";
import { Rail, RailCard } from "./Rail";

const BRANDS = [
  { name: "Central Pizza", img: "/food/pizza.jpg", pos: "50% 45%" },
  { name: "Bayou Teche Brewery Downtown", img: "/food/brewery.jpg", pos: "50% 40%" },
  { name: "Tropical Smoothie", img: "/food/smoothie.jpg", pos: "50% 40%" },
  { name: "Reba Water", img: "/food/water.jpg", pos: "50% 45%" },
  { name: "Saudades", img: "/food/cheesebread.jpg", pos: "20% 100%" },
  { name: "Braziliana", img: "/food/sugarcane.jpg", pos: "50% 45%" },
  { name: "Sala Braziliana", img: "/food/sala.jpg", pos: "50% 60%" },
];

export function FoodDrink() {
  return (
    <section id="food-drink" className="paper-grain bg-parchment py-10 md:py-14">
      <Rail title="Food + Drink" index={1} cta={{ label: "View All Brands", href: "#" }} tone="light">
        {BRANDS.map(({ name, img, pos }, i) => (
          <RailCard key={name} href="#" index={i} className="w-[210px] sm:w-[230px] md:w-[250px]">
            <div
              className="relative aspect-[4/5] overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <Image
                src={img}
                alt={name}
                fill
                unoptimized
                className="photo-grade object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                style={{ objectPosition: pos }}
              />
              <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center bg-cream font-display text-[12px] font-bold text-ink transition-colors duration-200 group-hover:bg-rust group-hover:text-cream">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-2.5 flex items-start justify-between gap-2 border-t border-ink/12 pt-2">
              <h3 className="font-display text-[15px] font-bold uppercase leading-[1.15] text-ink">
                {name}
              </h3>
              <span
                aria-hidden
                className="mt-1 shrink-0 -translate-x-1 text-rust opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              >
                →
              </span>
            </div>
          </RailCard>
        ))}
      </Rail>
    </section>
  );
}
