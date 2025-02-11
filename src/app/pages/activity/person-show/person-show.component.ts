import {Component, OnInit, Renderer2} from '@angular/core';
import {CareGiver} from "@/model/care-giver.model";
import {AppService} from "@services/app.service";
import {CareGiverService} from "@services/firestore/care-giver.service";
import {Router} from "@angular/router";
import {User} from "firebase/auth";
import {ToastrService} from "ngx-toastr";
import {CareTeam} from "@/model/care-team.model";
import {CareTeamService} from "@services/firestore/care-team.service";
import {CarePerson} from "@/model/care-person.model";
import {CarePersonService} from "@services/firestore/care-person.service";
import {
  faBowlRice,
  faCartShopping,
  faGlassWater,
  faHeartbeat, faPersonWalking,
  faRestroom,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {faFile, faIdCard} from "@fortawesome/free-regular-svg-icons";
import {document} from "ngx-bootstrap/utils";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-person-show',
  templateUrl: './person-show.component.html',
  styleUrl: './person-show.component.scss'
})
export class PersonShowComponent implements OnInit{
  user?: User | null = null;
  careGiver:CareGiver=new CareGiver();
  careTeams:Array<CareTeam>=[];
  carePerson:CarePerson=new CarePerson();
  readonly dateYearNow=new Date().getFullYear();
  activeTab:string='activity';
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
  waterIn='1500 ml'

  constructor(private appService: AppService,
              private careGiverService:CareGiverService,
              private router: Router,
              private toastr: ToastrService,
              private careTeamService : CareTeamService,
              private carePersonService: CarePersonService,) {
  }
  ngOnInit(): void {
    this.user=this.appService.user;
    if(this.user){
      this.careGiverService.queryByEmail('careGivers',this.user.email).then(resp=>{
        if(resp.size!=0){
          //console.log(resp.docs.at(0).data());
          this.careGiver=resp.docs.at(0).data() as CareGiver;
          //console.log('careGiver : ',this.careGiver);
          const time=this.careGiver.creatDate;
          console.log('date : ',time);
          //console.log('date : ',time.toDate());
          if(!this.careGiver?.primaryCarePersonId){
            console.log('not create care person yet');
            this.router.navigate(['/activity/addOne'],{state:this.careGiver});
          }else{
            this.carePersonService.queryOne(this.careGiver.primaryCarePersonId).subscribe(resp=>{
              //console.log(resp);
              if(resp.data()){
                this.carePerson=resp.data() as CarePerson;
              }
            })
          }
          if(this.careGiver?.careTeams?.length>0){
            for(let i=0;i<this.careGiver.careTeams.length;i++){
              this.careTeamService.queryOne(this.careGiver.careTeams[i]).subscribe(resp=>{
                //console.log("resp : ",resp)
                if(resp.data()){
                  const careTeam=resp.data() as CareTeam;
                  this.careTeams.push(careTeam);
                }else{
                  console.log('error : careTeam does not exist :',this.careGiver.careTeams[i]);
                }
              })
            }
          }else{
            //todo i18n
            this.toastr.error('CareTeams does not exist.');
          }

        }else {
          //todo i18n
          this.toastr.error('CareGiver does not exist.');
        }
      })
    }
  }

  showTab(str:string){
    this.activeTab=str;
  }

  onChange(value:string){
    console.log(value);
    this.carePersonService.queryOne(value).subscribe(resp=>{
      //console.log(resp);
      if(resp.data()){
        this.carePerson=resp.data() as CarePerson;
      }
    })
  }


}
