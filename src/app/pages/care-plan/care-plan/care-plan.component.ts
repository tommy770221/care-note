import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {
  faBookmark,
  faEnvelope,
  faChartSimple,
  faCartShopping,
  faUserPlus,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import {FireDatabaseService} from "@services/fire-database.service";
import {FireStoreService} from "@services/fire-store.service";

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.component.html',
  styleUrl: './care-plan.component.scss'
})
export class CarePlanComponent implements OnInit,OnDestroy{
  faBookmark = faBookmark;
  faEnvelope = faEnvelope;
  faChartSimple = faChartSimple;
  faCartShopping = faCartShopping;
  faUserPlus = faUserPlus;
  faChartPie = faChartPie;
  @Output()
  personId = new EventEmitter<String>();

  createPersonID='';

  setHide(){
    this.personId.emit(this.createPersonID);
  }
  constructor(private fireDatabaseService :FireDatabaseService,
              private fireStoreService: FireStoreService) {

  }

  ngOnInit(): void {
    //this.fireDatabaseService.save('testCares/',{name:'user2',age:20});
    //this.fireDatabaseService.query('testCares/');
    //this.fireStoreService.save('testCares/',{name:'user',age:50});
    //this.fireStoreService.query('testCares/');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
