import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrl: './clinical-history.component.scss'
})
export class ClinicalHistoryComponent {

  clinicalHistoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clinicalHistoryForm = this.fb.group({
      date: ['', Validators.required],
      patientInfo: this.fb.group({
        name: ['', Validators.required],
        race: [''], // Consider using a select dropdown
        sex: [''], // Consider using radio buttons
        maritalStatus: [''], // Consider using radio buttons
        age: [''],
        dateOfBirth: [''],
        previousFamilyPhysician: [''],
        referringPhysician: [''],
        numChildren: ['']
      }),
      reasonForVisit: [''],
      pastMedicalHistory: this.fb.group({
        none: [false],
        heartDisease: [false],
        highBloodPressure: [false],
        strokeTIA: [false],
        obstructiveSleepApnea: [false],
        coronaryArteryDisease: [false],
        depression: [false],
        cancerType: [''],
        otherSpecify: [''],
        anxiety: [false],
        bleedingDifficulties: [false],
        hepatitis: [false],
        hiv: [false],
        diabetesDiet: [false],
        diabetesOral: [false],
        diabetesInsulin: [false],
        highCholesterol: [false],
        seizure: [false],
        lossOfConsciousness: [false],
        arthritisType: [''],
        asthma: [false],
        emphysema: [false],
        osteoporosis: [false],
        allergyFood: [false],
        allergySeasonal: [false],
        tb: [false],
        hypothyroid: [false],
        hyperthyroid: [false]
      }),
      pastSurgicalHistory: this.fb.array([
        this.fb.group({ surgery: [''] }),
        this.fb.group({ surgery: [''] }),
        this.fb.group({ surgery: [''] }),
        this.fb.group({ surgery: [''] }),
        this.fb.group({ surgery: [''] }),
        this.fb.group({ surgery: [''] })
      ]),
      prescriptionMedications: this.fb.array([
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] })
      ]),
      nonPrescriptionMedications: this.fb.array([
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] }),
        this.fb.group({ medication: [''], dose: [''] })
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.clinicalHistoryForm.value);
  }

  pastSurgicalHistory(): FormArray {
    return this.clinicalHistoryForm.get('pastSurgicalHistory') as FormArray;
  }

  prescriptionMedications(): FormArray {
    return this.clinicalHistoryForm.get('prescriptionMedications') as FormArray;
  }

  nonPrescriptionMedications(): FormArray {
    return this.clinicalHistoryForm.get('nonPrescriptionMedications') as FormArray;
  }

}
