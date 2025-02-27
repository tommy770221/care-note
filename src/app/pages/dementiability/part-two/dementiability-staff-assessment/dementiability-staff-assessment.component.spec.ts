import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityStaffAssessmentComponent } from './dementiability-staff-assessment.component';

describe('DementiabilityStaffAssessmentComponent', () => {
  let component: DementiabilityStaffAssessmentComponent;
  let fixture: ComponentFixture<DementiabilityStaffAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityStaffAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityStaffAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
