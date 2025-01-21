import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-product-video',
  templateUrl: './product-video.component.html',
  styleUrls: ['./product-video.component.scss'],
})
export class ProductVideoComponent {
  @Input() mediaUrl!: string;
}
