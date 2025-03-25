import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalSignRecordComponent } from './vital-sign-record.component';

describe('VitalSignRecordComponent', () => {
  let component: VitalSignRecordComponent;
  let fixture: ComponentFixture<VitalSignRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VitalSignRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitalSignRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
