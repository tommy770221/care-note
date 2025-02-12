import {Timestamp} from "@firebase/firestore";

export class Toilet {
  id:string;
  carePersonId:string;
  careGiverId:string;
  createDate:Timestamp=Timestamp.now();
  recordDate:Timestamp;
  stoolColor:string;
  stoolVolume:number;
  urineColor:string;
  urineVolume:number;
}

//基本護理實習手冊p.214
export enum UrineColor{
  yellow= "urine-yellow",
  transparent= "urine-transparent",
  milky="urine-milky",
  whiteSticky="urine-whiteSticky",
  strongBrownColor="urine-strongBrownColor",
  orange="urine-orange",
  tan="urine-tan",
  red="urine-red",
  black="urine-black",
  green="urine-green",
  reddishBrown="urine-reddishBrown",
  purple="urine-purple",
  other="urine-other",
}

export enum StoolColor{
  tan= "stool-tan",
  green= "stool-green",
  tarryStool= "stool-tarry",
  red="stool-red",
  surfaceBlood= "stool-surface-blood",
  chocolateColor= "stool-chocolate",
  PusAndBlood= "stool-pus-and-blood",
  brownBlack= "stool-brown-black",
  lightBrown= "stool-lightBrown",
  yellow= "stool-yellow",
  offWhite="stool-offWhite",
  other= "stool-other",
}
