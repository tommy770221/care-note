import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityMeetingAgendaComponent } from './dementiability-meeting-agenda.component';

describe('DementiabilityMeetingAgendaComponent', () => {
  let component: DementiabilityMeetingAgendaComponent;
  let fixture: ComponentFixture<DementiabilityMeetingAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityMeetingAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityMeetingAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
