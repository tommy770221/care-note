import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CareTeamService} from "@services/firestore/care-team.service";
import {CarePerson} from "@/model/care-person.model";
import {CarePersonService} from "@services/firestore/care-person.service";
import {CareTeam} from "@/model/care-team.model";
import {CareGiverService} from "@services/firestore/care-giver.service";
import {CareGiver} from "@/model/care-giver.model";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class TeamProfileComponent implements OnInit {

    carePerson: CarePerson = new CarePerson();
    careTeam: CareTeam = new CareTeam();
    careGivers: CareGiver[] = new Array<CareGiver>();
    constructor(private route: ActivatedRoute,private careTeamService: CareTeamService,
                private carePersonService: CarePersonService,private careGiverService: CareGiverService) { }

    ngOnInit(): void {
       this.route.params.subscribe(params => {
         let teamId=params.id
         //console.log(teamId);
         this.careTeamService.queryOne(teamId).subscribe(response => {
           this.careTeam=response.data() as CareTeam;
           if(this.careTeam.careGivers){
             for(let i=0;i<this.careTeam.careGivers.length;i++){
               console.log("careGiverId: ",this.careTeam.careGivers[i]);
               this.careGiverService.queryOne(this.careTeam.careGivers[i]).subscribe(response => {
                 //console.log(response);
                 const careGiver = response.data() as CareGiver;
                 console.log("careGiver: ",careGiver);
                 this.careGivers.push(careGiver);
               })
             }
           }
           this.carePersonService.queryOne(teamId).subscribe(response => {
             this.carePerson = response.data() as CarePerson;
           })
         })
       })
    }
}
