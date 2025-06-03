import { ReactComponent as ForkKnifeIcon } from "../shared/images/svg/forkknife.svg";
import { ReactComponent as UserIcon } from "../shared/images/svg/user.svg";
import { ReactComponent as SettingsIcon } from "../shared/images/svg/settings.svg";
import { ReactComponent as PotIcon } from "../shared/images/svg/pot.svg";
import { MenuItem } from "../view-models/menu-item";
import { links } from "../configs/links";

export const menuItems: MenuItem[] = [
  new MenuItem(1, "Меню", <ForkKnifeIcon />, links.view_menu),
  new MenuItem(0, "План", <PotIcon />, links.edit_menu),
  new MenuItem(2, "Профиль", <UserIcon />, links.profile),
  new MenuItem(3, "Настройки", <SettingsIcon />, links.settings),
];
