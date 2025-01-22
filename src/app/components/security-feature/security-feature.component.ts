import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-feature',
  imports: [],
  templateUrl: './security-feature.component.html',
  styleUrl: './security-feature.component.scss'
})
export class SecurityFeatureComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
