import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityHomeAreaChecklistComponent } from './dementiability-home-area-checklist.component';

describe('DementiabilityHomeAreaChecklistComponent', () => {
  let component: DementiabilityHomeAreaChecklistComponent;
  let fixture: ComponentFixture<DementiabilityHomeAreaChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityHomeAreaChecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityHomeAreaChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
