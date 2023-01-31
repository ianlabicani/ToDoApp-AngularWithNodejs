import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/services/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];
  constructor(private todoService: TodoService) {
    todoService.getToDos().subscribe((todos) => (this.todos = todos));
  }

  ngOnInit(): void {}
}
