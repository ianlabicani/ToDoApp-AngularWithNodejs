import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showAddToDo: boolean = false;
  subscription = new Subscription();
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .AddToDoToggler()
      .subscribe((showAddToDo) => (this.showAddToDo = showAddToDo));
  }

  ngOnInit(): void {}

  toggleAddToDo() {
    this.uiService.toggleAddToDo();
  }
  hasRouter(url: string): boolean {
    return this.router.url == url;
  }
}
