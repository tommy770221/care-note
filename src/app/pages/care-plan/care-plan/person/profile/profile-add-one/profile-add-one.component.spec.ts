import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddOneComponent } from './profile-add-one.component';

describe('ProfileAddOneComponent', () => {
  let component: ProfileAddOneComponent;
  let fixture: ComponentFixture<ProfileAddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAddOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileAddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
