import { Injectable } from '@angular/core';
import { ITodo } from './todo';
import { todos } from './mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getToDos(): ITodo[] {
    return todos;
  }
}
