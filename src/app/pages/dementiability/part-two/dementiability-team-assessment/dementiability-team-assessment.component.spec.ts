import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityTeamAssessmentComponent } from './dementiability-team-assessment.component';

describe('DementiabilityTeamAssessmentComponent', () => {
  let component: DementiabilityTeamAssessmentComponent;
  let fixture: ComponentFixture<DementiabilityTeamAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityTeamAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityTeamAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
