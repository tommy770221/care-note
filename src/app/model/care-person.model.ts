import {Timestamp} from "@firebase/firestore-types";
//被照顧者
export class CarePerson {
  id: string;
  name: string;
  age: number;
  birthday: Timestamp;
  height:number;
  weight:number;
  primaryCareGiverId:string;
  creatDate: Timestamp;
}
