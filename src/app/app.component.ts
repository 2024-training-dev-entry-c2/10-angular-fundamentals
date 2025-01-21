import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from "./components/about/about.component";
import { BrandsComponent } from "./components/brands/brands.component";
import { ArtCollectionComponent } from "./components/art-collection/art-collection.component";
import { InstagramComponent } from "./components/instagram/instagram.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, BrandsComponent, ArtCollectionComponent, InstagramComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
