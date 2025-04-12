import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyMedicationFormComponent } from './elderly-medication-form.component';

describe('ElderlyMedicationFormComponent', () => {
  let component: ElderlyMedicationFormComponent;
  let fixture: ComponentFixture<ElderlyMedicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElderlyMedicationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElderlyMedicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
