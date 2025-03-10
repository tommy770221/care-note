import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    Renderer2
} from '@angular/core';
import {CareGiver} from '@/model/care-giver.model';
import {AppService} from '@services/app.service';
import {CareGiverService} from '@services/firestore/care-giver.service';
import {Router} from '@angular/router';
import {User} from 'firebase/auth';
import {ToastrService} from 'ngx-toastr';
import {CareTeam} from '@/model/care-team.model';
import {CareTeamService} from '@services/firestore/care-team.service';
import {CarePerson} from '@/model/care-person.model';
import {CarePersonService} from '@services/firestore/care-person.service';
import {
    faBowlRice,
    faCartShopping,
    faGlassWater,
    faHeartbeat,
    faPersonWalking,
    faRestroom,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import {faFile, faIdCard} from '@fortawesome/free-regular-svg-icons';
import {document} from 'ngx-bootstrap/utils';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivityService} from '@services/firestore/activity/activity.service';
import {PrimaryDiseaseService} from '@services/firestore/translation/primary-disease.service';
import {PrimaryDisease} from '@/model/translation/primary-disease.model';
import {Exercise} from '@/model/activity/exercise.model';
import {Water} from '@/model/activity/water.model';
import {Meal} from '@/model/activity/meal.model';
import {Toilet} from '@/model/activity/toilet.model';
import {forkJoin} from 'rxjs';
import { FireFunctionService } from '@services/fire-function.service';
import { Activity } from '@/model/activity/activity.model';

