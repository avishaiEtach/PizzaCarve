import { MenuSpacer } from "../../Menu/MenuSpacer/MenuSpacer";
import chef1 from "../../../assets/images/chef1.jpeg";
import chef2 from "../../../assets/images/chef2.jpeg";
import chef3 from "../../../assets/images/chef3.jpeg";
import chef4 from "../../../assets/images/chef4.jpeg";
import "./Chefs.scss";

const chefs = [
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

export const Chefs = () => {
  return (
    <div className="about-us-chefs">
      <div className="about-us-chefs-main-header">
        <h2>Our Chefs</h2>
        <MenuSpacer />
      </div>
      <div data-aos="fade-up" className="about-us-chefs-gallery">
        {chefs.map((chef, index) => (
          <div key={index} className="chef-card">
            <div className="chef-card-image-container">
              <img src={chef.image} alt="" />
            </div>
            <div className="chef-card-name">{chef.name}</div>
            <div className="chef-card-job-description">
              {chef.jobDescription}
            </div>
            <div className="chef-card-description">{chef.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
