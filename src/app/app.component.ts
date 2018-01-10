import { Component, OnInit } from '@angular/core';
import { ErrorsService } from './Shared/errors/errors.service';
import { ErrorInfo } from './Shared/error-info';

@Component({
  selector : 'app-root',
  template : `
    <div style="text-align:center">
      <mat-toolbar color="primary">
        <span>Version Manager</span>
      </mat-toolbar>

      <router-outlet></router-outlet>
    </div>
  `,
  styles : []
})
export class AppComponent implements OnInit {

  error : ErrorInfo = new ErrorInfo();

  constructor (private errorsService : ErrorsService) {

  }

  ngOnInit () : void {


  }


}
