import { Component } from '@angular/core';
import { NewspaperInvitationComponent } from '../newspaper-invitation/newspaper-invitation.component';

@Component({
  selector: 'app-newspaper',
  imports: [NewspaperInvitationComponent],
  templateUrl: './newspaper.component.html',
  styleUrl: './newspaper.component.scss',
})
export class NewspaperComponent {}
