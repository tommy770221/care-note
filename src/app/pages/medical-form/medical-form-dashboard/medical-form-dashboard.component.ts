import { Component } from '@angular/core';
import { faBookmark, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faChartPie, faChartSimple, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medical-form-dashboard',
  templateUrl: './medical-form-dashboard.component.html',
  styleUrl: './medical-form-dashboard.component.scss'
})
export class MedicalFormDashboardComponent {

    faBookmark = faBookmark;
    faEnvelope = faEnvelope;
    faChartSimple = faChartSimple;
    faCartShopping = faCartShopping;
    faUserPlus = faUserPlus;
    faChartPie = faChartPie;
}
