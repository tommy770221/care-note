import {AfterViewInit, Component, HostBinding, OnInit, Renderer2} from '@angular/core';
import {Observable} from "rxjs";
import {UiState} from "@/store/ui/state";
import {Store} from "@ngrx/store";
import {AppState} from "@/store/state";
import {ToggleSidebarMenu} from "@/store/ui/actions";

@Component({
  selector: 'app-kanban-main',
  templateUrl: './kanban-main.component.html',
  styleUrl: './kanban-main.component.scss'
})
export class KanbanMainComponent implements OnInit, AfterViewInit {
  @HostBinding('class') class = 'wrapper';
  public ui: Observable<UiState>;
  public appLoaded: boolean = false;

  constructor(
    private renderer: Renderer2,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.ui = this.store.select('ui');
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'login-page'
    );
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'register-page'
    );
    this.renderer.addClass(
      document.querySelector('app-root'),
      'layout-fixed'
    );

    this.ui.subscribe(
      ({menuSidebarCollapsed, controlSidebarCollapsed, darkMode}) => {
        if (menuSidebarCollapsed) {
          this.renderer.removeClass(
            document.querySelector('app-root'),
            'sidebar-open'
          );
          this.renderer.addClass(
            document.querySelector('app-root'),
            'sidebar-collapse'
          );
        } else {
          this.renderer.removeClass(
            document.querySelector('app-root'),
            'sidebar-collapse'
          );
          this.renderer.addClass(
            document.querySelector('app-root'),
            'sidebar-open'
          );
        }

        if (controlSidebarCollapsed) {
          this.renderer.removeClass(
            document.querySelector('app-root'),
            'control-sidebar-slide-open'
          );
        } else {
          this.renderer.addClass(
            document.querySelector('app-root'),
            'control-sidebar-slide-open'
          );
        }

        if (darkMode) {
          this.renderer.addClass(
            document.querySelector('app-root'),
            'dark-mode'
          );
        } else {
          this.renderer.removeClass(
            document.querySelector('app-root'),
            'dark-mode'
          );
        }
      }
    );
  }

  onToggleMenuSidebar() {
    this.store.dispatch(new ToggleSidebarMenu());
  }

  ngAfterViewInit() {
    this.appLoaded = true;
  }
}
