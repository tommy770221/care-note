import {AfterViewInit, Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {document} from "ngx-bootstrap/utils";

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnInit,OnDestroy,AfterViewInit{
  constructor(private renderer: Renderer2,) {
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(
      document.getElementById('main-content-wrapper'),
      'kanban'
    );
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.addClass(
      document.getElementById('main-content-wrapper'),
      'kanban'
    );
  }

}
