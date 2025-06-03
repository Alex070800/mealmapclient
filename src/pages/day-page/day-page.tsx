import { Meal } from "../../components/meal/meal";
import { bemCN } from "../../configs/bem-classname";
import { dayMock } from "../../mocks/values/day-mock";
import { Meal as MealClass } from "../../mocks/view-models/meal";
import { Card } from "../../ui/card/card";
import "./day-page.scss";

const dayPageCN = bemCN("day-page");

export const DayPage = () => {
  return (
    <div className={dayPageCN()}>
      {dayMock.meals.map((meal: MealClass) => (
        <Card key={meal.id}>
          <Meal meal={meal} />
        </Card>
      ))}
    </div>
  );
};
