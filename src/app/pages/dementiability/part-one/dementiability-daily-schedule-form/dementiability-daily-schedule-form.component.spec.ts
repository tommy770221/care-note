import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityDailyScheduleFormComponent } from './dementiability-daily-schedule-form.component';

describe('DementiabilityDailyScheduleFormComponent', () => {
  let component: DementiabilityDailyScheduleFormComponent;
  let fixture: ComponentFixture<DementiabilityDailyScheduleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityDailyScheduleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityDailyScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
