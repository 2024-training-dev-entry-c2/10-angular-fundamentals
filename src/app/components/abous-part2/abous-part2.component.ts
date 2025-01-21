import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-abous-part2',
  imports: [],
  templateUrl: './abous-part2.component.html',
  styleUrl: './abous-part2.component.scss',
})
export class AbousPart2Component {
  bottomItems = signal([
    { title: 'Industries', copy: 'Wearable & Neural technologies', id: 1 },
    { title: 'Core Business', copy: 'AI Wearable technologies', id: 2 },
    { title: 'Domain', copy: 'augen.pro', id: 3 },
  ]);
  bottomServices = signal([
    { bracketText: 'ehe ¹', itemName: 'Enhance Human Experience', id: 1 },
    { bracketText: 'ICT', itemName: 'Invisible Computing Technologies', id: 2 },
    {
      bracketText: 'AIWC',
      itemName: 'Artificial Intelligence Wearable Company',
      id: 3,
    },
  ]);
}
