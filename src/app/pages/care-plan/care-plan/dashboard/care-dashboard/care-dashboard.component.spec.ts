import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareDashboardComponent } from './care-dashboard.component';

describe('CareDashboardComponent', () => {
  let component: CareDashboardComponent;
  let fixture: ComponentFixture<CareDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
