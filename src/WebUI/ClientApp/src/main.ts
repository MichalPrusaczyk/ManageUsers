import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));

// platformBrowserDynamic(providers).bootstrapModule(DashboardModule)
//   .catch(err => console.log(err));
  
//   platformBrowserDynamic(providers).bootstrapModule(AnnouncementsPanelModule)
//     .catch(err => console.log(err));
  
  // platformBrowserDynamic(providers).bootstrapModule(AnnouncementsModule)
  //   .catch(err => console.log(err));
  