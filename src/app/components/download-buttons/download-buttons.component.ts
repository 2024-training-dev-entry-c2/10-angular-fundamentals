import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenuItem';
import { ButtonDivComponent } from "../button-div/button-div.component";

@Component({
  selector: 'app-download-buttons',
  imports: [ButtonDivComponent],
  templateUrl: './download-buttons.component.html',
  styleUrl: './download-buttons.component.scss'
})
export class DownloadButtonsComponent {
  @Input() items: IMenuItem[] = [
    { url: './images/download-iphone-btn.avif', alt: 'Download on the App Store' },
    { url: './images/download-google-btn.avif', alt: 'Get it on Google Play' },
  ]

  @Input() items2: IMenuItem[] = [
    { url: './images/download-legacy-btn.avif', alt: 'Download Legacy Player' },
    { url: './images/download-dev-btn.png',  alt: 'Legacy Player Developer' },
  ]
}
