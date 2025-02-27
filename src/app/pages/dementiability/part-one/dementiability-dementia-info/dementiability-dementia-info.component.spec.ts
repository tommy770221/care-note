import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityDementiaInfoComponent } from './dementiability-dementia-info.component';

describe('DementiabilityDementiaInfoComponent', () => {
  let component: DementiabilityDementiaInfoComponent;
  let fixture: ComponentFixture<DementiabilityDementiaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityDementiaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityDementiaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
