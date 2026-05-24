import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TaskC } from './task.model';
import { Card } from "../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task {
  @Input({required:true}) task!: TaskC;
  @Output() complete = new EventEmitter<string>();
  private taskService=inject(TaskService);
  
  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
