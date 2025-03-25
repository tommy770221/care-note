import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCarePlanComponent } from './advance-care-plan.component';

describe('AdvanceCarePlanComponent', () => {
  let component: AdvanceCarePlanComponent;
  let fixture: ComponentFixture<AdvanceCarePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvanceCarePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceCarePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
