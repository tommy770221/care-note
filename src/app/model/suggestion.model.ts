import {Timestamp} from "@firebase/firestore";

export class Suggestion {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  userId: string;
  creatDate: Timestamp;
}
