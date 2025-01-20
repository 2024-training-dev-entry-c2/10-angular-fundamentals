import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainProjectButtonComponent } from '../main-project-button/main-project-button.component';
import { MainProjectBannerComponent } from '../main-project-banner/main-project-banner.component';
import { MainProjectImagesComponent } from '../main-project-images/main-project-images.component';
import {
  ProjectImagesInput,
  ProjectImage,
} from '../../interfaces/project-images.interface';

@Component({
  selector: 'app-main-project',
  imports: [
    MainProjectButtonComponent,
    MainProjectBannerComponent,
    MainProjectImagesComponent,
  ],
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.scss'],
})
export class MainProjectComponent implements ProjectImagesInput {
  @Input() projectClass: string = '';
  @Input() title: string = '';
  @Input() images: ProjectImage[] = [];

  @Output() projectClicked = new EventEmitter<string>();

  onProjectClick() {
    this.projectClicked.emit(this.title);
  }
}
