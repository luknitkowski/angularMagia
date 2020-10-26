import { Component } from '@angular/core';
import { HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magiaogrodowwebsite';

  constructor() {
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    const scrollUpButton = document.getElementById('scroll-up-buttom');
    if (window.pageYOffset > 600) {
      scrollUpButton.style.visibility = 'visible';
      scrollUpButton.style.opacity = '1';
      scrollUpButton.style['transition-delay'] = '0s';
    } else {
      scrollUpButton.style.visibility = 'hidden';
      scrollUpButton.style.opacity = '0';
      scrollUpButton.style.transition = 'visibility 0s linear 0.33s, opacity 0.33s linear';
    }
  }

  scrollUpPage() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
