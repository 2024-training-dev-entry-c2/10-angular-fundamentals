import { Component, input } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { IPicture } from '../picture/IPicture';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-article',
  imports: [PictureComponent, VideoComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  public svg = input<string>();
  public color = input<string>();
  public modifier = input<string>();
  public classModifier = input<string>();
  public titleModifier = input<string>();
  public title = input<string>();
  public pictures = input.required<IPicture[]>();
}
