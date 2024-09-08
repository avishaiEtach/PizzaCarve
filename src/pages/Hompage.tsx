import { Hero } from "../components/HomePage/Hero/Hero";
import { HomePageContactUs } from "../components/HomePage/HomePageContactUs/HomePageContactUs";
import { HotPizzas } from "../components/HomePage/HotPizzas/HotPizzas";
import { Services } from "../components/HomePage/Services/Services";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <HotPizzas />
      <HomePageContactUs />
    </div>
  );
}
