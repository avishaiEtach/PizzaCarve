import { chefs } from "../../../assets/data/data";
import { MenuSpacer } from "../../Menu/MenuSpacer/MenuSpacer";
import "./Chefs.scss";

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
