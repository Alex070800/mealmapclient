import { Link, NavLink } from "react-router-dom";
import { bemCN } from "../../configs/bem-classname";
import "./header.scss";
import { menuItems } from "../../const/menu-items";
import { MenuItem } from "../../view-models/menu-item";
import { links } from "../../configs/links";

const headerCN = bemCN("header");

export const Header = () => {
  return (
    <header className={headerCN()}>
      <Link to={links.start}>
        <div></div>
        <h1>MealMap</h1>
      </Link>
      <div>
        {menuItems.map((item: MenuItem) => (
          <NavLink
            key={item.id}
            className={headerCN("nav-link")}
            to={item.link}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
