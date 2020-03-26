import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser'; 


@Component({
  selector: 'app-garden-care',
  templateUrl: './garden-care.component.html',
  styleUrls: ['./garden-care.component.scss']
})
export class GardenCareComponent implements OnInit {

  constructor(private meta: Meta) {
    meta.addTag({name: 'keywords', content: 'pielęgnacja ogrodów, garden care'});
  }

  ngOnInit() {
  }

}
