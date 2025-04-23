import { Component, ViewEncapsulation } from '@angular/core';
import { ScrollWrapperComponent } from "../scroll-wrapper/scroll-wrapper.component";
import { HeroComponent } from "../hero/hero.component";
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  imports: [ScrollWrapperComponent, HeroComponent, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {

}
