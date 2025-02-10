import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable({
    providedIn: 'root'
})
export class FireStoreService {
    constructor(private angularFirestore: AngularFirestore) {}

    save(url: string, data: any) {
        data.creatDate = new Date();
        this.angularFirestore
            .collection(url)
            .add(data)
            .then((rep) => {
                console.log(rep);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    query(url: string) {
        this.angularFirestore.firestore
            .collection(url)
            .where('name', '==', 'user')
            .get()
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

