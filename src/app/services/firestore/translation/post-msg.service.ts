import { PostMsg } from '@/model/translation/post-msg.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostMsgService {

  constructor(private angularFirestore: AngularFirestore) { }

  saveOne(id: string, data: PostMsg) {
      this.angularFirestore.doc('translations-postMsg/'+id).set({...data})
    }
  
    updateOne(id: string, data: PostMsg){
      this.angularFirestore.doc('translations-postMsg/'+id).update({...data})
    }
  
    queryOne(id: string){
      return this.angularFirestore.doc('translations-postMsg/'+id).get();
    }
}
