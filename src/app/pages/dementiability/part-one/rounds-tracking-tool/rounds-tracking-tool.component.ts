import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rounds-tracking-tool',
  templateUrl: './rounds-tracking-tool.component.html',
  styleUrl: './rounds-tracking-tool.component.scss'
})
export class RoundsTrackingToolComponent {

  roundsForm: FormGroup; // 表單群組
  shiftOptions: string[] = ['早班', '午班', '晚班', '大夜班']; // 班別選項
  residentOptions: string[] = ['住民 A', '住民 B', '住民 C']; // 住民選項 (實際應用應從後端獲取)
  staffOptions: string[] = ['員工 1', '員工 2', '員工 3']; // 員工選項 (實際應用應從後端獲取)

  constructor(private fb: FormBuilder) { // 注入 FormBuilder
    this.roundsForm = this.fb.group({ // 建立表單群組
      date: ['', Validators.required], // 日期，必填
      shift: ['', Validators.required], // 班別，必填
      residentName: ['', Validators.required], // 住民姓名，必填
      staffInvolved: [''], // 參與員工，非必填
      observationsWho: [''], // 觀察記錄 (Who)，非必填
      observationsWhat: [''] // 將採取的行動，非必填
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void { // 表單提交處理
    if (this.roundsForm.valid) { // 檢查表單是否有效
      console.log(this.roundsForm.value); // 輸出表單值
      // 在此處將資料傳送到後端
    } else {
      alert('表單驗證失敗，請檢查!'); // 顯示錯誤訊息
    }
  }

}
