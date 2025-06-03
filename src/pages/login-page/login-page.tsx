import { Link, useNavigate } from "react-router-dom";
import { bemCN } from "../../configs/bem-classname";
import { authService } from "../../services/auth-service";
import { Button, ButtonSizes } from "../../ui/button/button";
import "./login-page.scss";
import { links } from "../../configs/links";
import { Input, TypeDataInput, TypeViewInput } from "../../ui/input/input";

const loginPageCN = bemCN("login-page");

export const LoginPage = () => {
  const navigate = useNavigate();

  const login = (id:number) => {
    authService.login(id).then((res: any) => {
      navigate(links.view_menu);
    });
  };

  return (
    <div className={loginPageCN()}>
      <h1>Авторизация</h1>
      <div className={loginPageCN("input-panel")}>
        <label>Электронная почта</label>
        <Input
          typeData={TypeDataInput.email}
          typeView={TypeViewInput.text}
          placeholder="Адрес электронной почты"
        />
      </div>
      <div className={loginPageCN("input-panel")}>
        <label>Пароль</label>
        <Input
          typeData={TypeDataInput.password}
          typeView={TypeViewInput.text}
          placeholder="Пароль"
        />
      </div>
      <Button size={ButtonSizes.big} text="Продолжить как Алёна" onClick={() =>login(1)} />
      <Button size={ButtonSizes.big} text="Продолжить как Леша" onClick={() =>login(2)} />

      <p>
        Нет аккаунта? <Link to={links.reg}>Зарегистрироваться</Link>
      </p>
    </div>
  );
};
