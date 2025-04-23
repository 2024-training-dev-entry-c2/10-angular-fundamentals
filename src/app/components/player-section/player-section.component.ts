import { Component, ViewEncapsulation } from '@angular/core';
import { DownloadButtonsComponent } from "../download-buttons/download-buttons.component";

@Component({
  selector: 'app-player-section',
  imports: [DownloadButtonsComponent],
  templateUrl: './player-section.component.html',
  styleUrl: './player-section.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PlayerSectionComponent {

}
