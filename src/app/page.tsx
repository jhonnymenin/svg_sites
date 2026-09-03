import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FoodDrink } from "@/components/FoodDrink";
import { ServingGoodVibes } from "@/components/ServingGoodVibes";
import { NowNext } from "@/components/NowNext";
import { OurPeople } from "@/components/OurPeople";
import { SCAdvising } from "@/components/SCAdvising";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <FoodDrink />
      <ServingGoodVibes />
      <NowNext />
      <OurPeople />
      <SCAdvising />
      <Footer />
    </main>
  );
}
