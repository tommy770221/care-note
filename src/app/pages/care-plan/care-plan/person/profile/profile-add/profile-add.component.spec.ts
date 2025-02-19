import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddComponent } from './profile-add.component';

describe('ProfileAddComponent', () => {
  let component: ProfileAddComponent;
  let fixture: ComponentFixture<ProfileAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
