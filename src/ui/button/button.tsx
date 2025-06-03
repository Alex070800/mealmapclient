import { bemCN } from "../../configs/bem-classname";
import "./button.scss";

import { FC, ReactNode } from "react";

export enum ButtonSizes {
  small,
  big,
}

// export enum ButtonColors {
//   transition,
//   green,
//   violet,
//   orange,
//   red,
//   blue,
//   white,
//   crimson,
//   grey,
//   pink,
// }

type ButtonProps = {
  id?: string;
  text?: string;
  icon?: ReactNode;
  // color: ButtonColors;
  size: ButtonSizes;
  noDisabled?: boolean;
  onClick?: () => void;
};
const buttonCN = bemCN("button");
export const Button: FC<ButtonProps> = ({
  id,
  text,
  icon,
  // color,
  size,
  noDisabled,
  onClick,
}) => {
  let sizeClass = ButtonSizes[size];
  // let colorClass = ButtonColors[color];

  return (
    <button
      id={id}
      onClick={() => onClick && !noDisabled && onClick()}
      className={buttonCN({
        size: sizeClass,
        // color: colorClass,
        disable: noDisabled,
      })}
    >
      {icon}
      {text}
    </button>
  );
};
