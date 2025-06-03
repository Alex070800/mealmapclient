import { Menu } from "../../components/menu/menu";
import { TopPanel } from "../../components/top-panel/top-panel";
import { bemCN } from "../../configs/bem-classname";
import { ReactComponent as CalendarIcon } from "../../shared/images/svg/arrow-right.svg";
import { Card } from "../../ui/card/card";
import "./view-meal-page.scss";
const viewMealPageCn = bemCN("view-meal-page");

export const ViewMealPage = () => {
  return (
    <div className={viewMealPageCn()}>
      <TopPanel />
      <div className={viewMealPageCn("dishes")}>
        <Card>
          <div>Карточка 1</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
        <Card>
          <div>Карточка 2</div>
        </Card>
      </div>
    </div>
  );
};
