import { Component, OnInit } from '@angular/core';
import {GoogleAnalyticsService} from '../google-analytics.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  trackMenuOption(option) {
    this.googleAnalyticsService.eventEmitter('Menu option', option);
  }


}
