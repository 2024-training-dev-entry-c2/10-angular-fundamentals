import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-button',
  templateUrl: './gallery-button.component.html',
  styleUrls: ['./gallery-button.component.scss']
})
export class GalleryButtonComponent {
  @Input() text: string = 'Toutes les nouveautés';
  @Input() link: string = '#';
}
