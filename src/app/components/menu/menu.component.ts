import { Component } from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [SubMenuComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public subMenuItems = {
    1: ['Design', 'Collaboration', 'Prototyping', 'Developer Handoff', 'All features'],
    2: ['Sketch in 2024', 'Smart Animate', 'Easy Library Swaps'],
    3: ['Blog', 'Resources', 'Extension & Plugins'],
    4: ['Sketch 101', 'Sketch 102'],
    5: ['Help Center', 'Documentation', 'Contact Us', 'Community Forum']
  };

  public isVisible: boolean = true;

  handleClick(item: string): void {
    console.log(item);
  }
}
