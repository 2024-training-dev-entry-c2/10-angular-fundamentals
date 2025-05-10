import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  imports: [],
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.scss'
})
export class NavFooterComponent {
  @Input() menuItems: { title: string; links: { text: string; ariaLabel: string; href: string }[] }[] = [];

}
