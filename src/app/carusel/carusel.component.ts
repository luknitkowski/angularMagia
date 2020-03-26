import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImagesForProjectService } from '../images-for-project.service';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit{
  images: Array<string> = this.imagesForProjectService.getListOfImageSources(this.nameProject);

  constructor(@Inject(MAT_DIALOG_DATA) public nameProject: string, private imagesForProjectService: ImagesForProjectService) { }

  ngOnInit() {
  }
}
