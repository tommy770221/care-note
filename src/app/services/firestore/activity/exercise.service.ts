import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {CarePerson} from "@/model/care-person.model";
import {Exercise} from "@/model/activity/exercise.model";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: Exercise): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(url: string, data: Exercise) {
    this.angularFirestore.doc('activities/'+url).set({...data})
  }

  updateOne(url: string, data: Exercise){
    this.angularFirestore.doc('activities/'+url).update({...data})
  }

  queryOne(url: string){
    return this.angularFirestore.doc('activities/'+url).get();
  }
}
