import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: {
    link: string;
    imageFront: string;
    imageBack: string;
    altText: string;
    title: string;
    sizes: string[];
    price: string;
    previousPrice?: string;
    onSale?: boolean;
  };
}
