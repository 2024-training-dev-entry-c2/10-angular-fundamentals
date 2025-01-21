import { Component } from '@angular/core';
import { FooterMenuIconComponent } from "../footer-menu-icon/footer-menu-icon.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FooterMenuIconComponent],
})
export class FooterComponent {
  menuItems = [
    { label: 'Instagram', link: '#' },
    { label: 'Facebook', link: '#' },
    { label: 'Demandes professionnelles', link: '#' },
    { label: 'Conditions générales de vente', link: '#' },
    { label: 'CGU — Cookies', link: '#' },
  ];
}
