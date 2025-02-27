import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dementiability-care-form',
  templateUrl: './dementiability-care-form.component.html',
  styleUrl: './dementiability-care-form.component.scss'
})
export class DementiabilityCareFormComponent {
  careForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.careForm = this.fb.group({
      bedItems: [''],
      photos: [''],
      clothing: [''],
      interests: [''],
      hygiene: [''],
      background: [''],
      family: [''],
      profession: [''],
      memories: [''],
      favorites: [''],
      schedule: [''],
      habits: [''],
      preferences: [''],
      health: ['']
    });
  }

  submitForm() {
    console.log(this.careForm.value);
  }
}
