import {Component, Input, OnInit} from '@angular/core';
import {CareGiver, roleEnum} from "@/model/care-giver.model";
import {User} from "firebase/auth";
import {CareGiverService} from "@services/firestore/care-giver.service";
import {Router} from "@angular/router";
import {AppService} from "@services/app.service";
import {Timestamp} from "@firebase/firestore";
import {sleep} from "@/utils/helpers";
import {CareTeam} from "@/model/care-team.model";
import {CareTeamService} from "@services/firestore/care-team.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class CareGiverProfileComponent implements OnInit {
    @Input()
    careGiver: CareGiver=new CareGiver();
    //現在時間減掉40歲
    @Input()
    birthday:Date =new Date(new Date().getTime()-40*365*24*60*60*1000);

    careTeams:CareTeam[]=[];
    roleEnum=Object.values(roleEnum);

    constructor(private appService:AppService, private careGiverService: CareGiverService,
                private router: Router,private careTeamService : CareTeamService,
                private toastr:ToastrService) {

    }

    ngOnInit(): void {
      //console.log(this.appService.user.uid);
      this.careGiverService.queryOne(this.appService.user.uid).subscribe( (resp) => {
        //console.log(resp);
        this.careGiver=resp.data() as CareGiver;
        //console.log(this.careGiver);
        if(this.careGiver.birthday){
          this.birthday=this.careGiver.birthday.toDate();
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
      });

    }


    addModel(): void {
      this.birthday.setHours(0,0,0,0);
      this.careGiver.birthday=Timestamp.fromDate(this.birthday);
      this.careGiverService.updateOne(this.careGiver.id,this.careGiver);
      this.toastr.success('CareGiver Updated successfully.');
    }
}
