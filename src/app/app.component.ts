import { Component } from '@angular/core';
import { PromotionBandComponent } from './components/promotion-band/promotion-band.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SlidingBandComponent } from './components/sliding-band/sliding-band.component';

@Component({
  selector: 'app-root',
  imports: [
    PromotionBandComponent,
    NavbarComponent,
    HeroComponent,
    SlidingBandComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-migration';
}
