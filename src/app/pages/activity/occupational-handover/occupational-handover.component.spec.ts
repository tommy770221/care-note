import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalHandoverComponent } from './occupational-handover.component';

describe('OccupationalHandoverComponent', () => {
  let component: OccupationalHandoverComponent;
  let fixture: ComponentFixture<OccupationalHandoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OccupationalHandoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OccupationalHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
