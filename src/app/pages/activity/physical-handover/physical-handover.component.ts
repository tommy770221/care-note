import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-physical-handover',
  templateUrl: './physical-handover.component.html',
  styleUrl: './physical-handover.component.scss'
})
export class PhysicalHandoverComponent {
  handoverForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.handoverForm = this.fb.group({
      date: [new Date().toISOString().split('T')[0]], // 預設今天日期
      handoverPerson: [''],
      receivingPerson: [''],
      patientName: [''],
      patientId: [''],
      age: [''],
      gender: [''],
      issue: [''],
      currentCondition: [''],
      todayActivities: [''],
      patientResponse: [''],
      shortTermGoal: [''],
      shortTermPlan: [''],
      midTermGoal: [''],
      midTermPlan: [''],
      longTermGoal: [''],
      longTermPlan: [''],
      progress: [''],
      specialNotes: [''],
      nextSteps: [''],
      otherSuggestions: [''],
      handoverTime: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.handoverForm.value); // 提交表單時輸出資料
  }
}
