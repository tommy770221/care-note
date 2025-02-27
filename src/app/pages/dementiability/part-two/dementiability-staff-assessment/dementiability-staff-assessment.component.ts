import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-staff-assessment',
  templateUrl: './dementiability-staff-assessment.component.html',
  styleUrl: './dementiability-staff-assessment.component.scss'
})
export class DementiabilityStaffAssessmentComponent {
  checklistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checklistForm = this.fb.group({
      checklistItems: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadChecklistItems();
  }

  checklistItems(): FormArray {
    return this.checklistForm.get("checklistItems") as FormArray;
  }

  newItem(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      score: [null, Validators.required], // Score 1-3
      whatNeedsToBeDone: [''],
      targetDate: [''],
      responsible: [''],
      checkWhenComplete: [false]
    });
  }

  addItem() {
    this.checklistItems().push(this.newItem());
  }

  removeItem(i: number) {
    this.checklistItems().removeAt(i);
  }

  onSubmit() {
    console.log(this.checklistForm.value);
  }

  loadChecklistItems() {
    const items = [
      { description: 'Staff continuously engages in self-reflection when approaching the resident (e.g. “Am I – too close, too loud, too rushed, not friendly, etc.?")', },
      { description: 'Staff always looks at the world through the eyes of the resident (i.e. “What do they think is happening and why?")', },
      { description: 'Staff wear name badges and are sure to use resident names (and name badges) when introducing themselves to residents.', },
      { description: 'Staff have discussed the role of uniforms and make decisions about wearing uniform colours in each department (e.g. – pink for nursing, blue for dietary, etc.)', },
      { description: 'Staff know that the words “familiar”, “choice” and “successful" are key when making decisions about support and care.', },
      { description: 'Staff continuously monitors the residents to ensure they are \'prepared\' and meaningfully engaged.', },
      { description: 'Staff assesses residents to ensure that they are: pain free, have their sensory and mobility aids, not ill, cold, tired, etc. The treatable is being/has been treated.', },
      { description: 'Staff are accountable for offering all activities (basic, instrumental and leisure) seeing them as behavioural and restorative interventions. An invitation is extended that asks, “Would you like to...?"', },
      { description: 'Staff advocates for resident well-being.', },
      { description: 'Staff builds time into their routine to collaboratively stage interactive themed areas and the organization expects this.', },
      { description: 'Staff act according to the new information presented to them when adopting the DementiAbility Methods', },
      { description: 'Collecting details for the WOW is a team effort.', },
      { description: 'Staff knows who is responsible for collecting details about needs, interests, roles and other information about each resident and knows where to access it if they want more information than is provided in the WOW form.', },
      { description: 'Staff works as an inclusive, interdisciplinary team and know how to enable abilities through memory supports and activities (both practical life/functional activities and leisure activities).', },
      { description: 'Staff knows how to adapt activities to match the needs and abilities of each resident.', },
      { description: 'Staff respects choice of residents (e.g. – preference to sleep late is respected and documented for all to adhere to).', },
      { description: 'Staff encourages each resident to reach his/her highest potential by inviting them to do things for self and working towards goals that enhance function through a range of activities that are identified in the WOW.', },
      { description: 'Staff communicates openly, shares observations and engages in problem solving.', },
      { description: 'Individual staff members are empowered to develop as natural leaders.', },
      { description: 'Leaders empower others through sharing responsibilities and participatory decision-making.', },
      { description: 'Leaders have opportunities to interact with supervisors/managers.', },
      { description: 'Formal leaders (managers) are offered leadership training and lead with Emotional Intelligence (see Goleman, 2005).', },
      { description: 'Leaders are encouraged to pursue expertise and mastery of skills through DementiAbility Methods Certification.', },
      { description: 'Certified staff becomes frontline resource personnel to teammates, families and volunteers.', },
      { description: 'Certified staff strives for continuous quality improvement through self-monitoring, team leadership and on-going communication with colleagues, families, volunteers and management.', },
    ];

    items.forEach(() => {
      this.addItem();
    });

    this.checklistForm.patchValue({
      checklistItems: items
    });
  }
}
