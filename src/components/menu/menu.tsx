import { FC, ReactNode, use } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./menu.scss";
import { menuItems } from "../../const/menu-items";
import { MenuItem } from "../../view-models/menu-item";
import { NavLink } from "react-router-dom";
import {
  localStorageService,
  LocalStorageVariableName,
} from "../../services/local-storage-service";
import { User } from "../../mocks/view-models/user";

const menuCN = bemCN("menu");

export type MenuProps = {};
export const Menu: FC<MenuProps> = ({}) => {
  const user = localStorageService.getValue<User>(
    LocalStorageVariableName.user
  );
  return (
    <div className={menuCN()}>
      {menuItems.map((item: MenuItem) => {
        if (item.id == 0) {
          if (user?.isMaster) {
            return (
              <NavLink
                key={item.id}
                className={menuCN("link", { isMaster: item.id == 0 })}
                to={item.link}
              >
                {item.icon}
              </NavLink>
            );
          } else return;
        } else
          return (
            <NavLink
              key={item.id}
              className={menuCN("link", { isMaster: item.id == 0 })}
              to={item.link}
            >
              {item.icon}
            </NavLink>
          );
      })}
    </div>
  );
};
