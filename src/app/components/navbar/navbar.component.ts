import { Component } from '@angular/core';
import { NavbarLogotypeComponent } from "../navbar-logotype/navbar-logotype.component";
import { NavbarIsotypeComponent } from "../navbar-isotype/navbar-isotype.component";

@Component({
  selector: 'app-navbar',
  imports: [NavbarLogotypeComponent, NavbarIsotypeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
