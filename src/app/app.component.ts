import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainSectionComponent } from "./components/main-section/main-section.component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, MainSectionComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
}
