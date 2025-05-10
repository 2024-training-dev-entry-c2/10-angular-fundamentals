import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './pages/home/main-section/main-section.component';
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipepage';

}
