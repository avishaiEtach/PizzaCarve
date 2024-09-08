import { ReactComponent as chef } from "../../../assets/images/chef.svg";
import { ReactComponent as customers } from "../../../assets/images/customers.svg";
import { ReactComponent as pizza_slice } from "../../../assets/images/pizza_slice.svg";
import { ReactComponent as award } from "../../../assets/images/award.svg";
import "./AboutUsStats.scss";
import CountUp from "react-countup";

const stats = [
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
