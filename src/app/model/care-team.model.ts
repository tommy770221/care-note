import {Timestamp} from "@firebase/firestore";

export class CareTeam {
    id: string;
    name: string;
    careGivers: string[];
    tempCareGivers: string[];
    creatDate: Timestamp;
}
