import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityInterestsFormComponent } from './dementiability-interests-form.component';

describe('DementiabilityInterestsFormComponent', () => {
  let component: DementiabilityInterestsFormComponent;
  let fixture: ComponentFixture<DementiabilityInterestsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityInterestsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityInterestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
