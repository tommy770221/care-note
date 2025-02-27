import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverResponsibilityComponent } from './caregiver-responsibility.component';

describe('CaregiverResponsibilityComponent', () => {
  let component: CaregiverResponsibilityComponent;
  let fixture: ComponentFixture<CaregiverResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaregiverResponsibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaregiverResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
