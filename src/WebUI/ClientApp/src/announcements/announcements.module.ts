import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AnnouncementsComponent } from './announcements.component';
import { PanelAddComponent } from 'src/announcements-panel/panel-add/panel-add.component';
import { DashboardMessagesComponent } from 'src/announcements-dashboard/dashboard-messages/dashboard-messages.component';
import { ReadMoreComponent } from 'src/announcements-dashboard/dashboard-messages/read-more/read-more.component';



@NgModule({
  declarations: [
    AnnouncementsComponent,
    PanelAddComponent,
    DashboardMessagesComponent,
    ReadMoreComponent
    
    
  ],
  imports: [
    AngularEditorModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal'}),
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  bootstrap: [AnnouncementsComponent, PanelAddComponent]
})
export class AnnouncementsModule { }
