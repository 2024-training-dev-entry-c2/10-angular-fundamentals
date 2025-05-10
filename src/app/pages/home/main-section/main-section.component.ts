import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CarouselComponent } from '../../../components/carousel/carousel.component';
import { ProductSectionComponent } from '../product-section/product-section.component';
import { InsightsComponent } from '../insights/insights.component';
import { SponsorSectionComponent } from '../sponsor-section/sponsor-section.component';

@Component({
  selector: 'app-main-section',
  imports: [HeroComponent,CarouselComponent,SponsorSectionComponent,ProductSectionComponent,InsightsComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  logos = [
    { src: "./images/logo-forbes.svg", alt: "Forbes logo" },
    { src: "./images/logo-tc.svg", alt: "TechCrunch logo" },
    { src: "./images/logo-cfo.svg", alt: "CFO Magazine logo" },
    { src: "./images/logo-fintech-nexus.svg", alt: "Fintech Nexus logo" },
    { src: "./images/logo-finextra.svg", alt: "Finextra logo" },
    { src: "./images/logo-payments-dive.svg", alt: "Payments Dive logo" },
  ];

}
