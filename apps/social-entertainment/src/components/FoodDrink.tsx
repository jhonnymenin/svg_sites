import Image from "next/image";
import { Rail, RailCard, RailIntro } from "./Rail";
import { BrandMark, type BrandKey } from "./BrandMarks";

/* PLACEHOLDER PHOTOGRAPHY — /public/food/*.jpg are stock stand-ins until each brand supplies product shots. */
const BRANDS: { brand: BrandKey; name: string; sub?: string; img: string; pos: string }[] = [
  { brand: "central", name: "Central Pizza", img: "/food/pizza.jpg", pos: "58% 60%" },
  { brand: "bayou", name: "Bayou Teche Brewery", sub: "Downtown", img: "/food/brewery.jpg", pos: "50% 30%" },
  { brand: "tropical", name: "Tropical Smoothie", img: "/food/smoothie.jpg", pos: "50% 55%" },
  { brand: "reba", name: "Reba Water", img: "/food/water.jpg", pos: "78% 50%" },
  { brand: "saudades", name: "Saudades", sub: "cheese bread bites", img: "/food/cheesebread.jpg", pos: "30% 80%" },
  { brand: "braziliana", name: "Braziliana", sub: "suco de cana", img: "/food/sugarcane.jpg", pos: "50% 55%" },
  { brand: "sala", name: "Sala Braziliana", img: "/food/sala.jpg", pos: "50% 30%" },
];

export function FoodDrink() {
  return (
    <section
      id="food-drink"
      className="dusty py-14 [--rail-media-h:250px] md:py-20 md:[--rail-media-h:265px]"
    >
      <Rail
        label="Food + Drink brands"
        intro={
          <RailIntro
            title={
              <>
                Food +<br className="hidden lg:block" /> Drink
              </>
            }
            titleClass="text-[clamp(52px,6vw,84px)] text-rust-hi"
            body="A portfolio of craveable concepts and experiences that feed our communities and fuel connection."
            cta="View All Brands"
            ctaClass="bg-mustard text-ink hover:bg-[#d8a24a]"
          />
        }
      >
        {BRANDS.map(({ brand, name, sub, img, pos }, i) => (
          <RailCard key={brand} href="#" index={i} className="w-[200px] md:w-[212px]">
            <div className="@container relative h-(--rail-media-h) overflow-hidden rounded-[6px] bg-ink-3 ring-1 ring-cream/10">
              <Image
                src={img}
                alt=""
                fill
                unoptimized
                sizes="212px"
                className="photo-grade object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                style={{ objectPosition: pos }}
              />
              <div
                aria-hidden
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 55% at 50% 58%, rgba(15,13,11,0.62), rgba(15,13,11,0.12) 75%), linear-gradient(180deg, rgba(15,13,11,0) 55%, rgba(15,13,11,0.45))",
                }}
              />
              <div className="absolute inset-x-0 top-[57%] flex -translate-y-1/2 justify-center transition-transform duration-500 ease-out group-hover:-translate-y-[56%]">
                <BrandMark brand={brand} />
              </div>
            </div>
            <p className="mt-3 text-[15px] font-medium leading-[1.3] text-cream/90">
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                {name}
              </span>
              {sub ? <span className="block text-cream/60">{sub}</span> : null}
            </p>
          </RailCard>
        ))}
      </Rail>
    </section>
  );
}
