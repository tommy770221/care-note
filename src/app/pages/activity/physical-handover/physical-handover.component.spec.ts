import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalHandoverComponent } from './physical-handover.component';

describe('PhysicalHandoverComponent', () => {
  let component: PhysicalHandoverComponent;
  let fixture: ComponentFixture<PhysicalHandoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicalHandoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
