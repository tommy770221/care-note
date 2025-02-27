import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.scss'
})
export class MedicalHistoryVersionTwoComponent {
  medicalHistoryForm: FormGroup;
  
  relatedToOptions = ['Work', 'Car Accident', 'Other Liability/Potential Lawsuit', 'Not Applicable'];
  raceEthnicityOptions = ['Hispanic or Latino Origin', 'Not Hispanic', 'African American', 'Caucasian (White)', 'Asian or Pacific Islander', 'Native American, Eskimo, or Aleutian', 'Other', 'Declined'];
  conditionOptions = ['No under a year', 'Yes under a year', 'Yes over a year', 'No Answer/Invalid'];
  medicalConditions = ['Diabetes', 'Heart condition', 'High blood pressure', 'Chest pain', 'Stroke', 'Kidney condition', 'Blood clot / DVT', 'Metal implants / pacemaker', 'Breathing difficulties / asthma', 'Cancer', 'Difficulty swallowing', 'Circulation/vascular problems', 'Peripheral neuropathy', 'Unexplained weight loss', 'Double vision', 'Night sweats / night pain'];
  additionalConditions = ['Infection Disease', 'Neurologic Condition (MS/Parkinson\'s)', 'Pediatric Developmental Condition', 'Hepatitis', 'Head/Spinal Cord Injury'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.medicalHistoryForm = this.fb.group({
      relatedTo: ['', Validators.required],
      hasPrimaryCare: ['', Validators.required],
      recentAppointment: [''],
      raceEthnicity: ['', Validators.required],
      alcoholConsumption: ['', Validators.required],
      // Medical Conditions
      ...this.medicalConditions.reduce((acc, condition) => ({ ...acc, [condition]: ['', Validators.required] }), {}),
      // Additional Conditions
      ...this.additionalConditions.reduce((acc, condition) => ({ 
        ...acc, 
        [condition]: ['', Validators.required], 
        [condition + 'Details']: [''] 
      }), {})
    });
  }

  submitForm() {
    if (this.medicalHistoryForm.valid) {
      console.log(this.medicalHistoryForm.value);
      // Here you would typically send the form data to a server
    } else {
      // Handle form validation errors
    }
  }
}
