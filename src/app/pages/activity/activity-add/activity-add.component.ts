import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "@services/firestore/activity/exercise.service";
import {WaterService} from "@services/firestore/activity/water.service";
import {ToiletService} from "@services/firestore/activity/toilet.service";
import {MealService} from "@services/firestore/activity/meal.service";
import {Exercise} from "@/model/activity/exercise.model";
import {StoolColor, Toilet, UrineColor} from "@/model/activity/toilet.model";
import {Water} from "@/model/activity/water.model";
import {Meal, MealType} from "@/model/activity/meal.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CarePersonService} from "@services/firestore/care-person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Timestamp} from "@firebase/firestore";

@Component({
    selector: 'app-activity-add',
    templateUrl: './activity-add.component.html',
    styleUrl: './activity-add.component.scss'
})
export class ActivityAddComponent implements OnInit {
    exercise: Exercise = new Exercise();
    toilet:Toilet =new Toilet();
    water:Water = new Water();
    meal:Meal = new Meal();
    mealTypeEnum=Object.values(MealType);
    urineColor=Object.values(UrineColor);
    stoolColor=Object.values(StoolColor);
    recordDate:Date = new Date();
    carePersonId:string;
    careGiverId:string;


    constructor(
        private exerciseService: ExerciseService,
        private waterService: WaterService,
        private toiletService: ToiletService,
        private mealService: MealService,
        private angularFirestore: AngularFirestore,
        private carePersonService: CarePersonService,
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
      const uid= this.angularFirestore.createId();
      if(this.exercise.howLong){
        this.exercise.careGiverId=this.careGiverId;
        this.exercise.carePersonId=this.carePersonId;
        this.exercise.id = uid;
        this.exercise.recordDate=Timestamp.fromDate(this.recordDate);
        this.exerciseService.saveOne(this.carePersonId+"/exercises/"+uid,this.exercise);
      }
      if(this.water.volume){
        this.water.careGiverId=this.careGiverId;
        this.water.carePersonId=this.carePersonId;
        this.water.id=uid;
        this.water.recordDate=Timestamp.fromDate(this.recordDate);
        this.waterService.saveOne(this.carePersonId+"/waters/"+uid,this.water);
      }
      if(this.meal.volume || this.meal.mealType){
        this.meal.careGiverId=this.careGiverId;
        this.meal.carePersonId=this.carePersonId;
        this.meal.id=uid;
        this.meal.recordDate=Timestamp.fromDate(this.recordDate);
        this.mealService.saveOne(this.carePersonId+"/meals/"+uid,this.meal);
      }
      if(this.toilet.stoolColor || this.toilet.stoolVolume || this.toilet.urineColor || this.toilet.urineVolume){
        this.toilet.careGiverId=this.careGiverId;
        this.toilet.carePersonId=this.carePersonId;
        this.toilet.id=uid;
        this.toilet.recordDate=Timestamp.fromDate(this.recordDate);
        this.toiletService.saveOne(this.carePersonId+"/toilets/"+uid,this.toilet);
      }

      this.toastr.success("save activities successfully.");
      this.router.navigate(['/']);
    }
}
