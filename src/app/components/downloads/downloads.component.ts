import { Component } from '@angular/core';
import { LinkComponent } from '@components/link/link.component';
import { Link } from '@interfaces/link.interface';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.scss'
})
export class DownloadsComponent {

  links: Link[] = [
    {
      url: 'https://apps.apple.com/us/app/id1515371154',
      title:'Download for IOS',
    },
    {
      url:'https://apps.apple.com/us/app/id1515371334',
      title: 'Download for Mac'
    }
  ]

}
