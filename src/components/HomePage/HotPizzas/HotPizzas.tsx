import "./HotPizzas.scss";
import Margherita_Pizza from "../../../assets/images/Margherita_Pizza.png";
import Four_Cheese_Pizza from "../../../assets/images/Four_Cheese_Pizza.png";
import Veggie_Supreme_Pizza from "../../../assets/images/Veggie_Supreme_Pizza.png";
import Mushroom_Truffle_Pizza from "../../../assets/images/Mushroom_&_Truffle_Pizza.png";
import Spinach_Ricotta_Pizza from "../../../assets/images/Spinach_Ricotta_Pizza.png";
import Pesto_Pizza from "../../../assets/images/Pesto_Pizza.png";
import Greek_Pizza from "../../../assets/images/Greek_Pizza.png";
import Roasted_Vegetable_Pizza from "../../../assets/images/Roasted_Vegetable_Pizza.png";
import Caprese_Pizza from "../../../assets/images/Caprese_Pizza.png";
import { getNumberAndCurrency } from "../../../assets/util";
// import { Button } from "../../Button/Button";

const pizzas = [
  {
    title: "Margherita Pizza",
    description:
      "Classic and simple, topped with fresh tomatoes, mozzarella, and basil.",
    price: 9,
    image: Margherita_Pizza,
  },
  {
    title: "Four Cheese Pizza",
    description:
      "A rich blend of mozzarella, gorgonzola, parmesan, and provolone.",
    price: 13,
    image: Four_Cheese_Pizza,
  },
  {
    title: "Veggie Supreme Pizza",
    description:
      "Loaded with colorful veggies like bell peppers, onions, and olives.",
    price: 12,
    image: Veggie_Supreme_Pizza,
  },
  {
    title: "Mushroom & Truffle Pizza",
    description: "Earthy mushrooms paired with aromatic truffle oil and cheese",
    price: 25,
    image: Mushroom_Truffle_Pizza,
  },
  {
    title: "Spinach and Ricotta Pizza",
    description: "Creamy ricotta meets fresh spinach on a crispy crust.",
    price: 14,
    image: Spinach_Ricotta_Pizza,
  },
  {
    title: "Pesto Pizza",
    description:
      "A vibrant base of basil pesto topped with mozzarella and cherry tomatoes.",
    price: 12,
    image: Pesto_Pizza,
  },
  {
    title: "Greek Pizza (Feta and Olives)",
    description:
      "Tangy feta, kalamata olives, and red onions on a savory base.",
    price: 14,
    image: Greek_Pizza,
  },
  {
    title: "Roasted Vegetable Pizza",
    description:
      "Caramelized veggies like zucchini and eggplant over a tomato sauce.",
    price: 15,
    image: Roasted_Vegetable_Pizza,
  },
  {
    title: "Caprese Pizza",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    price: 17,
    image: Caprese_Pizza,
  },
];

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
