import { Meal } from "./meal";

export class Day {
  date: Date;
  meals: Meal[];

  constructor(date: Date, meals: Meal[]) {
    this.date = date;
    this.meals = meals;
  }
}
