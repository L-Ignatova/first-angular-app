import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], // automatically prevents default submit on form element
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onCreate() {
    this.tasksService.addTask({
      date: this.enteredDate,
      summary: this.enteredSummary,
      title: this.enteredTitle,
    }, this.userId);
    this.close.emit();
  }
}
