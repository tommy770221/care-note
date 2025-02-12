import { Injectable } from '@angular/core';
import {Exercise} from "@/model/activity/exercise.model";
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {Meal} from "@/model/activity/meal.model";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: Meal): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(url: string, data: Meal) {
    this.angularFirestore.doc('activities/'+url).set({...data})
  }

  updateOne(url: string, data: Meal){
    this.angularFirestore.doc('activities/'+url).update({...data})
  }

  queryOne(url: string){
    return this.angularFirestore.doc('activities/'+url).get();
  }
}
