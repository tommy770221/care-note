import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-meeting-agenda',
  templateUrl: './dementiability-meeting-agenda.component.html',
  styleUrl: './dementiability-meeting-agenda.component.scss'
})
export class DementiabilityMeetingAgendaComponent {

  agendaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // 使用 FormBuilder 建立表單
    this.agendaForm = this.fb.group({
      meetingDate: ['', Validators.required],
      members: [''],
      environmentSupports: this.fb.group({
        wayfindingNeeded: [''],
        memoryCuesNeeded: [''],
        taskBreakdownNeeded: [''],
        otherNeeded: [''],
        environmentChampion: ['']
      }),
      homeEnvironment: this.fb.group({
        diningRoomNeeded: [''],
        livingAreaNeeded: [''],
        bedroomsNeeded: [''],
        bathingAreasNeeded: [''],
        toiletAreasNeeded: [''],
        frontEntranceNeeded: [''],
        otherHomeNeeded: [''],
        homeEnvironmentChampion: ['']
      }),
      wowForms: this.fb.group({
        residentsBeingWorkedOn: [''],
        actionPlansForResidents: [''],
        whoIsResponsible: [''],
        howManyResidentsToFocusOn: [''],
        wowFormsChampion: ['']
      }),
      responsiveBehaviours: this.fb.group({
        responsiveBehavioursChampion: ['']
      }),
      falls: this.fb.group({
        fallsChampion: ['']
      }),
      wounds: this.fb.group({
        woundsChampion: ['']
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // 處理表單提交
    console.log(this.agendaForm.value);
  }
}
