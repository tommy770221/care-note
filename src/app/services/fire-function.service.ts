import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';


@Injectable({
  providedIn: 'root'
})
export class FireFunctionService {

  constructor(private angularFireFunction:AngularFireFunctions) {}

  async callFunction(name:string,data:any){
    const callable = this.angularFireFunction.httpsCallable(name);
    return callable(data).toPromise();
  }
}
