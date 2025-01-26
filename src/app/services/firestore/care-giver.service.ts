import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {CareGiver} from "@/model/care-giver.model";

@Injectable({
    providedIn: 'root'
})
export class CareGiverService {
    constructor(private angularFirestore: AngularFirestore) {}

    async save(url: string, data: CareGiver): Promise<DocumentReference|string> {
        data.creatDate = new Date();
        try {
            const rep = await this.angularFirestore.collection(url).add({...data});
            console.log(rep);
            return rep;
        } catch (error) {
            console.log(error);
            return 'something went wrong';
        }
    }

    async queryByEmail(url: string, email: string) {
     const resp=await this.angularFirestore.firestore
        .collection(url)
        .where('email', '==', email)
        .get()
      console.log('resp : ',resp);
      return resp;
    }
}
