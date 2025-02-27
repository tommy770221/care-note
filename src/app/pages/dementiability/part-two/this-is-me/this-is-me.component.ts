import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-this-is-me',
  templateUrl: './this-is-me.component.html',
  styleUrl: './this-is-me.component.scss'
})
export class ThisIsMeComponent {
  thisIsMeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.thisIsMeForm = this.fb.group({
      nameILikeToBeCalled: [''],
      favouriteThings: this.fb.group({
        item1: [''],
        item2: [''],
        item3: [''],
        item4: ['']
      }),
      aboutMe: this.fb.group({
        fullName: [''],
        whereILive: [''],
        peopleWhoKnowMeBest: [''],
        iWouldLikeYouToKnow: [''],
        personalHistory: [''],
        importantItems: ['']
      }),
      myBackground: this.fb.group({
        cultureFaithBeliefs: [''],
        hobbiesInterests: [''],
        jobsAchievements: [''],
        favouritePlaces: ['']
      }),
      myHabitsAndRoutines: this.fb.group({
        routinesImportantToMe: [''],
        thingsILikeToDoForMyself: [''],
        thingsIMightWantHelpWith: [''],
        thingsThatMayWorryOrUpsetMe: [''],
        whatMakesMeFeelBetter: ['']
      }),
      myCommunicationAndMobility: this.fb.group({
        hearingEyesight: [''],
        howWeCanCommunicate: [''],
        myMobility: [''],
        thingsThatHelpMeSleep: [''],
        myPersonalCare: ['']
      }),
      howITakeMyMedication: [''],
      eatingAndDrinking: [''],
      otherNotesAboutMe: [''],
      dateCompleted: [''],
      completedBy: [''],
      withTheHelpOf: [''],
      informationUsageAgreement: [false]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.thisIsMeForm.value);
  }
}
