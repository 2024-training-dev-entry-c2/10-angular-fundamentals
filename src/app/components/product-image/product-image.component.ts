import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent {
  @Input() mediaUrl!: string;
  @Input() altText!: string;
}
