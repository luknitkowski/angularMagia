import { Component, OnInit } from '@angular/core';
import { ImagesForProjectService } from '../images-for-project.service';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-plant-nursery',
  templateUrl: './plant-nursery.component.html',
  styleUrls: ['./plant-nursery.component.scss']
})
export class PlantNurseryComponent implements OnInit {
  bushesList: Array<object> = this.imagesForProjectService.getListOfBushes();
  constructor(private imagesForProjectService: ImagesForProjectService, private meta: Meta) {
    meta.addTag({name: 'keywords', content: 'pielęgnacja ogrodów, garden care'});
   }

  ngOnInit() {
  }

  scrollDownPage() {
    const maxHeight = document.body.scrollHeight;
    window.scrollTo({top: maxHeight , behavior: 'smooth'});
  }

}
