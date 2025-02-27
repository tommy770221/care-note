import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityEnvironmentalChecklistComponent } from './dementiability-environmental-checklist.component';

describe('DementiabilityEnvironmentalChecklistComponent', () => {
  let component: DementiabilityEnvironmentalChecklistComponent;
  let fixture: ComponentFixture<DementiabilityEnvironmentalChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityEnvironmentalChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityEnvironmentalChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
