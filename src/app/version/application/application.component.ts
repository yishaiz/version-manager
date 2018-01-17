import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSort, MatTableDataSource } from "@angular/material";
import {} from 'moment/moment' ;
// const moment = require('moment/moment');
// import { MomentModule } from 'angular2-moment/moment.module';
import * as moment from 'moment';

@Component({
  selector : 'app-application',
  templateUrl : './application.component.html',
  styleUrls : [ './application.component.css' ]
})
export class ApplicationComponent implements OnInit {

  routeSubscriber : Subscription;
  appName = '';

  appVersionsRawData = [
    { 'id' : '5.0', 'details' : 'add export to excel', 'createDate' : new Date() },
    { 'id' : '3.2', 'details' : 'get data from db', 'createDate' : new Date().setHours(2) },
    { 'id' : '1.2', 'details' : 'first version', 'createDate' : new Date().setMinutes(43) }
  ];

  appVersions = () => {
    return this.appVersionsRawData.map(item => {
      return {
        'id' : item.id,
        'details' : item.details,
        'createDate' : this.convertDate(item.createDate)
      }
    });
    // { 'id' : '1.2', 'details' : 'first version', 'createDate' : new Date().setMinutes(43) }
  };

  displayedColumns = [ 'id', 'details', 'createDate' ];
  dataSource       = new MatTableDataSource(this.appVersions());

  @ViewChild(MatSort) sort : MatSort;

  constructor (private router : Router,
    private route : ActivatedRoute) {
  }

  convertDate (date) {
    return moment(date).format('YYYY-MM-DD hh:mm:ss');
  }


  ngOnInit () {
    this.routeSubscriber = this.route.params.subscribe(
      params => {
        this.appName = params[ 'name' ];

        console.log('appName', this.appName);
      }
    );
  }

  ngAfterViewInit () {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy () : void {
    this.routeSubscriber.unsubscribe();
  }

}


/*

convertDate (date) {
  const year = date.getFullYear().toString();
  const month   = (date.getMonth() + 1).toString();
  const day   = date.getDate().toString();

  const mmChars = month.split('');
  const ddChars = day.split('');

  return year + '-' + (mmChars[ 1 ] ? month : "0" + mmChars[ 0 ]) + '-' + (ddChars[ 1 ] ? day : "0" + ddChars[ 0 ]);
}
*/
