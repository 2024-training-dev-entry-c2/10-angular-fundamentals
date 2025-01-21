import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EsParaMiComponent } from './components/es-para-mi/es-para-mi.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { PreciosComponent } from './components/precios/precios.component';
import { FaqComponent } from './components/faq/faq.component';
import { IngresarAhoraComponent } from './components/ingresar-ahora/ingresar-ahora.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,IntroduccionComponent,ServiciosComponent,EsParaMiComponent,ComentariosComponent,PreciosComponent,FaqComponent,IngresarAhoraComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
