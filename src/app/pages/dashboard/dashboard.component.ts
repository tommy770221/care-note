// dashboard.component.ts
import {Component, OnInit} from '@angular/core';
import {
    faBookmark,
    faEnvelope,
    faChartSimple,
    faCartShopping,
    faUserPlus,
    faChartPie
} from '@fortawesome/free-solid-svg-icons';
import {ToastrService} from "ngx-toastr";
import {User} from "firebase/auth";
import {AppService} from "@services/app.service";
import {CareGiverService} from "@services/firestore/care-giver.service";
import {CareGiver} from "@/model/care-giver.model";
import {NavigationExtras, Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
    faBookmark = faBookmark;
    faEnvelope = faEnvelope;
    faChartSimple = faChartSimple;
    faCartShopping = faCartShopping;
    faUserPlus = faUserPlus;
    faChartPie = faChartPie;
    private user?: User | null = null;

    constructor(private toastr: ToastrService,
                private appService: AppService,
                private careGiverService:CareGiverService,
                private router: Router) {
    }
    ngOnInit(): void {

    }
}
