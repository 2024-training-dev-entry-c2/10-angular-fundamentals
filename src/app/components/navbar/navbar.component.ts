import { Component, HostListener } from '@angular/core';
import { NavbarLogotypeComponent } from '../navbar-logotype/navbar-logotype.component';
import { NavbarIsotypeComponent } from '../navbar-isotype/navbar-isotype.component';
import { ShopDropdownComponent } from "../shop-dropdown/shop-dropdown.component";
import { CollectionsDropdownComponent } from "../collections-dropdown/collections-dropdown.component";

@Component({
  selector: 'app-navbar',
  imports: [NavbarLogotypeComponent, NavbarIsotypeComponent, ShopDropdownComponent, CollectionsDropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled: boolean = false; 

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50;
  }
}
