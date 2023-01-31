import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from 'src/app/services/todo';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addToDoForm: FormGroup;
  @Output() addToDo: EventEmitter<ITodo> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.addToDoForm = this.formBuilder.group({
      name: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      isHighPriority: new FormControl<boolean | null>(null),
    });
  }

  ngOnInit(): void {}

  onAddToDo() {
    this.addToDo.emit({ id: uuidv4(), ...this.addToDoForm.value });
    this.addToDoForm.reset();
  }
}
