import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { VersionModule } from './version/version.module';

@NgModule({
  declarations : [
    AppComponent,
  ],
  imports : [
    BrowserModule,
    CommonModule,
    // HttpModule,
    // routing
    RouterModule.forRoot(appRoutes, {
      useHash : true
    }),
    VersionModule
  ],
  providers : [
  ],
  bootstrap : [
    AppComponent
  ]

})
export class AppModule {
}
