import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsDashboardRoutingModule } from './announcements-dashboard-routing.module';
import { AnnouncementsDashboardComponent } from './announcements-dashboard.component';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AnnouncementsDashboardComponent,
    DashboardMessagesComponent
  ],
  imports: [
    CommonModule,
    AnnouncementsDashboardRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal'}),
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AnnouncementsDashboardComponent]
})
export class AnnouncementsDashboardModule { }
