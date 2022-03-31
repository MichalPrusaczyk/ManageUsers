import { NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { ReportDefectComponent } from './report-defect/report-defect.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NavMenuComponent,
    ReportDefectComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal'}),
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: '../assets/icons.json'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
  ],
  bootstrap: [DashboardComponent, NavMenuComponent]
})
export class DashboardModule { }
