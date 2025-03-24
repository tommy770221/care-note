import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityComponent } from './dementiability.component';

describe('DementiabilityComponent', () => {
  let component: DementiabilityComponent;
  let fixture: ComponentFixture<DementiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
