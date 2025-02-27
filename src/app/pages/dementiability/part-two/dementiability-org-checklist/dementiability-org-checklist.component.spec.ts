import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityOrgChecklistComponent } from './dementiability-org-checklist.component';

describe('DementiabilityOrgChecklistComponent', () => {
  let component: DementiabilityOrgChecklistComponent;
  let fixture: ComponentFixture<DementiabilityOrgChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityOrgChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityOrgChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
