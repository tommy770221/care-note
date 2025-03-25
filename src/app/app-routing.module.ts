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
import { DementiabilityDementiaInfoComponent } from '@pages/dementiability/part-one/dementiability-dementia-info/dementiability-dementia-info.component';
import { DementiabilityPreviousRolesComponent } from '@pages/dementiability/part-one/dementiability-previous-roles/dementiability-previous-roles.component';
import { DementiabilityNeedsFormComponent } from '@pages/dementiability/part-one/dementiability-needs-form/dementiability-needs-form.component';
import { DementiabilityInterestsFormComponent } from '@pages/dementiability/part-one/dementiability-interests-form/dementiability-interests-form.component';
import { DementiabilityDailyScheduleFormComponent } from '@pages/dementiability/part-one/dementiability-daily-schedule-form/dementiability-daily-schedule-form.component';
import { DementiabilityWowModelFormComponent } from '@pages/dementiability/part-one/dementiability-wow-model-form/dementiability-wow-model-form.component';
import { DementiabilityCareFormComponent } from '@pages/dementiability/part-one/dementiability-care-form/dementiability-care-form.component';
import { DementiabilityCareBathFormComponent } from '@pages/dementiability/part-two/dementiability-care-bath-form/dementiability-care-bath-form.component';
import { DementiabilityCareActivityFormComponent } from '@pages/dementiability/part-two/dementiability-care-activity-form/dementiability-care-activity-form.component';
import { DementiabilityEnvironmentalChecklistComponent } from '@pages/dementiability/part-two/dementiability-environmental-checklist/dementiability-environmental-checklist.component';
import { DementiabilityUnitChecklistComponent } from '@pages/dementiability/part-two/dementiability-unit-checklist/dementiability-unit-checklist.component';
import { DementiabilityOrgChecklistComponent } from '@pages/dementiability/part-two/dementiability-org-checklist/dementiability-org-checklist.component';
import { DementiabilityStaffRecognitionComponent } from '@pages/dementiability/part-two/dementiability-staff-recognition/dementiability-staff-recognition.component';
import { DementiabilityTeamMeetingComponent } from '@pages/dementiability/part-two/dementiability-team-meeting/dementiability-team-meeting.component';
import { DementiabilityWowWithStaffComponent } from '@pages/dementiability/part-two/dementiability-wow-with-staff/dementiability-wow-with-staff.component';
import { DementiabilityHomeAreaChecklistComponent } from '@pages/dementiability/part-two/dementiability-home-area-checklist/dementiability-home-area-checklist.component';
import { DementiabilityStaffAssessmentComponent } from '@pages/dementiability/part-two/dementiability-staff-assessment/dementiability-staff-assessment.component';
import { DementiabilityTeamAssessmentComponent } from '@pages/dementiability/part-two/dementiability-team-assessment/dementiability-team-assessment.component';
import { ThisIsMeComponent } from '@pages/dementiability/part-two/this-is-me/this-is-me.component';
import { ClinicalHistoryComponent } from '@pages/medical-history/clinical-history/clinical-history.component';
import { CaregiverChecklistComponent } from '@pages/care-plan/care-plan/caregiver-checklist/caregiver-checklist.component';
import { CaregiverResponsibilityComponent } from '@pages/care-plan/care-plan/caregiver-responsibility/caregiver-responsibility.component';
import { MedicalHistoryVersionTwoComponent } from '@pages/medical-history/medical-history/medical-history.component';
import { NurseReportSheetComponent } from '@pages/medical-history/nurse-report/nurse-report-sheet/nurse-report-sheet.component';
import { IsbarHandoverComponent } from '@pages/activity/isbar-handover/isbar-handover.component';
import { MedicalHistoryComponent } from '@pages/activity/medical-history/medical-history.component';
import { PhysicalHandoverComponent } from '@pages/activity/physical-handover/physical-handover.component';
import { OccupationalHandoverComponent } from '@pages/activity/occupational-handover/occupational-handover.component';
import { RiskAssessmentComponent } from '@pages/care-plan/care-plan/risk-assessment/risk-assessment.component';
import { DementiabilityDashboardComponent } from '@pages/dementiability/dementiability-dashboard/dementiability-dashboard.component';
import { DementiabilityComponent } from '@pages/dementiability/dementiability.component';
import { AdvanceCarePlanComponent } from '@pages/care-plan/advance-care-plan/advance-care-plan.component';
import { co } from '@fullcalendar/core/internal-common';
import path from 'path';
import { VitalSignRecordComponent } from '@pages/activity/vital-sign-record/vital-sign-record.component';

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
              path: 'activity/isbar-handover',
              component: IsbarHandoverComponent
              
            },
            {
              path: 'activity/medical-history',
              component: MedicalHistoryComponent
              
            },
            {
              path: 'activity/physical-handover',
              component: PhysicalHandoverComponent
              
            },
            {
              path: 'activity/occupational-handover',
              component: OccupationalHandoverComponent
              
            },
            {
              path: 'activity/carePerson/:carePersonId/careGiver/:careGiverId/edit',
              component: ActivityAddComponent
            },
            {
              path: 'activity/vital/carePerson/:carePersonId/careGiver/:careGiverId/edit',
              component: VitalSignRecordComponent
            },
            {
              path: 'dementiability',
              component: DementiabilityComponent,
              children: [
                {path: '', component: DementiabilityDashboardComponent},
                {path: 'dashboard', component: DementiabilityDashboardComponent},
                {
                  path: 'part-one/dementiability-meeting-agenda',
                  component: DementiabilityMeetingAgendaComponent
                },
                {
                  path: 'part-one/rounds-tracking-tool',
                  component: RoundsTrackingToolComponent
                },
                {
                  path: 'part-one/dementiability-action-plan',
                  component: DementiabilityActionPlanComponent
                },
                {
                  path: 'part-one/program-participant-form',
                  component:  ProgramParticipantFormComponent
                },
                {
                  path: 'part-one/sight-reading-assessment',
                  component:  SightReadingAssessmentComponent
                },
                {
                  path: 'part-one/dementiability-dementia-info',
                  component:  DementiabilityDementiaInfoComponent
                },
                {
                  path: 'part-one/dementiability-previous-roles',
                  component:  DementiabilityPreviousRolesComponent
    
                },
                {
                  path: 'part-one/dementiability-needs-form',
                  component:  DementiabilityNeedsFormComponent
                  
                },
                {
                  path: 'part-one/dementiability-interests-form',
                  component:  DementiabilityInterestsFormComponent
                  
                },
                {
                  path: 'part-one/dementiability-daily-schedule-form',
                  component:  DementiabilityDailyScheduleFormComponent
                  
                },
                {
                  path: 'part-one/dementiability-wow-model-form',
                  component:  DementiabilityWowModelFormComponent
                  
                },
                {
                  path: 'part-one/dementiability-care-form',
                  component:  DementiabilityCareFormComponent
                  
                },
                {
                  path: 'part-two/dementiability-care-bath-form',
                  component:  DementiabilityCareBathFormComponent
                  
                },
                {
                  path: 'part-two/dementiability-care-activity-form',
                  component:  DementiabilityCareActivityFormComponent
                  
                },
                {
                  path: 'part-two/dementiability-environmental-checklist',
                  component:  DementiabilityEnvironmentalChecklistComponent
                  
                },
                {
                  path: 'dementiability/part-two/dementiability-unit-checklist',
                  component:  DementiabilityUnitChecklistComponent
                  
                },
                {
                  path: 'part-two/dementiability-org-checklist',
                  component:  DementiabilityOrgChecklistComponent
                  
                },
                {
                  path: 'part-two/dementiability-staff-recognition',
                  component:  DementiabilityStaffRecognitionComponent
                  
                },
                {
                  path: 'part-two/dementiability-team-meeting',
                  component:  DementiabilityTeamMeetingComponent
                  
                },
                {
                  path: 'part-two/dementiability-wow-with-staff',
                  component:  DementiabilityWowWithStaffComponent              
                },
                {
                  path: 'part-two/dementiability-home-area-checklist',
                  component:  DementiabilityHomeAreaChecklistComponent         
                },
                {
                  path: 'part-two/dementiability-staff-assessment',
                  component:  DementiabilityStaffAssessmentComponent     
                },
                {
                  path: 'part-two/dementiability-team-assessment',
                  component:  DementiabilityTeamAssessmentComponent    
                },
                {
                  path: 'part-two/this-is-me',
                  component:  ThisIsMeComponent    
                },
              ]
            },
            {
              path: 'medical-history/clinical-history',
              component:  ClinicalHistoryComponent
                  
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
                    },
                    {
                      path: 'caregiver/checklist',
                      component: CaregiverChecklistComponent
                    },
                    {
                      path: 'caregiver/responsibility',
                      component: CaregiverResponsibilityComponent
                    },
                    {
                      path: 'medical-history/medical-history',
                      component: MedicalHistoryVersionTwoComponent
                    },
                    {
                      path: 'nurse-report/nurse-report-sheet',
                      component: NurseReportSheetComponent
                    },
                    {
                      path: 'risk-assessment',
                      component: RiskAssessmentComponent
                    },
                    {
                      path: 'advance-care-plan',
                      component: AdvanceCarePlanComponent
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
                component: DementiabilityComponent,
                children: [
                  {
                    path: '',
                    component: DementiabilityDashboardComponent
                  }
                ]
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
