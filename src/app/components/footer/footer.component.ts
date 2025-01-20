import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
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
