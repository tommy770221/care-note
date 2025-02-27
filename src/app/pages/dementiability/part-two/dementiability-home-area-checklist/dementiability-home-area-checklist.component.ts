import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-home-area-checklist',
  templateUrl: './dementiability-home-area-checklist.component.html',
  styleUrl: './dementiability-home-area-checklist.component.scss'
})
export class DementiabilityHomeAreaChecklistComponent {
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
      areasOfImprovement: [''],
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
      { description: 'All staff is aware of, and familiar with, the organization\'s Vision and Mission and how they relate to the DementiAbility Philosophy (achieved through regular reminders).', },
      { description: 'Staff provides care that incorporates the Principles and Philosophy of the DementiAbility Methods into their practice.', },
      { description: 'Staff sees themselves as a team who, in their various roles and disciplines, provides opportunities for meaningful engagement for residents on the unit.', },
      { description: 'A resident profile is completed upon admission and this information is shared with all staff and made available to all for easy reference.', },
      { description: 'An \'All About Me\' form is filled out and is at the bedside (or other accessible location) for all staff to use as a means of engaging a resident in conversation in each and every contact.', },
      { description: 'Families understand the philosophy of care and have signed a permission form that permits photos and personal information (that is used to help staff know their loved one) to be posted in the home.', },
      { description: 'DementiAbility Forms are filled in and the details are available and accessible for all staff, including: Needs, wants, preferences', },
      { description: 'DementiAbility Forms are filled in and the details are available and accessible for all staff, including: Interests', },
      { description: 'DementiAbility Forms are filled in and the details are available and accessible for all staff, including: Roles', },
      { description: 'Staff shares useful ‘tips\' regarding a resident with their colleagues to facilitate better care.', },
      { description: 'A WOW form is completed as an “at a glance” document for sharing information in meetings and used in “huddles” and rounds. Top needs, interests, roles are identified/documented and habits and routines are documented. These details are shared for all to use when considering what behaviours may mean (and each behaviour is linked to the “Who” and observations). This information is used to make decisions about what actions need to be put into practice.', },
      { description: 'Staff make observations that include details about triggers, habits, the time of day behaviour(s) occur(s), etc.', },
      { description: 'Risk is considered.', },
      { description: 'All staff are part of the team that works together to focus on individual needs and care.', },
      { description: 'Details about Who + Observations = What they will do are discussed, shared and recorded.', },
      { description: 'An environmental checklist of the unit, including resident rooms and bathrooms, is available and regularly updated to ensure residents function at their optimum.', },
      { description: 'Families are encouraged to bring familiar and favoured objects/decorations for the resident\'s room.', },
      { description: 'Families help to identify needs, wants and preferences of loved ones. Residents contribute to the collection of details.', },
      { description: 'The DementiAbility “WOW” Model guides care practices and staff\'s focus is about valuing the individual and their preferences.', },
      { description: 'Details from the “WOW” model are shared and used by team members to support and provide resident care.', },
      { description: 'Staff understands that behaviours are a form of communication and first seek non-pharmacological solutions to address these behaviours.', },
      { description: 'The home area is prepared: with memory supports that set each resident up for success (e.g. - residents can find their way, find things and they have the memory cues in place for doing things successfully, including an agenda).', },
      { description: 'The home area is prepared: with roles/jobs/tasks that are part of routines, according to needs, interests and abilities.', },
      { description: 'Encouragement, positive reinforcement and appreciation for each resident\'s efforts are offered regularly by staff and end with a “Thank you".', },
      { description: 'Staff check things off on a resident\'s agenda when tasks are completed.', },
      { description: 'Staff nurture relationships and reinforce a sense of love, belonging and community.', },
      { description: 'Risk is assessed and minimized and safety is supported.', },
      { description: 'Care plan is continually updated. When residents want to engage in roles such as making a bed or setting a table, these tasks are facilitated and recorded in the care plan.', },
      { description: 'Team meetings, or huddles, are held regularly and/or \'ad hoc as needed\' to discuss relevant resident issues. The team shares ideas/strategies for care. Successes are communicated and celebrated.', },
      { description: 'A communication book (with WOW details) is available for, and used by, all staff, including those on alternate shifts or days off.', },
      { description: 'Staff shares details about things that add purpose & meaning to residents\' lives.', },
      { description: 'A board that posts special moments/accomplishments is positioned in staff room and clearly visible. One section is for staff successes and one section is for resident successes. Every success is celebrated!', },
      { description: 'Programs engage residents at their level of ability and offer choice.', },
      { description: 'Residents have regular opportunities for structured programming throughout the day.', },
      { description: 'Social roles are established and offered to residents, providing opportunities to contribute and to connect with others, according to needs, interests and abilities.', },
      { description: 'Programs include opportunities to stimulate the body, mind and spirit (with emphasis on social connection).', },
      { description: 'Routines are established according to resident strengths.', },
      { description: 'Residents are encouraged to move about the unit freely to expend energy.', },
      { description: 'Activity equipment and supplies are accessible to staff, volunteers and families.', },
      { description: 'There is an on-going effort to add to the number and types of activities available to residents.', },
      { description: 'Family members are encouraged to participate and use activities, that are available and accessible, to enhance the visiting experience.', },
      { description: 'Students are recruited and welcomed and encouraged to assist with preparing activities and leading programs (e.g. – reading programs).', },
      { description: 'Routines are developed for residents to help with tasks that need to be completed in the home.', },
      { description: 'Residents have a reason to get up in the morning, something to do and someone/something to love. Each day embraces life and living, joy, meaning and purpose.', },
    ];

    items.forEach(() => {
      this.addItem();
    });

    this.checklistForm.patchValue({
      checklistItems: items
    });
  }
}
