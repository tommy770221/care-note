import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {Exercise} from '@/model/activity/exercise.model';
import {Meal} from '@/model/activity/meal.model';
import {Water} from '@/model/activity/water.model';
import {Toilet} from '@/model/activity/toilet.model';
import {Activity} from '@/model/activity/activity.model';
import {TranslateService} from '@ngx-translate/core';
import {CareGiver} from "@/model/care-giver.model";
import {CareGiverService} from "@services/firestore/care-giver.service";

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.scss'
})
export class ActivityComponent implements OnInit, AfterViewChecked {
    @Input()
    activity: Activity;
    message: string;
    careGiver:CareGiver=new CareGiver();
    protected readonly JSON = JSON;

    constructor(private translateService: TranslateService,
                private careGiverService: CareGiverService,) {}

    ngAfterViewChecked(): void {
        //console.log(this.message);
    }

    ngOnInit(): void {
        console.log(typeof this.activity);
        this.careGiverService.queryOne(this.activity.careGiverId).subscribe(response => {
          this.careGiver=response.data() as CareGiver;
        })
        if (this.activity.type == 'exercise') {
            this.translateService
                .get('Activity.SHOW.COMPONENT.activity.exercise', {
                    howLong: this.activity.excerciseHowLong
                })
                .subscribe((msg) => {
                    this.message = msg;
                });
        } else if (this.activity.type == 'water') {
            this.translateService
                .get('Activity.SHOW.COMPONENT.activity.water', {
                    volume: this.activity.waterVolume
                })
                .subscribe((msg) => {
                    this.message = msg;
                });
        } else if (this.activity.type == 'meal') {
          let mealType;
          if (this.activity['mealType']) {
            mealType=this.translateService.instant(this.activity.mealType)
          }
          let volume=this.activity.mealVolume?this.activity.mealVolume : 0
            this.translateService
                .get('Activity.SHOW.COMPONENT.activity.meal', {
                    mealType: mealType,
                    volume: volume
                })
                .subscribe((msg) => {
                    this.message = msg;
                });
        } else if (this.activity.type == 'toilet') {
            let urineVolume = this.activity.urineVolume
                ? this.activity.urineVolume
                : 0;
            let stoolVolume = this.activity.stoolVolume
                ? this.activity.stoolVolume
                : 0;
            let stoolColor = this.activity.stoolColor?this.activity.stoolColor:'no';
            let urineColor =this.activity.urineColor?this.activity.urineColor:'no';
            if(stoolColor){
              stoolColor=this.translateService.instant(stoolColor);
            }
            if(urineColor){
              urineColor=this.translateService.instant(urineColor);
            }
            this.translateService
                .get('Activity.SHOW.COMPONENT.activity.toilet', {
                    stoolVolume: stoolVolume,
                    stoolColor: stoolColor,
                    urineVolume: urineVolume,
                    urineColor: urineColor
                })
                .subscribe((msg) => {
                    this.message = msg;
                });
        } else {
            //其他activity
            this.message = this.activity.message;
        }
    }
}
