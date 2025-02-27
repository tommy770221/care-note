import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dementiability-wow-model-form',
  templateUrl: './dementiability-wow-model-form.component.html',
  styleUrl: './dementiability-wow-model-form.component.scss'
})
export class DementiabilityWowModelFormComponent {
  wowModelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.wowModelForm = this.fb.group({
      name: [''],
      location: [''],
      contact: [''],
      date: [''],
      who: [''],
      observationsWhat: [''],
      observationsWhy: [''],
      observationsWhen: [''],
      observationsWhenNot: [''],
      unmetNeeds: [''],
      whatWillYouDoCueing: [''], // Cueing (wayfinding, finding things)
      whatWillYouDoAgenda: [''], // Agenda
      whatWillYouDoRoles: [''], // Roles
      whatWillYouDoRoutines: [''], // Routines (in an agenda)
      whatWillYouDoSupport: [''], // Support for ADL’s (cueing)
      whatWillYouDoLeisure: [''], // Leisure activities (things to do)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.wowModelForm.value);
  }
}
