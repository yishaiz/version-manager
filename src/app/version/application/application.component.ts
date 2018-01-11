import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector : 'app-application',
  templateUrl : './application.component.html',
  styleUrls : [ './application.component.css' ]
})
export class ApplicationComponent implements OnInit {

  routeSubscriber : Subscription;
  appName = '';

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


  ngOnDestroy () : void {
    this.routeSubscriber.unsubscribe();
  }

}
