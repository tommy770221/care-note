import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {CareTeam} from "@/model/care-team.model";
import {Suggestion} from "@/model/suggestion.model";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: Suggestion): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(url: string, data: Suggestion) {
    this.angularFirestore.doc('suggestions/'+url).set({...data})
  }

  updateOne(url: string, data: Suggestion){
    this.angularFirestore.doc('suggestions/'+url).update({...data})
  }

  queryOne(url: string){
    return this.angularFirestore.doc('suggestions/'+url).get();
  }
}
