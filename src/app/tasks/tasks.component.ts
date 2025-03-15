import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { Task } from '../task/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTask } from '../new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;
  tasks = dummyTasks;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddNewTask(task: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: this.userId,
    });
    this.isAddingTask = false;
  }
}
