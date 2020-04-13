import { Component, OnInit } from '@angular/core';
import { ImagesForProjectService } from '../images-for-project.service';
import { Meta } from '@angular/platform-browser';
import {GoogleAnalyticsService} from '../google-analytics.service';


@Component({
  selector: 'app-plant-nursery',
  templateUrl: './plant-nursery.component.html',
  styleUrls: ['./plant-nursery.component.scss']
})
export class PlantNurseryComponent implements OnInit {
  bushesList: Array<object> = this.imagesForProjectService.getListOfBushes();
  constructor(private imagesForProjectService: ImagesForProjectService, private meta: Meta,
              public googleAnalyticsService: GoogleAnalyticsService) {
    meta.addTag({name: 'keywords', content: 'pielęgnacja ogrodów, garden care'});
   }

  ngOnInit() {
  }

  scrollDownPage() {
    this.googleAnalyticsService.eventEmitter('change position', 'scroll down');
    const maxHeight = document.body.scrollHeight;
    window.scrollTo({top: maxHeight , behavior: 'smooth'});
  }

}
