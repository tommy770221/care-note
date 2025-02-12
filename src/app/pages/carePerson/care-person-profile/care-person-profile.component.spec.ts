import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarePersonProfileComponent } from './care-person-profile.component';

describe('CarePersonProfileComponent', () => {
  let component: CarePersonProfileComponent;
  let fixture: ComponentFixture<CarePersonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarePersonProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarePersonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
