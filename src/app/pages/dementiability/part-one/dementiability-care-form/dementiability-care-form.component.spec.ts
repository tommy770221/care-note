import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityCareFormComponent } from './dementiability-care-form.component';

describe('DementiabilityCareFormComponent', () => {
  let component: DementiabilityCareFormComponent;
  let fixture: ComponentFixture<DementiabilityCareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityCareFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityCareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
