import { Component, Input } from '@angular/core';
import {
  ProjectImagesInput,
  ProjectImage,
} from '../../interfaces/project-images.interface';

@Component({
  selector: 'app-main-project-images',
  templateUrl: './main-project-images.component.html',
  styleUrls: ['./main-project-images.component.scss'],
})
export class MainProjectImagesComponent implements ProjectImagesInput {
  @Input() projectClass: string = '';
  @Input() images: ProjectImage[] = [];
}
