import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanMainComponent } from './kanban-main.component';

describe('KanbanMainComponent', () => {
  let component: KanbanMainComponent;
  let fixture: ComponentFixture<KanbanMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
