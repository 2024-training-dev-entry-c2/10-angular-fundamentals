import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-final-message',
  imports: [],
  templateUrl: './final-message.component.html',
  styleUrl: './final-message.component.scss'
})
export class FinalMessageComponent {
  @Input() finalMessage!: {title: String, buttonText: String };
}
