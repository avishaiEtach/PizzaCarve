import "./Services.scss";
import { ReactComponent as bicycle } from "../../../assets/images/bicycle.svg";
import { ReactComponent as bio } from "../../../assets/images/bio.svg";
import { ReactComponent as pizza_slice } from "../../../assets/images/pizza_slice.svg";

const cards = [
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

export const Services = () => {
  return (
    <div className="services">
      <div data-aos="fade-up" className="services-header">
        <h2 className="services-h2">Our Services</h2>
        <p className="services-p">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="services-cards-container flex justify-center align-center g20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex column justify-center align-center g20 services-card"
          >
            <div data-aos="fade-up" className="services-card-icon">
              <card.icon />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
