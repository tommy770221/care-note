import { Injectable } from '@angular/core';
import {CarePerson} from "@/model/care-person.model";
import {CareTeam} from "@/model/care-team.model";
import {AngularFirestore, DocumentReference} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CareTeamService {

  constructor(private angularFirestore: AngularFirestore) { }

  async save(url: string, data: CareTeam): Promise<DocumentReference|string> {
    try {
      const rep = await this.angularFirestore.collection(url).add({...data});
      return rep;
    } catch (error) {
      console.log(error);
      return 'something went wrong';
    }
  }

  saveOne(id: string, data: CareTeam) {
    this.angularFirestore.doc('careTeams/'+id).set({...data})
  }

  updateOne(id: string, data: CareTeam){
    this.angularFirestore.doc('careTeams/'+id).update({...data})
  }

  queryOne(id: string){
    return this.angularFirestore.doc('careTeams/'+id).get();
  }
}
