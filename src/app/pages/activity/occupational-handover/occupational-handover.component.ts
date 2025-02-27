import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-occupational-handover',
  templateUrl: './occupational-handover.component.html',
  styleUrl: './occupational-handover.component.scss'
})
export class OccupationalHandoverComponent {
  handoverForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.handoverForm = this.fb.group({
      basicInfo: this.fb.group({
        name: [''],
        age: [''],
        gender: [''],
        condition: ['']
      }),
      currentStatus: this.fb.group({
        mental: [''],
        speech: [''],
        mood: ['']
      }),
      physicalCondition: this.fb.group({
        rightArm: [''],
        rightLeg: [''],
        dailyLife: ['']
      }),
      todayActivities: this.fb.group({
        intervention: [''],
        response: [''],
        progress: ['']
      }),
      precautions: [''],
      treatmentPlan: this.fb.group({
        shortTerm: [''],
        midTerm: [''],
        longTerm: ['']
      }),
      nextSteps: this.fb.group({
        therapist: [''],
        family: [''],
        team: ['']
      })
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.handoverForm.value);
  }
}
