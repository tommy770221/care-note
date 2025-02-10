import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  myGroup = new FormGroup({
    name: new FormControl(),
    email:new FormControl(),
    name2: new FormControl(),
    experience: new FormControl(),
    skills: new FormControl(),
    agreeTerms: new FormControl(),
  });

}
