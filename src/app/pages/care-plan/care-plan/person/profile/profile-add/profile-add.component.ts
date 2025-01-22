import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrl: './profile-add.component.scss'
})
export class ProfileAddComponent implements OnInit{
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();

  constructor() {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
  }
}
