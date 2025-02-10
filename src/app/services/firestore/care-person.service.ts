import { Injectable } from '@angular/core';
import {CareGiver} from "@/model/care-giver.model";
import {CarePerson} from "@/model/care-person.model";
import {AngularFirestore, DocumentReference} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CarePersonService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: CarePerson): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(id: string, data: CarePerson) {
    this.angularFirestore.doc('carePersons/'+id).set({...data})
  }

  updateOne(id: string, data: CarePerson){
    this.angularFirestore.doc('carePersons/'+id).update({...data})
  }

  queryOne(id: string){
    return this.angularFirestore.doc('carePersons/'+id).get();
  }
}
