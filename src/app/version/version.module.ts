import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionService } from './version.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';
import { MatListModule, MatTab, MatTableModule, MatToolbarModule } from "@angular/material";
import { ApplicationComponent } from './application/application.component';

@NgModule({
  imports : [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    DataTableModule,
    RouterModule.forChild([
      {
        path : '', component : ApplicationsComponent,
        children : [
          // { path : 'app/:name', component : ApplicationComponent }
        ]
      },
      {
        path : 'app/:name', component : ApplicationComponent
      }
    ])
  ],
  declarations : [
    ApplicationsComponent,
    ApplicationComponent
  ],
  providers : [
    VersionService
  ]
})
export class VersionModule {
}

