import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryVersionTwoComponent } from './medical-history.component';

describe('MedicalHistoryComponent', () => {
  let component: MedicalHistoryVersionTwoComponent;
  let fixture: ComponentFixture<MedicalHistoryVersionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalHistoryVersionTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalHistoryVersionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
