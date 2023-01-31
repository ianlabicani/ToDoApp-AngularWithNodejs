import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodo } from './todo';
import { todos } from './mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}

  getToDos(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this.apiUrl + '/todos');
  }
}
