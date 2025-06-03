import { bemCN } from "../../configs/bem-classname";
import { Menu } from "../menu/menu";
import "./footer.scss";
const footerCN = bemCN("footer");
export const Footer = () => {
  return (
    <footer className={footerCN()}>
      <Menu />
    </footer>
  );
};
