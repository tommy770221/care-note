import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityTeamMeetingComponent } from './dementiability-team-meeting.component';

describe('DementiabilityTeamMeetingComponent', () => {
  let component: DementiabilityTeamMeetingComponent;
  let fixture: ComponentFixture<DementiabilityTeamMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityTeamMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityTeamMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
