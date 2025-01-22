import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SlideCardsContainerComponent } from './components/slide-cards-container/slide-cards-container.component';
import { FooterComponent } from "./components/footer/footer.component";
import { PricingCardListComponent } from './components/pricing-card-list/pricing-card-list.component';
import { FeatureListComponent } from "./components/feature-list/feature-list.component";
import { SecurityFeatureContainerComponent } from "./components/security-feature-container/security-feature-container.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainContentComponent, FooterComponent, SecurityFeatureContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
