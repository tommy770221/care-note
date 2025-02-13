import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CarePerson} from "@/model/care-person.model";
import {PrimaryDisease} from "@/model/translation/primary-disease.model";

@Injectable({
  providedIn: 'root'
})
export class PrimaryDiseaseService {

  constructor(private angularFirestore: AngularFirestore) { }

  queryDiseases(url: string) {
    return  this.angularFirestore.collection(url).get()
  }

  queryDiseasesByDis(disease:string) {
    return  this.angularFirestore.collection("translations-diseases/").ref.where('disease','==',disease).get();
  }

  saveOne(id: string, data: PrimaryDisease) {
    this.angularFirestore.doc('translations-diseases/'+id).set({...data})
  }

  updateOne(id: string, data: PrimaryDisease){
    this.angularFirestore.doc('translations-diseases/'+id).update({...data})
  }

  queryOne(id: string){
    return this.angularFirestore.doc('translations-diseases/'+id).get();
  }
}
