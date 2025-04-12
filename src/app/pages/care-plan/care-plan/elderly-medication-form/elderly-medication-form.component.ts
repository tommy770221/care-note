import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-elderly-medication-form',
  templateUrl: './elderly-medication-form.component.html',
  styleUrl: './elderly-medication-form.component.scss'
})
export class ElderlyMedicationFormComponent {

  medicationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicationForm = this.fb.group({
      patientInfo: this.fb.group({
        姓名: [''],
        病歷號: [''],
        出生年月日: [''],
        性別: [''],
        身高: [''],
        體重: [''],
        藥物過敏史: [''],
        腎功能SCr: [''],
        CC: [''],
        肝功能ChildPugh: [''],
        共病症: [''],
        本次住院主要原因: [''],
        本次住院診斷: [''],
        其他: ['']
      }),
      medications: this.fb.array([this.createMedicationGroup()])
    });
  }

  createMedicationGroup(): FormGroup {
    return this.fb.group({
      藥物名稱: [''],
      劑量: [''],
      頻率給藥途徑: [''],
      單位: [''],
      適應症醫療效用: [''],
      特殊注意事項: [''],
      臨床症狀: [''],
      檢驗數值: [''],
      開立科別醫師: [''],
      停用時間原因: [''],
      開立原因: [''],
      常見副作用: [''],
      服藥日期: ['']
    });
  }

  addMedication(): void {
    this.medications.push(this.createMedicationGroup());
  }

  removeMedication(index: number): void {
    this.medications.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.medicationForm.value);
    // 在此處理表單提交邏輯
  }

  get patientInfoFormGroup(): FormGroup {
    return this.medicationForm.get('patientInfo') as FormGroup;
  }

  get medications(): FormArray {
    return this.medicationForm.get('medications') as FormArray;
  }

}
