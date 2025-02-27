import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverChecklistComponent } from './caregiver-checklist.component';

describe('CaregiverChecklistComponent', () => {
  let component: CaregiverChecklistComponent;
  let fixture: ComponentFixture<CaregiverChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaregiverChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaregiverChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
