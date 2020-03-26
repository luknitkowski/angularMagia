import { Component, OnInit } from '@angular/core';
import { ImagesForProjectService } from '../images-for-project.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogPlantImageComponent} from '../dialog-plant-image/dialog-plant-image.component';

@Component({
  selector: 'app-images-for-garden',
  templateUrl: './images-for-garden.component.html',
  styleUrls: ['./images-for-garden.component.scss']
})
export class ImagesForGardenComponent implements OnInit {
  images: Array<string> = this.imagesForProjectService.getListOfPlantImages();
  breakpoint: number;
  constructor(private imagesForProjectService: ImagesForProjectService, public dialog: MatDialog) { }

  bigViewPlantImage(index: number): void {
    const dialogRef = this.dialog.open(DialogPlantImageComponent, {
      panelClass: 'my-dialog',
      height: '80%',
      width: '80%',
      data: index
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 350) ? 1 : (window.innerWidth <= 900) ? 2 : 3;
}

onResize(event) {
  this.breakpoint = (window.innerWidth <= 350) ? 1 : (window.innerWidth <= 900) ? 2 : 3;
}

}
