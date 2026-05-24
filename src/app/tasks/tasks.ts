import { Component, Input } from '@angular/core';
import { Task } from "../task/task";
import { NewTask } from "../new-task/new-task";
import { NewTaskData } from '../task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})


export class Tasks {
onCompleteTask($event: string) {
throw new Error('Method not implemented.');
}

  @Input ({required:true}) name!:string;
  @Input ({required:true}) userId!:string;
  isAddingTask=false;
  
  constructor(private tasks:TaskService){
  }

  get selectedUserTasks(){
    return this.tasks.getUserTasks(this.userId);
  }
  onCompleteTasks(id:string){
    return
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCancelAddTask(){
    this.isAddingTask=false;
  }
 

}
