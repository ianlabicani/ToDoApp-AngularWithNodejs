import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}

  getToDos(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this.apiUrl + '/todos');
  }

  deleteToDo(todo: ITodo): Observable<ITodo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.httpClient.delete<ITodo>(url);
  }
}
