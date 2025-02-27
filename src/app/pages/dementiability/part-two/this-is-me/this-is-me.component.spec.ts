import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsMeComponent } from './this-is-me.component';

describe('ThisIsMeComponent', () => {
  let component: ThisIsMeComponent;
  let fixture: ComponentFixture<ThisIsMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThisIsMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThisIsMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
