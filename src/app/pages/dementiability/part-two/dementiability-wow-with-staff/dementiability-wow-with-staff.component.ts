import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-wow-with-staff',
  templateUrl: './dementiability-wow-with-staff.component.html',
  styleUrl: './dementiability-wow-with-staff.component.scss'
})
export class DementiabilityWowWithStaffComponent {
  observationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.observationForm = this.fb.group({
      date: ['', Validators.required],
      shift: ['', Validators.required],
      unit: ['', Validators.required],
      observations: this.fb.array([])
    });
  }

  ngOnInit(): void {
      this.addInitialRows();
  }

  observations(): FormArray {
    return this.observationForm.get("observations") as FormArray
  }

  newObservation(): FormGroup {
    return this.fb.group({
      residentName: ['', Validators.required],
      staffInvolved: [''],
      who: [''],
      observationsText: [''],
      whatToDo: ['']
    });
  }

  addObservation() {
    this.observations().push(this.newObservation());
  }

  removeObservation(i: number) {
    this.observations().removeAt(i);
  }

  addInitialRows(numRows:number=3){
    for (let i = 0; i < numRows; i++){
        this.addObservation();
    }
  }

  onSubmit() {
    console.log(this.observationForm.value);
  }
}
