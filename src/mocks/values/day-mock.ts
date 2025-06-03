import { Day } from "../view-models/day";
import { Meal } from "../view-models/meal";

export const dayMock = new Day(new Date(), [
  new Meal(1, 1, "Завтрак", "Лёша", 20),
  new Meal(2, 2, "Обед", "Алёна", 40),
  new Meal(3, 3, "Полдник", "Алёна", 10),
  new Meal(4, 4, "Ужин", "Алёна", 25),
]);
