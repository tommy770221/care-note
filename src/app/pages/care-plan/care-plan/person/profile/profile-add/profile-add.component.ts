import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {ref, uploadBytesResumable} from '@angular/fire/storage';

@Component({
    selector: 'app-profile-add',
    templateUrl: './profile-add.component.html',
    styleUrl: './profile-add.component.scss'
})
export class ProfileAddComponent implements OnInit {
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    minDate = new Date();

    constructor(private storage: AngularFireStorage) {
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }

    ngOnInit(): void {
      this.getFiles();
    }

    async uploadFile(input: HTMLInputElement) {
        if (!input.files) return;

        const files: FileList = input.files;

        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (file) {
                const storageRef = this.storage.storage.ref(file.name);
                storageRef.put(file).then((snapshot) => {});
                const buffer = await file.arrayBuffer();
                uploadBytesResumable(storageRef, buffer).then((snapshot) => {
                    console.log('Uploaded a blob or file!', snapshot);
                });
            }
        }
    }

    getFiles() {
        const storageRef = this.storage.storage.ref("");
        storageRef.listAll().then((result) => {
            result.items.forEach((ref) => {
                ref.getDownloadURL().then((url) => {console.log(url);});
            });
        });
    }
}
