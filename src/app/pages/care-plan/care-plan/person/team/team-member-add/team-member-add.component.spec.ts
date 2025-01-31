import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberAddComponent } from './team-member-add.component';

describe('TeamMemberAddComponent', () => {
  let component: TeamMemberAddComponent;
  let fixture: ComponentFixture<TeamMemberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
