import { useNavigate } from "react-router-dom";
import { bemCN } from "../../configs/bem-classname";
import { Button, ButtonSizes } from "../../ui/button/button";
import "./settings-page.scss";
import { authService } from "../../services/auth-service";
import { links } from "../../configs/links";
import Toggle from "../../ui/togle/toggle";
import { useState } from "react";
import { getTheme, setTheme } from "../../utils/theme-setter";
const settingsPageCN = bemCN("settings-page");

export const SettingsPage = () => {
  const navigate = useNavigate();

  const [isCheckThemeToggle, setIsCheckThemeToggle] = useState(
    getTheme() === "light" ? false : true
  );

  const logout = () => {
    authService.logout().then(() => {
      navigate(links.login);
    });
  };
  return (
    <div className={settingsPageCN()}>
      <h1>Настройки</h1>

      <div className={settingsPageCN("toggle-box")}>
        <label>Темная тема</label>
        <Toggle
          isChecked={isCheckThemeToggle}
          onChangeChecked={(isCheck: boolean) => {
            setIsCheckThemeToggle(isCheck);
            setTheme(isCheck ? "dark" : "light");
          }}
        />
      </div>
      <Button size={ButtonSizes.big} text="Выйти" onClick={logout} />
    </div>
  );
};
