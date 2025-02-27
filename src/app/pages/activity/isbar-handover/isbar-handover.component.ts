import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-isbar-handover',
  templateUrl: './isbar-handover.component.html',
  styleUrl: './isbar-handover.component.scss'
})
export class IsbarHandoverComponent {

  isbarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.isbarForm = this.fb.group({
      // I - 身份
      myName: ['', Validators.required],
      receiverName: ['', Validators.required],
      patientInfo: ['', Validators.required],

      // S - 情況
      currentIssue: ['', Validators.required],
      issueTime: ['', Validators.required],
      issueStability: ['', Validators.required],

      // B - 背景
      healthHistory: ['', Validators.required],
      recentTreatment: ['', Validators.required],
      recentCheckup: ['', Validators.required],

      // A - 評估
      myObservation: ['', Validators.required],
      possibleCause: ['', Validators.required],
      severity: ['', Validators.required],

      // R - 建議/要求
      recommendation: ['', Validators.required],
      assistanceNeeded: ['', Validators.required],
      followUp: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
   
      console.log('ISBAR 交班數據:', this.isbarForm.value);
      // 在這裡處理表單提交邏輯，例如保存到本地或發送至後端
      alert('交班資訊已提交！請確認與醫療人員或照顧者分享。');
    
  }

}
