import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dementiability-daily-schedule-form',
  templateUrl: './dementiability-daily-schedule-form.component.html',
  styleUrl: './dementiability-daily-schedule-form.component.scss'
})
export class DementiabilityDailyScheduleFormComponent {
  dailyScheduleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dailyScheduleForm = this.fb.group({
      time: [''],
      details: [''],
      location: [''],
      done: [false]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dailyScheduleForm.value);
  }
}
