import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromotionBandComponent } from "./components/promotion-band/promotion-band.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PromotionBandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-migration';
}
