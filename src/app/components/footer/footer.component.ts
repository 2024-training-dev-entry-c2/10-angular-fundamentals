import { Component } from '@angular/core';
import { CtaComponent } from "./cta/cta.component";
import { OptionsComponent } from "./options/options.component";
import { LanguageModalService } from '../../language-modal.service';

@Component({
  selector: 'app-footer',
  imports: [CtaComponent, OptionsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private languageModalService: LanguageModalService) {}

  openModal(): void {
    this.languageModalService.emitMenuEvent(true);
  }
}
