import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionService } from './version.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DataTableModule,
    RouterModule.forChild([
        {
          path : '', component : ApplicationsComponent,
          children : [
            // { path : ':id', component : UsersComponent }
          ]
        }
  ])
  ],
  declarations: [ApplicationsComponent],
  providers: [VersionService]
})
export class VersionModule { }

