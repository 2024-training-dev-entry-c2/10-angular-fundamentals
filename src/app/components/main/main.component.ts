import { Component } from '@angular/core';
import { projects } from './projects-data';
import { MainIntroComponent } from '../main-intro/main-intro.component';
import { MainProjectComponent } from '../main-project/main-project.component';
import { MainAboutComponent } from '../main-about/main-about.component';
import { MainSeparatorComponent } from '../main-separator/main-separator.component';

@Component({
  selector: 'app-main',
  imports: [
    MainIntroComponent,
    MainProjectComponent,
    MainAboutComponent,
    MainSeparatorComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  projects = projects;

  handleProjectClick(title: string) {
    console.log('Project clicked:', title);
  }
}
