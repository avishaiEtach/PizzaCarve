import { galleryUrl } from "../../../assets/data/data";
import "./AboutUsIntro.scss";

export const AboutUsIntro = () => {
  return (
    <div data-aos="fade-up" className="about-us-intro-main-container">
      <div className="about-us-intro-gallery">
        {galleryUrl.map((url) => (
          <div key={url} style={{ backgroundImage: `url(${url})` }}></div>
        ))}
      </div>
      <div className="about-us-intro-section">
        <h2>
          Welcome to <span>Pizza Carve</span> – Where Every Slice is a Work of
          Art
        </h2>
        <p>
          At Pizza Carve, we craft pizzas that satisfy cravings and ignite taste
          buds. Our mission is simple: serve the cheesiest, most flavorful
          pizzas with a perfectly baked crust. From classic Margherita to
          gourmet creations, every pizza is made with passion and the freshest
          ingredients.
        </p>
        <p>
          Born from a love of pizza, we aim to bring more than just a meal—it’s
          an experience. Whether it’s a quick slice or a full pizza night, Pizza
          Carve is your spot for unforgettable flavors. Every bite is a
          celebration of joy, where quality and creativity reign supreme.
        </p>
        <p>
          Welcome to Pizza Carve, where every bite is a celebration of flavor,
          and the crust truly is king!
        </p>
      </div>
    </div>
  );
};
