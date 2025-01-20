import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerMenuItems = [
    { label: 'SOFTWARE ENGINEERING', link: '#' },
    { label: 'APPROACH', link: '#' },
    { label: 'PROJECTS', link: '#' },
    { label: 'ABOUT US', link: '#' },
    { label: 'CAREERS', link: '#' }
  ];
}
