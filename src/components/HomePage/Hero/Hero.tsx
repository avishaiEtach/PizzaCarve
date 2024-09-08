import { useNavigate } from "react-router-dom";
import pizza from "../../../assets/images/תמונה2.png";
import { Button } from "../../Button/Button";
import "./Hero.scss";
import { routesPath } from "../../../routes";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-text" data-aos="fade-up">
        <div className="flex column">
          <span className="hero-header">Authentic Pizzas</span>
          <span className="hero-header">Timeless Flavors</span>
        </div>
        <p className="hero-paragraph">
          Where the crust is king! At Cheesy Crust, we bring you the cheesiest,
          most delicious pizzas with a perfect golden crust in every bite.
          Indulge in our mouthwatering flavors, crafted with passion and topped
          with the freshest ingredients. It's more than just pizza—it's a cheesy
          dream come true!
        </p>
        <Button
          onClick={() => {
            navigate(routesPath.menu);
          }}
          type={"text"}
          text="View Menu"
        />
      </div>
      <div className="hero-image-container" data-aos="fade-up">
        <img className="rotate-image" src={pizza} />
      </div>
    </div>
  );
};
