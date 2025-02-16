import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityActionPlanComponent } from './dementiability-action-plan.component';

describe('DementiabilityActionPlanComponent', () => {
  let component: DementiabilityActionPlanComponent;
  let fixture: ComponentFixture<DementiabilityActionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityActionPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
