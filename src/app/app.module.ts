import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi
} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';

import {
    CommonModule,
    HashLocationStrategy,
    LocationStrategy,
    registerLocaleData
} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {SubMenuComponent} from './pages/main-menu/sub-menu/sub-menu.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {ControlSidebarComponent} from './modules/main/control-sidebar/control-sidebar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {SidebarSearchComponent} from './components/sidebar-search/sidebar-search.component';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';
import {environment} from 'environments/environment';
import {ActivityTabComponent} from './pages/profile/activity-tab/activity-tab.component';
import {TimelineTabComponent} from './pages/profile/timeline-tab/timeline-tab.component';
import {SettingsTabComponent} from './pages/profile/settings-tab/settings-tab.component';
import {PostComponent} from './pages/profile/post/post.component';
import {InfoBoxComponent} from './components/info-box/info-box.component';
import {SmallBoxComponent} from './components/small-box/small-box.component';
import {ContentHeaderComponent} from './components/content-header/content-header.component';
import {LoadingComponent} from './components/loading/loading.component';
import {OverlayLoadingComponent} from './components/overlay-loading/overlay-loading.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CarePlanComponent} from './pages/care-plan/care-plan/care-plan.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {
    getAnalytics,
    provideAnalytics,
    ScreenTrackingService,
    UserTrackingService
} from '@angular/fire/analytics';
import {
    initializeAppCheck,
    ReCaptchaEnterpriseProvider,
    provideAppCheck
} from '@angular/fire/app-check';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {AppService} from '@services/app.service';
import {AuthGuard} from '@guards/auth.guard';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {ProfileAddComponent} from './pages/care-plan/care-plan/person/profile/profile-add/profile-add.component';
import {ProfileShowComponent} from './pages/care-plan/care-plan/person/profile/profile-show/profile-show.component';
import {CareDashboardComponent} from './pages/care-plan/care-plan/dashboard/care-dashboard/care-dashboard.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {CalendarComponent} from './pages/calendar/calendar/calendar.component';
import {KanbanComponent} from './pages/kanban/kanban/kanban.component';
import {ProfileAddOneComponent} from './pages/care-plan/care-plan/person/profile/profile-add-one/profile-add-one.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TeamMemberAddComponent } from './pages/care-plan/care-plan/person/team/team-member-add/team-member-add.component';
import { PersonShowComponent } from './pages/activity/person-show/person-show.component';
import { ActivityComponent } from './pages/activity/person-show/component/activity/activity.component';
import { TimelineComponent } from './pages/activity/person-show/component/timeline/timeline.component';
import { SettingsComponent } from './pages/activity/person-show/component/settings/settings.component';
import { PersonAddComponent } from './pages/activity/person-add/person-add.component';
import {CareGiverProfileComponent} from "@pages/caregiver/profile/profile.component";
import {TeamProfileComponent} from "@pages/careteam/profile/profile.component";
import { CarePersonProfileComponent } from './pages/carePerson/care-person-profile/care-person-profile.component';
import { CareGiverShowComponent } from './pages/caregiver/care-giver-show/care-giver-show.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';
import { ActivityAddComponent } from './pages/activity/activity-add/activity-add.component';
import { DementiabilityMeetingAgendaComponent } from './pages/dementiability/part-one/dementiability-meeting-agenda/dementiability-meeting-agenda.component';
import { RoundsTrackingToolComponent } from './pages/dementiability/part-one/rounds-tracking-tool/rounds-tracking-tool.component';
import { DementiabilityActionPlanComponent } from './pages/dementiability/part-one/dementiability-action-plan/dementiability-action-plan.component';
import { ProgramParticipantFormComponent } from './pages/dementiability/part-one/program-participant-form/program-participant-form.component';
import { SightReadingAssessmentComponent } from './pages/dementiability/part-one/sight-reading-assessment/sight-reading-assessment.component';
import { DementiabilityDementiaInfoComponent } from './pages/dementiability/part-one/dementiability-dementia-info/dementiability-dementia-info.component';
import { DementiabilityPreviousRolesComponent } from './pages/dementiability/part-one/dementiability-previous-roles/dementiability-previous-roles.component';
import { DementiabilityNeedsFormComponent } from './pages/dementiability/part-one/dementiability-needs-form/dementiability-needs-form.component';
import { DementiabilityInterestsFormComponent } from './pages/dementiability/part-one/dementiability-interests-form/dementiability-interests-form.component';
import { DementiabilityDailyScheduleFormComponent } from './pages/dementiability/part-one/dementiability-daily-schedule-form/dementiability-daily-schedule-form.component';
import { DementiabilityWowModelFormComponent } from './pages/dementiability/part-one/dementiability-wow-model-form/dementiability-wow-model-form.component';
import { DementiabilityCareFormComponent } from './pages/dementiability/part-one/dementiability-care-form/dementiability-care-form.component';
import { DementiabilityCareBathFormComponent } from './pages/dementiability/part-two/dementiability-care-bath-form/dementiability-care-bath-form.component';
import { DementiabilityCareActivityFormComponent } from './pages/dementiability/part-two/dementiability-care-activity-form/dementiability-care-activity-form.component';
import { DementiabilityEnvironmentalChecklistComponent } from './pages/dementiability/part-two/dementiability-environmental-checklist/dementiability-environmental-checklist.component';
import { DementiabilityUnitChecklistComponent } from './pages/dementiability/part-two/dementiability-unit-checklist/dementiability-unit-checklist.component';
import { DementiabilityOrgChecklistComponent } from './pages/dementiability/part-two/dementiability-org-checklist/dementiability-org-checklist.component';
import { DementiabilityStaffRecognitionComponent } from './pages/dementiability/part-two/dementiability-staff-recognition/dementiability-staff-recognition.component';
import { DementiabilityTeamMeetingComponent } from './pages/dementiability/part-two/dementiability-team-meeting/dementiability-team-meeting.component';
import { DementiabilityWowWithStaffComponent } from './pages/dementiability/part-two/dementiability-wow-with-staff/dementiability-wow-with-staff.component';
import { DementiabilityHomeAreaChecklistComponent } from './pages/dementiability/part-two/dementiability-home-area-checklist/dementiability-home-area-checklist.component';
import { DementiabilityStaffAssessmentComponent } from './pages/dementiability/part-two/dementiability-staff-assessment/dementiability-staff-assessment.component';
import { DementiabilityTeamAssessmentComponent } from './pages/dementiability/part-two/dementiability-team-assessment/dementiability-team-assessment.component';
import { ThisIsMeComponent } from './pages/dementiability/part-two/this-is-me/this-is-me.component';
import { ClinicalHistoryComponent } from './pages/medical-history/clinical-history/clinical-history.component';
import { CaregiverChecklistComponent } from './pages/care-plan/care-plan/caregiver-checklist/caregiver-checklist.component';
import { CaregiverResponsibilityComponent } from './pages/care-plan/care-plan/caregiver-responsibility/caregiver-responsibility.component';
import { MedicalHistoryVersionTwoComponent } from './pages/medical-history/medical-history/medical-history.component';
import { REGION } from '@angular/fire/compat/functions';
import { NurseReportSheetComponent } from './pages/medical-history/nurse-report/nurse-report-sheet/nurse-report-sheet.component';
import { IsbarHandoverComponent } from './pages/activity/isbar-handover/isbar-handover.component';
import { MedicalHistoryComponent } from '@pages/activity/medical-history/medical-history.component';
import { OccupationalHandoverComponent } from './pages/activity/occupational-handover/occupational-handover.component';
import { PhysicalHandoverComponent } from './pages/activity/physical-handover/physical-handover.component';
import { RiskAssessmentComponent } from './pages/care-plan/care-plan/risk-assessment/risk-assessment.component';

//registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MainMenuComponent,
        SubMenuComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        SidebarSearchComponent,
        ActivityTabComponent,
        TimelineTabComponent,
        SettingsTabComponent,
        PostComponent,
        InfoBoxComponent,
        SmallBoxComponent,
        ContentHeaderComponent,
        LoadingComponent,
        OverlayLoadingComponent,
        CarePlanComponent,
        ProfileAddComponent,
        ProfileShowComponent,
        CareDashboardComponent,
        CalendarComponent,
        KanbanComponent,
        ProfileAddOneComponent,
        TeamMemberAddComponent,
        PersonShowComponent,
        ActivityComponent,
        TimelineComponent,
        SettingsComponent,
        PersonAddComponent,
        CareGiverProfileComponent,
        TeamProfileComponent,
        CarePersonProfileComponent,
        CareGiverShowComponent,
        SuggestionComponent,
        ActivityAddComponent,
        DementiabilityMeetingAgendaComponent,
        RoundsTrackingToolComponent,
        DementiabilityActionPlanComponent,
        ProgramParticipantFormComponent,
        SightReadingAssessmentComponent,
        DementiabilityDementiaInfoComponent,
        DementiabilityPreviousRolesComponent,
        DementiabilityNeedsFormComponent,
        DementiabilityInterestsFormComponent,
        DementiabilityDailyScheduleFormComponent,
        DementiabilityWowModelFormComponent,
        DementiabilityCareFormComponent,
        DementiabilityCareBathFormComponent,
        DementiabilityCareActivityFormComponent,
        DementiabilityEnvironmentalChecklistComponent,
        DementiabilityUnitChecklistComponent,
        DementiabilityOrgChecklistComponent,
        DementiabilityStaffRecognitionComponent,
        DementiabilityTeamMeetingComponent,
        DementiabilityWowWithStaffComponent,
        DementiabilityHomeAreaChecklistComponent,
        DementiabilityStaffAssessmentComponent,
        DementiabilityTeamAssessmentComponent,
        ThisIsMeComponent,
        ClinicalHistoryComponent,
        CaregiverChecklistComponent,
        CaregiverResponsibilityComponent,
        MedicalHistoryVersionTwoComponent,
        NurseReportSheetComponent,
        IsbarHandoverComponent,
        MedicalHistoryComponent,
        OccupationalHandoverComponent,
        PhysicalHandoverComponent,
        RiskAssessmentComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
        NgxGoogleAnalyticsModule.forRoot(environment.GA_ID),
        FontAwesomeModule,
        BsDatepickerModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        FormsModule,
    ],
    providers: [
        AppService,
        AuthGuard,
        {provide: FIREBASE_OPTIONS, useValue: environment.FIREBASE_CONFIG},
        provideHttpClient(withInterceptorsFromDi()),
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        //provideFirebaseApp(() => {
        //  return initializeApp(environment.FIREBASE_CONFIG)
        //    }),
        provideFirebaseApp(() => {
            return initializeApp(environment.FIREBASE_CONFIG);
        }),
        provideAuth(() => {
            return getAuth();
        }),
        provideAnalytics(() => getAnalytics()),
        ScreenTrackingService,
        UserTrackingService,
        // provideAppCheck(() => {
        //     // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
        //     const provider = new ReCaptchaEnterpriseProvider
        //     (/* reCAPTCHA Enterprise site key */
        //       '6LchwAoqAAAAAMfT_hY2nwI1WXJcBE20DGA_k-A3'
        //     );
        //     return initializeAppCheck(undefined,{ provider, isTokenAutoRefreshEnabled: true });
        // }),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        provideStorage(() => getStorage()),
        { provide: REGION, useValue: 'asia-east1' }
    ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
