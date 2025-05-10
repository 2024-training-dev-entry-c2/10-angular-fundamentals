import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-modal-language",
  imports: [CommonModule],
  templateUrl: "./modal-language.component.html",
  styleUrl: "./modal-language.component.scss",
})
export class ModalLanguageComponent {
  activeLanguage = 'English';
  languages = [
    "English",
    "Shqip",
    "Bosanski",
    "Български",
    "简体中文",
    "繁體中文",
    "Hrvatski",
    "Čeština",
    "Dansk",
    "Nederlands",
    "Eesti",
    "Suomi",
    "Français",
    "Deutsch",
    "Ελληνικά",
    "हिन्दी",
    "Magyar",
    "Bahasa Indonesia",
    "Italiano",
    "日本語",
    "ಕನ್ನಡ",
    "한국어",
    "Latviešu",
    "Lietuvių",
    "Norsk",
    "Polski",
    "Português (Brasil)",
    "Română",
    "Русский",
    "Српски",
    "Slovenščina",
    "Español",
    "Svenska",
    "Tagalog",
    "ไทย",
    "Türkçe",
    "Українська",
    "O‘zbek",
    "Tiếng Việt",
  ];
  isModalVisible = false;

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
