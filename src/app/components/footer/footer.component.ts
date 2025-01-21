import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() menuItems: { label: string, link: string }[] = [];
  @Output() menuItemClick = new EventEmitter<string>();

  onFooterMenuItemClick(label: string) {
    this.menuItemClick.emit(label);
  }
}
