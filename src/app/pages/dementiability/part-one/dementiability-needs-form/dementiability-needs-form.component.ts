import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-needs-form',
  templateUrl: './dementiability-needs-form.component.html',
  styleUrl: './dementiability-needs-form.component.scss'
})
export class DementiabilityNeedsFormComponent {
  needsAssessmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.needsAssessmentForm = this.fb.group({
      // 基本生理需求 (Basic physiological needs)
      bathroomRegularly: ['', Validators.required],
      eatThreeMeals: ['', Validators.required],
      enjoyFood: ['', Validators.required],
      likeFoods: ['', Validators.required],
      fineDining: [''],
      goodNightRest: ['', Validators.required],
      engageIntimacy: [''],
      freeFromPain: ['', Validators.required],
      goodMentalHealth: ['', Validators.required],
      moveBody: [''],

      // 安全與保障 (Safety & Security)
      safeSelfOthers: ['', Validators.required],
      feelSafeLive: ['', Validators.required],
      caredFor: ['', Validators.required],
      knowInteracting: ['', Validators.required],
      safeComfortableHome: ['', Validators.required],
      safeWalk: [''],

      // 社交 (Social)
      communicateOthers: ['', Validators.required],
      tellFeelings: ['', Validators.required],
      spendFamilyTime: ['', Validators.required],
      enjoyFriendsTime: ['', Validators.required],
      feelConnectedBelong: ['', Validators.required],

      // 職業 (Occupation)
      meaningfulWork: [''],
      meaningfulActivity: ['', Validators.required],
      helpingOthers: ['', Validators.required],
      doingThingsMyself: ['', Validators.required],
      householdChores: [''],
      havingThingsOrder: ['', Validators.required],
      keepingNeatClean: ['', Validators.required],

      // 愛與歸屬感 (Love and Belonging)
      belongHome: ['', Validators.required],
      belongWherever: ['', Validators.required],
      likeAlone: [''],
      haveOthersLove: ['', Validators.required],

      // 自尊 (Self-esteem)
      feelGoodAboutDay: ['', Validators.required],
      makeOwnDecisions: ['', Validators.required],
      respectedByOthers: ['', Validators.required],
      solveProblems: ['', Validators.required],
      wellGroomed: [''],
      wearFeelGoodClothes: [''],

      // 自我實現 (Self-actualization)
      stimulateBrain: ['', Validators.required],
      feelConnected: ['', Validators.required],
      practiceReligion: ['', Validators.required],
      sayPrayers: [''],
      doThingsForSelf: [''],
      communicateLanguage: ['', Validators.required],
      creativeArts: [''],
      readLearnRegularly: [''],

      // 其他 (Other) - 範例
      washDishes: [''],
      gardening: [''],
      searchingInternet: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.needsAssessmentForm.value);
    // 在此處理表單提交
  }
}
