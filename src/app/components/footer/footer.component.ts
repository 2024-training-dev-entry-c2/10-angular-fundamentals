import { Component, ViewEncapsulation } from '@angular/core';
import { MenuFooterComponent } from "../menu-footer/menu-footer.component";
import { LearnMoreSectionComponent } from "../learn-more-section/learn-more-section.component";
import { ScrollWrapperComponent } from "../scroll-wrapper/scroll-wrapper.component";

@Component({
  selector: 'app-footer',
  imports: [MenuFooterComponent, LearnMoreSectionComponent, ScrollWrapperComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {

}
