import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSort, MatTableDataSource } from "@angular/material";
import {} from 'moment/moment' ;

@Component({
  selector : 'app-application',
  templateUrl : './application.component.html',
  styleUrls : [ './application.component.css' ]
})
export class ApplicationComponent implements OnInit {

  routeSubscriber : Subscription;
  appName = '';

  appVersions = [
    { 'id' : '5.0', 'details' : 'add export to excel', 'createDate' : new Date() },
    { 'id' : '3.2', 'details' : 'get data from db', 'createDate' : new Date().setHours(2) },
    { 'id' : '1.2', 'details' : 'first version', 'createDate' : new Date().setMinutes(47) }
  ];

  displayedColumns = [ 'id', 'details', 'createDate' ];
  dataSource       = new MatTableDataSource(this.appVersions );

  @ViewChild(MatSort) sort : MatSort;

  constructor (private router : Router,
    private route : ActivatedRoute) {
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
