import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() text: string = '';
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
