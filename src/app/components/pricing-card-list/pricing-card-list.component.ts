import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { PricingCardComponent } from "../pricing-card/pricing-card.component"; 

@Component({
  selector: 'app-pricing-card-list',
  imports: [CommonModule, PricingCardComponent],
  templateUrl: './pricing-card-list.component.html',
  styleUrl: './pricing-card-list.component.scss'
})
export class PricingCardListComponent {
  pricingCards = [
    {
      highlight: 'Best Value',
      subscription: 'Premium Subscription',
      minutes: '30 minutes',
      price: 0,
      priceDetails: 'per month',
      buttonText: 'Sign Up Now',
      bestUsers: 'Recommended for businesses'
    },
    {
      highlight: 'Special Offer',
      subscription: 'Basic Plan',
      minutes: '10 minutes',
      price: 19,
      priceDetails: 'per month billed yearly',
      buttonText: 'Try Now',
      bestUsers: 'Recommended for freelancers'
    },
    {
      highlight: 'New Plan',
      subscription: 'Pro Plan',
      minutes: '60 minutes',
      price: 39,
      priceDetails: 'per month billed yearly',
      buttonText: 'Get Started',
      bestUsers: 'Recommended for teams'
    }
  ];
}
