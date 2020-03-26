import { Component} from '@angular/core';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private meta: Meta) {
    meta.addTag({name: 'keywords', content: 'projekty ogrodów, projekty, projects, garden projects'});
  }

}
