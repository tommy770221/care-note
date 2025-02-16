import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-participant-form',
  templateUrl: './program-participant-form.component.html',
  styleUrl: './program-participant-form.component.scss'
})
export class ProgramParticipantFormComponent {

  participantForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.participantForm = this.fb.group({
      // 基本資料
      name: ['', Validators.required],
      address: [''],
      dateOfBirth: [''],
      placeOfBirth: [''],
      livedWhere: [''],
      maritalStatus: [''],
      partnerName: [''],
      employmentHistory: [''],
      languagesSpoken: [''],

      // 家庭
      children: this.fb.array([]), // 使用 FormArray 來處理多個子女

      // 重要朋友
      importantFriends: [''],

      // 健康狀況
      cognitiveStatus: [''],
      physicalStatus: [''],
      dementiaType: [''],
      dementiaStage: [''],
      orientation: [''],
      anxietySituations: [''],
      memoryCueing: [''],
      abilities: this.fb.group({ // 使用 FormGroup 來處理多個能力
        canWalk: [''],
        usesWalker: [''],
        getsIntoWheelchair: [''],
        toileting: [''],
        needsHelpEating: [''],
        dressing: [''],
        bathing: [''],
        groomingHair: [''],
        groomingFace: [''],
        transfers: [''],
        brushingTeeth: [''],
        generalNeatness: [''],
        knowsWhatToDoWithObjects: [''],
        canHandleOwnFinances: [''],
        usesPhone: [''],
        usesComputer: [''],
        likesToBeHelped: ['']
      }),
      depression: [''],
      arthritis: [''],
      mobility: [''],
      handUsed: [''],
      pain: [''],
      visionHearing: [''],
      motivation: [''],
      delirium: [''],
      // 溝通技巧
      communicationSkills: [''],
      enjoysTalkingAbout: [''],

      // 興趣
      interests: this.fb.group({ // 使用 FormGroup 來處理多個興趣
        householdTasks: this.fb.group({
          cooking: [false],
          laundry: [false],
          cleaning: [false],
          shopping: [false],
          doingDishes: [false],
          decoratingHome: [false],
          homeRepairs: [false],
          other: ['']
        }),
        social: this.fb.group({
          visitingFamily: [false],
          visitingFriends: [false],
          planningSocialFunctions: [false],
          entertaining: [false],
          reminiscing: ['']
        }),
        reading: [''],
        leisureActivities: this.fb.group({
          travel: [false],
          games: [false],
          sportsExercise: [false],
        }),
        cultureReligionSpirituality: this.fb.group({
          religiousService: [false],
          quietPrayer: [false],
          guidedPrayer: [false],
          singingHymns: [false],
          other: ['']
        }),
        music: this.fb.group({
          listeningToMusic: [false],
          playingMusic: [false],
          musicType: ['']
        }),
        crafts: this.fb.group({
          knitting: [false],
          sewing: [false],
          woodworking: [false],
          painting: [false],
          sculpting: [false],
          ceramics: [false],
          other: ['']
        }),
        pets: [''],
        generalInterests: this.fb.group({
          fashion: [false],
          givingBackToCommunity: [false],
          volunteering: [false],
          helpingFamily: [false]
        })
      }),

      // 房間環境
      roomEnvironment: this.fb.group({
        feelsLikeHome: [false],
        reflectsFormerSelf: [false],
        phoneUsable: [false],
        tvAvailable: [false],
        radioAvailable: [false],
        orientingInfoAvailable: [false],
        modificationsRequired: ['']
      }),

      // 日常作息
      routines: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.participantForm.valid) {
      console.log(this.participantForm.value);
      // 在此處將資料傳送到後端
    } else {
      alert('表單驗證失敗，請檢查!');
    }
  }
}
