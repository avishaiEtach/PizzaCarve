import { stats } from "../../../assets/data/data";
import "./AboutUsStats.scss";
import CountUp from "react-countup";

export const AboutUsStats = () => {
  return (
    <div className="about-us-stats">
      <div data-aos="fade-up" className="stats-gallery">
        {stats.map((status, index) => (
          <div key={index}>
            <div className="stats-card-icon">
              <status.icon />
            </div>
            <div className="stats-card-number">
              <CountUp className="count-up" end={status.number} duration={20} />
              <span className="plus-icon">
                {status.withPlusIcon ? "+" : ""}
              </span>
            </div>
            <div className="stats-card-number-deception">{status.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
