import { VitalSignsForm } from '@/model/activity/vital-signs-form.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vital-sign-record',
  templateUrl: './vital-sign-record.component.html',
  styleUrl: './vital-sign-record.component.scss'
})
export class VitalSignRecordComponent implements OnInit {
  vitalSignsForm: FormGroup;
  carePersonId: string = '';
  careGiverId: string = '';

  constructor(
    private fb: FormBuilder,
    private angularFirestore: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.vitalSignsForm = this.fb.group({
      patientName: ['', Validators.required],
      recordDate: ['', Validators.required],
      caregiverName: ['', Validators.required],
      vitalSignsRecords: this.fb.array([this.createVitalSignRecord()], Validators.required)
    });
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carePersonId = params['carePersonId'];
      this.careGiverId = params['careGiverId'];
    });

  }

  // Getter for vitalSignsRecords FormArray
  get vitalSignsRecords() {
    return this.vitalSignsForm.get('vitalSignsRecords') as FormArray;
  }

  // Getter for medications FormArray within a specific vital sign record
  getMedications(index: number): FormArray {
    return this.vitalSignsRecords.at(index).get('medications') as FormArray;
  }

  createVitalSignRecord(): FormGroup {
    return this.fb.group({
      time: ['', Validators.required],
      temperature: ['', [Validators.min(34), Validators.max(42)]],
      pulse: ['', [Validators.min(30), Validators.max(200)]],
      respiration: ['', [Validators.min(10), Validators.max(60)]],
      bloodPressureSystolic: ['', [Validators.min(50), Validators.max(200)]],
      bloodPressureDiastolic: ['', [Validators.min(30), Validators.max(120)]],
      bloodSugar: ['', [Validators.min(20), Validators.max(600)]],
      oxygenSaturation: ['', [Validators.min(70), Validators.max(100)]],
      medications: this.fb.array([this.createMedication()], Validators.required),
      notes: ['']
    });
  }

  createMedication(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      time: ['', Validators.required],
      method: [''],
      notes: ['']
    });
  }

  addVitalSign() {
    this.vitalSignsRecords.push(this.createVitalSignRecord());
  }

  removeVitalSign(index: number) {
    if (this.vitalSignsRecords.length > 1) {
      this.vitalSignsRecords.removeAt(index);
    }
  }

  addMedication(vitalSignIndex: number) {
    this.getMedications(vitalSignIndex).push(this.createMedication());
  }

  removeMedication(vitalSignIndex: number, medIndex: number) {
    const medications = this.getMedications(vitalSignIndex);
    if (medications.length > 1) {
      medications.removeAt(medIndex);
    }
  }

  formErrors(field: string): boolean {
    const control = this.vitalSignsForm.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  formArrayErrors(path: string, index: number, field: string): boolean {
    const control = this.vitalSignsForm.get(path.split('.').reduce((acc, part) => acc + '.' + part, '').slice(1)) as FormArray;
    const fieldControl = control.at(index).get(field);
    return fieldControl ? fieldControl.invalid && (fieldControl.dirty || fieldControl.touched) : false;
  }

  onSubmit() {
    if (this.vitalSignsForm.valid) {
      const formData = this.vitalSignsForm.value;
      formData.carePersonId = this.carePersonId;
      formData.careGiverId = this.careGiverId;
      
      console.log('提交的生命徵象記錄:', formData);
      this.angularFirestore.collection('vitalSigns').add(formData);
      this.router.navigate(['/activity/vital/carePerson/'+this.carePersonId+'/query']);
      
    }
  }

  queryVitalSigns() {
   this.router.navigate(['/activity/vital/carePerson/'+this.carePersonId+'/query']);
  }
}
