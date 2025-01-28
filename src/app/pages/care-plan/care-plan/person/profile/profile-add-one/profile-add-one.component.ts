import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import {CareGiver} from "@/model/care-giver.model";
import {CarePerson} from "@/model/care-person.model";
import {CareTeam} from "@/model/care-team.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile-add-one',
  templateUrl: './profile-add-one.component.html',
  styleUrl: './profile-add-one.component.scss'
})
export class ProfileAddOneComponent implements OnInit{
  private carePerson:CarePerson=new CarePerson();
  private careTeam:CareTeam=new CareTeam();

  constructor(private router:Router,private location: Location,private toastr:ToastrService) {
  }
  ngOnInit(): void {
    const careGiver=this.location.getState() as CareGiver
    console.log('careGiver :',careGiver)
    console.log(careGiver.userID);
    console.log(careGiver.email);
    if(!careGiver.userID){
      this.toastr.success('Test Toast');
    }
  }

}
