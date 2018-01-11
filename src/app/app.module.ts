import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { VersionModule } from './version/version.module';
import { ErrorsService } from "./Shared/errors/errors.service";
import {   MatToolbarModule } from "@angular/material";

@NgModule({
  declarations : [
    AppComponent,
  ],
  imports : [
    BrowserModule,
    CommonModule,

    // MatListModule,
    MatToolbarModule,

    // HttpModule,
    // routing
    RouterModule.forRoot(appRoutes, {
      useHash : true
    }),
    VersionModule
  ],
  providers : [
    ErrorsService

  ],
  bootstrap : [
    AppComponent
  ]

})
export class AppModule {
}
