import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportDefectComponent } from './report-defect/report-defect.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: HomeComponent},
  { path: 'reportDefect', component: ReportDefectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
