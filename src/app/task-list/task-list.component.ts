// task-list.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        {{ task.name }}
        <input type="checkbox" [(ngModel)]="task.completed" (change)="toggleCompletion(task.id)">
        <button (click)="removeTask(task.id)">Remove</button>
      </li>
    </ul>
    <div>
      <input [(ngModel)]="newTask" placeholder="New task">
      <button (click)="addTask()">Add Task</button>
    </div>
  `,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = this.taskService.getTasks();
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(id: number): void {
    this.taskService.removeTask(id);
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }
}
