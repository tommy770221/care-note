import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dementiability-org-checklist',
  templateUrl: './dementiability-org-checklist.component.html',
  styleUrl: './dementiability-org-checklist.component.scss'
})
export class DementiabilityOrgChecklistComponent {
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
      area: ['', Validators.required],
      description: ['', Validators.required],
      score: [null, Validators.required], // Score 1-3
      targetDate: [''],
      responsible: [''],
      needsToBeDone: [''],
      dateCompleted: ['']
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
      // Organization Section
      { area: 'Organization', description: 'The Organization has a Vision and Mission Statement that expresses its goals, aspirations, purpose and direction to ensure there is a \'prepared organization/environment\'.', },
      { area: 'Organization', description: 'All staff, residents and families are made aware of the organization\'s commitment to the DementiAbility Philosophy of Care.', },
      { area: 'Organization', description: 'The vision and mission statements are in keeping with the Principles and Philosophy of the DementiAbility Methods, which includes a respectful, person-centered and ability focused approach that focuses on adding joy, meaning and purpose to the life of every resident each day.', },
      { area: 'Organization', description: 'The new vision/philosophy of care is repeated often.', },
      { area: 'Organization', description: 'Policies and practices are reviewed to ensure they are in line with the philosophy of care (including job descriptions and intake documentation).', },
      { area: 'Organization', description: 'The organization utilizes a variety of internal and external communication tools to ensure that all stakeholders kept abreast of all relevant information in a timely manner.', },
      { area: 'Organization', description: 'The organization has a website that is continually updated.', },
      { area: 'Organization', description: 'There is a regularly scheduled newsletter for staff, families and volunteers.', },
      { area: 'Organization', description: 'Families are informed by phone or direct mail/email (depending on the urgency) of any changes that have impact on resident care.', },
      { area: 'Organization', description: 'Families have the option of receiving information via e-mail.', },
      { area: 'Organization', description: 'Family Councils are involved.', },
      { area: 'Organization', description: 'Resident Councils are involved.', },
      { area: 'Organization', description: 'Communication boards/books are available for staff and are used regularly to facilitate positive interactions.', },
      { area: 'Organization', description: 'Sustainability is fostered.', },
      { area: 'Organization', description: 'New staff are trained.', },
      { area: 'Organization', description: 'Trained staff attend refresher workshops or attend the full workshop again to ensure they are incorporating all aspects of the DementiAbility Methods into their daily practice.', },
      { area: 'Organization', description: 'Staff know their input is valued.', },
      { area: 'Organization', description: 'Staff are acknowledged for their contribution to excellent care, and for including the DementiAbility Methods in their daily practice.', },
      { area: 'Organization', description: 'Staff huddles are held regularly to keep team motivated and to share "in the moment" stories of success or frustration.', },
      { area: 'Organization', description: 'Rewards are integrated into the culture of care. Every person is a valued member of the team.', },
      { area: 'Organization', description: 'The organization is committed to evidence-based practice in all care environments within the home.', },
      { area: 'Organization', description: 'The DementiAbility Methods are adopted as an evidence-based practice model of care.', },
      { area: 'Organization', description: 'Staff is provided with regular opportunities to attend workshops to enhance knowledge and skills in DementiAbility Methods and other dementia-focused education e.g. U-First, PIECES. GPA, Validation Communication.', },
      { area: 'Organization', description: 'Staff are encouraged to increase expertise through DementiAbility Certification (at least two people per unit)', },
      { area: 'Organization', description: 'Regular in-service programs in DementiAbility Methods are offered as educational refreshers.', },
      { area: 'Organization', description: 'The Organization is committed to the utilization of evidence-based Environmental Design in order to support all aspects of cognitive, social and physical function for those who work, visit or live in the Home.', },
      { area: 'Organization', description: 'The home is fully ‘Accessible\'.', },
      { area: 'Organization', description: 'A Checklist for each area of the home is available, discussed regularly and updated daily to ensure that each area of the home is “prepared”.', },
      { area: 'Organization', description: 'Team meetings include documented action items with individuals and target dates assigned to each item.', },
      { area: 'Organization', description: 'Management monitors progress and motivates team to keep moving forward.', },
      { area: 'Organization', description: 'Rewards and recognition are integrated into leadership practices.', },
      { area: 'Organization', description: 'The organization ensures that accountability measures are in place through continuous quality improvement.', },
      { area: 'Organization', description: 'Management supports change through leadership with emotional intelligence.', },
      { area: 'Organization', description: 'Management provides support in meetings and on the units to ensure there is clear evidence of commitment.', },
      { area: 'Organization', description: 'Resources are committed to this initiative and incorporated into short term and long term plans.', },
      { area: 'Organization', description: 'Changes and investments are systematically and intentionally assessed for improvements to services.', },
      { area: 'Organization', description: 'Management demonstrates commitment to Quality Improvement by supporting staff through the change process.', },
      { area: 'Organization', description: 'The organization recognizes that consistency and familiarity are critical to optimizing function and behaviours in those with cognitive impairment and ensures an appropriate level of staffing and care.', },
      { area: 'Organization', description: 'Staffing is consistent.', },
      { area: 'Organization', description: 'All resident areas have a look and feel of \'home\'.', },
      { area: 'Organization', description: 'Front entrance leaves one feeling like they are "home".', },
      { area: 'Organization', description: 'There is a welcome sign at the front door along with orienting and welcoming information.', },
      { area: 'Organization', description: 'Living room spaces look comfortable and inviting.', },
      { area: 'Organization', description: 'Dining areas look like dining rooms, not fast food places.', },
      { area: 'Organization', description: 'There are decorations in each location that remind one of home.', },
      { area: 'Organization', description: 'Toilet and bathing areas are intimate and look like their purpose.', },
      { area: 'Organization', description: 'The role of uniforms (e.g. – nursing staff wear one colour, dining staff wears a different colour, recreation wears a different colour that is distinctly different from the health care worker and dietary staff).', },
      { area: 'Organization', description: 'Name badges for staff, residents, volunteers and family can be clearly seen.', },
      { area: 'Organization', description: 'A resident may be asked to assume the role of ensuring all who work and visit wear a name badge.', },
      // Add Unit and Staff sections here similarly...  (Data from pages not included in the prompt)

    ];

    items.forEach(() => {
      this.addItem();
    });

    this.checklistForm.patchValue({
      checklistItems: items
    });
  }
}
