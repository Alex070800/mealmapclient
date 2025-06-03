export class Meal {
  id: number;
  mealTypeId: number;
  mealTypeName: string;
  userName: string;
  durationMinutes: number;

  constructor(
    id: number,
    mealTypeId: number,
    mealTypeName: string,
    userName: string,
    durationMinutes: number
  ) {
    this.id = id;
    this.mealTypeId = mealTypeId;
    this.mealTypeName = mealTypeName;
    this.userName = userName;
    this.durationMinutes = durationMinutes;
  }
}
