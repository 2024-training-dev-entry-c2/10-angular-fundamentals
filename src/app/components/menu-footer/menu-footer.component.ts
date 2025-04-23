import { Component, ViewEncapsulation } from '@angular/core';
import { SubMenuComponent } from "../sub-menu/sub-menu.component";
import { SubMenuImageComponent } from "../sub-menu-image/sub-menu-image.component";
import { IMenuItem } from '../../interfaces/IMenuItem';
import { WinampLogoComponent } from "../winamp-logo/winamp-logo.component";
import { ColumnFooterComponent } from "../column-footer/column-footer.component";

@Component({
  selector: 'app-menu-footer',
  imports: [WinampLogoComponent, ColumnFooterComponent],
  templateUrl: './menu-footer.component.html',
  styleUrl: './menu-footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenuFooterComponent {
  public menuItems1: string[] = ['Llama Group', 'For Creators', 'Learn', 'Press', 'Contact'];
  public menuItems2: string[] = ['Legal Notice', 'Privacy Policy', 'General Terms of Use'];

  public menuImageItems1: IMenuItem[] = [
    { url: './images/download-iphone-btn.avif', alt: 'Download on the App Store' },
    { url: './images/download-google-btn.avif', alt: 'Get it on Google Play' },
    { url: './images/download-legacy-btn.avif', alt: 'Download Legacy Player' },
    { url: './images/download-dev-btn.png',  alt: 'Legacy Player Developer' },
  ];

  public menuImageItems2: IMenuItem[] = [
    { url: "./images/facebook-logo.svg", alt:"Facebook logo" },
    { url: "./images/instagram-logo.svg", alt:"Instagram logo" },
    { url: "./images/twitter-logo.svg", alt:"Twitter Logo" },
    { url: "./images/youtube-logo.svg", alt:"Youtube Logo" },
    { url: "./images/linkedin-logo.svg", alt:"Linkedin Logo" },
  ]
}
