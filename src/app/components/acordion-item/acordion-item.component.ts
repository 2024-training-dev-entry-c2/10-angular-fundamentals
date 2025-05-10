import { Component, Input, Output, EventEmitter } from '@angular/core';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-acordion-item',
  standalone: true,
  imports: [],
  templateUrl: './acordion-item.component.html',
  styleUrl: './acordion-item.component.scss',
})
export class AcordionItemComponent {
  @Input() item!: AccordionItem;
  @Output() public onClick = new EventEmitter<string>();

  public visible = false;

  toggleAccordion(id: number): void {
    this.visible = !this.visible;
    this.onClick.emit(id.toString());
  }
}
