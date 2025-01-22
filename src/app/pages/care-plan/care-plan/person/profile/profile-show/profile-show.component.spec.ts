import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShowComponent } from './profile-show.component';

describe('ProfileShowComponent', () => {
  let component: ProfileShowComponent;
  let fixture: ComponentFixture<ProfileShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
