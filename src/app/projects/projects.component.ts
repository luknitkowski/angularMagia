import { Component, HostListener} from '@angular/core';
import { Meta } from '@angular/platform-browser'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {GoogleAnalyticsService} from '../google-analytics.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  name = 'Magia Ogrodów';
  safeSrc: SafeResourceUrl;

  constructor(private meta: Meta, private sanitizer: DomSanitizer,
              public googleAnalyticsService: GoogleAnalyticsService) {
    meta.addTag({name: 'keywords', content: 'projekty ogrodów, projekty, projects, garden projects'});
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gtWyCMKXjMk');
  }

  @HostListener('window:blur', ['$event'])
  onWindowBlur(event: any): void {
    this.googleAnalyticsService.eventEmitter('forward outsite website', 'YT');
  }

}
