import { Component, ViewEncapsulation } from '@angular/core';
import { HeroScrollComponent } from "../hero-scroll/hero-scroll.component";

@Component({
  selector: 'app-hero',
  imports: [HeroScrollComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent {

}
