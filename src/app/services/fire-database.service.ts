import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable({
  providedIn: 'root'
})
export class FireDatabaseService {

  constructor(private fireDatabase:AngularFireDatabase) { }

  save(url:string,data: any){
    let testCaresRef =this.fireDatabase.database.ref((url));
    let testCareRef=testCaresRef.push();
    data.createDate=new Date().getTime();
    testCareRef.set(data).then((rep)=>{
      console.log(rep);
    }).catch((error)=>{
      console.log(error);
    });
  }

  query(url:string){
    let testCaresRef =this.fireDatabase.database.ref((url));
    testCaresRef.equalTo('user').get().then((snapshot)=>{
      console.log(snapshot.val());
    }).catch((error)=>{
      console.log(error);
    });
  }
}
