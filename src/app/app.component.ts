import { Component } from '@angular/core';
import { PromotionBandComponent } from './components/promotion-band/promotion-band.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SlidingBandComponent } from './components/sliding-band/sliding-band.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { GalleryButtonComponent } from './components/gallery-button/gallery-button.component';

@Component({
  selector: 'app-root',
  imports: [
    PromotionBandComponent,
    NavbarComponent,
    HeroComponent,
    SlidingBandComponent,
    ProductsGalleryComponent,
    GalleryButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-migration';
}
