import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {
  options = [
    {
      title: "Product",
      columnItems: [
        { text: 'Help', url: '#' },
        { text: 'Change log', url: '#' },
        { text: 'Pricing', url: '#' },
        { text: 'Templates', url: '#' },
        { text: 'Inspiraton', url: '#' },
        { text: 'Insights', url: '#' },
        { text: 'Contact us', url: '#' }
      ]
    },
    {
      title: "Company",
      columnItems: [
        { text: 'Careers', url: '#' },
        { text: 'Team', url: '#' },
        { text: 'Terms of Service', url: '#' },
        { text: 'Privacy policy', url: '#' },
        { text: 'Cookie Notice', url: '#' },
        { text: 'Cookie Preference', url: '#' }
      ]
    },
    {
      title: "Follow us",
      columnItems: [
        { text: 'Twitter', url: '#' },
        { text: 'Instagram', url: '#' },
        { text: 'LinkedIn', url: '#' },
        { text: 'TikTok', url: '#' }
      ]
    }
  ];  
}
