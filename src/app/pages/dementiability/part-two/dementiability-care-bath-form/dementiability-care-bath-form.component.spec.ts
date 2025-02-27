import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityCareBathFormComponent } from './dementiability-care-bath-form.component';

describe('DementiabilityCareBathFormComponent', () => {
  let component: DementiabilityCareBathFormComponent;
  let fixture: ComponentFixture<DementiabilityCareBathFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityCareBathFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityCareBathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
