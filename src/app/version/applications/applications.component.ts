import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VersionService } from "../version.service";

@Component({
  selector : 'app-applications',
  templateUrl : './applications.component.html',
  styleUrls : [ './applications.component.css' ]
})
export class ApplicationsComponent implements OnInit {

  constructor (private versionService : VersionService, private router : Router) {

  }

  ngOnInit () {
    // this.getApplicaitons();
  }

  navigateToApplicationPage () {
    this.router.navigate([ 'xxx' ]);
  }

}
