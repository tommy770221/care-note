import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityNeedsFormComponent } from './dementiability-needs-form.component';

describe('DementiabilityNeedsFormComponent', () => {
  let component: DementiabilityNeedsFormComponent;
  let fixture: ComponentFixture<DementiabilityNeedsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityNeedsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityNeedsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
