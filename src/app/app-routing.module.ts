import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import {CarePlanComponent} from '@pages/care-plan/care-plan/care-plan.component';
import {ProfileAddComponent} from '@pages/care-plan/care-plan/person/profile/profile-add/profile-add.component';
import {ProfileShowComponent} from '@pages/care-plan/care-plan/person/profile/profile-show/profile-show.component';
import {CareDashboardComponent} from '@pages/care-plan/care-plan/dashboard/care-dashboard/care-dashboard.component';
import {CalendarComponent} from '@pages/calendar/calendar/calendar.component';
import {KanbanComponent} from '@pages/kanban/kanban/kanban.component';
import {
  ProfileAddOneComponent
} from "@pages/care-plan/care-plan/person/profile/profile-add-one/profile-add-one.component";
import {TeamMemberAddComponent} from "@pages/care-plan/care-plan/person/team/team-member-add/team-member-add.component";
import {PersonShowComponent} from "@pages/activity/person-show/person-show.component";
import {PersonAddComponent} from "@pages/activity/person-add/person-add.component";
import {CareGiverProfileComponent} from "@pages/caregiver/profile/profile.component";
import {TeamProfileComponent} from "@pages/careteam/profile/profile.component";
import {CareGiverShowComponent} from "@pages/caregiver/care-giver-show/care-giver-show.component";
import {SuggestionComponent} from "@pages/suggestion/suggestion.component";
import {ActivityAddComponent} from "@pages/activity/activity-add/activity-add.component";
import {
  DementiabilityMeetingAgendaComponent
} from "@pages/dementiability/part-one/dementiability-meeting-agenda/dementiability-meeting-agenda.component";
import {
  RoundsTrackingToolComponent
} from "@pages/dementiability/part-one/rounds-tracking-tool/rounds-tracking-tool.component";
import {
  DementiabilityActionPlanComponent
} from "@pages/dementiability/part-one/dementiability-action-plan/dementiability-action-plan.component";
import {
  ProgramParticipantFormComponent
} from "@pages/dementiability/part-one/program-participant-form/program-participant-form.component";
import {
  SightReadingAssessmentComponent
} from "@pages/dementiability/part-one/sight-reading-assessment/sight-reading-assessment.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
              path: 'careGiver/profile',
              component: CareGiverProfileComponent
            },
            {
              path: 'careGiver/:id',
              component: CareGiverShowComponent
            },
            {
              path: 'careTeam/:id',
              component: TeamProfileComponent
            },
            {
              path: 'suggestion',
              component: SuggestionComponent
            },
            {
              path: 'activity',
              component: PersonShowComponent
            },
            {
              path: 'activity/addOne',
              component: PersonAddComponent
            },
            {
              path: 'activity/carePerson/:carePersonId/careGiver/:careGiverId/edit',
              component: ActivityAddComponent
            },
            {
              path: 'dementiability/part-one/dementiability-meeting-agenda',
              component: DementiabilityMeetingAgendaComponent
            },
            {
              path: 'dementiability/part-one/rounds-tracking-tool',
              component: RoundsTrackingToolComponent
            },
            {
              path: 'dementiability/part-one/dementiability-action-plan',
              component: DementiabilityActionPlanComponent
            },
            {
              path: 'dementiability/part-one/program-participant-form',
              component:  ProgramParticipantFormComponent
            },
            {
              path: 'dementiability/part-one/sight-reading-assessment',
              component:  SightReadingAssessmentComponent
            },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
            {
                path: 'sub-menu-2',
                component: BlankComponent
            },
            {
                path: 'care-plan',
                component: CarePlanComponent,
                children: [
                    {path: '', component: CareDashboardComponent},
                    {path: 'dashboad', component: CareDashboardComponent},
                    {path: 'person/profile', component: ProfileAddComponent},
                    {
                      path: 'person/profile/addOne',
                      component: ProfileAddOneComponent
                    },
                    {
                      path: 'person/team/memberAdd',
                      component: TeamMemberAddComponent
                    },
                    {
                        path: 'person/profile/:id',
                        component: ProfileShowComponent
                    }
                ]
            },
            {
                path: 'calendar',
                component: CalendarComponent
            },
            {
              path: 'dashboard',
              component: DashboardComponent
            },
            {
                path: '',
                component: PersonShowComponent
            }
        ]
    },
    {
        path: 'kanban',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [{path: '', component: KanbanComponent}]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
