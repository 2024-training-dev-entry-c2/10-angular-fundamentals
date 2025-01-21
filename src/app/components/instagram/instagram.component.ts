import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram',
  imports: [],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss',
})
export class InstagramComponent {
  public imageUrls = [
    'https://guste.design/static/c43db765c1559289e7a6fdcf5a1123c8/8d77c/469094708_18469639933011844_5277590450156330206_n.webp',
    'https://guste.design/static/26917c90cf89dc3b0f363a20092efe38/e3100/468026373_18467601508011844_6980003445868467895_n.webp',
    'https://guste.design/static/dbfdc4612baea8bf5f86051974342720/017df/467642411_18467072425011844_1360014476235961058_n.webp',
    'https://guste.design/static/2abb523ffede8ec5f49e6fc91ed8daeb/69ecd/465143148_18463845358011844_4809339135360728042_n.webp',
  ];
}
