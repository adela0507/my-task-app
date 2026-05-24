import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input ({required:true}) userId!:string;
  @Output() cancel=new EventEmitter<void>();

  enteredTitle='';
  enteredSummary='';
  enteredDueDate='';

  private tasksService=inject(TaskService);

  onCancel(){ 
    this.cancel.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDueDate,
    }, this.userId);
  }    

}
