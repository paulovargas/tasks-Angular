// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-center">{{ title }}</h1>
    <app-task-list class="justify-content-center"></app-task-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular To-Do List';
}
