import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramParticipantFormComponent } from './program-participant-form.component';

describe('ProgramParticipantFormComponent', () => {
  let component: ProgramParticipantFormComponent;
  let fixture: ComponentFixture<ProgramParticipantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramParticipantFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramParticipantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
