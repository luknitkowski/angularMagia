import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  constructor(private meta: Meta) {
    meta.addTag({name: 'keywords', content: 'stopka, footer'});
  }

  ngOnInit() {
  }

}
