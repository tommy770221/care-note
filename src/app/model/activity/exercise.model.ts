import {Timestamp} from "@firebase/firestore";

export class Exercise {
  id:string;
  carePersonId:string;
  careGiverId:string;
  createDate:Timestamp=Timestamp.now();
  recordDate:Timestamp;
  type:string='exercise';
  howLong:number;
}
