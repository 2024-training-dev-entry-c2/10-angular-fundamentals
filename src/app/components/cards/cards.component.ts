import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() insights: Array<{
    number: string;
    name: string;
    position: string;
    description: string;
    link: string;
    additionalClass?: string;
    personalClass?: string;
    textClass?: string;
  }> = [];

  @Output() articleSelected = new EventEmitter<string>(); // Emitirá el nombre del artículo seleccionado

  onSelectArticle(articleName: string) {
    this.articleSelected.emit(articleName);
  }
}
