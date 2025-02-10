import { Component } from '@angular/core';
import {
    faBookmark,
    faChartPie,
    faEnvelope,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-care-dashboard',
  templateUrl: './care-dashboard.component.html',
  styleUrls: ['./care-dashboard.component.scss']
})
export class CareDashboardComponent {

    protected readonly faChartPie = faChartPie;
    protected readonly faUserPlus = faUserPlus;
    protected readonly faBookmark = faBookmark;
    protected readonly faEnvelope = faEnvelope;
}
