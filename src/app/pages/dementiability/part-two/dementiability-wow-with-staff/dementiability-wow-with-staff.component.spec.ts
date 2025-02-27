import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityWowWithStaffComponent } from './dementiability-wow-with-staff.component';

describe('DementiabilityWowWithStaffComponent', () => {
  let component: DementiabilityWowWithStaffComponent;
  let fixture: ComponentFixture<DementiabilityWowWithStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityWowWithStaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityWowWithStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
