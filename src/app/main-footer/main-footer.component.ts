import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser'; 
import {GoogleAnalyticsService} from '../google-analytics.service';


@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  constructor(private meta: Meta, public googleAnalyticsService: GoogleAnalyticsService) {
    meta.addTag({name: 'keywords', content: 'stopka, footer'});
  }

  ngOnInit() {
  }

  forwardFbTrack() {
    this.googleAnalyticsService.eventEmitter('forward outsite website', 'FB');
  }

}
