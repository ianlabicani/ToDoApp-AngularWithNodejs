import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/services/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo | null = null;
  constructor() {}

  ngOnInit(): void {}
}
