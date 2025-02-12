import {Component, OnInit} from '@angular/core';
import {SuggestionService} from "@services/firestore/suggestion.service";
import {ToastrService} from "ngx-toastr";
import {Suggestion} from "@/model/suggestion.model";
import {Timestamp} from "@firebase/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AppService} from "@services/app.service";

@Component({
    selector: 'app-suggestion',
    templateUrl: './suggestion.component.html',
    styleUrl: './suggestion.component.scss'
})
export class SuggestionComponent implements OnInit {
    suggestion: Suggestion=new Suggestion();
    email: string = 'Email : tommy770221@gmail.com';

    constructor(private suggestionService: SuggestionService,private toastr: ToastrService,
                private afs: AngularFirestore,private appService: AppService) { }

    ngOnInit(): void {
    }

    addModel(): void {
      const uid=this.afs.createId();
      this.suggestion.id=uid;
      this.suggestion.userId=this.appService.user.uid;
      this.suggestion.creatDate=Timestamp.now();
      this.suggestionService.saveOne(this.suggestion.userId+"/posts/"+uid,this.suggestion);
      this.toastr.success("Suggestion Added!");
    }
}
