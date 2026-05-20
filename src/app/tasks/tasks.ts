import { Component, Input } from '@angular/core';
import { Task } from "../task/task";
import { NewTask } from "../new-task/new-task";
import { NewTaskData } from '../task/task.model';

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
  tasks=[{
    id:'t1',
    userId:'u1',
    title:'Task 1',
    description:'Description of Task 1',
    dueDate:'2025-12-31',
  },]

  get selectedUserTasks(){
    return this.tasks.filter(task=>task.userId===this.userId);
  }
  onCompleteTasks(id:string){
    this.tasks=this.tasks.filter(task=>task.id!==id);
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCancelAddTask(){
    this.isAddingTask=false;
  }
  onAddTask(taskData:NewTaskData){
    this.tasks.unshift({
      id:'t' + (this.tasks.length + 1),
      userId:this.userId,
      title:taskData.title,
      description:taskData.summary,
      dueDate:taskData.dueDate,
    });
    this.isAddingTask=false;
  }

}
