import { Component } from '@angular/core';
import { HeaderLogoSvgComponent } from "../../svg/header/header-logo-svg/header-logo-svg.component";
import { HeaderStoreSvgComponent } from "../../svg/header/header-store-svg/header-store-svg.component";
import { HeaderProjectsSvgComponent } from "../../svg/header/header-projects-svg/header-projects-svg.component";
import { HeaderContactSvgComponent } from "../../svg/header/header-contact-svg/header-contact-svg.component";

@Component({
  selector: 'app-header',
  imports: [HeaderLogoSvgComponent, HeaderStoreSvgComponent, HeaderProjectsSvgComponent, HeaderContactSvgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
