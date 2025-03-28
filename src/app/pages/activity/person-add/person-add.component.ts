import {Component, OnInit} from '@angular/core';
import {CarePerson} from "@/model/care-person.model";
import {CareTeam} from "@/model/care-team.model";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import {CareGiverService} from "@services/firestore/care-giver.service";
import {AppService} from "@services/app.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CarePersonService} from "@services/firestore/care-person.service";
import {CareTeamService} from "@services/firestore/care-team.service";
import {CareGiver} from "@/model/care-giver.model";
import {Timestamp} from "@firebase/firestore";
import {PrimaryDiseaseService} from "@services/firestore/translation/primary-disease.service";
import {PrimaryDisease} from "@/model/translation/primary-disease.model";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrl: './person-add.component.scss'
})
export class PersonAddComponent implements OnInit {
  carePerson:CarePerson=new CarePerson();
  careTeam:CareTeam=new CareTeam();
  carePersonId:string ='';
  //現在時間減掉60歲
  birthday:Date =new Date(new Date().getTime()-60*365*24*60*60*1000);

  constructor(private router:Router,
              private location: Location,
              private toastr:ToastrService,
              private careGiverService:CareGiverService,
              private appService:AppService,
              private afs: AngularFirestore,
              private carePersonService:CarePersonService,
              private careTeamService:CareTeamService,
              private primaryDiseaseService:PrimaryDiseaseService) {
  }
  ngOnInit(): void {

  }

  //todo form validate
  addModel(){
    let careGiver=this.location.getState() as CareGiver
    const uid=this.afs.createId();
    console.log('careGiver :',careGiver)
    console.log(careGiver.userID);
    console.log(careGiver.email);
    if(this.carePerson.primaryDisease){
      this.primaryDiseaseService.queryDiseasesByDis(this.carePerson.primaryDisease)
        .then(resp=>{
          if(resp.size==0){
            const disId=this.afs.createId();
            this.carePerson.primaryDiseaseInputId=disId;
            let primaryDisease=new PrimaryDisease();
            primaryDisease.disease=this.carePerson.primaryDisease;
            primaryDisease.id=disId;
            this.primaryDiseaseService.saveOne(disId,primaryDisease);
          }else{
            const primaryDisease=resp.docs.at(0).data() as PrimaryDisease;
            this.carePerson.primaryDiseaseInputId=primaryDisease.id;
          }
        })
    }
    this.birthday.setHours(0,0,0,0);
    this.carePerson.birthday=Timestamp.fromDate(this.birthday);
    if(!careGiver.userID){
      //this.toastr.success('Test Toast');
      this.careGiverService.queryOne(this.appService.user.uid).subscribe((resp)=>{
        console.log('resp : ',resp);
        careGiver=resp.data() as CareGiver;
        console.log(careGiver.userID);
        console.log(careGiver.email);
        console.log(this.carePerson.name);
        console.log(this.carePerson.age);
        console.log(this.careTeam.name);
        console.log(this.birthday);
        if(this.carePerson.id){
          this.createPersonAndTeam(careGiver,this.carePerson.id,this.carePerson,this.careTeam);
        }else{
          this.createPersonAndTeam(careGiver,uid,this.carePerson,this.careTeam);
        }

      });
    }else{
      console.log(careGiver.userID);
      console.log(careGiver.email);
      console.log(this.carePerson.name);
      console.log(this.carePerson.age);
      console.log(this.careTeam.name);
      if(this.carePerson.id){
        this.createPersonAndTeam(careGiver,this.carePerson.id,this.carePerson,this.careTeam);
      }else{
        this.createPersonAndTeam(careGiver,uid,this.carePerson,this.careTeam);
      }

    }
    this.router.navigate(['/']);
  }

  //personId.equals(teamId)
  createPersonAndTeam(careGiver:CareGiver,personId:string,carePerson:CarePerson,careTeam:CareTeam){
    //init careGiver
    careGiver.primaryCarePersonId=personId;
    if(!careGiver.careTeams){
      careGiver.careTeams=[];
    }
    if(!careGiver.careTeams.includes(personId)){
      careGiver.careTeams.push(personId);
    }


    //init carePerson
    carePerson.id=personId;
    carePerson.primaryCareGiverId=careGiver.userID;

    //init careTeams
    careTeam.id=personId;
    if(!careTeam.careGivers){
      careTeam.careGivers=[];
    }
    if(!careTeam.careGivers.includes(careGiver.userID)){
      careTeam.careGivers.push(careGiver.userID);
    }
    this.careGiverService.updateOne(careGiver.userID,careGiver);
    this.carePersonService.saveOne(personId,carePerson);
    this.careTeamService.saveOne(personId,careTeam);
  }

  queryCarePerson(){
    this.carePersonService.queryOne(this.carePersonId).subscribe(resp=>{
      if(resp.data()){
        this.carePerson=resp.data() as CarePerson;
        this.birthday=this.carePerson.birthday.toDate();
      }else{
        this.toastr.error('查無資料');
      }
    })
    this.careTeamService.queryOne(this.carePersonId).subscribe(resp=>{
      if(resp.data()){
        this.careTeam=resp.data() as CareTeam;
      }else{
        this.toastr.error('查無資料');
      }
    })
  }

  test(){
    // let careGiver=new CareGiver();
    // if(!careGiver.careTeams){
    //   careGiver.careTeams=[];
    // }
    // careGiver.careTeams.push('1');
    // careGiver.careTeams.push('2');
    // careGiver.careTeams.push('2');
    // careGiver.careTeams.push('3');
    // careGiver.careTeams.push('3');
    // careGiver.careTeams.push('3');
    // const index =careGiver.careTeams.indexOf('2', 0);
    // if (index > -1) {
    //   careGiver.careTeams.splice(index, 1);
    // }
    // this.careGiverService.updateOne(this.appService.user.uid,careGiver);
    this.birthday.setHours(0,0,0,0);
    console.log(this.birthday)
  }
}
