import { Component } from '@angular/core';
import { JoinComponent } from '../join/join.component';
@Component({
  selector: 'app-footer',
  imports: [JoinComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  items=["Community","Conference"];
  items2=["Twitter","LinkedIn","Threads"];
}
