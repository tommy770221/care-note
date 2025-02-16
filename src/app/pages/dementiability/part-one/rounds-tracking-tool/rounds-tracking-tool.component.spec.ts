import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsTrackingToolComponent } from './rounds-tracking-tool.component';

describe('RoundsTrackingToolComponent', () => {
  let component: RoundsTrackingToolComponent;
  let fixture: ComponentFixture<RoundsTrackingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundsTrackingToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundsTrackingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
