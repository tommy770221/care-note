import { Timestamp } from '@firebase/firestore';
export class CareGiver {
    id: string;
    name: string;
    birthday: Timestamp;
    email: string;
    userID: string;
    careTeams: string[];
    tempCareTeams: string[];
    primaryCarePersonId:string;
    creatDate: Timestamp=Timestamp.now();
    role:string;
}

/*
照顧者角色
護士/護理師 registered nurse (RN)
（專科）護理師 nurse practitioner (NP)
醫師 medical doctor (MD)
藥師 pharmacist
物理治療師 physical therapist (PT)
呼吸治療師 respiratory therapist (RT)
職能治療師 occupational therapist (OT)
語言治療師 speech therapist (ST)
醫事放射師 radiographer
//醫事檢驗師 medical laboratory scientist
心理師 psychologist
//助產師 registered professional midwife
營養師 dietician
社會工作師 social worker
輔助醫護人員 paramedic*/
export enum roleEnum {
  //admin="admin",
  self="self",
  careGiver="careGiver",
  RN="registered nurse",
  NP="nurse practitioner",
  MD="medical doctor",
  pharmacist="pharmacist",
  PT="physical therapist",
  RT="respiratory therapist",
  OT="occupational therapist",
  ST="speech therapist",
  radiographer="radiographer",
  psychologist="psychologist",
  dietician="dietician",
  socialWorker="socialWorker",
  paramedic="paramedic",
  others="others",
}
