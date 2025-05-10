import { Component, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  clicked = output<string>();

  onclick(): void{
    console.log("Sign up button was pressed.");
  }
}
