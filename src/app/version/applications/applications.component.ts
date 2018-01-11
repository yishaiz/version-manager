import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VersionService } from "../version.service";

@Component({
  selector : 'app-applications',
  templateUrl : './applications.component.html',
  styleUrls : [ './applications.component.css' ]
})
export class ApplicationsComponent implements OnInit {

  applications = [];

  constructor (private versionService : VersionService,
    private router : Router) {

  }

  ngOnInit () {
    // this.getApplicaitons();

    this.addApplications();
  }

  addApplications () {
    this.applications.push({ 'name' : 'workers' });
    this.applications.push({ 'name' : 'orders' });
    this.applications.push({ 'name' : 'marketing' });
  }

  navigateToApplicationPage (appName) {
    // this.router.navigate([  appName  ]);
    this.router.navigate([ `/version/app/${appName}` ]);
  }

  displayApp (app) {
    console.log(app);

    this.navigateToApplicationPage(app.name);
  }

}
