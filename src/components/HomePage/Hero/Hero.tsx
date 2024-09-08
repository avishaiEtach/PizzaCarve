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
          Where the crust is king! At Pizza Carve, we bring you bold flavors and
          irresistible slices. Every pizza is a masterpiece, crafted with love
          and topped with the freshest ingredients. From the cheesiest creations
          to gourmet innovations, we make sure every bite is packed with flavor
          and finished with the perfect crispy crust. Welcome to a pizza
          experience like no other—where every slice is a celebration of
          deliciousness!
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
