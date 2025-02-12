import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {Meal} from "@/model/activity/meal.model";
import {Toilet} from "@/model/activity/toilet.model";

@Injectable({
  providedIn: 'root'
})
export class ToiletService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: Toilet): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(url: string, data: Toilet) {
    this.angularFirestore.doc('activities/'+url).set({...data})
  }

  updateOne(url: string, data: Toilet){
    this.angularFirestore.doc('activities/'+url).update({...data})
  }

  queryOne(url: string){
    return this.angularFirestore.doc('activities/'+url).get();
  }
}
