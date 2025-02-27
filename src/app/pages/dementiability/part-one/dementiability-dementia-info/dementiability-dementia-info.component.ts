import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dementiability-dementia-info',
  templateUrl: './dementiability-dementia-info.component.html',
  styleUrl: './dementiability-dementia-info.component.scss'
})
export class DementiabilityDementiaInfoComponent {
  dementiaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dementiaForm = this.fb.group({
      fearsLossesTragicEvents: [''],
      needs: [''],
      habitsRoutines: [''],
      informationCollectedFrom: [''],
      additionalNotes: [''],
      formUpdatedDate: [''],
      formUpdatedBy: ['']
    });
  }

  ngOnInit() {
    // 在此處初始化表單數據，例如從API讀取
    // this.dementiaForm.patchValue({
    //   fearsLossesTragicEvents: '...',
    //   ...
    // });
  }

  onSubmit() {
    // 在此處處理表單提交
    console.log(this.dementiaForm.value);
  }
}
