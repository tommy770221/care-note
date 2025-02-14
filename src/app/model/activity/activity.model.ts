import {Timestamp} from "@firebase/firestore";

export class Activity {
  id:string;
  carePersonId:string;
  careGiverId:string;
  createDate:Timestamp=Timestamp.now();
  recordDate:Timestamp;
  type:string='activity';

}
