import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public url = input<string>();
  public image = input<string>();
  public alt = input<string>();
  public title = input<string>();
  public modifier = input<string>();
}
