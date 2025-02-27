import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-team-assessment',
  templateUrl: './dementiability-team-assessment.component.html',
  styleUrl: './dementiability-team-assessment.component.scss'
})
export class DementiabilityTeamAssessmentComponent {
  teamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      teamMembers: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addInitialRows();
  }

  teamMembers(): FormArray {
    return this.teamForm.get("teamMembers") as FormArray
  }

  newTeamMember(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      meetingTimes: [''],
      responsibilities: ['']
    });
  }

  addTeamMember() {
    this.teamMembers().push(this.newTeamMember());
  }

  removeTeamMember(i: number) {
    this.teamMembers().removeAt(i);
  }

  addInitialRows(numRows:number=3){
    for (let i = 0; i < numRows; i++){
        this.addTeamMember();
    }
  }

  onSubmit() {
    console.log(this.teamForm.value);
  }
}
