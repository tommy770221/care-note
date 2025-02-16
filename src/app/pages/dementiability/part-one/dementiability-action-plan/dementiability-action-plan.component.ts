import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-action-plan',
  templateUrl: './dementiability-action-plan.component.html',
  styleUrl: './dementiability-action-plan.component.scss'
})
export class DementiabilityActionPlanComponent {
  actionPlanForm: FormGroup; // 表單群組
  consultationOptions: string[] = [
    '單位特定員工', '住民', '家屬', '一般員工', '註冊員工',
    '住民或家屬委員會', '醫療主任', '發展委員會', '衛生部', '管理階層'
  ]; // 諮詢對象選項

  constructor(private fb: FormBuilder) { // 注入 FormBuilder
    this.actionPlanForm = this.fb.group({ // 建立表單群組
      actionItem: ['', Validators.required], // 行動項目，必填
      targetDate: ['', Validators.required], // 目標完成日期，必填
      whatToDo: [''], // 我們需要做什麼？
      goal: [''], // 目標
      date: [''], // 日期
      projectTitle: [''], // 專案標題
      projectLead: [''], // 專案負責人
      notes: [''], // 注意事項
      resources: [''], // 所需資源
      consultation: [[]], // 諮詢對象，允許多選
      timeFrame: [''], // 完成所需時間
      evaluation: [''] // 專案評估
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void { // 表單提交處理
    if (this.actionPlanForm.valid) { // 檢查表單是否有效
      console.log(this.actionPlanForm.value); // 輸出表單值
      // 在此處將資料傳送到後端
    } else {
      alert('表單驗證失敗，請檢查!'); // 顯示錯誤訊息
    }
  }

  onConsultationChange(option){

  }
}
