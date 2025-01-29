import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {CareGiver} from "@/model/care-giver.model";
import {Timestamp} from "@firebase/firestore-types";

@Injectable({
    providedIn: 'root'
})
export class CareGiverService {
    constructor(private angularFirestore: AngularFirestore) {}

    async testSave(url: string, data: CareGiver): Promise<DocumentReference|string> {
        try {
            const rep = await this.angularFirestore.collection(url).add({...data});
            return rep;
        } catch (error) {
            console.log(error);
            return 'something went wrong';
        }
    }

    saveOne(id: string, data: CareGiver) {
       this.angularFirestore.doc('careGivers/'+id).set({...data})
    }

  updateOne(id: string, data: CareGiver){
    this.angularFirestore.doc('careGivers/'+id).update({...data})
  }

  queryOne(id: string){
    return this.angularFirestore.doc('careGivers/'+id).get();
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
