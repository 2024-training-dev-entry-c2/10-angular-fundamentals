import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerMenuItems: { label: string, link: string }[] = [];
  @Output() footerMenuItemClick = new EventEmitter<string>();

  onFooterMenuItemClick(label: string) {
    this.footerMenuItemClick.emit(label);
  }
}
