import { bemCN } from "../../configs/bem-classname";
import "./profile-page.scss";
const profilePageCN = bemCN("profile-page");

export const ProfilePage = () => {
  return (
    <div className={profilePageCN()}>
      <h1>Личный кабинет</h1>
    </div>
  );
};
