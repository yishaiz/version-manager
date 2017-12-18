import { Route } from '@angular/router';

export const appRoutes : Route[] = [
  { path : '', redirectTo : 'version', pathMatch : 'full' },
  { path : 'version', loadChildren : 'app/version/version.module.js#VersionModule' }
];
