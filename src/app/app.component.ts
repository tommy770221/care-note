import {Component} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import {environment} from 'environments/environment';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private router: Router,
        public translate: TranslateService
    ) {
        this.router.events.subscribe((event: Event) => {
            if (
                event instanceof NavigationEnd &&
                environment.NODE_ENV === 'production'
            ) {

            }
        });
      const browserLang = navigator.language;
      const userLang=localStorage.getItem('lan');
      const langs=['en', 'zh-TW','id','ja','va']
      console.log('browserLang: ',browserLang);
      console.log('userLang: ',userLang);
      translate.addLangs(langs);
      if(userLang && langs.includes(userLang)){
        console.log('use user lang : ',userLang);
        translate.setDefaultLang(userLang);
      }else{
        console.log('use browser Lang: ',browserLang);
        console.log('use browser Lang: (user)',userLang);
        if(langs.includes(browserLang)){
          translate.setDefaultLang(browserLang);
        }else{
          translate.setDefaultLang('en');
        }
      }

    }
}
