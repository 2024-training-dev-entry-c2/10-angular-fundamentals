import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageButtonComponent } from "../language-button/language-button.component";

@Component({
  selector: 'app-header-actions',
  imports: [CommonModule, LanguageButtonComponent],
  templateUrl: './header-actions.component.html',
  styleUrl: './header-actions.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderActionsComponent {
  public items: string[] = ["English", "French"];
}


