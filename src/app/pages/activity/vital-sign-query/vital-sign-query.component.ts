import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { VitalSignsForm } from '@/model/activity/vital-signs-form.model';

@Component({
  selector: 'app-vital-sign-query',
  templateUrl: './vital-sign-query.component.html',
  styleUrl: './vital-sign-query.component.scss'
})
export class VitalSignQueryComponent implements OnInit {
  carePersonId: string = '';
  records: VitalSignsForm[] = [];
  
  currentPage: number = 1;
  pageSize: number = 3;

  constructor(
    private angularFirestore: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carePersonId = params['carePersonId'];
      if (this.carePersonId) {
        this.queryVitalSigns();
      }
    });
  }

  queryVitalSigns() {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const dateLimitStr = threeMonthsAgo.toISOString().split('T')[0];

    this.angularFirestore.collection('vitalSigns', ref => ref
      .where('carePersonId', '==', this.carePersonId)
      .where('recordDate', '>=', dateLimitStr)
      .orderBy('recordDate', 'desc')
    )
      .get()
      .subscribe((querySnapshot) => {
        this.records = [];
        querySnapshot.forEach((doc) => {
          this.records.push(doc.data() as VitalSignsForm);
          console.log(this.records);
        });
      });
  }

  get paginatedRecords() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.records.slice(startIndex, startIndex + this.pageSize);
  }
  
  get totalPages() {
    return Math.ceil(this.records.length / this.pageSize);
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
  getPagesArray() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }
}
