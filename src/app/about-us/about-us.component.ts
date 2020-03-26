import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private meta: Meta) {
    meta.addTag({name: 'keywords', content: 'o nas, about us'});
  }

  ngOnInit() {
  }

}
