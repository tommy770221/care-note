import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFormDashboardComponent } from './medical-form-dashboard.component';

describe('MedicalFormDashboardComponent', () => {
  let component: MedicalFormDashboardComponent;
  let fixture: ComponentFixture<MedicalFormDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalFormDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalFormDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
