import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-creator-buttons',
  imports: [],
  templateUrl: './creator-buttons.component.html',
  styleUrl: './creator-buttons.component.scss'
})
export class CreatorButtonsComponent {
  @Output() getStarted = new EventEmitter<void>();
  @Output() learnMore = new EventEmitter<void>();

  onGetStarted(): void {
    this.getStarted.emit(); 
  }

  onLearnMore(): void {
    this.learnMore.emit(); 
  }
}
