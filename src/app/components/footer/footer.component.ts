import { Component } from '@angular/core';
import { FooterContactComponent } from '../footer-contact/footer-contact.component';
import { FooterLocationComponent } from '../footer-location/footer-location.component';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { FooterStatusComponent } from '../footer-status/footer-status.component';

@Component({
  selector: 'app-footer',
  imports: [
    FooterContactComponent,
    FooterLocationComponent,
    FooterNavComponent,
    FooterStatusComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
