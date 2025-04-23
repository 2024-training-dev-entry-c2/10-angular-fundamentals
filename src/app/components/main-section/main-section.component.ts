import { Component } from '@angular/core';
import { ScrollWrapperComponent } from "../scroll-wrapper/scroll-wrapper.component";
import { PlayerSectionComponent } from "../player-section/player-section.component";
import { CreatorSectionComponent } from "../creator-section/creator-section.component";

@Component({
  selector: 'app-main-section',
  imports: [ScrollWrapperComponent, PlayerSectionComponent, CreatorSectionComponent],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  handleGetStarted(): void {
    console.log('Boton "Get Started" oprimido!');
  }

  handleLearnMore(): void {
    console.log('Boton "Learn More" oprimido!');
  }
}
