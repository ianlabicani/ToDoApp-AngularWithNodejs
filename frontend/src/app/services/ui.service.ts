import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddToDo: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddToDo(): void {
    this.showAddToDo = !this.showAddToDo;
    this.subject.next(this.showAddToDo);
  }

  AddToDoToggler(): Observable<any> {
    return this.subject.asObservable();
  }
}
