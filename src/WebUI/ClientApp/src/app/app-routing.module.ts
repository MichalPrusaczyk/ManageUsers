import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMessagesComponent } from 'src/announcements-dashboard/dashboard-messages/dashboard-messages.component';
import { AnnouncementsPanelComponent } from 'src/announcements-panel/announcements-panel.component';
import { PanelAddComponent } from 'src/announcements-panel/panel-add/panel-add.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TokenComponent } from './token/token.component';

export const routes: Routes = [

 
  { path: '', component: DashboardMessagesComponent, pathMatch: 'full' },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] },
  { path: 'todo', component: TodoComponent, canActivate: [AuthorizeGuard] },
  { path: 'panel', component: AnnouncementsPanelComponent, canActivate: [AuthorizeGuard],
    children: [
      { path: 'add', component: PanelAddComponent},
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
