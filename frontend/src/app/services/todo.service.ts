import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodo } from './todo';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

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
    const url = `${this.apiUrl}/todo/${todo.id}`;
    return this.httpClient.delete<ITodo>(url);
  }

  toggleToDoPriority(todo: ITodo): Observable<ITodo> {
    const url = `${this.apiUrl}/todo/${todo.id}`;
    return this.httpClient.put<ITodo>(url, todo);
  }

  addToDo(todo: ITodo): Observable<ITodo> {
    const url = `${this.apiUrl}/todos`;
    return this.httpClient.post<ITodo>(url, todo);
  }
}
