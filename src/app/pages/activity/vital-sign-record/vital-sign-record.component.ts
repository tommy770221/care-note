import { VitalSignsForm } from '@/model/activity/vital-signs-form.model';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-vital-sign-record',
  templateUrl: './vital-sign-record.component.html',
  styleUrl: './vital-sign-record.component.scss'
})
export class VitalSignRecordComponent {
  vitalSignsForm: FormGroup;

  constructor(private fb: FormBuilder,private angularFirestore: AngularFirestore) {
    this.vitalSignsForm = this.fb.group({
      patientName: ['', Validators.required],
      recordDate: ['', Validators.required],
      caregiverName: ['', Validators.required],
      vitalSignsRecords: this.fb.array([this.createVitalSignRecord()], Validators.required)
    });
    this.angularFirestore.collection('vitalSigns').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        const vitalSigns = doc.data() as VitalSignsForm;
        console.log('病患姓名:', vitalSigns.patientName);
        console.log('記錄日期:', vitalSigns.recordDate);
        console.log('照護者姓名:', vitalSigns.caregiverName);
        vitalSigns.vitalSignsRecords.forEach((record, index) => {
          if(index>0){
            this.addVitalSign();
          }
          console.log(`生命徵象記錄 ${index + 1}:`);
          console.log('時間:', record.time);
          console.log('體溫:', record.temperature);
          console.log('脈搏:', record.pulse);
          console.log('呼吸:', record.respiration);
          console.log('收縮壓:', record.bloodPressureSystolic);
          console.log('舒張壓:', record.bloodPressureDiastolic);
          console.log('血糖:', record.bloodSugar);
          console.log('血氧:', record.oxygenSaturation);
          record.medications.forEach((med, medIndex) => {
            if(medIndex>0){
              this.addMedication(index);
            }
            console.log(`藥物 ${medIndex + 1}:`);
            console.log('藥名:', med.name);
            console.log('劑量:', med.dosage);
            console.log('時間:', med.time);
            console.log('方式:', med.method);
            console.log('備註:', med.notes);
          });
          console.log('備註:', record.notes);
        });
        this.vitalSignsForm.patchValue(vitalSigns);
      });
    });
  }

  ngOnInit() {
    const savedRecords = localStorage.getItem('vitalSignsRecords');
    if (savedRecords) {
      this.vitalSignsForm.patchValue(JSON.parse(savedRecords));
    }
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
      console.log('提交的生命徵象記錄:', this.vitalSignsForm.value);
      this.angularFirestore.collection('vitalSigns').add(this.vitalSignsForm.value);
      localStorage.setItem('vitalSignsRecords', JSON.stringify(this.vitalSignsForm.value));
      alert('記錄已提交並儲存至本地！請檢查控制台以查看詳細資料。');
    }
  }

  queryVitalSigns() {
    this.angularFirestore.collection('vitalSigns').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        const vitalSigns = doc.data() as VitalSignsForm;
        this.vitalSignsForm.patchValue(vitalSigns);
        console.log('病患姓名:', vitalSigns.patientName);
        console.log('記錄日期:', vitalSigns.recordDate);
        console.log('照護者姓名:', vitalSigns.caregiverName);
        vitalSigns.vitalSignsRecords.forEach((record, index) => {
          console.log(`生命徵象記錄 ${index + 1}:`);
          console.log('時間:', record.time);
          console.log('體溫:', record.temperature);
          console.log('脈搏:', record.pulse);
          console.log('呼吸:', record.respiration);
          console.log('收縮壓:', record.bloodPressureSystolic);
          console.log('舒張壓:', record.bloodPressureDiastolic);
          console.log('血糖:', record.bloodSugar);
          console.log('血氧:', record.oxygenSaturation);
          record.medications.forEach((med, medIndex) => {
            console.log(`藥物 ${medIndex + 1}:`);
            console.log('藥名:', med.name);
            console.log('劑量:', med.dosage);
            console.log('時間:', med.time);
            console.log('方式:', med.method);
            console.log('備註:', med.notes);
          });
          console.log('備註:', record.notes);
        });
      });
    });
  }
}
