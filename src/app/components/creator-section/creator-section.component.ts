import { Component, ViewEncapsulation } from '@angular/core';
import { CreatorButtonsComponent } from "../creator-buttons/creator-buttons.component";

@Component({
  selector: 'app-creator-section',
  templateUrl: './creator-section.component.html',
  styleUrls: ['./creator-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CreatorButtonsComponent],
})
export class CreatorSectionComponent {

}
