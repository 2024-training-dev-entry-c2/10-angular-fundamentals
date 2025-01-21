import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss'
})
export class CommentCardComponent {
  data = input<any>();
  commet = output<any>();

  returnComment(){
    this.commet.emit(this.data());
  }
}
