import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() classOpen: string = ''; 
  @Input() productName: string = ''; 
  @Input() productDescription: string = ''; 
  @Input() productDescriptionHide: string = ''; 
  @Input() productImage: string = ''; 

  @Output() productHover = new EventEmitter<boolean>(); 

  toggleProduct(hover: boolean) {
    this.productHover.emit(hover);
  }
}
