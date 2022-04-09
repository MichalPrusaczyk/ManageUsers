import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsDashboardComponent } from './announcements-dashboard.component';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';

const routes: Routes = [
  { path: 'dashboard/messages', component :  DashboardMessagesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AnnouncementsDashboardRoutingModule { }
