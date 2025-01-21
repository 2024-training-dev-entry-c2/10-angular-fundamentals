import { Component, Input } from '@angular/core';
import { Link } from '@interfaces/link.interface';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() link: Link = ({} as Link);
}
