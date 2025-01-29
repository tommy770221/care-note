
//被照顧者
import {Timestamp} from "@firebase/firestore";

export class CarePerson {
  id: string;
  name: string;
  age: number;
  primaryCareGiverId:string;
  creatDate: Timestamp;
}
