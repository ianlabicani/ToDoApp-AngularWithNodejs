import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/services/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo | null = null;
  @Output() deleteToDo: EventEmitter<ITodo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.deleteToDo.emit();
  }
}
