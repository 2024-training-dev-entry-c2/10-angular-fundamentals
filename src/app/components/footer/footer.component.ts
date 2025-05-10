import { Component } from '@angular/core';
import { FooterLinksComponent } from '../footer-links/footer-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public linkItems = {
    1: ['A CAMPAIGN BY:', 'NEW ZEALAND HUMAN', 'RIGHTS COMMISSION'],
    2: ['I NEED SUPPORT', 'ABOUT DIAL IT DOWN', 'PRESS KIT'],
    3: ['FACEBOOK', 'INSTAGRAM'],
    4: ['BUILT BY:', 'NOT ANOTHER™'],
  };
}
