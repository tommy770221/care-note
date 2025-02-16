import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sight-reading-assessment',
  templateUrl: './sight-reading-assessment.component.html',
  styleUrl: './sight-reading-assessment.component.scss'
})
export class SightReadingAssessmentComponent {
  assessmentForm: FormGroup;
  fontSizes = [1, 2];
  languages = ['English', 'French', 'Other'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.assessmentForm = this.fb.group({
      readBeforeDementia: [null, Validators.required],
      languagesRead: [[], Validators.required], // 使用陣列來處理多種語言
      needsGlasses: [null, Validators.required],
      glassesFor: [''],
      glassesClean: [null, Validators.required],
      fontSizeAssessment: this.fb.array(this.fontSizes.map(() => this.fb.group({
        fontSize: [''],
        readFullSentence: [null],
        wordsSeen: ['']
      }))),
      couldNotReadSentences: [false],
      formCompletedBy: ['', Validators.required],
      dateCompleted: [null, Validators.required],
      retestFormCompletedBy: [''],
      retestDateCompleted: [null]
    });
  }

  onSubmit() {
    console.log(this.assessmentForm.value);
  }

  // Helper function to get the form array for font size assessment
  get fontSizeAssessmentArray() {
    return this.assessmentForm.get('fontSizeAssessment') as FormArray;
  }

  onLanguageCheckboxChange(){}
}
