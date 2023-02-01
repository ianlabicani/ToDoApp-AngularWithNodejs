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
    todoService.getToDos().subscribe((todos) => (this.todos = todos.reverse()));
  }

  ngOnInit(): void {}

  onDeleteToDo(ARGtodo: ITodo) {
    this.todoService
      .deleteToDo(ARGtodo)
      .subscribe(
        () => (this.todos = this.todos.filter((todo) => todo.id !== ARGtodo.id))
      );
  }

  onToggleToDoPriority(ARGtodo: ITodo) {
    ARGtodo.isHighPriority = !ARGtodo.isHighPriority;
    this.todoService.toggleToDoPriority(ARGtodo).subscribe();
  }

  onAddToDo(ARGtodo: ITodo) {
    this.todoService
      .addToDo(ARGtodo)
      .subscribe((todo) => this.todos.unshift(todo));
  }
}
