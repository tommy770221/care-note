import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nurse-report-sheet',
  templateUrl: './nurse-report-sheet.component.html',
  styleUrl: './nurse-report-sheet.component.scss'
})
export class NurseReportSheetComponent {

  nurseReportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nurseReportForm = this.fb.group({
      // 患者背景
      name: ['', Validators.required],
      sex: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      roomNumber: [''],
      mobility: ['', Validators.required],
      admitDate: ['', Validators.required],
      allergies: [''],
      complaint: [''],
      situation: ['', Validators.required],
      precautionNone: [false],
      precautionDroplet: [false],
      precautionSeizure: [false],

      // 醫療歷史
      diagnosis: [''],
      cad: [false],
      bph: [false],
      mi: [false],
      cabg: [false],
      afid: [false],
      anxiety: [false],
      htn: [false],
      hld: [false],
      stroke: [false],
      chf: [false],
      dld: [false],
      depression: [false],
      copd: [false],
      etoh: [false],
      gerd: [false],
      ckd: [false],
      pad: [false],

      // 生命徵象
      temperature: ['', [Validators.required, Validators.min(0)]],
      bloodPressure: ['', Validators.required],
      heartRate: ['', [Validators.required, Validators.min(0)]],
      respiratoryRate: ['', [Validators.required, Validators.min(0)]],
      oxygenSaturation: ['', [Validators.required, Validators.min(0)]],

      // 神經
      neuroStatus: ['', Validators.required],
      neuroPower: [false],
      neuroReflex: [false],

      // 血糖監測
      accuCheckTime: [''],
      bloodSugar: ['', [Validators.required, Validators.min(0)]],
      accuCheckFrequency: ['', Validators.required],

      // 心臟
      cardiacPulses: [false],
      cardiacEdema: [false],
      cardiacBilateral: [false],
      cardiacSounds: [false],

      // 呼吸
      respiratoryPattern: [false],
      respiratoryChestExp: [false],
      respiratoryClear: [false],
      respiratoryDiminished: [false],
      respiratoryCrackles: [false],
      respiratoryBreathSounds: [false],
      respiratoryRoomAir: [false],
      respiratoryCPAP: [false],

      // 實驗室檢查
      hgb: ['', [Validators.required, Validators.min(0)]],
      wbc: ['', [Validators.required, Validators.min(0)]],
      plt: ['', [Validators.required, Validators.min(0)]],
      pt: ['', [Validators.required, Validators.min(0)]],
      inr: ['', [Validators.required, Validators.min(0)]],
      ptt: ['', [Validators.required, Validators.min(0)]],
      bun: ['', [Validators.required, Validators.min(0)]],
      troponin: ['', [Validators.required, Validators.min(0)]],
      k: ['', [Validators.required, Validators.min(0)]],
      na: ['', [Validators.required, Validators.min(0)]],
      cl: ['', [Validators.required, Validators.min(0)]],
      co2: ['', [Validators.required, Validators.min(0)]],
      glucose: ['', [Validators.required, Validators.min(0)]],
      ph: ['', [Validators.required, Validators.min(0)]],

      // 胃腸
      diet: ['', Validators.required],
      intake: [false],
      ostomy: [false],
      tubeFeed: [false],
      lastBM: ['', Validators.required],

      // 泌尿
      output: [false],
      voiding: [false],
      anuria: [false],
      incontinence: [false],
      urethral: [false],
      catheter: [false],
      bedsideComm: [false],
      bedpan: [false],

      // 皮膚/傷口
      skinStatus: ['', Validators.required],
      skinLocation: [''],
      skinSize: [''],
      bedstore: [false],
      dressing: [false],
      bedstoreLocation: [''],
      bedstoreSize: [''],

      // 點滴/液體
      dripsFluids: [''],

      // 靜脈注射部位
      piv: [false],
      piccc: [false],
      cvc: [false],
      hd: [false],

      // 住院過程
      hospitalCourse: [''],

      // 照護計劃
      planOfCare: [''],

      // 出院計劃
      dischargePlan: [''],

      // 筆記
      notes: [''],

      // 諮詢
      gi: [false],
      ptOt: [false],
      psych: [false],
      neuro: [false],
      ortho: [false],
      onco: [false],
      pulmo: [false],
      cardio: [false],
      surg: [false],
      medi: [false],
      urology: [false],

      // 用藥與待辦事項
      medicationTime: [''],
      task: [''],

      // 測試/程序
      pacemaker: [false],
      cath: [false],
      ekg: [false],
      echo: [false],
      xray: [false],
      mri: [false],
      ct: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.nurseReportForm.valid) {
      console.log('表單提交數據:', this.nurseReportForm.value);
      // 在這裡處理表單提交邏輯，例如發送至後端
    }
  }

}
