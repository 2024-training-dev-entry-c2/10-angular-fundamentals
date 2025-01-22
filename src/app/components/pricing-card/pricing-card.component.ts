import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})

export class PricingCardComponent {
  @Input() highlight: string = '';
  @Input() subscription: string = '';
  @Input() minutes: string = '';
  @Input() price: number = 0;
  @Input() priceDetails: string = '';
  @Input() buttonText: string = '';
  @Input() bestUsers: string = '';

  // @Input() customBgColor: string = 'transparent';  
}