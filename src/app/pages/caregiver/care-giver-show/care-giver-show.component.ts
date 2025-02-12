import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CareTeamService} from "@services/firestore/care-team.service";
import {CarePersonService} from "@services/firestore/care-person.service";
import {CareGiverService} from "@services/firestore/care-giver.service";
import {CareGiver} from "@/model/care-giver.model";
import {CareTeam} from "@/model/care-team.model";

@Component({
    selector: 'app-care-giver-show',
    templateUrl: './care-giver-show.component.html',
    styleUrl: './care-giver-show.component.scss'
})
export class CareGiverShowComponent implements OnInit {
    careGiver: CareGiver=new CareGiver();

    constructor(
        private route: ActivatedRoute,
        private careTeamService: CareTeamService,
        private carePersonService: CarePersonService,
        private careGiverService: CareGiverService
    ) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        let careGiverId=params.id;
        this.careGiverService.queryOne(careGiverId).subscribe(response => {
          this.careGiver = response.data() as CareGiver;
        })
      })
    }
}
