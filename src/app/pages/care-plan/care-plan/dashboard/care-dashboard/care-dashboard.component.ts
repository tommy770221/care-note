import { Component } from '@angular/core';
import {
    faBookmark,
    faCartShopping,
    faChartPie,
    faChartSimple,
    faEnvelope,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-care-dashboard',
  templateUrl: './care-dashboard.component.html',
  styleUrl: './care-dashboard.component.scss'
})
export class CareDashboardComponent {

    protected readonly faChartPie = faChartPie;
    protected readonly faChartSimple = faChartSimple;
    protected readonly faCartShopping = faCartShopping;
    protected readonly faUserPlus = faUserPlus;
    protected readonly faBookmark = faBookmark;
    protected readonly faEnvelope = faEnvelope;
}
