import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementiabilityPreviousRolesComponent } from './dementiability-previous-roles.component';

describe('DementiabilityPreviousRolesComponent', () => {
  let component: DementiabilityPreviousRolesComponent;
  let fixture: ComponentFixture<DementiabilityPreviousRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DementiabilityPreviousRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DementiabilityPreviousRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
