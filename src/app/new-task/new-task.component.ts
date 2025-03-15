import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], // automatically prevents default submit on form element
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onCreate() {
    this.add.emit({
      date: this.enteredDate,
      summary: this.enteredSummary,
      title: this.enteredTitle,
    });
  }
}
