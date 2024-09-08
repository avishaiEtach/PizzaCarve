import Margherita_Pizza from "../assets/images/Margherita_Pizza.png";
import Four_Cheese_Pizza from "../assets/images/Four_Cheese_Pizza.png";
import Veggie_Supreme_Pizza from "../assets/images/Veggie_Supreme_Pizza.png";
import Mushroom_Truffle_Pizza from "../assets/images/Mushroom_&_Truffle_Pizza.png";
import Spinach_Ricotta_Pizza from "../assets/images/Spinach_Ricotta_Pizza.png";
import Pesto_Pizza from "../assets/images/Pesto_Pizza.png";
import Greek_Pizza from "../assets/images/Greek_Pizza.png";
import Roasted_Vegetable_Pizza from "../assets/images/Roasted_Vegetable_Pizza.png";
import Caprese_Pizza from "../assets/images/Caprese_Pizza.png";
import Creamy_Pesto_Linguine from "../assets/images/Creamy_Pesto_Linguine.png";
import Spaghetti_Aglio_e_Olio from "../assets/images/Spaghetti_Aglio_e_Olio.png";
import Spinach_Ricotta_Cannelloni from "../assets/images/Spinach_Ricotta_Cannelloni.png";
import Cacio_e_Pepe from "../assets/images/Cacio_e_Pepe.png";
import Pumpkin_Sage_Ravioli from "../assets/images/Pumpkin_Sage_Ravioli.png";
import Penne_Arrabbiata from "../assets/images/Penne_Arrabbiata.png";
import Gnocchi_alla_Sorrentina from "../assets/images/Gnocchi_alla_Sorrentina.png";
import Fettuccine_Alfredo from "../assets/images/Fettuccine_Alfredo.png";
import Pasta_alla_Norma from "../assets/images/Pasta_alla_Norma.png";
import San_Pellegrino from "../assets/images/San_Pellegrino.png";
import Limoncello_Spritz from "../assets/images/Limoncello_Spritz.png";
import Coca_Cola from "../assets/images/Coca_Cola.png";
import Sprite from "../assets/images/Sprite1.png";
import Aperol_Spritz from "../assets/images/Aperol_Spritz.png";
import Negroni from "../assets/images/Negroni.png";
import Chianti_Glass from "../assets/images/Chianti_Glass.png";
import Prosecco_Glass from "../assets/images/Prosecco_Glass.png";
import Italian_Soda_Blood_Orange from "../assets/images/Italian_Soda_Blood_Orange.png";
import { MenuSpacer } from "../components/Menu/MenuSpacer/MenuSpacer";
import { MenuList } from "../components/Menu/MenuList/MenuList";

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

const pastas = [
  {
    title: "Creamy Pesto Linguine",
    description:
      "Al dente linguine tossed in a creamy basil pesto, finished with pine nuts and Parmesan.",
    price: 18,
    image: Creamy_Pesto_Linguine,
  },
  {
    title: "Spaghetti Aglio e Olio",
    description:
      "Spaghetti coated in garlic and olive oil, with a hint of chili and fresh parsley.",
    price: 14,
    image: Spaghetti_Aglio_e_Olio,
  },
  {
    title: "Spinach and Ricotta Cannelloni",
    description:
      "Baked cannelloni filled with ricotta and spinach, smothered in tomato sauce.",
    price: 20,
    image: Spinach_Ricotta_Cannelloni,
  },
  {
    title: "Cacio e Pepe",
    description:
      "A simple Roman dish of pasta tossed in Pecorino Romano and black pepper.",
    price: 16,
    image: Cacio_e_Pepe,
  },
  {
    title: "Pumpkin Sage Ravioli",
    description:
      "Delicate ravioli filled with pumpkin, served in a sage butter sauce.",
    price: 22,
    image: Pumpkin_Sage_Ravioli,
  },
  {
    title: "Penne Arrabbiata",
    description:
      "Penne pasta tossed in a spicy tomato sauce with garlic and chili peppers.",
    price: 15,
    image: Penne_Arrabbiata,
  },
  {
    title: "Gnocchi alla Sorrentina",
    description:
      "Soft gnocchi baked in tomato sauce with mozzarella and fresh basil.",
    price: 23,
    image: Gnocchi_alla_Sorrentina,
  },
  {
    title: "Fettuccine Alfredo",
    description:
      "Rich and creamy Alfredo sauce over wide fettuccine noodles with Parmesan.",
    price: 19,
    image: Fettuccine_Alfredo,
  },
  {
    title: "Pasta alla Norma",
    description:
      "Rigatoni with roasted eggplant, fresh tomato sauce, and ricotta salata.",
    price: 21,
    image: Pasta_alla_Norma,
  },
];

const drinks = [
  {
    title: "San Pellegrino Sparkling Water",
    description: "",
    price: 3.99,
    image: San_Pellegrino,
  },
  {
    title: "Coca-Cola",
    description: "",
    price: 2.99,
    image: Coca_Cola,
  },
  {
    title: "Sprite",
    description: "",
    price: 2.99,
    image: Sprite,
  },
  {
    title: "Limoncello Spritz",
    description: "",
    price: 9.49,
    image: Limoncello_Spritz,
  },
  {
    title: "Aperol Spritz",
    description: "",
    price: 8.99,
    image: Aperol_Spritz,
  },
  {
    title: "Negroni",
    description: "",
    price: 10.99,
    image: Negroni,
  },
  {
    title: "Chianti Glass (Red Wine)",
    description: "",
    price: 7.99,
    image: Chianti_Glass,
  },
  {
    title: "Prosecco Glass (Sparkling Wine)",
    description: "",
    price: 8.49,
    image: Prosecco_Glass,
  },
  {
    title: "Italian Soda (Blood Orange)",
    description: "",
    price: 4.99,
    image: Italian_Soda_Blood_Orange,
  },
];

export function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-header">Our Menu</h1>
      <MenuSpacer />
      <MenuList list={pizzas} header="Pizzas" />
      <MenuSpacer />
      <MenuList list={pastas} header="Pastas" />
      <MenuSpacer />
      <MenuList list={drinks} header="Drinks" />
    </div>
  );
}
