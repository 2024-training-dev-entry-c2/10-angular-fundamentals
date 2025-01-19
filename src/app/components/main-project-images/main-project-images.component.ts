import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-project-images',
  templateUrl: './main-project-images.component.html',
  styleUrls: ['./main-project-images.component.scss'],
})
export class MainProjectImagesComponent {
  @Input() projectClass: string = '';
  @Input() images: { src: string; alt: string; title: string }[] = [];
}
