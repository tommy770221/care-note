import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  constructor(public translate: TranslateService) {
  }
  changeLan(lan:string){
    console.log('currentLang : ',this.translate.currentLang);
    console.log('this lang : ',lan);
    localStorage.setItem('lan',lan);
    this.translate.use(lan);
  }
}
