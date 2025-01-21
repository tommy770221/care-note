import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable({
  providedIn: 'root'
})
export class FireDatabaseService {

  constructor(private fireDatabase:AngularFireDatabase) { }

  save(url:string,data: Object){
    let testCaresRef =this.fireDatabase.database.ref(('testCares/'));
    let testCareRef=testCaresRef.push();
    testCareRef.set({user:'test',age:20}).then((rep)=>{
      console.log(rep);
    }).catch((error)=>{
      console.log(error);
    });
  }
}
