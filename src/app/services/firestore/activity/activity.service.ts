import { Activity } from '@/model/activity/activity.model';
import { Injectable } from '@angular/core';
import {AngularFirestore, QuerySnapshot} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private angularFirestore: AngularFirestore) { }

  queryActivities(url: string) {
   return  this.angularFirestore.collection(url).get();
  }

  queryActivitiesOrderByRecordate(url: string) {
    return  this.angularFirestore.collection('activities/'+url).ref.orderBy('recordDate','desc').limit(2).get();
  }

  queryActivitiesOrderByRecordatePage(url: string, page: number) {

    if(page>1){
      return new Promise((resolve, reject) => {
        this.angularFirestore.collection('activities/'+url)
          .ref
          .orderBy('recordDate','desc')
          .limit(10 * (page-1))
          .get()
          .then((snapshot) => {
            const lastVisible = snapshot.docs[snapshot.docs.length-1];
            return this.angularFirestore.collection('activities/'+url)
              .ref
              .orderBy('recordDate','desc')
              .limit(10)
              .startAfter(lastVisible)
              .get();
          })
          .then((result:QuerySnapshot<unknown>) => resolve(result))
          .catch(error => reject(error));
      });
    }else{
      return this.angularFirestore.collection('activities/'+url)
        .ref
        .orderBy('recordDate','desc')
        .limit(10)
        .get();
    }
  }

  saveOne(url: string, data: Activity) {
      this.angularFirestore.doc('activities/'+url).set({...data})
    }
  
    updateOne(url: string, data: Activity){
      this.angularFirestore.doc('activities/'+url).update({...data})
    }
  
    queryOne(url: string){
      return this.angularFirestore.doc('activities/'+url).get();
    }
}
