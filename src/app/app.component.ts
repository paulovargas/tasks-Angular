// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-task-list></app-task-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular To-Do List';
}
