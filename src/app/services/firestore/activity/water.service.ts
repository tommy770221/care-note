import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {Toilet} from "@/model/activity/toilet.model";
import {Water} from "@/model/activity/water.model";

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: Water): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(url: string, data: Water) {
    this.angularFirestore.doc('activities/'+url).set({...data})
  }

  updateOne(url: string, data: Water){
    this.angularFirestore.doc('activities/'+url).update({...data})
  }

  queryOne(url: string){
    return this.angularFirestore.doc('activities/'+url).get();
  }
}
