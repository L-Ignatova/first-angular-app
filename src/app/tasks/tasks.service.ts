import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from '../new-task/new-task.model';

// in order to make a class, a service injectable in the app
// so that angular knows to look it up
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: userId,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
