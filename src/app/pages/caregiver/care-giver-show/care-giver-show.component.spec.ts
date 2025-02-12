import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGiverShowComponent } from './care-giver-show.component';

describe('CareGiverShowComponent', () => {
  let component: CareGiverShowComponent;
  let fixture: ComponentFixture<CareGiverShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareGiverShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareGiverShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
