import {Component, ElementRef, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
    constructor(
        public translate: TranslateService,
        private el: ElementRef
    ) {}

    ngOnInit(): void {
      const browserLang = navigator.language;
      const userLang=localStorage.getItem('lan');
      const langs=['en', 'zh-TW','id','ja','va']
      let myTag = this.el.nativeElement.querySelector('#lang-show');
      myTag.classList.remove('flag-icon-tw');
      myTag.classList.remove('flag-icon-jp');
      myTag.classList.remove('flag-icon-us');
      myTag.classList.remove('flag-icon-id');
      myTag.classList.remove('flag-icon-va');
      if (userLang){
        if(userLang==='en'){
          myTag.classList.add('flag-icon-us');
        }else if(userLang==='zh-TW'){
          myTag.classList.add('flag-icon-tw');
        }else if(userLang==='id'){
          myTag.classList.add('flag-icon-id');
        }else if(userLang==='ja'){
          myTag.classList.add('flag-icon-jp');
        }else if(userLang==='va'){
          myTag.classList.add('flag-icon-va');
        }
      }else{
        console.log("userLang ",userLang);
        myTag.classList.add('flag-icon-us');
      }
    }
    changeLan(lan: string) {
        console.log('currentLang : ', this.translate.currentLang);
        console.log('this lang : ', lan);
        let myTag = this.el.nativeElement.querySelector('#lang-show');
        let myTagList =
            this.el.nativeElement.querySelectorAll('#select-lang div');
        myTag.classList.remove('flag-icon-tw');
        myTag.classList.remove('flag-icon-jp');
        myTag.classList.remove('flag-icon-us');
        myTag.classList.remove('flag-icon-id');
        myTag.classList.remove('flag-icon-va');
        for (let x = 0; x < myTagList.length; x++) {
            myTagList[x].classList.remove('active');
        }
        if (lan == 'zh-TW') {
            myTag.classList.add('flag-icon-tw');
        } else if (lan == 'ja') {
            myTag.classList.add('flag-icon-jp');
        } else if (lan == 'en') {
            myTag.classList.add('flag-icon-us');
        } else if (lan == 'id') {
            myTag.classList.add('flag-icon-id');
        } else if (lan == 'va') {
            myTag.classList.add('flag-icon-va');
        }
        localStorage.setItem('lan', lan);
        this.translate.use(lan);
    }
}
