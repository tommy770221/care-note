import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbarHandoverComponent } from './isbar-handover.component';

describe('IsbarHandoverComponent', () => {
  let component: IsbarHandoverComponent;
  let fixture: ComponentFixture<IsbarHandoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsbarHandoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsbarHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
