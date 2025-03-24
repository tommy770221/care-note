import {Component, OnInit} from '@angular/core';
import {StoolColor, UrineColor,MealType, Activity} from "@/model/activity/activity.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CarePersonService} from "@services/firestore/care-person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Timestamp} from "@firebase/firestore";
import { ActivityService } from '@services/firestore/activity/activity.service';

@Component({
    selector: 'app-activity-add',
    templateUrl: './activity-add.component.html',
    styleUrl: './activity-add.component.scss'
})
export class ActivityAddComponent implements OnInit {
    activityExcercise:Activity=new Activity();
    activityWater:Activity=new Activity();
    activityMeal:Activity=new Activity();
    activityToilet:Activity=new Activity();
    mealTypeEnum=Object.values(MealType);
    urineColor=Object.values(UrineColor);
    stoolColor=Object.values(StoolColor);
    recordDate:Date = new Date();
    carePersonId:string;
    careGiverId:string;


    constructor(
        private angularFirestore: AngularFirestore,
        private carePersonService: CarePersonService,
        private activityService: ActivityService,
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.carePersonId=params.carePersonId;
        this.careGiverId=params.careGiverId;
      })
    }

    addModel(): void {
      
      if(this.activityExcercise.excerciseHowLong){
        this.activityExcercise.careGiverId=this.careGiverId;
        this.activityExcercise.carePersonId=this.carePersonId;
        const uid= this.angularFirestore.createId();
        this.activityExcercise.id = uid;
        this.activityExcercise.type="exercise";
        this.activityExcercise.recordDate=Timestamp.fromDate(this.recordDate);
        this.activityService.saveOne(this.carePersonId+"/activities/"+uid,this.activityExcercise);
      }
      if(this.activityWater.waterVolume){
        this.activityWater.careGiverId=this.careGiverId;
        this.activityWater.carePersonId=this.carePersonId;
        const uid= this.angularFirestore.createId();
        this.activityWater.id=uid;
        this.activityWater.type="water";
        this.activityWater.recordDate=Timestamp.fromDate(this.recordDate);
        this.activityService.saveOne(this.carePersonId+"/activities/"+uid,this.activityWater);
      }
      if(this.activityMeal.mealVolume || this.activityMeal.mealType){
        this.activityMeal.careGiverId=this.careGiverId;
        this.activityMeal.carePersonId=this.carePersonId;
        const uid= this.angularFirestore.createId();
        this.activityMeal.id=uid;
        this.activityMeal.type="meal";
        this.activityMeal.recordDate=Timestamp.fromDate(this.recordDate);
        this.activityService.saveOne(this.carePersonId+"/activities/"+uid,this.activityMeal);
      }
      if(this.activityToilet.stoolColor || this.activityToilet.stoolVolume || this.activityToilet.urineColor || this.activityToilet.urineVolume){
        this.activityToilet.careGiverId=this.careGiverId;
        this.activityToilet.carePersonId=this.carePersonId;
        const uid= this.angularFirestore.createId();
        this.activityToilet.id=uid;
        this.activityToilet.type="toilet";
        this.activityToilet.recordDate=Timestamp.fromDate(this.recordDate);
        this.activityService.saveOne(this.carePersonId+"/activities/"+uid,this.activityToilet);
      }

      this.toastr.success("save activities successfully.");
      this.router.navigate(['/']);
    }
}
