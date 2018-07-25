import { MarketingnavComponent } from './navigation/marketingnav/marketingnav.component';
import { TasksComponent } from './navigation/tasks/tasks.component';
import { PayrollnavComponent } from './navigation/payrollnav/payrollnav.component';
import { TimesheetComponent } from './navigation/timesheet/timesheet.component';
import { StatusreportComponent } from './navigation/statusreport/statusreport.component';
import { RequestusComponent } from './navigation/requestus/requestus.component';
import { MarketingComponent } from './welcome/marketing/marketing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { MaterialComponent } from './material/material.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular5-social-login';
import { TodoListComponent } from './welcome/todo-list/todo-list.component';
import { PayrollComponent } from './welcome/payroll/payroll.component';
import { DashboardComponent } from './welcome/dashboard/dashboard.component';
import { PendingRequestComponent } from './welcome/pending-request/pending-request.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { TableComponent } from './table/table.component';
import { EditProfileComponent } from './navbar/edit-profile/edit-profile.component';
import { SubmitSearchCallComponent } from './navigation/marketingnav/submit-search-call/submit-search-call.component';
import { GraphComponent } from './navigation/marketingnav/graph/graph.component';

import { UpcomingEventsComponent } from './navigation/marketingnav/upcoming-events/upcoming-events.component';
import { FollowUpsTodayComponent } from './navigation/marketingnav/follow-ups-today/follow-ups-today.component';


export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('832976957531-ufljq94h91ej37l3an2ouprfm4pmcmt7.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'payroll', component: PayrollnavComponent},
  {path: 'marketing', component: MarketingnavComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'requestus', component: RequestusComponent},
  {path: 'timesheet', component: TimesheetComponent},
  {path: 'statusreport', component: StatusreportComponent},
  {path: 'edit-profile', component:EditProfileComponent},

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    MaterialComponent,
    RegisterComponent,
    TodoListComponent,
    PayrollComponent,
    MarketingComponent,
    DashboardComponent,
    PendingRequestComponent,
    MarketingComponent,
    PayrollComponent,
    RequestusComponent,
    StatusreportComponent,
    TimesheetComponent,
    PayrollnavComponent,
    TasksComponent,
    MarketingnavComponent,
    HomeFooterComponent,
    UpcomingEventsComponent,
    TableComponent,
    EditProfileComponent,
    SubmitSearchCallComponent,
    GraphComponent,
    
    
    FollowUpsTodayComponent
],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([TableComponent]),
    SocialLoginModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes),
    ChartsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
