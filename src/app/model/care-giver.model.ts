import {Timestamp} from "@firebase/firestore-types";
export class CareGiver {
    id: string;
    name: string;
    age: number;
    email: string;
    userID: string;
    careTeams: string[];
    tempCareTeams: string[];
    primaryCarePersonId:string;
    creatDate: Timestamp;
}
