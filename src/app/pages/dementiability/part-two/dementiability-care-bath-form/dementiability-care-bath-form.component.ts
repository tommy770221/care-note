import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dementiability-care-bath-form',
  templateUrl: './dementiability-care-bath-form.component.html',
  styleUrl: './dementiability-care-bath-form.component.scss'
})
export class DementiabilityCareBathFormComponent {
  careForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.careForm = this.fb.group({
      residentName: [''],
      transferMethod: [''],
      staffRequired: [''],
      behaviours: [''],
      triggers: [''],
      preferredMusic: [''],
      footCare: [''],
      bathLikes: [false],
      showerLikes: [false],
      canWashIndependently: [false],
      canWashWithAssistance: [false],
      needsFullCare: [false],
      likes: [''],
      dislikes: ['']
    });
  }

  submitForm() {
    console.log(this.careForm.value);
  }
}
