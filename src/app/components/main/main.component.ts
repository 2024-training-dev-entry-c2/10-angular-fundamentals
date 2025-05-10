import { Component, ViewChildren, QueryList } from '@angular/core';
import { ModalLanguageComponent } from "./modal-language/modal-language.component";
import { HeroComponent } from "./hero/hero.component";
import { FeaturesComponent } from "./features/features.component";
import { CardsComponent } from "./cards/cards.component";
import { LanguageModalService } from '../../language-modal.service';

@Component({
  selector: 'app-main',
  imports: [ModalLanguageComponent, HeroComponent, FeaturesComponent, CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChildren(ModalLanguageComponent) modals!: QueryList<ModalLanguageComponent>
  constructor(private languageModalService: LanguageModalService) {}

  ngOnInit(): void {
    this.languageModalService.menuEvent$.subscribe(value => {
      this.modals.toArray()[0].openModal();
    });
  }

}