@Component({
    selector: 'app-person-show',
    templateUrl: './person-show.component.html',
    styleUrl: './person-show.component.scss'
})
export class PersonShowComponent
    implements OnInit, AfterViewChecked, AfterViewInit
{
    user?: User | null = null;
    careGiver: CareGiver = new CareGiver();
    careTeams: Array<CareTeam> = [];
    carePerson: CarePerson = new CarePerson();
    readonly dateYearNow = new Date().getFullYear();
    activeTab: string = 'activity';
    myGroup = new FormGroup({
        selectCareTeam: new FormControl()
    });
    protected readonly faCartShopping = faCartShopping;
    protected readonly faHeartbeat = faHeartbeat;
    protected readonly faFile = faFile;
    protected readonly faIdCard = faIdCard;
    protected readonly faUserPlus = faUserPlus;
    protected readonly faGlassWater = faGlassWater;
    protected readonly faBowlRice = faBowlRice;
    protected readonly faRestroom = faRestroom;
    protected readonly faPersonWalking = faPersonWalking;
    waterIn = '1500 ml';
    primaryDis = '';
    primaryDisChinese = '';
    activities: Array<Exercise | Water | Meal | Toilet | Activity> = [];

    constructor(
        private appService: AppService,
        private careGiverService: CareGiverService,
        private router: Router,
        private toastr: ToastrService,
        private careTeamService: CareTeamService,
        private carePersonService: CarePersonService,
        private activityService: ActivityService,
        private primaryDiseaseService: PrimaryDiseaseService,
        private fireFunctionService: FireFunctionService,
    ) {}

    ngAfterViewInit(): void {
        //console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        //console.log('ngAfterViewChecked');
    }

    ngOnInit(): void {
        this.user = this.appService.user;
        if (this.user) {
            this.careGiverService
                .queryByEmail('careGivers', this.user.email)
                .then((resp) => {
                    if (resp.size != 0) {
                        //console.log(resp.docs.at(0).data());
                        this.careGiver = resp.docs.at(0).data() as CareGiver;
                        //console.log('careGiver : ',this.careGiver);
                        const time = this.careGiver.creatDate;
                        console.log('date : ', time);
                        //console.log('date : ',time.toDate());
                        if (!this.careGiver?.primaryCarePersonId) {
                            console.log('not create care person yet');
                            this.router.navigate(['/activity/addOne'], {
                                state: this.careGiver
                            });
                        } else {
                            this.carePersonService
                                .queryOne(this.careGiver.primaryCarePersonId)
                                .subscribe((resp) => {
                                    //console.log(resp);
                                    if (resp.data()) {
                                        this.carePerson =
                                            resp.data() as CarePerson;
                                        //console.log(this.carePerson.id);
                                      this.showActivities();

                                        if (
                                            this.carePerson
                                                .primaryDiseaseInputId
                                        ) {
                                            this.primaryDiseaseService
                                                .queryOne(
                                                    this.carePerson
                                                        .primaryDiseaseInputId
                                                )
                                                .subscribe((resp) => {
                                                    const primaryDisease =
                                                        resp.data() as PrimaryDisease;
                                                    this.primaryDis =
                                                        primaryDisease.translated[
                                                            localStorage.getItem(
                                                                'lan'
                                                            )]
                                                    this.primaryDisChinese=primaryDisease.translated['zh-TW'];        
                                                        ;
                                                });
                                        }
                                    }
                                });
                        }
                        if (this.careGiver?.careTeams?.length > 0) {
                            for (
                                let i = 0;
                                i < this.careGiver.careTeams.length;
                                i++
                            ) {
                                this.careTeamService
                                    .queryOne(this.careGiver.careTeams[i])
                                    .subscribe((resp) => {
                                        //console.log("resp : ",resp)
                                        if (resp.data()) {
                                            const careTeam =
                                                resp.data() as CareTeam;
                                            this.careTeams.push(careTeam);
                                        } else {
                                            console.log(
                                                'error : careTeam does not exist :',
                                                this.careGiver.careTeams[i]
                                            );
                                        }
                                    });
                            }
                        } else {
                            //todo i18n
                            this.toastr.error('CareTeams does not exist.');
                        }
                    } else {
                        //todo i18n
                        this.toastr.error('CareGiver does not exist.');
                    }
                });
        }
    }

    private showActivities() {
        this.activities=[];
        forkJoin({
            meals: this.activityService.queryActivities(
                '/activities/' + this.carePerson.id + '/meals/'
            ),
            exercises: this.activityService.queryActivities(
                '/activities/' + this.carePerson.id + '/exercises/'
            ),
            waters: this.activityService.queryActivities(
                '/activities/' + this.carePerson.id + '/waters/'
            ),
            toilets: this.activityService.queryActivities(
                '/activities/' + this.carePerson.id + '/toilets/'
            )
        }).subscribe(({meals, exercises, waters, toilets}) => {
            meals.docs.forEach((datum) => {
                const meal = datum.data() as Meal;
                //console.log(meal);
                this.activities.push(meal);
            });

            exercises.docs.forEach((datum) => {
                const exercise = datum.data() as Exercise;
                //console.log(exercise);
                this.activities.push(exercise);
            });

            waters.docs.forEach((datum) => {
                const water = datum.data() as Water;
                //console.log(water);
                this.activities.push(water);
            });

            toilets.docs.forEach((datum) => {
                const toilet = datum.data() as Toilet;
                //console.log(toilet);
                this.activities.push(toilet);
            });
            this.sort();
        });
    }

    showTab(str: string) {
        this.activeTab = str;
    }

    onChange(value: string) {
        console.log(value);
        this.carePersonService.queryOne(value).subscribe((resp) => {
            //console.log(resp);
            if (resp.data()) {
                this.carePerson = resp.data() as CarePerson;
            }
            this.primaryDis = '';
            if (this.carePerson.primaryDiseaseInputId) {
                this.primaryDiseaseService
                    .queryOne(this.carePerson.primaryDiseaseInputId)
                    .subscribe((resp) => {
                        const primaryDisease = resp.data() as PrimaryDisease;
                        this.primaryDis =
                            primaryDisease.translated[
                                localStorage.getItem('lan')
                            ];
                        this.primaryDisChinese=primaryDisease.translated['zh-TW'];     
                    });
            }
            this.showActivities();
        });
    }

    sort() {
        this.activities.sort((a, b) => {
            return (
                b.createDate.toDate().valueOf() -
                a.createDate.toDate().valueOf()
            );
        });
    }

    func(){
        document.getElementById('AI-recommendation').disabled=true;
       this.fireFunctionService.callFunction('helloWorld',"請給我"+this.primaryDisChinese+"的護理行動建議").then((resp)=>{
            let activity=new Activity();
            activity.message=resp.response;
            activity.careGiverId=this.careGiver.id;
            activity.carePersonId=this.carePerson.id;
            this.activities.push(activity);
            this.sort();
            console.log(resp.response);
        });
    }
}
