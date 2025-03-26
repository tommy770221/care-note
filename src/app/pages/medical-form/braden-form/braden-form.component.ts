import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-braden-form',
  templateUrl: './braden-form.component.html',
  styleUrl: './braden-form.component.scss'
})
export class BradenFormComponent {

  bradenForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bradenForm = this.fb.group({
      patientName: [''],
      assessorName: [''],
      admissionDate: [''],
      evaluationDate: [''],
      perception: ['', Validators.required],
      moisture: ['', Validators.required],
      activity: ['', Validators.required],
      mobility: ['', Validators.required],
      nutrition: ['', Validators.required],
      activityAndStrain: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bradenForm.valid) {
      console.log('表單資料:', this.bradenForm.value);
      // 在此處處理表單提交邏輯
    } else {
      // 標記所有控制項為已觸摸，以顯示驗證錯誤
      this.markAllAsTouched(this.bradenForm);
    }
  }

  markAllAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }

}
