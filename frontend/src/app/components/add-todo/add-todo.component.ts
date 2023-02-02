import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from 'src/app/services/todo';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addToDoForm: FormGroup;
  showAddToDo: boolean = false;
  subscription = new Subscription();
  @Output() addToDo: EventEmitter<ITodo> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private uiService: UiService) {
    this.addToDoForm = this.formBuilder.group({
      name: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
      isHighPriority: new FormControl<boolean | null>(null),
    });
    this.subscription = this.uiService
      .AddToDoToggler()
      .subscribe((showAddToDo) => (this.showAddToDo = showAddToDo));
  }

  ngOnInit(): void {}

  onAddToDo() {
    this.addToDo.emit({ id: uuidv4(), ...this.addToDoForm.value });
    this.addToDoForm.reset();
  }
}
