import { Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-faq-item',
  imports: [],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss'
})
export class FaqItemComponent {
  @Input() question: string = '';
  @Input() answer: string = '';

  showAnswer: boolean = false;

  @Output() toggled = new EventEmitter<boolean>();
  
  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
    this.toggled.emit(this.showAnswer);
  }
}
