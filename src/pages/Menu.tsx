import { MenuSpacer } from "../components/Menu/MenuSpacer/MenuSpacer";
import { MenuList } from "../components/Menu/MenuList/MenuList";
import { drinks, pastas, pizzas } from "../assets/data/data";

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
