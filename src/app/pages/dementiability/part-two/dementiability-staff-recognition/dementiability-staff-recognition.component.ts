import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-staff-recognition',
  templateUrl: './dementiability-staff-recognition.component.html',
  styleUrl: './dementiability-staff-recognition.component.scss'
})
export class DementiabilityStaffRecognitionComponent {
  recognitionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recognitionForm = this.fb.group({
      ideas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addInitialRows(); // Add a few rows to start
  }

  ideas(): FormArray {
    return this.recognitionForm.get("ideas") as FormArray
  }

  newIdea(): FormGroup {
    return this.fb.group({
      recognition: [''],
      reward: [''],
      other: ['']
    })
  }

  addIdea() {
    this.ideas().push(this.newIdea());
  }

  removeIdea(i: number) {
    this.ideas().removeAt(i);
  }

  addInitialRows(numRows: number = 3){
    for (let i = 0; i < numRows; i++){
      this.addIdea();
    }
  }

  onSubmit() {
    console.log(this.recognitionForm.value);
  }
}
