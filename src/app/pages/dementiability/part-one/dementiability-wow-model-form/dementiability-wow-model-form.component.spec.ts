import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityWowModelFormComponent } from './dementiability-wow-model-form.component';

describe('DementiabilityWowModelFormComponent', () => {
  let component: DementiabilityWowModelFormComponent;
  let fixture: ComponentFixture<DementiabilityWowModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityWowModelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityWowModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
