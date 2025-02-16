import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightReadingAssessmentComponent } from './sight-reading-assessment.component';

describe('SightReadingAssessmentComponent', () => {
  let component: SightReadingAssessmentComponent;
  let fixture: ComponentFixture<SightReadingAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SightReadingAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SightReadingAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
