import { AboutUsIntro } from "../components/AboutUs/AboutUsIntro/AboutUsIntro";
import { AboutUsStats } from "../components/AboutUs/AboutUsStats/AboutUsStats";
import { Chefs } from "../components/AboutUs/Chefs/Chefs";
import { MenuSpacer } from "../components/Menu/MenuSpacer/MenuSpacer";

export function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>About us</h1>
        <MenuSpacer />
      </div>
      <AboutUsIntro />
      <Chefs />
      <AboutUsStats />
    </div>
  );
}
