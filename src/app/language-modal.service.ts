import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageModalService {
  private menuEvent = new Subject<boolean>();
  menuEvent$ = this.menuEvent.asObservable();
  

  emitMenuEvent(value: boolean): void {
    this.menuEvent.next(value);
  }
}
