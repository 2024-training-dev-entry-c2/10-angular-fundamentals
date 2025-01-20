import { Component } from '@angular/core';
import { PromotionBandComponent } from './components/promotion-band/promotion-band.component';

@Component({
  selector: 'app-root',
  imports: [PromotionBandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-migration';
}
