import { FC, ReactNode } from "react";
import { bemCN } from "../../configs/bem-classname";
import "./card.scss"
const cardCN = bemCN("card");

export type CardProps = {
  children: ReactNode;
};
export const Card: FC<CardProps> = ({ children }) => {
  return <div className={cardCN()}>{children}</div>;
};
