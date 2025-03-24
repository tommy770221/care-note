import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityDashboardComponent } from './dementiability-dashboard.component';

describe('DementiabilityDashboardComponent', () => {
  let component: DementiabilityDashboardComponent;
  let fixture: ComponentFixture<DementiabilityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
