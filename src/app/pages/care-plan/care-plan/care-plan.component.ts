import {Component, OnInit} from '@angular/core';
import {
  faBookmark,
  faEnvelope,
  faChartSimple,
  faCartShopping,
  faUserPlus,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import {FireDatabaseService} from "@services/fire-database.service";

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.component.html',
  styleUrl: './care-plan.component.scss'
})
export class CarePlanComponent implements OnInit{
  faBookmark = faBookmark;
  faEnvelope = faEnvelope;
  faChartSimple = faChartSimple;
  faCartShopping = faCartShopping;
  faUserPlus = faUserPlus;
  faChartPie = faChartPie;
  constructor(private fireDatabaseService :FireDatabaseService) {

  }

  ngOnInit(): void {
    this.fireDatabaseService.save('testCare/',{name:'user',age:20});
  }
}
