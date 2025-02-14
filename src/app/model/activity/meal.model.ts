import {Timestamp} from "@firebase/firestore";

export class Meal {
  id:string;
  carePersonId:string;
  careGiverId:string;
  createDate:Timestamp=Timestamp.now();
  recordDate:Timestamp;
  type:string='meal';
  mealType:MealType;
  volume:number;

}

export enum MealType{
  breakfast="breakfast",
  lunch="lunch",
  dinner="dinner",
  snack="snack",
}
