import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityStaffRecognitionComponent } from './dementiability-staff-recognition.component';

describe('DementiabilityStaffRecognitionComponent', () => {
  let component: DementiabilityStaffRecognitionComponent;
  let fixture: ComponentFixture<DementiabilityStaffRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityStaffRecognitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityStaffRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
