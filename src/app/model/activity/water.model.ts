import {Timestamp} from "@firebase/firestore";

export class Water {
  id:string;
  carePersonId:string;
  careGiverId:string;
  createDate:Timestamp=Timestamp.now();
  recordDate:Timestamp;
  volume:number;
}
