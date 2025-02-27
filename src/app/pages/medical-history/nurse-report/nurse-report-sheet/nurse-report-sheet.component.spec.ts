import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseReportSheetComponent } from './nurse-report-sheet.component';

describe('NurseReportSheetComponent', () => {
  let component: NurseReportSheetComponent;
  let fixture: ComponentFixture<NurseReportSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NurseReportSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NurseReportSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
