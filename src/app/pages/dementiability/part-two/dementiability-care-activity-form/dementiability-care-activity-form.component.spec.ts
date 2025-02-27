import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityCareActivityFormComponent } from './dementiability-care-activity-form.component';

describe('DementiabilityCareActivityFormComponent', () => {
  let component: DementiabilityCareActivityFormComponent;
  let fixture: ComponentFixture<DementiabilityCareActivityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityCareActivityFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityCareActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
