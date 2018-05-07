import { Component, OnInit } from '@angular/core';

import * as pbi from 'powerbi-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Power BI Embedded POC';

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    const config = {
      type: 'report',
      uniqueId: 'put-report-id-here',
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=put-report-id-here&groupId=put-group-id-here',
      accessToken: 'put-access-token-here'
    };

    // Grab the reference to the div HTML element that will host the report.
    const reportsContainer = <HTMLElement>document.getElementById(
      'reportsContainer'
    );

    // Embed the report and display it within the div container.
    const powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory
    );
    const report = powerbi.embed(
      reportsContainer,
      config
    );

    // Report.off removes a given event handler if it exists.
    report.off('loaded');
    // Report.on will add an event handler which prints to Log window.
    report.on('loaded', function() {
      console.log('Loaded');
    });

    report.off('pageChanged');
    report.on('pageChanged', e => {
      console.log(e);
    });

    report.on('error', function(event) {
      console.log(event.detail);
      report.off('error');
  });
  }
}
