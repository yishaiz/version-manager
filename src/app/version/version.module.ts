import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionService } from './version.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';
import { MatListModule, MatTab, MatTableModule, MatToolbarModule } from "@angular/material";
import { ApplicationComponent } from './application/application.component';
import { SortedTableComponent } from './sorted-table/sorted-table.component';
import { MaterialTableComponent } from './material-table/material-table.component';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MomentModule } from 'angular2-moment/moment.module';

@NgModule({
  imports : [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    DataTableModule,
   // MomentModule  ,
    // BrowserAnimationsModule,
    RouterModule.forChild([
      {
        path : '', component : ApplicationsComponent,
        children : [
          // { path : 'app/:name', component : ApplicationComponent }
        ]
      },
      {
        // path : 'app/:name', component : MaterialTableComponent
        // path : 'app/:name', component : SortedTableComponent
        path : 'app/:name', component : ApplicationComponent
      }
    ])
  ],
  declarations : [
    ApplicationsComponent,
    ApplicationComponent,
    SortedTableComponent,
    MaterialTableComponent
  ],
  providers : [
    VersionService
  ]
})
export class VersionModule {
}

