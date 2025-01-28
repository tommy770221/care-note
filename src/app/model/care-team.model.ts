import {Timestamp} from "@firebase/firestore";

export class CareTeam {
    id: string;
    name: string;
    careGivers: string[];
    carePersonId: string;
    tempCareGivers:string[];
    creatDate: Timestamp;
}
