import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-team-meeting',
  templateUrl: './dementiability-team-meeting.component.html',
  styleUrl: './dementiability-team-meeting.component.scss'
})
export class DementiabilityTeamMeetingComponent {
  agendaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agendaForm = this.fb.group({
      meetingDate: [''],
      members: [''],
      items: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadInitialItems();
  }

  items(): FormArray {
    return this.agendaForm.get("items") as FormArray
  }

  newItem(): FormGroup {
    return this.fb.group({
      environmentSupportsWayfinding: this.fb.group({
        item: ['Environment Supports - Wayfinding'],
        actionSteps: ['Where are memory supports needed and where will they be placed?'],
        completedBy: ['']
      }),
       homeEnvironment: this.fb.group({
        item: ['Home Environment'],
        diningRoomChampion: [''],
        livingAreaChampion: [''],
        bedroomsChampion: [''],
        bathingAreasChampion: [''],
        toiletAreasChampion: [''],
        frontEntranceChampion: [''],
        refreshmentsChampion: [''],
        otherChampion: [''],

        createPlanRooms: this.fb.group({
          room1Name: [''],
          room1Action: [''],
          room2Name: [''],
          room2Action: [''],
          room3Name: [''],
          room3Action: [''],
          room4Name: [''],
          room4Action: ['']
        })
      }),
      wowForms: this.fb.group({
        wowName: [''],
        wowAction: [''],
        wowDate: [''],
        wowWho: [''],
      }),
      responsiveBehaviours: [''],
        falls: [''],
      wounds: [''],
        otherArea: ['']
    })
  }

  addItem() {
    this.items().push(this.newItem());
  }

  removeItem(i: number) {
    this.items().removeAt(i);
  }

 loadInitialItems() {
    this.addItem(); //Initial item
  }

  onSubmit() {
    console.log(this.agendaForm.value);
  }
}
