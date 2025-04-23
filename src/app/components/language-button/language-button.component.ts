import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageMenuComponent } from "../language-menu/language-menu.component";

@Component({
  selector: 'app-language-button',
  imports: [LanguageMenuComponent],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.scss',
})
export class LanguageButtonComponent {
  public items: string[] = ["English", "French"];
  
  public openLanguageMenu: boolean = false;
  @ViewChild('headerLanguageSelector', { static: true }) languageSelector!: ElementRef<HTMLElement>;
  
  isLanguageMenuExpanded = false;
  
  public toggleLanguageMenu(event: Event): void {
    event.preventDefault();
    this.isLanguageMenuExpanded = !this.isLanguageMenuExpanded;
    this.languageSelector.nativeElement.setAttribute('aria-expanded', this.isLanguageMenuExpanded.toString());
  }

}
