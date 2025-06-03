import { FC } from "react";
import { bemCN } from "../../configs/bem-classname";
import { Meal as MealClass } from "../../mocks/view-models/meal";
import "./meal.scss";
import { ReactComponent as UserIcon } from "../../shared/images/svg/user.svg";
import { ReactComponent as TimerIcon } from "../../shared/images/svg/timer.svg";

const mealCN = bemCN("meal");

export type MealProps = {
  meal: MealClass;
};

export const Meal: FC<MealProps> = ({ meal }) => {
  
  enum MealTypeImages {
    breakfast = 1,
    lanch,
    dinner,
    snack,
  }
  let imagesType = MealTypeImages[meal.mealTypeId];
  return (
    <div className={mealCN()}>
      <div className={mealCN("info")}>
        <p>{meal.mealTypeName}</p>
        <div className={mealCN("props")}>
          <div className={mealCN("prop")}>
            <UserIcon />
            <span>{meal.userName}</span>
          </div>
          <div className={mealCN("prop")}>
            <TimerIcon />
            <span>{meal.durationMinutes} мин.</span>
          </div>
        </div>
      </div>
      <div className={mealCN("image", { image: imagesType })}></div>
    </div>
  );
};
