import { Component } from '@angular/core';
import { faBookmark, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faChartPie, faChartSimple, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dementiability-dashboard',
  templateUrl: './dementiability-dashboard.component.html',
  styleUrl: './dementiability-dashboard.component.scss'
})
export class DementiabilityDashboardComponent {
  faBookmark = faBookmark;
  faEnvelope = faEnvelope;
  faChartSimple = faChartSimple;
  faCartShopping = faCartShopping;
  faUserPlus = faUserPlus;
  faChartPie = faChartPie;

}
