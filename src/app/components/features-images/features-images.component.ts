import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, input, InputSignal } from '@angular/core';
import { FeatureImages } from '@interfaces/features.images.interface';
import { DividerComponent } from "../divider/divider.component";

@Component({
  selector: 'app-features-images',
  standalone: true,
  imports: [CommonModule, DividerComponent],
  templateUrl: './features-images.component.html',
  styleUrl: './features-images.component.scss'
})
export class FeaturesImagesComponent {
    @Input({transform: booleanAttribute}) isBasic: boolean = false;
    @Input({transform: booleanAttribute}) isComparator: boolean = false;
    @Input({transform: booleanAttribute}) isCarrousel: boolean = false;
    @Input({transform: booleanAttribute}) isSingle: boolean = false;
    @Input({transform: booleanAttribute}) isStairs: boolean = false;

    @Input() images:FeatureImages[] = [];

}
