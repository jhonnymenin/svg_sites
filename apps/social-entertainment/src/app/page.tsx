import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { SinceSep } from "@/components/SinceSep";
import { FoodDrink } from "@/components/FoodDrink";
import { ServingGoodVibes } from "@/components/ServingGoodVibes";
import { NowNext } from "@/components/NowNext";
import { OurPeople } from "@/components/OurPeople";
import { SCAdvising } from "@/components/SCAdvising";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <SinceSep />
      <FoodDrink />
      <ServingGoodVibes />
      <NowNext />
      <OurPeople />
      <SCAdvising />
      <Footer />
    </main>
  );
}
