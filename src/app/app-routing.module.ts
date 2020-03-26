import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { PlantNurseryComponent } from './plant-nursery/plant-nursery.component';
import { GardenCareComponent } from './garden-care/garden-care.component';
import { GardeningComponent } from './gardening/gardening.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: '', redirectTo: '/o nas', pathMatch: 'full' },
  { path: 'o nas', component: AboutUsComponent },
  { path: 'szkolka', component: PlantNurseryComponent },
  { path: 'pielegnacja ogrodow', component: GardenCareComponent },
  { path: 'zakladanie ogrodow', component: GardeningComponent },
  { path: 'projekty', component: ProjectsComponent },
  { path: 'kontakt', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutUsComponent,
  PlantNurseryComponent,
  GardenCareComponent,
  GardeningComponent,
  ProjectsComponent,
  ContactComponent
]