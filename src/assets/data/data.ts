import { ReactComponent as bicycle } from "../images/icons/bicycle.svg";
import { ReactComponent as bio } from "../images/icons/bio.svg";
import { ReactComponent as pizza_slice } from "../images/icons/pizza_slice.svg";
import { ReactComponent as chef } from "../images/icons/chef.svg";
import { ReactComponent as customers } from "../images/icons/customers.svg";
import { ReactComponent as award } from "../images/icons/award.svg";
import Margherita_Pizza from "../images/products/Margherita_Pizza.png";
import Four_Cheese_Pizza from "../images/products/Four_Cheese_Pizza.png";
import Veggie_Supreme_Pizza from "../images/products/Veggie_Supreme_Pizza.png";
import Mushroom_Truffle_Pizza from "../images/products/Mushroom_&_Truffle_Pizza.png";
import Spinach_Ricotta_Pizza from "../images/products/Spinach_Ricotta_Pizza.png";
import Pesto_Pizza from "../images/products/Pesto_Pizza.png";
import Greek_Pizza from "../images/products/Greek_Pizza.png";
import Roasted_Vegetable_Pizza from "../images/products/Roasted_Vegetable_Pizza.png";
import Caprese_Pizza from "../images/products/Caprese_Pizza.png";
import Creamy_Pesto_Linguine from "../images/products/Creamy_Pesto_Linguine.png";
import Spaghetti_Aglio_e_Olio from "../images/products/Spaghetti_Aglio_e_Olio.png";
import Spinach_Ricotta_Cannelloni from "../images/products/Spinach_Ricotta_Cannelloni.png";
import Cacio_e_Pepe from "../images/products/Cacio_e_Pepe.png";
import Pumpkin_Sage_Ravioli from "../images/products/Pumpkin_Sage_Ravioli.png";
import Penne_Arrabbiata from "../images/products/Penne_Arrabbiata.png";
import Gnocchi_alla_Sorrentina from "../images/products/Gnocchi_alla_Sorrentina.png";
import Fettuccine_Alfredo from "../images/products/Fettuccine_Alfredo.png";
import Pasta_alla_Norma from "../images/products/Pasta_alla_Norma.png";
import San_Pellegrino from "../images/products/San_Pellegrino.png";
import Limoncello_Spritz from "../images/products/Limoncello_Spritz.png";
import Coca_Cola from "../images/products/Coca_Cola.png";
import Sprite from "../images/products/Sprite1.png";
import Aperol_Spritz from "../images/products/Aperol_Spritz.png";
import Negroni from "../images/products/Negroni.png";
import Chianti_Glass from "../images/products/Chianti_Glass.png";
import Prosecco_Glass from "../images/products/Prosecco_Glass.png";
import Italian_Soda_Blood_Orange from "../images/products/Italian_Soda_Blood_Orange.png";
import chef1 from "../images/people/chef1.jpeg";
import chef2 from "../images/people/chef2.jpeg";
import chef3 from "../images/people/chef3.jpeg";
import chef4 from "../images/people/chef4.jpeg";

export const cards = [
  {
    text: "Fresh, nutritious ingredients combined with delicious flavors to keep you satisfied and healthy.",
    title: "Healthy Foods",
    icon: bio,
  },
  {
    text: "Enjoy your pizza hot and fresh, delivered to your door with lightning speed.",
    title: "Fastest Delivery",
    icon: bicycle,
  },
  {
    text: "Experience unique and authentic flavors crafted from time-honored recipes",
    title: "Original Recipes",
    icon: pizza_slice,
  },
];

export const pizzas = [
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

export const pastas = [
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

export const drinks = [
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

export const galleryUrl = [
  "https://images.unsplash.com/photo-1564936281403-f92f66f89ee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1447279506476-3faec8071eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1542834291-c514e77b215f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY0fHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1571705042748-55feda1cfadc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzkxfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1651978595434-9fe13b011172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0YWxpYW4lMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTEzfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/uploads/1412198485051133af17f/5049dacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTUxfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1517644493876-7864565e3bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTk2fHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1530329650488-10f6eff05388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjA5fHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
];

export const chefs = [
  {
    name: "Tommaso Bianchi",
    jobDescription: "Pizza Maestro",
    description:
      "From the heart of Naples, Tommaso brings decades of expertise in crafting authentic Neapolitan pizzas with a perfect wood-fired crust.",
    image: chef1,
  },
  {
    name: "Alessandro Romano",
    jobDescription: "Pasta Artisan",
    description:
      "Alessandro’s handmade pastas are crafted with love and precision, using traditional Italian techniques and fresh ingredients, delivering an unforgettable dining experience with each plate.",
    image: chef2,
  },
  {
    name: "Luca De Luca",
    jobDescription: "Sauce Specialist",
    description:
      "Known for his rich, flavorful sauces, Luca transforms simple tomatoes and herbs into vibrant, mouthwatering masterpieces.",
    image: chef3,
  },
  {
    name: "Sofia Caruso",
    jobDescription: "Dessert Connoisseur",
    description:
      "Sofia creates heavenly Italian desserts, from creamy tiramisu to perfect panna cotta, ensuring a sweet end to every meal.",
    image: chef4,
  },
];

export const stats = [
  {
    icon: customers,
    title: "Happy Customers",
    number: 12450,
    withPlusIcon: true,
  },
  {
    icon: pizza_slice,
    title: "Pizzas Served",
    number: 50000,
    withPlusIcon: true,
  },
  {
    icon: award,
    title: "Number of Awards",
    number: 15,
    withPlusIcon: false,
  },
  {
    icon: chef,
    title: "Expert Chefs",
    number: 4,
    withPlusIcon: false,
  },
];
