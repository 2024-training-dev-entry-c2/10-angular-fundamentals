import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, MainComponent, FooterComponent],
})
export class AppComponent {
  menuItems = [
    { label: 'SOFTWARE ENGINEERING', link: '#' },
    { label: 'APPROACH', link: '#' },
    { label: 'PROJECTS', link: '#' },
    { label: 'ABOUT US', link: '#' },
    { label: 'CAREERS', link: '#' }
  ];

  onHeaderMenuItemClick(itemLabel: string) {
    console.log('Header Menu Item Clicked:', itemLabel);
  }

  onFooterMenuItemClick(itemLabel: string) {
    console.log('Footer Menu Item Clicked:', itemLabel);
  }
}
