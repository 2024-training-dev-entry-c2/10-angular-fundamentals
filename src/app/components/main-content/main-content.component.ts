import { Component } from '@angular/core';
import { FeatureListComponent } from '../feature-list/feature-list.component';
import { SlideCardsContainerComponent } from "../slide-cards-container/slide-cards-container.component";
import { PricingCardListComponent } from '../pricing-card-list/pricing-card-list.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { SecurityFeatureContainerComponent } from '../security-feature-container/security-feature-container.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, FeatureListComponent, SlideCardsContainerComponent, PricingCardListComponent, SecurityFeatureContainerComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
