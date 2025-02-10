import {Timestamp} from "@firebase/firestore-types";

export class CareTeam {
    id: string;
    name: string;
    careGivers: string[];
    tempCareGivers: string[];
    creatDate: Timestamp;
}
