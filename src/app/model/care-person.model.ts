
//被照顧者
import {Timestamp} from "@firebase/firestore";

export class CarePerson {
  id: string;
  name: string;
  age: number;
  careTeamId: string;
  creatDate: Timestamp;
}
