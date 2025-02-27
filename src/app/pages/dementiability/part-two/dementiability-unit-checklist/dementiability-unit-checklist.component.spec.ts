import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityUnitChecklistComponent } from './dementiability-unit-checklist.component';

describe('DementiabilityUnitChecklistComponent', () => {
  let component: DementiabilityUnitChecklistComponent;
  let fixture: ComponentFixture<DementiabilityUnitChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityUnitChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityUnitChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
