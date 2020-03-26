import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImagesForProjectService } from '../images-for-project.service';

@Component({
  selector: 'app-dialog-plant-image',
  templateUrl: './dialog-plant-image.component.html',
  styleUrls: ['./dialog-plant-image.component.scss']
})
export class DialogPlantImageComponent implements OnInit {
  image: string = this.imagesForProjectService.getImagePlantFromTheList(this.index);

  constructor(@Inject(MAT_DIALOG_DATA) public index: number, private imagesForProjectService: ImagesForProjectService) { }

  ngOnInit() {
  }

}
