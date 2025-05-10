import { Component } from '@angular/core';
import { ProductItemComponent } from '../../../components/product-item/product-item.component';

@Component({
  selector: 'app-product-section',
  imports: [ProductItemComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {

  products = [
    {
      classOpen: 'product__item--open',
      productName: 'Capital',
      productDescription: 'Give your customers streamlined access to capital without ever leaving your platform.',
      productDescriptionHide: 'Pipe makes working capital a seamless, native experience for your customers.',
      productImage: 'images/product-selector-capital-desktop.webp'
    },
    {
      classOpen: 'product__item',
      productName: 'Business Card',
      productDescription: 'Give your customers access to Pipe\'s frictionless card issuing, embedded natively inside your platform.',
      productDescriptionHide: 'Launch a branded business card offering to help your customers access working capital and optimize spend management.',
      productImage: 'images/product-selector-card-desktop.webp'
    }]

    onProductHover(isHovered: boolean) {
      console.log('Product hover state:', isHovered);
    }


public classOpenCapital: string = 'product__item';
public classOpenBusinnessCard: string = 'product__item--open';

toggleproductCapital(visible: boolean) {
    this.classOpenCapital = visible ? 'product__item--open' : 'product__item';
  this.classOpenBusinnessCard = visible ? 'product__item' : 'product__item--open';
  }

  toggleproductBusinnessCard(visible: boolean) {
    this.classOpenBusinnessCard = visible ? 'product__item--open' : 'product__item';
    this.classOpenCapital = visible ? 'product__item' : 'product__item--open';
  } 
}
