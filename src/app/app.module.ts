import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlantNurseryComponent } from './plant-nursery/plant-nursery.component';
import { GardenCareComponent } from './garden-care/garden-care.component';
import { GardeningComponent } from './gardening/gardening.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CaruselComponent } from './carusel/carusel.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './marker.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { ImagesForGardenComponent } from './images-for-garden/images-for-garden.component';
import { DialogPlantImageComponent } from './dialog-plant-image/dialog-plant-image.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GoogleAnalyticsService} from './google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainMenuComponent,
    AboutUsComponent,
    PlantNurseryComponent,
    GardenCareComponent,
    GardeningComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDialogComponent,
    CaruselComponent,
    MapComponent,
    ImagesForGardenComponent,
    DialogPlantImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  entryComponents: [ProjectDialogComponent, DialogPlantImageComponent],
  providers: [MarkerService, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
