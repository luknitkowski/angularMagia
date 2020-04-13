import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDialogComponent} from '../project-dialog/project-dialog.component';
import { Meta } from '@angular/platform-browser';
import {GoogleAnalyticsService} from '../google-analytics.service';

@Component({
  selector: 'app-gardening',
  templateUrl: './gardening.component.html',
  styleUrls: ['./gardening.component.scss']
})
export class GardeningComponent implements OnInit {

  constructor(public dialog: MatDialog, private meta: Meta,
              public googleAnalyticsService: GoogleAnalyticsService) {
    meta.addTag({name: 'keywords', content: 'zakładanie ogrodów, gardening'});
  }

  openProject(nameProject: string): void {
    this.googleAnalyticsService.eventEmitter('zakladanie ogrodow', 'projekty', nameProject);
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      panelClass: 'my-dialog',
      data: nameProject
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {}

}
