import { Component, Input } from '@angular/core';
import { MainProjectButtonComponent } from '../main-project-button/main-project-button.component';
import { MainProjectBannerComponent } from '../main-project-banner/main-project-banner.component';
import { MainProjectImagesComponent } from '../main-project-images/main-project-images.component';

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
export class MainProjectComponent {
  @Input() projectClass: string = '';
  @Input() title: string = '';
  @Input() images: { src: string; alt: string; title: string }[] = [];
}
