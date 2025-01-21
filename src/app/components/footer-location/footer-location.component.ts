import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-location',
  imports: [],
  templateUrl: './footer-location.component.html',
  styleUrl: './footer-location.component.scss',
})
export class FooterLocationComponent {
  addressLines: string[] = ['Prinsens gate 21', '0157 Oslo', 'Norway'];
}
