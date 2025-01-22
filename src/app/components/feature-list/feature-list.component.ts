import { Component } from '@angular/core';
import { FeatureElementComponent } from '../feature-element/feature-element.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-feature-list',
  imports: [FeatureElementComponent, CommonModule],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {
  // Lista personalizada con textos
  featureList = [
    { primaryText: 'No awkward bot', secondaryText: 'joining your meetings.' },
    { primaryText: 'Won’t slow your computer', secondaryText: 'and has unlimited storage.' },
    { primaryText: 'Data encrypted', secondaryText: 'and stored in the Limitless Confidential Cloud.' },
    { primaryText: 'Works with any meeting tool', secondaryText: 'like Zoom, Slack, Meet, and more.' },
    { primaryText: 'Usable on any device', secondaryText: 'including the web, your phone, a Mac, or PC.' }
  ];
}
