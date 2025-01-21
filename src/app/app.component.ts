import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ServiceComponent } from './components/service/service.component';
import { StartedComponent } from './components/started/started.component';
import { TemplateComponent } from './components/template/template.component';
import { ToolsComponent } from './components/tools/tools.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureComponent } from "./components/feature/feature.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    QuoteComponent,
    ServiceComponent,
    StartedComponent,
    TemplateComponent,
    ToolsComponent,
    FooterComponent,
    FeatureComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-notion';
}
