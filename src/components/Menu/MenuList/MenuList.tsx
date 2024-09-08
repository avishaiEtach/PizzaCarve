import { getNumberAndCurrency } from "../../../assets/util";
import "./MenuList.scss";
interface ListItemProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

interface MenuListProps {
  list: ListItemProps[];
  header: string;
}

export const MenuList = ({ list, header }: MenuListProps) => {
  return (
    <div data-aos="fade-up" className="menu-list-main-container">
      <h2 className="menu-list-main-header">{header}</h2>
      <div className="menu-list-cards-container">
        {list.map((listItem, index) => (
          <div key={index} className="flex">
            <div className="menu-list-card-image-container">
              <img src={listItem.image} alt="" />
            </div>
            <div
              className="menu-list-card-text-container"
              data-center={listItem.description === ""}
            >
              <div className="menu-list-card-title-container">
                <div className="menu-list-card-title">
                  <span>{listItem.title}</span>
                </div>
                <div className="space"></div>
                <div>
                  <span>{getNumberAndCurrency(listItem.price)}</span>
                </div>
              </div>
              <div className="menu-list-card-description">
                {listItem.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
