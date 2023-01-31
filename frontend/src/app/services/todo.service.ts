import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodo } from './todo';
import { todos } from './mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getToDos(): Observable<ITodo[]> {
    return of(todos);
  }
}
