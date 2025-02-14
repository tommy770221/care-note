import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private angularFirestore: AngularFirestore) { }

  queryActivities(url: string) {
   return  this.angularFirestore.collection(url).get();
  }
}
