
//被照顧者
import {Timestamp} from "@firebase/firestore";

export class CarePerson {
  id: string;
  name: string;
  age: number;
  birthday: Timestamp;
  height:number;
  weight:number;
  primaryCareGiverId:string;
  creatDate: Timestamp=Timestamp.now();
}
