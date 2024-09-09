import "./HotPizzas.scss";
import { getNumberAndCurrency } from "../../../assets/util";
import { pizzas } from "../../../assets/data/data";
// import { Button } from "../../Button/Button";

export const HotPizzas = () => {
  return (
    <div className="hot-pizzas">
      <div data-aos="fade-up" className="hot-pizzas-header">
        <h2 className="hot-pizzas-h2">Hot Pizza Meals</h2>
        <p className="hot-pizzas-p">
          Savor the irresistible warmth of freshly baked pizza, crafted to
          perfection with bold flavors and premium ingredients.
        </p>
      </div>
      <div data-aos="fade-up" className="hot-pizzas-gallery">
        {pizzas.map((pizza, index) => (
          <div key={index} className="flex g20 hot-pizza-card">
            <div>
              <img className="hot-pizza-card-image" src={pizza.image} alt="" />
            </div>
            <div className="hot-pizza-card-text">
              <h4>{pizza.title}</h4>
              <p>{pizza.description}</p>
              <div className="flex g20 align-center hot-pizza-card-price-container">
                <span className="hot-pizza-card-price">
                  {getNumberAndCurrency(pizza.price)}
                </span>
                {/* <Button
                  size="small"
                  type={"text"}
                  variant="contained"
                  text="Order"
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
